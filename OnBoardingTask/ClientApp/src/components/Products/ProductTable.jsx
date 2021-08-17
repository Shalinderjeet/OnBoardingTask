import React from 'react'
import { Table } from 'semantic-ui-react'
import { Button, Form } from 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import _ from "lodash";
import {useState} from 'react'


//import ButtonExampleShorthand from './ButtonExampleShorthand';


const ProductTable = (props) => {

  const [currentPage,setcurrentPage]=useState(1);

    const{products}=props;
    const{pages}=props;
    const{paginatedPosts}=props;
    const{pageSize}=props;

    const pagination=(pageNo)=>{
      console.log("Inside paginated post functiuon");
      setcurrentPage(pageNo);
      const startIndex=(pageNo-1) * pageSize;
      const paginatedPost=_(products).slice(startIndex).take(pageSize).value();
      props.onSave(paginatedPost);
      //do send this value back to onPost function
    } 

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
     
      {paginatedPosts.map((p,pos)=>(
      <Table.Row key={pos}>
    

      <Table.Cell>{p.name}</Table.Cell>
      <Table.Cell>{p.price}</Table.Cell>
      <Table.Cell>{ <Button type ="button" name ="edit" onClick = {() => {props.getData(p)}}>Edit</Button>}</Table.Cell>
      <Table.Cell>{ <Button type ="button" name ="delete" onClick = {() => {props.deleteReq(p)}}>Delete</Button>}</Table.Cell>

      
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
export default ProductTable