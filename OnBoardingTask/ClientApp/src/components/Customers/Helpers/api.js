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
  postCustomers: function (requestPayload) {
      delete requestPayload.customerId;
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
      .put("/api/Customers" + '/' + requestPayload.customerId, requestPayload)
      .then(({ data }) => {
        return data ? true : false;
      })
      .catch((err) => {
        return err;
      });
  },
  deleteCustomers: function (requestPayload) {
    return axios
      .delete("/api/Customers"  + '/' + requestPayload.customerId, requestPayload)
      .then(({ data }) => {
        return data ? true : false;
      })
      .catch((err) => {
        return err;
      });
  },
};

export default serviceObj;
