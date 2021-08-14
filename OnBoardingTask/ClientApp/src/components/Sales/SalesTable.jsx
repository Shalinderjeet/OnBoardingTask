import React from 'react'
import { Table } from 'semantic-ui-react'
import { Button, Form } from 'semantic-ui-react'



const SalesTable = (props) => {

    const{sales}=props;

return(
    <div>
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Customer Name</Table.HeaderCell>
        <Table.HeaderCell>Product</Table.HeaderCell>
        <Table.HeaderCell>Store</Table.HeaderCell>
        <Table.HeaderCell>Date Sold</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
     
      {sales.map((s,pos)=>(

      <Table.Row key={pos}>
      

      <Table.Cell>{s.customer.name}</Table.Cell>
      <Table.Cell>{s.product.name}</Table.Cell>
      <Table.Cell>{s.store.name}</Table.Cell>
      <Table.Cell>{s.dateSold}</Table.Cell>
    
      <Table.Cell>{ <Button type ="button" name ="edit" onClick = {() => {props.getData(s)}}>Edit</Button>}</Table.Cell>
      <Table.Cell>{ <Button type ="button" name ="delete" onClick = {() => {props.deleteReq(s)}}>Delete</Button>}</Table.Cell>
      
    </Table.Row>

      ))}

    </Table.Body>

    
  </Table>
  </div>
)
}
export default SalesTable;