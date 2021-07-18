import React from "react";
import Headline from "../../sections/Headline";
import Product from "../../sections/Product";
import DetailsProduct from "../../sections/DetailsProduct";
import Footer from "../../sections/Footer";

export default function Home() {
  return (
    <>
      <Headline />
      <Product />
      <DetailsProduct />
      <Footer />
    </>
  );
}
