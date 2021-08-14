import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import { Button, Form } from 'semantic-ui-react'


const CustomerTable = (props) => {

    const{customers}=props;
    console.log(customers);

return(
    <div>
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Address</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
     
      {customers.map((c,pos)=>(
      <Table.Row key={pos}>
    
      <Table.Cell>{c.name}</Table.Cell>
      <Table.Cell>{c.address}</Table.Cell>
      <Table.Cell>{ <Button type ="button" name ="edit" onClick = {() => {props.getData(c)}}>Edit</Button>}</Table.Cell>
      <Table.Cell>{ <Button type ="button" name ="delete" onClick = {() => {props.deleteReq(c)}}>Delete</Button>}</Table.Cell>

    </Table.Row>

      ))}

    </Table.Body>

    
  </Table>
  </div>
)
}
export default CustomerTable