import axios from "axios";
const serviceObj = {
getStores : function() {
    console.log("I am here");
    return axios.get("/api/Stores")
        .then(({ data }) => {
        console.log(data);
            return data;
        }).catch(err => {
            return err;
        })
},
postStores : function(requestPayload) {
    delete requestPayload.storeId;
   
    return axios
      .post("/api/Stores", requestPayload)
      .then(({ data }) => {
        return data ? true : false;
      })
      .catch((err) => {
        return err;
      });
},
putStores : function(requestPayload) {
    return axios.put("/api/Stores" + '/' + requestPayload.storeId, requestPayload)
        .then(({ data }) => { return (data) ? true : false}).catch(err => {
            return err;
        })
},
deleteStores:function(requestPayload){
    return axios.delete("/api/Stores" + '/' + requestPayload.storeId, requestPayload)
        .then(({ data }) => { return (data) ? true : false}).catch(err => {
            return err;
        })
}
}

export default serviceObj