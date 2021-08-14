import { Component } from "react";
import React from "react";
import serviceObj from "./Helpers/api";
import MyForm from "./MyForm";
import { Button} from "semantic-ui-react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import ProductTable from "./ProductTable";
import Confirmation from '../Global/confirmation';

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isFormOpen: false,
      tempFormData: {},
      isShowConfim : false
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

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

  submitProductsData = async (requestPayload) => {
    try {          
         const data = await serviceObj[requestPayload.productId ? 'putProducts' : 'postProducts'](requestPayload);
        this.fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };
  fillEditData = (editData) => {
    console.log(editData);
    const stateData = { ...this.state };
    stateData.tempFormData = editData;
    stateData.isFormOpen = true;
    this.setState(stateData);
  };


  toggle = () => {
    const stateData = { ...this.state };
    stateData.isFormOpen = !stateData.isFormOpen;
    this.setState(stateData);
  };

  showDeleteConfim = (deleteData) => {
    const stateData = { ...this.state };
    stateData.isShowConfim = true;
    if (deleteData) {
      console.log(deleteData)
      stateData.tempFormData = deleteData;
    }
    this.setState(stateData);
  };
  deleteCustomData = async (requestPayload) => {
    try {
      const data = await serviceObj.deleteProducts(requestPayload);
      this.fetchProducts();
      const state = {...this.state};
      state.tempFormData = {};
      this.setState(state);
    } catch (error) {
      console.log(error);
    }
  };
  onSubmitEditData = (newProduct) => {
    this.toggle();
    this.submitProductsData(newProduct);
  };

  onClickNewProduct = () => {
    const stateData = { ...this.state };
    stateData.tempFormData = {};
    stateData.isFormOpen = !stateData.isFormOpen;
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

  render() {
    const { products } = this.state;
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
                onCancelProductData={this.toggle}
                onSaveProductData={this.onSubmitEditData}
                editData={this.state.tempFormData}
              ></MyForm>
            </div>
          </Popup>

          <Button type="button" onClick={this.onClickNewProduct}>
            New Product
          </Button>
          <ProductTable
            products={products}
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
