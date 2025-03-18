import React, { useState }  from "react";
import {View, Text, TextInput, Button} from "react-native"
import ResultImc from "./ResultImc";

export default function Form(){

const [height, setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [messageImc, setMessageImc]= useState("Preencha o peso e altura");
const [imc, setImc] = useState(null)
const [TextButton, setTextButton] = useState("Calcular")

function imcCalculator(){
    return setImc((weight/(height * height)).toFixed(2))
}

    return(
       <View>
        <View>
            <Text>Altura</Text>
            <TextInput
                placeholder="Ex. 1.75"
                KeyboardType="numeric"
            />
            <Text>Peso</Text>
            <TextInput
                placeholder="Ex. 75.365"
                KeyboardType="numeric"
            />
            <Button title="Calcular IMC"/>
        </View>
        <ResultImc messageResultImc={messageImc} ResultImc={imc}/>
       </View>
    )
}