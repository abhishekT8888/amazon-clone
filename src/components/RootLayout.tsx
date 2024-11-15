import React,{Children, ReactElement} from "react";
import Header from "./header/Header";
import HeaderBottom from "./header/HeaderBottom";
import Footer from "./Footer";


interface props{
    children:ReactElement;
}
const RootLayout = ({Children}:props) =>{
  return (
    <>
        <Header/>
        <HeaderBottom/>
        {Children}
        <Footer/>
    </>
  )
}

export default RootLayout