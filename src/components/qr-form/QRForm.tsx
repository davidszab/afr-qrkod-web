import { Button, Divider } from "@nextui-org/react"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card"
import { Input, Textarea, Image } from "@nextui-org/react"
import { useState, useMemo, useRef, useEffect } from "react"

import {composeIBAN} from "ibantools"
import { getBankByBranchOfficeCode } from "../../util/banks"
import { InstantTransferQR } from "mnb-afr-qr"
import QRCode  from "qrcode"

const huIBANRegexp = new RegExp(/(?:HU)\d{26}/);
const huBBANRegexp = new RegExp(/\d{8}-?\d{8}(-?\d{8})?/);

function getBranchOfficeCodeFromIban(iban: string){
    return iban.substring(4, 12);
}

function validateIBANorBBAN(input: string): {valid: boolean, iban?: string} {
    if(input === "")
        return {valid: true};

    if(huIBANRegexp.test(input))
        return {valid: true};

    if(huBBANRegexp.test(input)){
        let bban = input.replace(/-/g, "");
        if(bban.length < 24)
            bban = bban.padEnd(24, "0");

        const iban = composeIBAN({countryCode: "HU", bban});
        if(iban)
            return {valid: true, iban}
    }

    return {valid: false}
}

function IBANInput({iban, setIban, setBic, setBank}: {iban: string, setIban: (i: string) => void}){
    const [invalid, setInvalid] = useState(false);

    const validate = () => {
        const {valid, iban: newIban} = validateIBANorBBAN(iban);
        if(newIban)
            setIban(newIban);
        setInvalid(!valid);

        if(valid){
            const validIban = newIban ? newIban : iban;
            const bank = getBankByBranchOfficeCode(getBranchOfficeCodeFromIban(validIban));
            setBank(bank.name);
            setBic(bank.bic);
        }
    }

    return (<Input 
        type="text" 
        label="IBAN / GIRO számlaszám" 
        isRequired={true} 
        errorMessage="Érvénytelen számlaszám!"
        value={iban}
        isInvalid={invalid}
        onValueChange={setIban}
        onBlur={validate}
        />)
}

export default function QRForm(){
    const [iban, setIban] = useState("");
    const [bic, setBic] = useState("");
    const [bank, setBank] = useState("");
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");

    useEffect(() => {
        if(!bic || !iban || !name)
            return;

        const p = InstantTransferQR.newHCTQR({
            bic,
            iban,
            name: name,
            validUntil: new Date(),
            description: desc,
            amount: parseInt(amount)
        });
        const generateQR = async text => {
            try {
                const i = await QRCode.toDataURL(text);
                setImg(i);

            } catch (err) {
              console.error(err)
            }
          }
        generateQR(p.getPayload());
    }, [iban, bic, name, desc, amount])

    return <>
    <Card className="max-w-[600px]">
        <CardHeader>
            <div className="flex flex-col">
                <p className="text-md font-bold">Utalás adatai</p>
            </div>
        </CardHeader>
        <Divider/>
        <CardBody>
            <div className="w-full flex flex-col gap-4">

                <IBANInput iban={iban} setIban={setIban} setBic={setBic} setBank={setBank}/>
                <Input type="text" label="BIC" isRequired={true} value={bic} onValueChange={setBic}/>
                <Input type="text" label="Bank"  isReadOnly={true} value={bank} onValueChange={setBank} />
                <Input type="text" label="Kedvezményezett neve" isRequired={true} value={name} onValueChange={setName}/>
                <Divider></Divider>
                <Input type="" label="Összeg" value={amount} onValueChange={setAmount}/>
                <Textarea label={`Közlemény (${desc.length}/70)`} onValueChange={setDesc} value={desc}/>
            </div>
        </CardBody>
        <Divider/>
        <CardFooter className="flex">
            <div className="ml-auto"><Button>Alaphelyzet</Button></div>
        </CardFooter>
    </Card>
        <Card className="max-w-[600px]">
            <CardHeader>
                <p className="text-md">QR kod</p>
            </CardHeader>
            <CardBody>
                <img src={img} alt="" />
            </CardBody>
        </Card>
    </>
}