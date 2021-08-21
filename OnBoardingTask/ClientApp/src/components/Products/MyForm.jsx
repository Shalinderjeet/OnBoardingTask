import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
const MyForm = (props) => {
  const [productName, setProductName] = useState(props.editData.name || '');
  const [productPrice, setProductPrice] = useState(props.editData.price ||'');
  const [id,setId] =useState(props.editData.id ||'');
  const onProductNameChangeHandler=(event)=>{
    setProductName(event.target.value);
  };

  const onProductPriceChangeHandler=(event)=>{
    setProductPrice(event.target.value);
   };
   const onSubmitHandler=()=>{
     //event.preventDefault();
     
    const newProduct={
      name:productName,
      price:productPrice,
      id: id
    };
    props.onSaveProductData(newProduct);  
   };
   

   const onCancelHandler=()=>{

     props.onCancelProductData();
   }

  return (
    <Form name="customForm">
      <Form.Field>
        <label> Product Name</label>
        <input
          name="productName"
          placeholder=" Product Name"
          type="text"
          value={productName}
          onChange={onProductNameChangeHandler.bind(this)}
        />
       
      </Form.Field>
      <Form.Field>
        <label>Product price</label>
        <input
          name="productPrice"
          placeholder=" Product Price"
          type="number"
         
          value={productPrice}
          onChange={onProductPriceChangeHandler}
        />
      </Form.Field>
      <Button
        type="button" onClick={onSubmitHandler}>Submit
      </Button>

      <Button
        type="button"
        onClick={onCancelHandler}>
        {" "}
        close{" "}
      </Button>

    </Form>
  );
};



export default MyForm;
