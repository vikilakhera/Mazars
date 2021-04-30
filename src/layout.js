import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function layout(props){
    return (
        <div className={props.class}>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    );
}