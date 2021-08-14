import axios from "axios";
const serviceObj = {
getProducts : function() {
    return axios.get("/api/Products")
        .then(({ data }) => {
            // console.log(res.data);
            return data;
        }).catch(err => {
            return err;
        })
},
postProducts : function(requestPayload) {
    delete requestPayload.productId;
   
requestPayload.price=Number.parseFloat(requestPayload.price);
    console.log("final end");
    return axios
      .post("/api/Products", requestPayload)
      .then(({ data }) => {
        return data ? true : false;
      })
      .catch((err) => {
        return err;
      });
},
putProducts : function(requestPayload) {
    return axios.put("/api/Products" + '/' + requestPayload.productId, requestPayload)
        .then(({ data }) => { return (data) ? true : false}).catch(err => {
            return err;
        })
},
deleteProducts:function(requestPayload){
    return axios.delete("/api/Products" + '/' + requestPayload.productId, requestPayload)
        .then(({ data }) => { return (data) ? true : false}).catch(err => {
            return err;
        })
}
}

export default serviceObj