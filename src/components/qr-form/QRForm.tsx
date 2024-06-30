import { Button, Divider } from "@nextui-org/react"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card"
import { Input, Textarea } from "@nextui-org/react"
import { useState, useMemo } from "react"

import {composeIBAN} from "ibantools"

const huIBANRegexp = new RegExp(/(?:HU)\d{26}/);
const huBBANRegexp = new RegExp(/\d{8}-?\d{8}(-?\d{8})?/);

function getBranchOfficeCodeFromIban(iban: string){
    return iban.substring(4, 12);
}

const banks = {
    "12100011": {
        bank: "Gránit Bank Zrt.",
        bic: "GNBAHUHB"
    }
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
        console.log({iban, valid, newIban});
        if(newIban)
            setIban(newIban);
        setInvalid(!valid);

        if(valid){
            const validIban = newIban ? newIban : iban;
            const branchOffice = getBranchOfficeCodeFromIban(validIban);
            setBank(banks[branchOffice].bank);
            setBic(banks[branchOffice].bic);
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

    return <Card className="max-w-[600px]">
        <CardHeader>
            <div className="flex flex-col">
                <p className="text-md font-bold">Utalás adatai</p>
            </div>
        </CardHeader>
        <Divider/>
        <CardBody>
            <div className="w-full flex flex-col gap-4">

                <IBANInput iban={iban} setIban={setIban} setBic={setBic} setBank={setBank}/>
                <Input type="text" label="BIC" isRequired={true} value={bic}/>
                <Input type="text" label="Bank"  isReadOnly={true} value={bank} />
                <Input type="text" label="Kedvezményezett neve" isRequired={true}/>
                <Divider></Divider>
                <Input type="" label="Összeg" />
                <Textarea label="Közlemény (0/70)" />
            </div>
        </CardBody>
        <Divider/>
        <CardFooter className="flex">
            <div className="ml-auto"><Button>Alaphelyzet</Button></div>
        </CardFooter>
    </Card>
}