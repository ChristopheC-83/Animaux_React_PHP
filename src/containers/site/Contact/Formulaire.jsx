import React, { useEffect } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";

function Formulaire(props) {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="nom">Nom : </label>
          <input
            type="text"
            className="form-control"
            id="nom"
            name="nom"
            onChange={props.handleChange}
            value={props.values.nom}
            onBlur={props.handleBlur}
          />
          {props.touched.nom && props.errors.nom && <span style={{color:"red"}}>{props.errors.nom}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Adresse Mail</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={props.handleChange}
            value={props.values.email}
            onBlur={props.handleBlur}
          />
          {props.touched.email && props.errors.email && <span style={{color:"red"}}>{props.errors.email}</span>}
        </div>

        <div className="form-group">
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message :
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              name="message"
              onChange={props.handleChange}
              value={props.values.message}
              onBlur={props.handleBlur}
            ></textarea>
            {props.touched.message && props.errors.message && <span style={{color:"red"}}>{props.errors.message}</span>}
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={props.handleSubmit}
        >
          Envoyer le message
        </button>
      </form>
    </div>
  );
}

export default withFormik({
  mapPropsToValues: () => ({
    nom: "",
    email: "",
    message: "",
  }),
  validationSchema: Yup.object().shape({
    nom: Yup.string()
      .min(5, "Le nom doit comporter au moins 5 caractères.")
      .required("Le nom est obligatoire."),
    email: Yup.string()
      .email("L'email n'a pas le bon format.")
      .required("L'email est obligatoire."),
    message: Yup.string()
      .min(50, "Le message doit comporter au moins 50 caractères.")
      .max(250, "Le message doit comporter au max 250 caractères."),
  }),
  handleSubmit:(values, {props})=>{
    const message={
      nom : values.nom,
      email : values.email,
      contenu : values.message,
    }
    props.sendMail(message)

  }
})(Formulaire);


