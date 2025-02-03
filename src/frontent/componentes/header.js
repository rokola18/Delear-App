import React, {useState, useEffect, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/header.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = ({handleHomeClick,handleMyBodyClick, handleEntregaVoluntariaClick, handleActoVentaClick, 
                 handleEntregaVoluntaria2Click, handleCartaRutaClick, handlePagareEjecutivo1Click,
                 handlePagareEjecutivo2Click, handleRecargoClick, handleDespachoClick, handleSolicitudClick,
                 
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
                  <div onClick={handleMyBodyClick}>ACTO DE VENTA BAJO FIRMA PRIVADA 1</div>
                  <div onClick={handleActoVentaClick}>ACTO DE VENTA BAJO FIRMA PRIVADA 2</div>
                  <div onClick={handleEntregaVoluntariaClick}>ENTREGA VOLUNTARIA 1</div>
                  <div onClick={handleEntregaVoluntaria2Click}>ENTREGA VOLUNTARIA 2</div>
                  <div onClick={handleCartaRutaClick}>CARTA DE RUTA</div>
                  <div onClick={handlePagareEjecutivo1Click}>PAGARE EJECUTIVO 1</div>
                  <div onClick={handlePagareEjecutivo2Click}>PAGARE EJECUTIVO 2</div>
                  <div onClick={handleRecargoClick}>RECARGO</div>
                  <div onClick={handleDespachoClick}>DESPACHO</div>
                  <div onClick={handleSolicitudClick}>SOLICITUD DE PRESTAMO</div>
                </div>
              </div>
            )}
            </div>
        </div>
    )
}

export default Header