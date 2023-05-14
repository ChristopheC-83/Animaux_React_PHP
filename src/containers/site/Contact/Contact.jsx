import { useState, useEffect } from "react";
import TitreH1 from "../../../components/Titres/TitreH1";
import Formulaire from "./Formulaire";
import axios from "axios";

export default function Contact() {

  useEffect(() => {
    document.title = "Contact";
    const descriptionMeta = document.querySelector('meta[name="description"]');
    descriptionMeta.setAttribute("content", "Contactez nous !");
  }, []);

  function handleEnvoiMail(message){
    axios.post("http://localhost:8090/Gaston/SERVEURANIMAUX/front/sendMessage", message)
    .then(reponse=>{
      console.log(reponse)
    })
    .catch(error=>{
      console.log(error)
    })
  
  }

  return (
    <div>
      <TitreH1 bgColor="bg-success">Contactez nous !</TitreH1>

      <div className="container contactContainer">
        <h2>Adresse : </h2>
        Mon adresse....
        <h2>Téléphone</h2>
        <a href="tel:+0607060706">06.07.06.07.06</a>
        <h2>Nous écrire :</h2>
        <Formulaire sendMail={handleEnvoiMail}></Formulaire>
      </div>
    </div>
  );
}
