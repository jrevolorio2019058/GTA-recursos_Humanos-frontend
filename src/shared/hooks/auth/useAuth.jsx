import {useState} from "react";

import toast from "react-hot-toast";

import {useNavigate} from "react-router-dom";

import {login as loginRequest} from "../../../services/api";

export const useAuth = () => {

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const login = async(username, password) => {

        setIsLoading(true);

        try{

            const response = await loginRequest({username, password});

            if(response.error  && response.e){

                setIsLoading(false);

                return toast.error("Creedenciales Errones");

            }

            const {user, token} = response.data;

            localStorage.setItem(

                "token",

                JSON.stringify({

                    token,
                    username: user.username,
                    role: user.role

                }),

            );

            navigate("/home");

            return toast.success(`Logeo Exitoso, bienvenido ${user.username}`);

        }catch(e){

            setIsLoading(false);
            
            toast.error(error.message || "Ocurrio un error, intenta de nuevo");

        }finally{

            setIsLoading(false);

        }

    }

    const logout = () => {

        localStorage.removeItem("token");
        navigate("/");
        
    };

    return {isLoading, login, logout};

}