import { Component } from "react";
import React from "react";
import serviceObj from "./Helpers/api";

import "reactjs-popup/dist/index.css";
import MyForm from "./MyForm";
import { Button} from "semantic-ui-react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";


import SalesTable from "./SalesTable";
import Confirmation from '../Global/confirmation';

export class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sales: [],
      stores:[],
      products:[],
      customers:[],
      isFormOpen: false,
      tempFormData: {},
      isShowConfim : false
    };
  }

  componentDidMount() {
    this.fetchSales();
    this.fetchProducts();
    this.fetchStores();
    this.fetchCustomers();
  }

  fetchSales= async () => {
    try {
      const data = await serviceObj.getSales();
      if (data) {
        console.log(data);
        const stateData = { ...this.state };
        stateData.sales = data;
        this.setState(stateData);
      }
    } catch (error) {
      console.log(error);
    }
  
  };
  fetchCustomers = async () => {
    try {
      const data = await serviceObj.getCustomers();
      if (data) {
        const stateData = { ...this.state };
        stateData.customers = data;
        this.setState(stateData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  fetchProducts = async () => {
    try {
      const data = await serviceObj.getProducts();
      if (data) {
        const stateData = { ...this.state };
        stateData.products = data;
        this.setState(stateData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  fetchStores = async () => {
    try {
      const data = await serviceObj.getStores();
      if (data) {
        const stateData = { ...this.state };
        stateData.stores = data;
        this.setState(stateData);
      }
    } catch (error) {
      console.log(error);
    }
  };


  toggle = () => {
    const stateData = { ...this.state };
    stateData.isFormOpen = !stateData.isFormOpen;
    this.setState(stateData);
  };
  deleteCustomData = async (requestPayload) => {
    try {
      const data = await serviceObj.deleteSales(requestPayload);
      this.fetchSales();
      const state = {...this.state};
      state.tempFormData = {};
      this.setState(state);
    } catch (error) {
      console.log(error);
    }
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
  fillEditData = (editData) => {
    console.log(editData);
    const stateData = { ...this.state };
    const tempData = {
      dateSold : editData.dateSold || '',
      customerId: editData.customer.customerId || '',
      productId: editData.product.productId || '',
      storeId: editData.store.storeId || '',
      customerName: editData.customer.name || '',
      productName: editData.product.name || '',
      storeName: editData.store.name || '',
      salesId : editData.salesId || '',

    }
    stateData.tempFormData = tempData;
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

  onClickNew = () => {
    const stateData = { ...this.state };
    stateData.tempFormData = {}
    stateData.isFormOpen = true;
    this.setState(stateData);
  };
  onSubmitEditData = (editData) => {
    console.log("I have fetched some below data");
    console.log(editData);
    this.toggle();
    this.submitCustomData(editData);
  };
  submitCustomData = async (requestPayload) => {
    try {
         //console.log(requestPayload.salesId);
      const data = await serviceObj[requestPayload.salesId ? 'putSales' : 'postSales'](requestPayload);
        this.fetchSales();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { sales,customers,products,stores } = this.state;
    return (

      <div>
      <Popup
            open={this.state.isFormOpen}
            position=" center"
            closeOnDocumentClick={false}
            modal
          >
            <div>
              <MyForm
               customers={customers}
               stores={stores}
               products={products}
                onCancelSaleData={() => this.toggle()}
                onSaveSalesData={(data) => this.onSubmitEditData(data)}
                editData={this.state.tempFormData}
              ></MyForm>
            </div>
          </Popup>

          <Button type="button" onClick={() => this.onClickNew()}>
            New Sales
          </Button>
      <SalesTable sales={sales} 
       deleteReq = {(deleteData) => this.showDeleteConfim(deleteData)}
         getData={(editData) => this.fillEditData(editData)}       
          />
               {(this.state.isShowConfim) ? 
          <Confirmation response = {(data) => this.responseFromConfirmation(data)}></Confirmation>
            : ''
        }
        </div>
        
   

      
    );
  }
}
