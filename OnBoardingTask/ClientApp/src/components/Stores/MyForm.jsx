import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const MyForm = (props) => {

  const [storeName, setStoreName] = useState(props.editData.name || '');
  const [storeAddress, setStoreAddress] = useState(props.editData.address || '');
  const [storeId,setStoreId] =useState(props.editData.storeId ||'');
  const onStoreNameChangeHandler=(event)=>{
   setStoreName(event.target.value);
  };

  const onStoreAddressChangeHandler=(event)=>{
    setStoreAddress(event.target.value);
   };

   const onSubmitHandler=()=>{
     
    const newStore={
      name:storeName,
      address:storeAddress,
      storeId:storeId

    };
    props.onSaveStoreData(newStore);  
   };

   const onCancelHandler=()=>{
     props.onCancelStoreData();
   }
  

  return (
    <Form name="customForm">
      <Form.Field>
        <label> Store Name</label>
        <input
          name="storeName"
          placeholder=" Store Name"
          type="text"
          value={storeName}
          onChange={onStoreNameChangeHandler}
        />
      </Form.Field>
      <Form.Field>
        <label>Store Address</label>
        <textarea
          name="storeAddress"
          placeholder=" Store Address"
          type="text"
          value={storeAddress}
          onChange={onStoreAddressChangeHandler}
        />
      </Form.Field>
      <Button
        type="button" onClick={onSubmitHandler}>Submit
      </Button>

      <Button
        type="button"onClick={onCancelHandler}
      >
        {" "}
        close{" "}
      </Button>
    </Form>
  );
};



export default MyForm;
