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
    //delete requestPayload.productId;
      delete requestPayload.salesId;
      console.log("My request payload");
      console.log(requestPayload);
      requestPayload.cname=Number.parseInt(requestPayload.cname);
      requestPayload.pname=Number.parseInt(requestPayload.pname);
      requestPayload.sname=Number.parseInt(requestPayload.sname);
  
    return axios
      .post("/api/Sales", requestPayload)
      .then(({ data }) => {
        console.log("Data has been saved");
        console.log(data);
        return data ? true : false;
      })
      .catch((err) => {
        return err;
      });
  },
  putSales: function (requestPayload) {
    return axios
      .put("/api/Sales" + '/' + requestPayload.salesId, requestPayload)
      .then(({ data }) => {
        return data ? true : false;
      })
      .catch((err) => {
        return err;
      });
  },
  deleteSales: function (requestPayload) {
    return axios
      .delete("/api/Sales"  + '/' + requestPayload.salesId, requestPayload)
      .then(({ data }) => {
        return data ? true : false;
      })
      .catch((err) => {
        return err;
      });
  },
};

export default serviceObj;
