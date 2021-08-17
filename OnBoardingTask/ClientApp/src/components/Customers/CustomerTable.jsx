import React from 'react'
import {useState} from 'react'
import { Icon, Label, Menu, Pagination, Table } from 'semantic-ui-react'
import { Button, Form } from 'semantic-ui-react'
import { createModuleResolutionCache } from 'typescript';
import _ from "lodash";


const CustomerTable = (props) => {

  const [currentPage,setcurrentPage]=useState(1);
     
    const{customers}=props;
    const{pages}=props;
    const{paginatedPosts}=props;
    const{pageSize}=props;
    
 

    
const pagination=(pageNo)=>{
  console.log("Inside paginated post functiuon");
  setcurrentPage(pageNo);
  const startIndex=(pageNo-1) * pageSize;
  const paginatedPost=_(customers).slice(startIndex).take(pageSize).value();
  props.onSave(paginatedPost);
  //do send this value back to onPost function
}  

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
     
      {paginatedPosts.map((c,pos)=>(
      <Table.Row key={pos}>
    
      <Table.Cell>{c.name}</Table.Cell>
      <Table.Cell>{c.address}</Table.Cell>
      <Table.Cell>{ <Button type ="button" name ="edit" onClick = {() => {props.getData(c)}}>Edit</Button>}</Table.Cell>
      <Table.Cell>{ <Button type ="button" name ="delete" onClick = {() => {props.deleteReq(c)}}>Delete</Button>}</Table.Cell>

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
export default CustomerTable