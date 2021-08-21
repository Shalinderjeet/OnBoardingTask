import React, { useState } from "react";
import { Button, Form, Select } from "semantic-ui-react";


const MyForm = (props) => {

  const [dateSold,setDateSold]=useState(props.editData.dateSold || '');
  const [customerName, setCustomerName] = useState(props.editData.customerId || '');
  const [productName, setProductName] = useState(props.editData.productId ||'');
  const [storeName,setStoreName]=useState(props.editData.storeId || '');
  const [id,setId]=useState(props.editData.id || '');
  const onProductNameChangeHandler=(event)=>{
   setProductName(event.target.value);
  };

  const onCustomerNameChangeHandler=(event)=>{
    
    console.log(event.target.value);
    setCustomerName(event.target.value);
    
  
   };

   const onStoreNameChangeHandler=(event)=>{
    setStoreName(event.target.value);
   };
 
   const onDateSoldChangeHandler=(event)=>{
     setDateSold(event.target.value);
    };

   const onSubmitHandler=()=>{

    if(dateSold.trim().length===0){
    return;
    }    

    const newSale={
      customerId:customerName,
      productId:productName,
      storeId:storeName,
      dateSold:dateSold,
      id:id
    };
    props.onSaveSalesData(newSale);  
   };
   

   const onCancelHandler=()=>{

     props.onCancelSaleData();
   }

  return (
    <Form name="customForm">

    <Form.Field>
      <label>Date Sold</label>
      <input type="date" name = "dateSold" onChange={onDateSoldChangeHandler}  value = {dateSold}/>
    </Form.Field>

      <Form.Field>
        <label> Customer</label>
        <select name = "customer" onChange={onCustomerNameChangeHandler} placeholder = "Select Customer" value = {customerName}>
        <option value={''} disabled>Select Customer</option>
         {props.customers.map((c,index)=>{
         return <option key={index} value={c.id}>{c.name}</option>
         })}        
        </select>   
      </Form.Field>
      <Form.Field>
        <label>Product</label>
        <select name = "product" onChange={onProductNameChangeHandler} placeholder = "Select Products" value = {productName}>
         <option value={''} disabled>Select Products</option>
         {props.products.map((p,index)=>{

         return <option key={index} value={p.id}>{p.name}</option>

         })}        
        </select> 
      </Form.Field>
      
      <Form.Field>
        <label>Store</label>
        <select name = "store" onChange={onStoreNameChangeHandler}  value = {storeName}
        placeholder = "Select Store"
        >
         <option value= {''} disabled>Select Store</option>
         {props.stores.map((s,index)=>{

         return <option key={index} value={s.id}>{s.name}</option>

         })}        
        </select> 
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
