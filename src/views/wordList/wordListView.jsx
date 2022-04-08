
import {Grid } from "@mui/material";
import React from "react";
import Header from "../../components/header/header";
import ElementCard from "../../components/elementCard/elementCard";
const listDefaultData = ["React", "Angular", "Vue", "Next"]

export default function WordList(){
    const [listData,setListData]= React.useState(listDefaultData)
    const removeWord = (word)=>{
        const newList = listData.filter((element)=>{
            return element !== word
        })
        setListData(newList)
    }

    return(
        <div>
            <Header name={"Word list View"} />
            <div style={{marginTop:"20px"}}>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    {listData.map((data,index)=>{
                        return (
                        <div key={index} style={{marginBottom:"20px"}}>
                            <Grid item>
                                <ElementCard  data={data} remove={removeWord}/> 
                            </Grid>
                        </div>
                        )
                    })}
                </Grid>
            </div>    
        </div>
    )
}