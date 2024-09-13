import React, {useEffect, useState} from "react";
import { FormLogin } from "../../components/login/FormLogin.jsx";
import "./loginPages.css";
import MM from "../../assets/MM.png";
import SUMA from "../../assets/SUMA.png";
import MSF from "../../assets/MSF.jpeg";
import SDB from "../../assets/SDB.png";
export const LoginPage = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [

        MM,
        SUMA,
        MSF,
        SDB

    ];

    useEffect(() =>{

        const interval = setInterval(() => {

            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

        }, 10000);

        return () => clearInterval(interval);

    }, [images.length]);

    return (

    <main className="login-container">

      <div className="background-images">

        {images.map((image, index) => (

          <img
          
            key={index}
            src={image}
            alt={`Background ${index + 1}`}
            className={`bg-image ${index === currentImageIndex ? 'active' : ''}`}
          
          />
        ))}

      </div>

        <FormLogin />

    </main>

    );

};