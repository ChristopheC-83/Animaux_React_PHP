import ReactDOM from 'react-dom/client';
import App from './App';
import "./Style/index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // pour la mise en ligne : <BrowserRouter basename="dossier_hostinger/sous_dossier_hostinger/">
    <BrowserRouter>  
        <App />
    </BrowserRouter>
);

