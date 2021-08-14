import React from 'react'
import { Table } from 'semantic-ui-react'
import { Button, Form } from 'semantic-ui-react'
//import ButtonExampleShorthand from './ButtonExampleShorthand';


const StoreTable = (props) => {

    const{stores}=props;

return(
    <div>
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Store Name</Table.HeaderCell>
        <Table.HeaderCell>Address</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
           
      {stores.map((s,pos)=>(
      <Table.Row key={pos}>
    
      <Table.Cell>{s.name}</Table.Cell>
      <Table.Cell>{s.address}</Table.Cell>
      <Table.Cell>{ <Button type ="button" name ="edit" onClick = {() => {props.getData(s)}}>Edit</Button>}</Table.Cell>
      <Table.Cell>{ <Button type ="button" name ="delete" onClick = {() => {props.deleteReq(s)}}>Delete</Button>}</Table.Cell>
     
      
    </Table.Row>

      ))}

    </Table.Body>

    
  </Table>
  </div>
)
}
export default StoreTable