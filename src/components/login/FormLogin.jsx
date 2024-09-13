import { Link } from "react-router-dom";

import { useState } from "react";

import { Input } from "../others/Input.jsx";

import "./FormLogin.css";

export const FormLogin = () => {

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

    return (

        <div className="contenedor">

            <div><h2>Inicio Sesión</h2></div>

            <div>

                <div>

                    <Input
                    
                        field="username"
                        type="text"
                        value={form.username.value}
                        placeholderText="Usuario"
                        onChangeHandler={handleInputValueChange}
                        onBlurHandler={handleInputValidationOnBlur}
                        showErrorMessage={form.username.showErrorMessage}
                        validationMessage= "El usuario es requerido"
                        className="input-login"
                    
                    />

                </div>

                <div>

                    <Input
                    
                        field="password"
                        type="text"
                        value={form.username.value}
                        placeholderText="Contraseña"
                        onChangeHandler={handleInputValueChange}
                        onBlurHandler={handleInputValidationOnBlur}
                        showErrorMessage={form.username.showErrorMessage}
                        validationMessage= "El usuario es requerido"
                        className="input-login"
                    
                    />

                </div>

            </div>

        </div>

    )

}