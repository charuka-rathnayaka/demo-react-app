import { Button, Grid } from "@mui/material";
import React from "react";
import Header from "../../components/header/header";
import ElementCard from "../../components/elementCard/elementCard";
const listDefaultData = [1,2,3,4,5]

export default function NumberList(){
    const [listData,setListData]= React.useState(listDefaultData)
    const removeNumber = (number)=>{
        const newList = listData.filter((num)=>{
            return number !== num
        })
        setListData(newList)
    }

    const addNumber = ()=>{
        if(listData.length > 0){
            setListData([...listData,listData[listData.length-1] + 1])
        }
        else{
            setListData([1])
        }
    }

    return(
        <div>
            <Header name={"Number List View"} />
            <div style={{marginTop:"20px"}}>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    {listData.map((data,index)=>{
                        return (
                            <div key={index} style={{marginBottom:"20px"}}>
                                <Grid item>
                                    <ElementCard  data={data} remove={removeNumber}/> 
                                </Grid>
                            </div>)
                    })}
                </Grid>
            </div>
            <div>
                <Button variant="contained" onClick={addNumber}>Add Number</Button>
            </div>
            
        </div>
    )
}