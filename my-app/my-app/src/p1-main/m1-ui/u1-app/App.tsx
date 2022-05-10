import React, {useState} from 'react'
import s from './App.module.css'
import Button from "../../../components/Button";
import HW1 from "../../../p2-homeworks/h1/HW1";
import HW2 from '../../../p2-homeworks/h2/HW2';
import HW3 from "../../../p2-homeworks/h3/HW3";
import HW5 from '../../../p2-homeworks/h5/HW5';
import HW4 from "../../../p2-homeworks/h4/HW4";
import HW6 from "../../../p2-homeworks/h6/HW6";
import HW7 from '../../../p2-homeworks/h7/HW7';
import HW8 from '../../../p2-homeworks/h8/HW8';
import HW9 from '../../../p2-homeworks/h9/HW9';
import HW10 from '../../../p2-homeworks/h10/HW10';
import HW11 from "../../../p2-homeworks/h11/HW11";
import HW12 from '../../../p2-homeworks/h12/HW12';


function App() {
    const [valueHW, setValueHW] = useState("")

    const arrayHW = ["HW1", "HW2", "HW3", "HW4", "HW5", "HW6", "HW7", "HW8", "HW9", "HW10", "HW11", "HW12"]
    const ButtonCallBack = (name: string) => {
        setValueHW(name)
    }
    const choiceValue = (value: string) => {
        switch (value) {
            case "HW1":
                return <HW1/>
            case "HW2":
                return <HW2/>
            case "HW3":
                return <HW3/>
            case "HW4":
                return <HW4/>
            case "HW5":
                return <HW5/>
            case "HW6":
                return <HW6/>
            case "HW7":
                return <HW7/>
            case "HW8":
                return <HW8/>
            case "HW9":
                return <HW9/>
            case "HW10":
                return <HW10/>
            case "HW11":
                return <HW11/>
            case "HW12":
                return <HW12/>
            default:
        }
    }

    return (
        <div className={s.App}>
            <div className={s.header}>
                React homeworks from Ignat:
                <div className={s.styleButton}>
                    {arrayHW.map((a, i) => <Button key={i}
                                                   name={a}
                                                   callBack={ButtonCallBack}/>)}
                </div>
                <div className={s.body}>
                    {choiceValue(valueHW)}
                </div>
            </div>
        </div>
    )
}

export default App
