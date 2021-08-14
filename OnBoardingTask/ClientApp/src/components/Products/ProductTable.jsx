import React from 'react'
import { Table } from 'semantic-ui-react'
import { Button, Form } from 'semantic-ui-react'
//import ButtonExampleShorthand from './ButtonExampleShorthand';


const ProductTable = (props) => {

    const{products}=props;

return(
    <div>
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Product Name</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
     
      {products.map((p,pos)=>(
      <Table.Row key={pos}>
    

      <Table.Cell>{p.name}</Table.Cell>
      <Table.Cell>{p.price}</Table.Cell>
      <Table.Cell>{ <Button type ="button" name ="edit" onClick = {() => {props.getData(p)}}>Edit</Button>}</Table.Cell>
      <Table.Cell>{ <Button type ="button" name ="delete" onClick = {() => {props.deleteReq(p)}}>Delete</Button>}</Table.Cell>

      
    </Table.Row>

      ))}

    </Table.Body>

    
  </Table>
  </div>
)
}
export default ProductTable