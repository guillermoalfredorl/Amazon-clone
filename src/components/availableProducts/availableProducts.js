import React from "react";

import Product from "../utils/product"
import classes from "./availableProducts.module.css"
import PRODUCTS from "../../data/dummy-data"
import Rating from "@material-ui/lab/Rating";



const AvailableProducts = () => {
  const productList =  PRODUCTS.map((product) => 
      <Product key={product.id} 
      title={product.title} 
      imageUrl={product.imageUrl} 
      description={product.description} 
      rating={Rating}
      price={product.price}/>
      )
      console.log(productList)

  return (
    <div className={classes.div}>
      {productList}
    </div>
  )
}

export default AvailableProducts