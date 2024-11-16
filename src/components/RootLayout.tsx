import React,{Children, ReactElement} from "react";
import Header from "./header/Header";
import HeaderBottom from "./header/HeaderBottom";
import Footer from "./Footer";


interface props{
    children:ReactElement;
}
const RootLayout = ({children}:props) =>{
  return (
    <>
        <Header/>
        <HeaderBottom/>
        {children}
        <Footer/>
    </>
  )
}

export default RootLayout