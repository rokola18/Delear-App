import React, {useState} from 'react';
import Header from './componentes/header'
import './css/App.css'
import CamposDinamicos from './componentes/camposdinamicos';

function App () {

  const [showContent, setShowContent] = useState('home');

  const handleHomeClick = () => {
    setShowContent('home'); 
  };

  const handleActoMotocicletasClick = () => {
    setShowContent('actoMotocicletas'); 
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

  const handleDespachoCarClick = () => {
    setShowContent('despachocar');  
  };

  const handleSolicitudClick = () => {
    setShowContent('solicitudPrestamo');  
  };

/*PARA LAS MUJERES */

const handleActoVentamClick = () => {
  setShowContent('actoventam');  
};

const handleActoVentam1Click = () => {
  setShowContent('actoventa1m');  
};

const handleActoVentam2Click = () => {
  setShowContent('actoventa2m');  
};

const handleCartaRutamClick = () => {
  setShowContent('cartarutam');  
};

const handleEntregaVoluntariaMClick = () => {
  setShowContent('entregavoluntariam');  
};

const handleEntregaVoluntariaM2Click = () => {
  setShowContent('entregavoluntariam2');  
};

const handlePagareEjecutivoM1Click = () => {
  setShowContent('pagareejecutivom');  
};

const handlePagareEjecutivoM2Click = () => {
  setShowContent('pagareejecutivom2');  
};

const handleDescargoClick = () => {
  setShowContent('descargom')
}

const handleDespachomClick = () => {
  setShowContent('despachom')
}

const handleDespachoCarmClick = () => {
  setShowContent('despachocarm')
}

  
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
        handleDespachoCarClick={handleDespachoCarClick}
        handleSolicitudClick={handleSolicitudClick}
        handleActoMotocicletasClick={handleActoMotocicletasClick}
        /*PARA LAS MUJERES */
        handleActoVentamClick={handleActoVentamClick}
        handleActoVentam1Click={handleActoVentam1Click}
        handleActoVentam2Click={handleActoVentam2Click}
        handleCartaRutamClick={handleCartaRutamClick}
        handleEntregaVoluntariaMClick={handleEntregaVoluntariaMClick}
        handleEntregaVoluntariaM2Click={handleEntregaVoluntariaM2Click}
        handlePagareEjecutivoM1Click={handlePagareEjecutivoM1Click}
        handlePagareEjecutivoM2Click={handlePagareEjecutivoM2Click}
        handleDescargoClick={handleDescargoClick}
        handleDespachomClick={handleDespachomClick}
        handleDespachoCarmClick={handleDespachoCarmClick}
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
