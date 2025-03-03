import React, {useState, useEffect, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/header.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = ({handleHomeClick,handleMyBodyClick, handleEntregaVoluntariaClick, handleActoVentaClick, 
                 handleEntregaVoluntaria2Click, handleCartaRutaClick, handlePagareEjecutivo1Click,
                 handlePagareEjecutivo2Click, handleRecargoClick, handleDespachoClick, handleSolicitudClick,
                 handleActoMotocicletasClick, 
                 /*para mujeres */
                 handleActoVentamClick, handleActoVentam1Click, handleActoVentam2Click,
                 handleCartaRutamClick, handleEntregaVoluntariaMClick, handleEntregaVoluntariaM2Click,
                 handlePagareEjecutivoM1Click, handlePagareEjecutivoM2Click, handleDescargoClick, handleDespachomClick,
                 handleDespachoCarClick, handleDespachoCarmClick
                }) => {

    const [menuBars, setMenuBars] = useState(false)
    const menuRef = useRef(null)
    const iconRef = useState(null)

    const botonBars = () => {
        setMenuBars(!menuBars)
    }

    const handleClickOusite = (e) => {
        if(menuRef.current && !menuRef.current.contains(e.target)&& 
           !iconRef.current.contains(e.target)){
            setMenuBars(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOusite);
        return () => {
          document.removeEventListener('mousedown', handleClickOusite);
        };
      });

    return(
        <div>
          <div className='position'>
            <div className="titulo">
                <FontAwesomeIcon ref={iconRef} onClick={botonBars} className='iconBars' icon={faBars}></FontAwesomeIcon>
                <h2>Ducumento de ventas</h2>
            </div>
            {menuBars && (
              <div className='munuBars' ref={menuRef}>
                <div className='options'>
                  <div onClick={handleHomeClick}>CAMPOS DINAMICOS</div>
                  <h3 className='hombre'>PARA HOMBRES</h3>
                  <div onClick={handleActoMotocicletasClick}>ACTO DE VENTA BAJO FIRMA PRIVADA</div>
                  <div onClick={handleMyBodyClick}>ACTO DE VENTA BAJO FIRMA PRIVADA 1</div>
                  <div onClick={handleActoVentaClick}>ACTO DE VENTA BAJO FIRMA PRIVADA 2</div>
                  <div onClick={handleEntregaVoluntariaClick}>ENTREGA VOLUNTARIA 1</div>
                  <div onClick={handleEntregaVoluntaria2Click}>ENTREGA VOLUNTARIA 2</div>
                  <div onClick={handleCartaRutaClick}>CARTA DE RUTA</div>
                  <div onClick={handlePagareEjecutivo1Click}>PAGARE EJECUTIVO 1</div>
                  <div onClick={handlePagareEjecutivo2Click}>PAGARE EJECUTIVO 2</div>
                  <div onClick={handleRecargoClick}>DESCARGO</div>
                  <div onClick={handleDespachoClick}>DESPACHO PARA MOTOCICLETAS</div>
                  <div onClick={handleDespachoCarClick}>DESPACHO PARA VEHICULOS</div>
                  <div onClick={handleSolicitudClick}>SOLICITUD DE PRESTAMO</div>
                  <h3 className='hombre'>PARA MUJERES</h3>
                  
                  <div onClick={handleActoVentamClick}>ACTO DE VENTA BAJO FIRMA PRIVADA</div>
                  <div onClick={handleActoVentam1Click}>ACTO DE VENTA BAJO FIRMA PRIVADA 1</div>
                  <div onClick={handleActoVentam2Click}>ACTO DE VENTA BAJO FIRMA PRIVADA 2</div>
                  <div onClick={handleEntregaVoluntariaMClick}>ENTREGA VOLUNTARIA 1</div>
                  <div onClick={handleEntregaVoluntariaM2Click}>ENTREGA VOLUNTARIA 2</div>
                  <div onClick={handleCartaRutamClick}>CARTA DE RUTA</div>
                  <div onClick={handlePagareEjecutivoM1Click}>PAGARE EJECUTIVO 1</div>
                  <div onClick={handlePagareEjecutivoM2Click}>PAGARE EJECUTIVO 2</div>
                  <div onClick={handleDescargoClick}>DESCARGO</div>
                  <div onClick={handleDespachomClick}>DESPACHO PARA MOTOCICLETAS</div>
                  <div onClick={handleDespachoCarmClick}>DESPACHO PARA VEHICULOS</div>
                  <div onClick={handleSolicitudClick}>SOLICITUD DE PRESTAMO</div>
                </div>
              </div>
            )}
            </div>
        </div>
    )
}

export default Header