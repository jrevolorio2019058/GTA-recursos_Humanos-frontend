import { useState } from "react";

import { Input } from "../others/Input.jsx";

import { useAuth } from "../../shared/hooks";

import "./FormLogin.css";

export const FormLogin = () => {

    const { login, isLoading } = useAuth();

    const [form, setForm] = useState({

        username: {

            value: "",
            isValid: false,
            errorMessage: ""

        },

        password: {

            value: "",
            isValid: false,
            errorMessage: ""

        }

    });

    const handleInputValueChange = (value, field) => {

        setForm((prevState) => ({

            ...prevState,

            [field]: {

                ...prevState[field],
                value

            },

        }));

    };

    const handleInputValidationOnBlur = (value, field) => {

        let isValid = false;

        switch(field){

            case "username":

                isValid = value.length > 0;

                break;

            case "password":

                isValid = value.length > 0;

                break;

            default:

                break;

        }

        setForm((prevState) => ({

            ...prevState,
            [field]: {

                ...prevState[field],
                isValid,
                showError: !isValid

            },

        }));

    };

    const handleLogin = (event) => {

        event.preventDefault();

        login(form.username.value, form.password.value);

    }

    const buttonDisabled = 

    isLoading || !form.username.isValid || !form.password.isValid;

    return (

        <div className="form-container">

            <div className="contenedor">

                <div className="title"><h2>Inicio Sesión</h2></div>

                <div className="components">

                    <Input
                        
                        field="username"
                        type="text"
                        value={form.username.value}
                        placeholderText="Usuario"
                        onChangeHandler={handleInputValueChange}
                        onBlurHandler={handleInputValidationOnBlur}
                        showErrorMessage={form.username.showError}
                        validationMessage= "El usuario es requerido"
                        className="input-login"
                    
                    />

                    <Input
                        
                        field="password"
                        type="password"
                        value={form.password.value}
                        placeholderText="Contraseña"
                        onChangeHandler={handleInputValueChange}
                        onBlurHandler={handleInputValidationOnBlur}
                        showErrorMessage={form.password.showError}
                        validationMessage= "La contraseña es requerida"
                        className="input-login"
                        
                    />

                    <button 
                    
                    className="btn"
                    type="submit"
                    onClick={handleLogin}
                    disabled={buttonDisabled}
                    
                    >

                        Login

                    </button>

                </div>

            </div>

        </div>

    );

};