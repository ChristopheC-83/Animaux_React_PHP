/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TitreH1 from "../../components/Titres/TitreH1";
import Animal from "./Animal/Animal";
import Button from "../../components/UI/Navbar/Button";

import { FaWindowClose } from "react-icons/fa";

export default function Application() {
  const [animaux, setAnimaux] = useState("");
  const [filtreFamille, setFiltreFamille] = useState("");
  const [filtreContinent, setFiltreContinent] = useState("");

  function loadData() {
    const famille = filtreFamille ? filtreFamille : "-1";
    const continent = filtreContinent ? filtreContinent : "-1";
    axios
      .get(
        `http://localhost:8090/Gaston/SERVEURANIMAUX/front/animaux/${famille}/${continent}`
      )
      .then((reponse) => {
        setAnimaux(Object.values(reponse.data));
      });
  }

  useEffect(() => {
    loadData();
    console.log("chargement ouverture");
  }, [filtreFamille, filtreContinent]);

  function handleSelectionFamille(idFamille) {
    setFiltreFamille(idFamille);
    loadData();
  }
  function handleSelectionContinent(idContinent) {
    setFiltreContinent(idContinent);
    loadData();
  }

  function handleResetFiltreFamille() {
    setFiltreFamille("");
  }
  function handleResetFiltreContinent() {
    setFiltreContinent("");
  }

  return (
    <div>
      <TitreH1 bgColor="bg-success">Les Animaux du Parc</TitreH1>
      {(filtreFamille || filtreContinent) && <span>Filtres :</span>}
      {filtreFamille ? (
        <Button typeBtn="btn-secondary" clic={handleResetFiltreFamille}>
          {filtreFamille} &nbsp;
          <FaWindowClose />
        </Button>
      ) : (
        ""
      )}
      {filtreContinent ? (
        <Button typeBtn="btn-secondary" clic={handleResetFiltreContinent}>
          {filtreContinent} &nbsp;
          <FaWindowClose />
        </Button>
      ) : (
        ""
      )}

      <div className="container-fluid">
        <div className="row no-ugutters">
          {animaux &&
            animaux.map((animal) => {
              //  spread operator envoie l'ensemble des données pour chaque "animal"
              // equivalent à animal = {animal}
              return (
                // la key se met sur l'élément le plus haut
                <div className="col-12 col-md-6 col-xl-4" key={animal.id}>
                  <Animal
                    {...animal}
                    filtreFamille={handleSelectionFamille}
                    filtreContinent={handleSelectionContinent}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
