import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import HeaderBottom from "@/components/header/HeaderBottom";
import Product from "@/components/Product";
import { productProps } from "@/type.d";
import React from "react";

interface props{
  productData:productProps[];
}
export default function Home({productData}:props) {
  console.log(productData)
  return (
    <main>
      <div >
        <Banner/>
        <Product productData={productData} />
      </div>
      
    </main>
  );
}


export const getServerSideProps = async () => {
  const resp = await fetch("https://fakestoreapi.com/products");
  const productData = await resp.json();
  
  // Return productData as props
  return { props: { productData } };
}