import { Component } from "react";
import React from "react";
import serviceObj from "./Helpers/api";
import MyForm from "./MyForm";
import { Button} from "semantic-ui-react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import StoreTable from "./StoreTable";
import Confirmation from '../Global/confirmation';

export class Stores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      isFormOpen: false,
      tempFormData: {},
      isShowConfim : false
    };
  }

  componentDidMount() {
    this.fetchStores();
  }

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

  submitStoresData = async (requestPayload) => {
         try {       
    const data = await serviceObj[requestPayload.storeId ? 'putStores' : 'postStores'](requestPayload);
        this.fetchStores();
    } catch (error) {
      console.log(error);
    }
  };
  deleteCustomData = async (requestPayload) => {
    try {
      const data = await serviceObj.deleteStores(requestPayload);
      this.fetchStores();
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



  onSubmitEditData = (newStore) => {
    this.toggle();

    console.log(newStore);
    console.log("I am here 1");
    this.submitStoresData(newStore);
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
  onClickNewStore = () => {
    const stateData = { ...this.state };
    stateData.tempFormData = {};
    stateData.isFormOpen = !stateData.isFormOpen;
    this.setState(stateData);
    //this.toggle();
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
    stateData.tempFormData = editData;
    stateData.isFormOpen = true;
    this.setState(stateData);
  };
  render() {
    const { stores } = this.state;
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
                onCancelStoreData={this.toggle}
                onSaveStoreData={this.onSubmitEditData}
                editData={this.state.tempFormData}
              ></MyForm>
            </div>
          </Popup>

          <Button type="button" onClick={this.onClickNewStore}>
            New Store
          </Button>
          <StoreTable
            stores={stores}
            deleteReq = {(deleteData) => this.showDeleteConfim(deleteData)}
            getData={(editData) => this.fillEditData(editData)}
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
