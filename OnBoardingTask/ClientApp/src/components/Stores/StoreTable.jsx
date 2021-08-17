import React from 'react'
import { Table } from 'semantic-ui-react'
import { Button, Form } from 'semantic-ui-react'
//import ButtonExampleShorthand from './ButtonExampleShorthand';
import _ from "lodash";
import { useState } from 'react';



const StoreTable = (props) => {

  
    const [currentPage,setcurrentPage]=useState(1);
    const{stores}=props;
    const{pages}=props;
    const{paginatedPosts}=props;
    const{pageSize}=props;
    
 

    
const pagination=(pageNo)=>{
  console.log("Inside paginated post functiuon");
  setcurrentPage(pageNo);
  const startIndex=(pageNo-1) * pageSize;
  const paginatedPost=_(stores).slice(startIndex).take(pageSize).value();
  props.onSave(paginatedPost);
  //do send this value back to onPost function
} 

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
           
      {paginatedPosts.map((s,pos)=>(
      <Table.Row key={pos}>
    
      <Table.Cell>{s.name}</Table.Cell>
      <Table.Cell>{s.address}</Table.Cell>
      <Table.Cell>{ <Button type ="button" name ="edit" onClick = {() => {props.getData(s)}}>Edit</Button>}</Table.Cell>
      <Table.Cell>{ <Button type ="button" name ="delete" onClick = {() => {props.deleteReq(s)}}>Delete</Button>}</Table.Cell>
     
      
    </Table.Row>

      ))}

    </Table.Body>

    
  </Table>
  <nav className="d-flex justify-content-center">
    <ul className="pagination">
       {
         pages.map((page)=>(
           <li 
           className=
           {
             page===currentPage?"page-item active": "page-item"
             
           }
           >
             <p className="page-link"            
             onClick={()=>pagination(page)}
             >{page}</p>
             </li>
         ))
       }
    </ul>
  </nav>
  </div>
)
}
export default StoreTable