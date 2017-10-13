import axios from 'axios';
export  async function  axiosgetUserProfile(queryid,callback) {

        let url = 'https://api.dialeureka.com/view-profile';
          console.log('url : ' + url);
          console.log(queryid);
               await axios.post(url,{
                 queryId:queryid
               })
              .then(response =>{
                console.log(response);
                callback (response);
              }).catch(error=>{
                callback (error);
            });
      }
