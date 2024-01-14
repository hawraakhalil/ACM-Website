import '../../App.css'
import React from "react"
import Footer from '../Footer'
import Banner from '../Banner'
import CP_Desc from '../CP_Desc'
import EDU_Desc from '../EDU_Desc'
import AI_Desc from '../AI_Desc'

function Committees() {
    return (
        <>
            <Banner/>
            <CP_Desc/>
            <EDU_Desc/>
            <AI_Desc/>
            <Footer/>
        </>
    );
}

export default Committees;