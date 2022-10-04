import React from 'react'
import CellTable from './CellTable'

function CellTableOption(props) {

    if(props.classSelection === 101){
        return(<>{demoClass1.map((demo, index) => {
            return <CellTable demo={demo} key={index} classSelection={props.classSelection}/>
        })}</>)
    }else if(props.classSelection === 102){
        return(<>{demoClass2.map((demo, index) => {
            return <CellTable demo={demo} key={index} classSelection={props.classSelection}/>
        })}</>)
    }else if(props.classSelection === 103){
        return(<>{demoClass3.map((demo, index) => {
            return <CellTable demo={demo} key={index} classSelection={props.classSelection}/>
        })}</>)
    }else if(props.classSelection === 104){
        return(<>{demoClass4.map((demo, index) => {
            return <CellTable demo={demo} key={index} classSelection={props.classSelection}/>
        })}</>)
    }else{
        return(<></>)
    }
}

export default CellTableOption

const demoClass1 = [
    { student: "juan", subject: "Math" },
    { student: "marcos", subject: "Math" },
    { student: "juan", subject: "Math" },
    { student: "juan", subject: "Math" },
    { student: "juan", subject: "Math" },
    { student: "juan", subject: "Math" },
    { student: "juan", subject: "Math" },
    { student: "juan", subject: "Math" },
    { student: "juan", subject: "Math" },
    { student: "juan", subject: "Math" },
    { student: "juan", subject: "Math" },
    { student: "juan", subject: "Math" },
    { student: "juan", subject: "Math" },
    { student: "juan", subject: "Math" },
    { student: "juan", subject: "Math" },
    { student: "juan", subject: "Math" },
]

const demoClass2 = [
    { student: "roberto", subject: "Math" },
    { student: "roberto", subject: "Math" },
    { student: "roberto", subject: "Math" },
    { student: "roberto", subject: "Math" },
    { student: "roberto", subject: "Math" },
    { student: "roberto", subject: "Math" },
    { student: "roberto", subject: "Math" },
    { student: "roberto", subject: "Math" },
    { student: "roberto", subject: "Math" },
    { student: "roberto", subject: "Math" },
    { student: "roberto", subject: "Math" },
    { student: "roberto", subject: "Math" },
    { student: "roberto", subject: "Math" },
    { student: "roberto", subject: "Math" },
    { student: "roberto", subject: "Math" },
    { student: "roberto", subject: "Math" },
]

const demoClass3 = [
    { student: "mauricio", subject: "Math" },
    { student: "mauricio", subject: "Math" },
    { student: "mauricio", subject: "Math" },
    { student: "mauricio", subject: "Math" },
    { student: "mauricio", subject: "Math" },
    { student: "mauricio", subject: "Math" },
    { student: "mauricio", subject: "Math" },
    { student: "mauricio", subject: "Math" },
    { student: "mauricio", subject: "Math" },
    { student: "mauricio", subject: "Math" },
    { student: "mauricio", subject: "Math" },
    { student: "mauricio", subject: "Math" },
    { student: "mauricio", subject: "Math" },
    { student: "mauricio", subject: "Math" },
    { student: "mauricio", subject: "Math" },
    { student: "mauricio", subject: "Math" },
]

const demoClass4 = [
    { student: "carlo", subject: "Math" },
    { student: "carlo", subject: "Math" },
    { student: "carlo", subject: "Math" },
    { student: "carlo", subject: "Math" },
    { student: "carlo", subject: "Math" },
    { student: "carlo", subject: "Math" },
    { student: "carlo", subject: "Math" },
    { student: "carlo", subject: "Math" },
    { student: "carlo", subject: "Math" },
    { student: "carlo", subject: "Math" },
    { student: "carlo", subject: "Math" },
    { student: "carlo", subject: "Math" },
    { student: "carlo", subject: "Math" },
    { student: "carlo", subject: "Math" },
    { student: "carlo", subject: "Math" },
    { student: "carlo", subject: "Math" },
]