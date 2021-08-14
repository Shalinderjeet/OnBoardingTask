import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const MyForm = (props) => {
  let [formData, setFormData] = useState({
    name: ((props || {}).editData || {}).name || "",
    address: ((props || {}).editData || {}).address || "",
    customerId: ((props || {}).editData || {}).customerId || "",
  });
  const onCancelHandler=()=>{
    props.cancel();
  }
 
  return (
    <Form name="customForm">
      <Form.Field>
        <label>Name</label>
        <input
          name="customName"
          placeholder="Name"
          type="text"
          value={formData.name}
          onChange={(event) =>
            onChangeHandler(event, "name", setFormData, formData)
          }
        />
      </Form.Field>
      <Form.Field>
        <label>Address</label>
        <textarea
          name="customAddress"
          placeholder="Address"
          value={formData.address}
          onChange={(event) =>
            onChangeHandler(event, "address", setFormData, formData)
          }
        />
      </Form.Field>
      <Button
        type="button"
        onClick={() => {
          props.submit(formData);
        }}
      >
        Submit
      </Button>
      <Button
        type="button" onClick={onCancelHandler}>
        {" "}
        close{" "}
      </Button>
    </Form>
  );
};

function onChangeHandler(event, propertyName, setFormData, formData) {
  
  //event.preventDefault();

  let copyObj = { ...formData };
  copyObj[propertyName] = event.target.value;
 
  setFormData(copyObj);
}

export default MyForm;
