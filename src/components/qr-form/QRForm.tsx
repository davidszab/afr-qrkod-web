import { useState, useRef, useEffect } from "react";
import { Divider, Spinner, Card, CardHeader, CardBody, Input, Textarea, DatePicker} from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";

import { composeIBAN } from "ibantools";
import { getBankByBranchOfficeCode } from "../../util/banks";
import { InstantTransferQR } from "mnb-afr-qr";
import QRCode from "qrcode";

enum QRState {
    Initial,
    InProgress,
    Generated,
}

const huIBANRegexp = new RegExp(/(?:HU)\d{26}/);
const huBBANRegexp = new RegExp(/\d{8}-?\d{8}(-?\d{8})?/);

function getBranchOfficeCodeFromIban(iban: string) {
  return iban.substring(4, 12);
}

function validateIBANorBBAN(input: string): { valid: boolean; iban?: string } {
  if (input === "") return { valid: true };

  if (huIBANRegexp.test(input)) return { valid: true };

  if (huBBANRegexp.test(input)) {
    let bban = input.replace(/-/g, "");
    if (bban.length < 24) bban = bban.padEnd(24, "0");

    const iban = composeIBAN({ countryCode: "HU", bban });
    if (iban) return { valid: true, iban };
  }

  return { valid: false };
}

interface IBANInputProps {
    iban: string,
    setIban: (i: string) => void,
    setBic: (b: string) => void,
    setBank: (b: string) => void
}

function IBANInput({iban, setIban, setBic, setBank}: IBANInputProps) {
  const [invalid, setInvalid] = useState(false);

  const validate = () => {
    const { valid, iban: newIban } = validateIBANorBBAN(iban);
    if (newIban) setIban(newIban);
    setInvalid(!valid);

    if(!valid) return;

    const validIban = newIban ? newIban : iban;
    const bank = getBankByBranchOfficeCode(getBranchOfficeCodeFromIban(validIban));
    setBank(bank.name);
    setBic(bank.bic);
  };

  return (
    <Input
      type="text"
      label="IBAN / GIRO számlaszám"
      isRequired={true}
      errorMessage="Érvénytelen számlaszám!"
      value={iban}
      isInvalid={invalid}
      onValueChange={setIban}
      onBlur={validate}
    />
  );
}

export default function QRForm() {
  const [iban, setIban] = useState("");
  const [bic, setBic] = useState("");
  const [bank, setBank] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState(today(getLocalTimeZone()).add({ months: 1 }));
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [qrState, setQRState] = useState<QRState>(QRState.Initial);

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }

    if (!bic && !iban && !name) {
      setImg("");
      return;
    }

    setQRState(QRState.InProgress);
    timeoutRef.current = setTimeout(() => {
      if (!bic || !iban || !name) {
        return;
      }

      const transfer = InstantTransferQR.newHCTQR({
        bic,
        iban,
        name: name,
        validUntil: date.toDate(getLocalTimeZone()),
        description: desc.replace(/\r?\n|\r/g, " "),
        amount: parseInt(amount),
      });

      const generateQR = async () => {
        try {
          const qrImg = await QRCode.toDataURL(transfer.getPayload(), {
            errorCorrectionLevel: "M",
            scale: 13,
          });

          setImg(qrImg);
          setQRState(QRState.Generated);
        } catch (err) {
          console.error(err);
        }
      };

      generateQR();
    }, 750);
  }, [iban, bic, name, desc, amount, date]);

  const handleDescValue = (v: string) => {
    if (v.length > 70) setDesc(v.substring(0, 70));
    else setDesc(v);
  };

  const handleAmountValue = (v: string) => {
    if (v != "") {
      const n = parseInt(v);
      if (n) {
        v = Math.abs(n).toString();
      }
    }
    setAmount(v);
  };

  return (
    <div className="w-full flex gap-5 justify-center content-center p-3">
      <Card className="max-w-[400px] w-full">
        <CardHeader>
          <div className="flex flex-col">
            <p className="text-md font-bold">Utalás adatai</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="w-full flex flex-col gap-4">
            <IBANInput
              iban={iban}
              setIban={setIban}
              setBic={setBic}
              setBank={setBank}
            />
            <Input
              type="text"
              label="BIC"
              isRequired={true}
              value={bic}
              onValueChange={setBic}
            />
            <Input
              type="text"
              label="Bank"
              isReadOnly={true}
              value={bank}
              onValueChange={setBank}
            />
            <Input
              type="text"
              label="Kedvezményezett neve"
              isRequired={true}
              value={name}
              onValueChange={setName}
            />
            <DatePicker
              label="Érvényesség vége"
              className="max-w-[284px]"
              isRequired={true}
              value={date}
              onChange={setDate}
              minValue={today(getLocalTimeZone())}
            />
            <Divider></Divider>
            <Input
              type=""
              label="Összeg"
              value={amount}
              onValueChange={handleAmountValue}
            />
            <Textarea
              label={`Közlemény (${desc.length}/70)`}
              onValueChange={handleDescValue}
              value={desc}
            />
          </div>
        </CardBody>
      </Card>
      <Card className="max-w-[400px] w-full">
        <CardHeader>
          <p className="text-md font-bold">QR kód</p>
        </CardHeader>
        <Divider></Divider>
        <CardBody className="h-full flex flex-col justify-center">
          {qrState == QRState.InProgress && <Spinner />}
          {qrState == QRState.Generated && (
            <>
              <img src={img} alt="Azonnali Fizetés QR kód" />
              <img src="/afr-qr.png" alt="Azonnali Fizetés QR kód" />
              <p className="text-medium text-center font-bold my-2">
                MNB szabvány QR-kód
              </p>
            </>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
