import "./Style/index.css";
import Site from "./containers/site/Site";
import Accueil from "./containers/site/Accueil";
import Contact from "./containers/site/Contact/Contact";
import Error from "./components/Error/Error";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Application from "./containers/site/Application";

function App() {
  return (
    <>
      <div className="MEPSite">
        <Site />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/animaux" element={<Application />} />

          <Route
            path="/*"
            element={<Error type="404">La page n'existe pas !</Error>}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
