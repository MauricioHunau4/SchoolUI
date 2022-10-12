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
    { student: "Brett Murray", subject: "Math" },
    { student: "James States", subject: "Math" },
    { student: "Heather Vasquez", subject: "Math" },
    { student: "Jessie Roberts", subject: "Math" },
    { student: "Anderson Shelton", subject: "Math" },
    { student: "Russell Palmer", subject: "Math" },
    { student: "Melanie Howard", subject: "Math" },
    { student: "Beck Roberts", subject: "Math" },
]

const demoClass2 = [
    { student: "Violet Stanley", subject: "Math" },
    { student: "Lawrence Beck", subject: "Math" },
    { student: "Samuel Roberts", subject: "Math" },
    { student: "David Shelton", subject: "Math" },
    { student: "Jessie Sanders", subject: "Math" },
    { student: "Melanie Thomas", subject: "Math" },
    { student: "Harvey Cole", subject: "Math" },
    { student: "Katie Ryan", subject: "Math" },
    { student: "Samuel Brett", subject: "Math" },
]

const demoClass3 = [
    { student: "Anderson Ryan", subject: "Math" },
    { student: "Andrea Palmer", subject: "Math" },
    { student: "Russell Castillo", subject: "Math" },
    { student: "Everett Harvey", subject: "Math" },
    { student: "Rebecca Howard", subject: "Math" },
    { student: "Violet Crawford", subject: "Math" },
    { student: "Hughes Glen", subject: "Math" },
    { student: "James Herrera", subject: "Math" },
]

const demoClass4 = [
    { student: "Aubree Crawford", subject: "Math" },
    { student: "Sylvia Crawford", subject: "Math" },
    { student: "Stanley Hughes", subject: "Math" },
    { student: "Pamela Harvey", subject: "Math" },
    { student: "Glen Cole", subject: "Math" },
    { student: "Katie Herrera", subject: "Math" },
    { student: "Jessie Anderson", subject: "Math" },
    { student: "Ryan Smith", subject: "Math" },
    { student: "Pamela Vasquez", subject: "Math" },
]