import React, {useState} from 'react';
import MyBody from './componentes/body'
import Header from './componentes/header'
import './css/App.css'

function App () {

  const [showContent, setShowContent] = useState('home');

  const handleHomeClick = () => {
    setShowContent('home'); 
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
        <MyBody showContent={showContent} 
        
         />
      </main>
    </div>
  )
}

export default App
