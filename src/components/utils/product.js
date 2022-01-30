import React, { useState } from "react";

import classes from "./product.module.css"
import Rating from "@material-ui/lab/Rating";


const Product = (props) => {
  const [rating, setRating] = useState(4);
  const price = `$${props.price.toFixed(2)}`
  
  return (
    
     
      <div className={classes.div}>
        <img src={props.imageUrl} alt="product"/>
        <h4>{props.title}</h4>
        <div>{props.description}</div>
        <Rating name="read-only" value={rating} readOnly />
        <h4>{price}</h4>
      </div>
   
    
      )}

export default Product