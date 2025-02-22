import '../css/actoMotocicleta.css'

const ActoMotocicletas = ({texts}) => {
    return(
        <div>
            <div>
            <div className='papa top '>
            <section className='primera bajar'>        

               <h3 className='titulo-2 acto'> ACTO DE VENTA BAJO FIRMA PRIVADA.</h3>
               <p className='venta'>
                 <span>ENTRE:</span> una parte el Señor(a) <span>{texts.vendedor}</span> dominicano(a), mayor de edad, soltero(a), portador de la cedula de identidad y 
                 electoral No.<span>{texts.cedula}</span>, con domicilio y residencia en el sector <span className='nada'>{texts.sector}</span>, calle <span>{texts.calle}</span> casa <span>{texts.casa}</span> <span>{texts.municipioprovincia}</span>, quien en lo que sigue del presente acto se denominará <span>EL COMPRADOR</span>; 
               </p>
               <p className='venta'>
                 <span>Y DE LA OTRA PARTE:</span> la compañía <span>FINAUTO FPG LA MAYOR DEL ESTE, SRL;</span> RNC-132-08635-1, ubicada en la calle Isidro Barro, 
                 No.19, Barrio Libertad, Municipio de Consuelo, provincia San Pedro de Macorís, debidamente representada por  el Señor 
                 <span> LEONARDO SANCHEZ MERCEDES</span>, dominicano, mayor de edad, soltero, portador de la cédula de identidad y electoral No.<span>023-0040271-2</span>, 
                 domiciliado y residente en la calle Isidro Barro, No.19, Barrio Libertad, Municipio de Consuelo, provincia San Pedro de Macorís, 
                 quien en lo que sigue del presente acto se denominará <span>EL VENDEDOR</span>. 
               </p>

               <p className='titulo-3 venta'>
                 SE HA CONVENIDO Y PACTADO LO SIGUIENTE:
               </p>


               <p className='venta'>
               <span>PRIMERO: EL VENDEDOR</span>, por medio del presente acto, VENDE, CEDE Y TRANSFIERE, con todas las garantías de derecho al COMPRADOR, quien acepta conforme el 
               siguiente vehículo que se describe a continuación:
               </p>

               <div className='actomoto'>
                  <div>MODELO: {texts.modelo}</div> 
                  <div>CHASIS: {texts.chasis}</div>
                  <div>AÑO: {texts.año}</div>
                  <div>COLOR: {texts.color}</div>
               </div>

              <p className='venta'>
                <span>SEGUNDO:</span> La presente venta ha sido convenida por el precio de {texts.precio}, moneda de curso legal que 
                <span> EL VENDEDOR</span>, asegura haber recibido de manos del COMPRADOR, por lo que por medio de este mismo acto le entrega recibo formal de descargo y finiquito. . 
              </p>

              <p className='venta'>
                <span>TERCERO: EL COMPRADOR,</span> justifica su derecho de propiedad mediante la posesión del vehículo, matrícula original, para todos los casos no 
                previstos en el presente acto, las partes se remiten a las prescripciones del derecho común y eligen domicilio en los lugares indicados al inicio 
                del presente Acto.
              </p>

              <p className='venta'>
                <span>CUARTO:</span> Para todos los casos no previstos en el presente contrato las partes se remiten a las reglas de derecho común, y efectúan formar 
                elección de domicilio en sus respectivos domicilios más arriba indicados.
              </p>

         </section>

         <section className='segunda'>

               <p className='venta'>
                 Hecho en un (02) original, en la Ciudad, Municipio y Provincia de San Pedro de Macorís, República Dominicana. A los ({texts.dia}) días del mes de {texts.mes} del año {texts.añoletra} ({texts.añonumero}).
               </p>

               <p className='titulo-4 venta'>
________________________________________________
                 <span>{texts.vendedor} </span>
                  El COMPRADOR.

                </p>

                <p className='titulo-4 venta'>
______________________________________
                  <span>FINAUTO FPG LA MAYOR DEL ESTE, SRL </span>
                   Representada por
                  <span> LEONARDO SANCHEZ MERCEDES </span>
                   Vendedor

                </p>

                <p className='titulo-2 venta'>
                   “LEGALIZACIÓN NOTARIAL”
                </p>

                <p className='venta'>
                  <span>YO, Dr. Fernando Elpidio Álvarez Alfonso</span>, Abogado Notario Público de los del Número para este Municipio de San Pedro de Macorís, inscrito en el Colegio de 
                  Notario Público con el No.6456, <span>CERTIFICO Y DOY FE</span>, que las firmas que anteceden fueron puestas en mi presencia Libre y voluntariamente por señores, 
                  <span> {texts.vendedor}</span>, (EL COMPRADOR) Y LA <span>COMPAÑIA FINAUTO FPG LA MAYOR DEL ESTE, SRL</span>; RNC-132-08635-1, REPRESENTADA POR EL SEÑOR <span>LEONARDO SANCHEZ MERCEDES </span> 
                  (EL VENDEDOR), quienes me manifestaron que esas son las firmas que ellos acostumbran utilizar en todos los actos de sus vidas tanto públicas como privadas 
                   por lo que las mismas merecen entero crédito y fe. En la Ciudad, Municipio y Provincia de San Pedro de Macorís, República Dominicana.  A los ({texts.dia}) días del mes 
                   de {texts.mes} del año {texts.añoletra} ({texts.añonumero}).
                </p>

                <p className='titulo-4 venta'>
__________________________________________
                  <span>Dr. Fernando Elpidio Álvarez Alfonso</span> 
                   Abogado Notario Público. -

                </p>

                   </section>
            </div>
            </div>
        </div>
    )
}

export default ActoMotocicletas