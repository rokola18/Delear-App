import React, {useState} from 'react';
import Header from './componentes/header'
import './css/App.css'
import CamposDinamicos from './componentes/camposdinamicos';

function App () {

  const [showContent, setShowContent] = useState('home');

  const handleHomeClick = () => {
    setShowContent('home'); 
  };

  const handleMyBodyClick = () => {
    setShowContent('body');  
  };

  const handleEntregaVoluntariaClick = () => {
    setShowContent('entregaVoluntaria');  
  };

  const handleEntregaVoluntaria2Click = () => {
    setShowContent('entregaVoluntaria-2');  
  };

  const handleActoVentaClick = () => {
    setShowContent('actoVenta');  
  };

  const handleCartaRutaClick = () => {
    setShowContent('cartaRuta');  
  };

  const handlePagareEjecutivo1Click = () => {
    setShowContent('pagareEjecutivo1');  
  };

  const handlePagareEjecutivo2Click = () => {
    setShowContent('pagareEjecutivo2');  
  };

  const handleRecargoClick = () => {
    setShowContent('recargo');  
  };

  const handleDespachoClick = () => {
    setShowContent('despacho');  
  };

  const handleSolicitudClick = () => {
    setShowContent('solicitudPrestamo');  
  };
  
  return(
    <div>
      <header>
        <Header
        handleHomeClick={handleHomeClick}
        handleMyBodyClick={handleMyBodyClick}
        handleEntregaVoluntariaClick={handleEntregaVoluntariaClick}
        handleEntregaVoluntaria2Click={handleEntregaVoluntaria2Click}
        handleActoVentaClick={handleActoVentaClick}
        handleCartaRutaClick={handleCartaRutaClick}
        handlePagareEjecutivo1Click={handlePagareEjecutivo1Click}
        handlePagareEjecutivo2Click={handlePagareEjecutivo2Click}
        handleRecargoClick={handleRecargoClick}
        handleDespachoClick={handleDespachoClick}
        handleSolicitudClick={handleSolicitudClick}
        />
      </header>
      <main>
        <CamposDinamicos showContent={showContent} 
        
         />
      </main>
    </div>
  )
}

export default App
