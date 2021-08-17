import { Component } from "react";
import React from "react";
import CustomerTable from "./CustomerTable";
import serviceObj from "./Helpers/api";
import MyForm from "./MyForm";
import { Button} from "semantic-ui-react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Confirmation from '../Global/confirmation';
import _ from "lodash";

export class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      isFormOpen: false,
      tempFormData: {},
      isShowConfim : false,
      pageSize:5,
      pageCount:0,
      paginatedPosts:[],
      
    };
  }

  componentDidMount() {
    this.fetchCustomers();
  }
  fetchCustomers = async () => {
    try {
      const data = await serviceObj.getCustomers();
      if (data) {
        const stateData = { ...this.state };
        stateData.customers = data;
        let len=data.length;
        console.log("This is new length");
        console.log(len);
        let p=stateData.pageSize;
        console.log(p);
        let newlen=Math.ceil(len/p);
        console.log(newlen);
        stateData.pageCount=newlen;
        console.log(stateData.pageCount);
        stateData.paginatedPosts=_(data).slice(0).take(p).value();
        this.setState(stateData);

      }
    } catch (error) {
      console.log(error);
    }
  };
  
  submitCustomData = async (requestPayload) => {
    try {
         console.log(requestPayload.customerId);
      const data = await serviceObj[requestPayload.customerId ? 'putCustomers' : 'postCustomers'](requestPayload);
        this.fetchCustomers();
    } catch (error) {
      console.log(error);
    }
  };
  EditCustomData = async (requestPayload) => {
    try {
      const data = await serviceObj.putCustomers(requestPayload);
      if (data) {
        this.fetchCustomers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  deleteCustomData = async (requestPayload) => {
    try {
      const data = await serviceObj.deleteCustomers(requestPayload);
      this.fetchCustomers();
      const state = {...this.state};
      state.tempFormData = {};
      this.setState(state);
    } catch (error) {
      console.log(error);
    }
  };

  toggle = () => {
    const stateData = { ...this.state };
    stateData.isFormOpen = !stateData.isFormOpen;
    this.setState(stateData);
  };

  fillEditData = (editData) => {
    console.log(editData);
    const stateData = { ...this.state };
    stateData.tempFormData = editData;
    stateData.isFormOpen = true;
    this.setState(stateData);
  };

  showDeleteConfim = (deleteData) => {
    const stateData = { ...this.state };
    stateData.isShowConfim = true;
    if (deleteData) {
      stateData.tempFormData = deleteData;
    }
    this.setState(stateData);
  };

  onSubmitEditData = (editData) => {
    this.toggle();
    this.submitCustomData(editData);
  };

  onClickNew = () => {
    const stateData = { ...this.state };
    stateData.tempFormData = {}
    stateData.isFormOpen = true;
    this.setState(stateData);
  };

  responseFromConfirmation = (decision) => {
    const stateData = { ...this.state };
    stateData.isShowConfim = false;
    this.setState(stateData);
    if (decision) {
      this.deleteCustomData(stateData.tempFormData);
    } else {
      stateData.tempFormData = {};
      this.setState(stateData);
    }
  };
 onPage=(p)=>{
  const stateData = { ...this.state };
  stateData.paginatedPosts=p;
  this.setState(stateData);

}

  render() {
    const { customers } = this.state;
    const{paginatedPosts}=this.state;
    const{pageCount}=this.state;
    const{pageSize}=this.state;
    
    console.log("I am here");
    console.log(pageCount);
    const pages=_.range(1,pageCount+1);
    console.log("Final");
    console.log(pages);
    return (
      <div>
        <div>
          <Popup
            open={this.state.isFormOpen}
            position=" center"
            closeOnDocumentClick={false}
            modal
          >
            <div>
              <MyForm
                cancel={() => this.toggle()}
                submit={(data) => this.onSubmitEditData(data)}
                editData={this.state.tempFormData}
              
              ></MyForm>
            </div>
          </Popup>

          <Button type="button" onClick={() => this.onClickNew()}>
            New Customer
          </Button>
          <CustomerTable
            customers={customers}
            pages={pages}
            pageSize={pageSize}
            onSave={this.onPage}
            paginatedPosts={paginatedPosts}
            getData={(editData) => this.fillEditData(editData)}
            deleteReq = {(deleteData) => this.showDeleteConfim(deleteData)}
          />
        
        </div>       
      
        {(this.state.isShowConfim) ? 
          <Confirmation response = {(data) => this.responseFromConfirmation(data)}></Confirmation>
            : ''
        }
        </div>
    );
  }
}
