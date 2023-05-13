
import TitreH1 from "../../components/Titres/TitreH1";
import banderole from "../../assets/images/banderole.png";
import logo from "../../assets/images/logo.png";

export default function Accueil() {

 

  return (
    <div>
      <img src={banderole} className="img-fluid" alt="banderole" />
      <TitreH1 bgColor="bg-success">Visitez le parc d'animaux Zoo React !</TitreH1>
      <div className="container">
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit nulla recusandae nostrum iure, quisquam maxime vero
          fugiat consectetur sunt pariatur magnam neque saepe illum corrupti
          dolor repudiandae voluptas nisi. Dicta.
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit nulla recusandae nostrum iure, quisquam maxime vero
          fugiat consectetur sunt pariatur magnam neque saepe illum corrupti
          dolor repudiandae voluptas nisi. Dicta.
        </p>
        <br />
        <div className="flexMid">
          <div className="col-12 col-md-6">
            <img src={logo} alt="logo site" className="img-fluid" />
          </div>
          <div className="col-12 col-md-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            quo reprehenderit obcaecati facilis voluptatum optio temporibus
            accusamus doloremque rerum velit non nam consequatur deleniti quas
            maiores delectus, quaerat dolorum libero.
          </div>
        </div>
        <div className="flexMid">
          <div className="col-12 col-md-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            quo reprehenderit obcaecati facilis voluptatum optio temporibus
            accusamus doloremque rerum velit non nam consequatur deleniti quas
            maiores delectus, quaerat dolorum libero.
          </div>
          <div className="col-12 col-md-6">
            <img src={logo} alt="logo site" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}
