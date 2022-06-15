import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import "./amazon.css";
import Paragraph from "./Paragraph";
import { getProducts } from "../Services/api";
import { useEffect, useState } from "react";




//amazon
const Products = ({handleClick}) => {
  const [ product, setProducts ] = useState([]);


  useEffect(() => {
    getProductDetails();
  },[]);

  const getProductDetails = async () => {
    const result = await getProducts();
    setProducts(result.data);
  }


  return (
    <div>

      

    <Paragraph/>
    <section>
     
      { popularProducts.map((item) => (
        <Product key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
      </div>
  );
};

export default Products;