import React from "react";
import { Card, Grid, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ElementCard(props){
    const {data, remove}= props;
    return(
        <div>
            <Card sx={{width:"200px", background:"#b3cae3"}}>
            <Grid container direction="row" justifyContent="space-around" alignItems="center">
                <Grid item>
                    {data}
                </Grid>
                <Grid item>
                    <IconButton onClick={()=>{remove(data)}}>
                        <DeleteIcon color="error"/>
                    </IconButton>
                </Grid>
            </Grid>
            </Card>
        </div>
    )
}