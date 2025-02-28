import '../css/despacho.css'

const Despacho = ({texts}) => {

    return(
        <div>
            <div className='despacho'>
                <h3 className='tema'>DESPACHO <span>FINAUTO LA MAYOR DEL ESTE</span></h3>
                <p className='fecha dos'>{texts.fechadespacho}</p>
                <p className='señor'>Señor(a)<span>{texts.vendedor}</span></p>
                <p className='info'>
                  A través de la presente hacemos formal entrega de la {texts.tipo}: <span>{texts.modelo}</span>, CHASIS: <span>{texts.chasis}</span>, 
                  AÑO: <span>{texts.año}</span>, COLOR: <span>{texts.color}</span>, al Señor(a) <span>{texts.vendedor}</span> portador de la cedula de identidad y electoral 
                  No. <span>{texts.cedula}</span>, deseamos informarle que la referida {texts.tipo} fue entregada por concepto de venta, por 
                  lo que FINAUTO LA MAYOR DEL ESTE entidad comercial debidamente representada por LEONARDO SANCHEZ MERCEDES, 
                  queda liberado de cualquier daño futuro que pueda presentar la {texts.tipo}.
                </p>
                <p className='info'>
                  Indicamos que la {texts.tipo} señalada ha sido revisada y entregada en excelente condiciones.
                  Agradeciendo la atención prestada, se despide, Atentamente,
                </p>
                <p className='leonardo'>
                    <span>FINAUTO LA MAYOR DEL ESTE</span> 
                    <span>LEONARDO SANCHEZ MERCEDES</span>
                </p>

                <p className='raya'>
                ______________________________________
                  <span>{texts.vendedor}</span> 

                </p>

                <p className='notorial info'>
                    Recibida conforme
                  <p className='notorial'>LEGALIZACION NOTARIAL</p>
                </p>

                <p className='info'>
                Yo, DR <span>Ramón Augusto Gómez Mejia</span>, Abogado Notario Público de los del Número para el Municipio 
                de San Pedro de Macorís, República Dominicana, <span>CERTIFICO y DOY FE</span>, que las firmas que anteceden 
                CORRESPONDEN a los SRES(AS), e FINAUTO LA MAYOR DEL ESTE, cuyas generales constan, por las mismas 
                merecen entera fe y crédito.
                </p>

                <p className='info'>
                    Dado en la ciudad de San Pedro de Macorís , República Dominicana, a los {texts.dialetra} ({texts.dia}) día(s) del mes de {texts.mes} del año {texts.añoletra} ({texts.añonumero}).
                </p>
            </div>
        </div>
    )

}

export default Despacho