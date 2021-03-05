import axios from 'axios';

const option = {
    headers: {'x-api-key': "dONTGMAVVY8v9A85C3Vs7x7id9yvfXB7dn2Idmj5"}
  };
  
class APIService {
    async login(username, password){
        const res1 = await axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login", {
          username: username,
          password: password
        }, option);
    
        const resData = res1.data;
        if (resData) {
          console.log(resData);
          localStorage.setItem("accountKey", resData.accountKey)
          return resData;
        } else {
          console.log("Bad response");
          return resData;
        }
    }

    async getBalance(){
        let accountKey = localStorage.getItem('accountKey');
        const res1 = await axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance", {
          accountKey: accountKey
        }, option);
        const resData = res1.data;
        if (resData) {
          console.log(resData);
          return resData;
        } else {
          console.log("Bad response");
          return resData;
        }
    }

    async getAssetPrice(){
        const res1 = await axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current", {}, option);
        const resData = res1.data;
        if (resData) {
          console.log(resData);
          return resData;
        } else {
          console.log("Bad response");
          return resData;
        }
    }

    async getPastAssetPrice(){
        const res1 = await axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/historical", {}, option);
        const resData = res1.data;
        if (resData) {
          console.log(resData);
          return resData;
        } else {
          console.log("Bad response");
          return resData;
        }
    }

    async getPastTransactions(){
        let accountKey = localStorage.getItem('accountKey');
        const res1 = await axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view", {
          accountKey: accountKey
        }, option);
        const resData = res1.data;
        if (resData) {
          console.log(resData);
          return resData;
        } else {
          console.log("Bad response");
          return resData;
        }
    }

    async buySellAsset(orderType, assetAmount){
        let accountKey = localStorage.getItem('accountKey');
        const res1 = await axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add",
        {
            accountKey: accountKey,
            orderType: orderType,
            assetAmount: assetAmount
        }, option);

        const resData = res1.data;
        if (resData) {
            console.log(resData);
            return resData;
        } else {
            console.log("Bad response");
            return resData;
        }
    }
}