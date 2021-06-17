import router from "../router";
import Qs from 'qs';
import axios from 'axios';

// 通用公共方法(包含回调)
export const reqRealEndAsync = (method, baseUrl, url, params, callback) =>{

    params.token = sessionStorage.getItem("token");

    return axios({
        timeout:5000,
        baseURL:baseUrl,
        method:method,
        url:url,
        headers:{
            'Content-type':'application/x-www-form-urlencoded',
        },
        data:Qs.stringify(params),
        traditional:true,
    }).then(res => {
        let result = res.data;
        if(result.code == 1){
            router.replace({
               path:"login",
               query:{
                   msg:result.message
               }
            });
        }else if(result.code == 0){
            // 成功回调
            if(callback != undefined){
                callback(result.code, result.message,result.data);
            }
        }else if(result.code == 2){
            callback(result.code, result.message,result.data);
        }
    });
};


//通用公共方法(不包含回调)
export const reqRealEnd = (method, baseUrl,
                           url, params) => {
    params.token = sessionStorage.getItem('token');
    return axios({
        timeout: 5000,
        baseURL: baseUrl,
        method: method,
        url: url,
        headers:{
            'Content-type': 'application/x-www-form-urlencoded',
        },
        data: Qs.stringify(params),
        //false -- split
        //true -- List<String>
        traditional: true,
    });
};
