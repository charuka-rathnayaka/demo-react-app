import React from "react";

export default function Header(props){
    const {name}= props;
    return (
        <div style={{marginTop:"20px", fontSize:"23px", fontWeight:500}}>
            {name}
        </div>
    )

}