import axios from "axios";
const serviceObj = {
  getSales: function () {
    return axios
      .get("/api/Sales")
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
  },
  getCustomers: function () {
    return axios
      .get("/api/Customers")
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
  },
  getProducts: function () {
    return axios
      .get("/api/Products")
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
  },
  getStores: function () {
    return axios
      .get("/api/Stores")
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
  }
  ,
  postSales: function (requestPayload) {
    
      delete requestPayload.id;
      console.log("My request payload of Sales");
      console.log("My second entry");
      console.log(requestPayload);
      console.log("check my above values");
      
    return axios
      .post("/api/Sales", requestPayload)
      .then(({ data }) => {
       
        return data ? true : false;
      })
      .catch((err) => {
        console.log("Error aa gya");
        return err;
      });
  },
  putSales: function (requestPayload) {
    return axios
      .put("/api/Sales" + '/' + requestPayload.id, requestPayload)
      .then(({ data }) => {
        return data ? true : false;
      })
      .catch((err) => {
        return err;
      });
  },
  deleteSales: function (requestPayload) {
    return axios
      .delete("/api/Sales"  + '/' + requestPayload.id, requestPayload)
      .then(({ data }) => {
        console.log("after delete");
        return data ? true : false;
      })
      .catch((err) => {
        console.log("API error");
        console.log(err);
        return err;
      });
  },
};

export default serviceObj;
