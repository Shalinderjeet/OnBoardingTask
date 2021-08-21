import axios from "axios";
const serviceObj = {
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
  postCustomers: function (requestPayload) {
      delete requestPayload.id;
    return axios
      .post("/api/Customers", requestPayload)
      .then(({ data }) => {
        return data ? true : false;
      })
      .catch((err) => {
        return err;
      });
  },
  putCustomers: function (requestPayload) {
    
    return axios
      .put("/api/Customers" + '/' + requestPayload.id, requestPayload)
      .then(({ data }) => {
        return data ? true : false;
      })
      .catch((err) => {
        return err;
      });
  },
  deleteCustomers: function (requestPayload) {
    console.log("I am inside delete Customers");
    console.log(requestPayload.id);
    return axios
      .delete("/api/Customers"  + '/' + requestPayload.id, requestPayload)
      .then(({ data }) => {
        return data ? true : false;
      })
      .catch((err) => {
        return err.response.data;
      });
  },
};

export default serviceObj;
