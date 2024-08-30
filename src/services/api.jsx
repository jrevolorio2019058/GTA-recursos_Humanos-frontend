import axios from "axios";

const apiClient = axios.create({

    baseURL: "http://127.0.0.1:3000/GTA-recursos_Humanos/v1",
    timeout: 5000,

});

apiClient.interceptors.request.use(

    (config) => {

        const getToken = localStorage.getItem("token");

        if(getToken){

            const token = JSON.parse(getToken).token;

            config.headers.Authorization = `${token}`;

        }

        return config;

    },

    (e) => {

        return Promise.reject(e);

    }

)