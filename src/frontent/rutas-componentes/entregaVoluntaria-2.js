
const EntregaVoluntaria2 = ({texts}) => {

    return(
        <div >
            <div className='entrega'>

                <section>
                    <h3>
                        ENTREGA VOLUNTARIA
                    </h3>
                    <p>
                        En el Municipio de Consuelo, Provincia de San Pedro de Macorís, República Dominicana, a los (________________), días del Mes de _______________, del Año Dos Mil
                         __________________, 20___, quienes suscriben los Señores(as) <span>{texts.garante}</span> dominicano(a), mayor de edad, soltero(a), portador de la cedula de identidad y electoral 
                         No.<span>{texts.garantecedula}</span>, con domicilio y residencia en el sector <span>{texts.sectorgarante}</span>, calle <span>{texts.callegarante}</span> casa <span>{texts.casagarante}</span>, {texts.municipioprovincia}, por medio del presente documento formalizamos 
                         la entrega VOLUNTARIA del vehículo de la compañía <span className='texto-medio'>FINAUTO FPG LA MAYOR DEL ESTE, SRL;</span> RNC-132-08635-1, ubicada en la calle  Isidro Barro, No.19, Barrio Libertad, 
                         Municipio de Consuelo, provincia San Pedro de Macorís, debidamente representada por  el Señor <span> LEONARDO SANCHEZ MERCEDES</span>, dominicano, mayor de edad, soltero, portador 
                         de la cédula de identidad y electoral No.<span>023-0040271-2</span>, domiciliado y residente en la calle Isidro Barro, No.19, Barrio Libertad, Municipio de Consuelo, provincia <span>San 
                         Pedro de Macorís</span>, el cual recibe conforme el vehículo que se describe a continuación. MODELO: {texts.modelo}, CHASIS: {texts.chasis}, AÑO: {texts.año}, COLOR: {texts.color}, 
                         SAN PEDRO  DE MACORIS. Queda entendido que la cantidad pagada por mí, después de la realización de dicha venta, queda en provecho de LEONARDO SANCHEZ MERCEDES, en compensación 
                         del uso y deterioro sufrido por EL VEHICULO, mientras estuvo en mi poder, también para resarcir cualquier gasto incurrido a consecuencia de mi retardo y de otros adicionales  
                         (Jurídico, Transporte, etc.). Dicha entrega voluntaria se efectúa por este haberlo adquirido mediante el acto de venta de fecha (    ), del mes (              ) de del año (        ), 
                         legalizado por el <span>Dr. Ramón Augusto Gómez Mejía</span>, abogado Notario Público, Inscrito en el Colegio de Notarios Públicos con la Matricula Numero No.6300, para el municipio de San Pedro de 
                         Macorís con estudio profesional abierto de manera permanente  en esta ciudad de San Pedro de Macorís, en C/Enríquez a Valdez #59 Placer Bonito, de esta ciudad de San Pedro de Macorís.
                    </p>

                    <p className='entrega-2'>
                          _______________________________________________
                                    <span>{texts.garante}</span>
                                   Parte que entrega.

                    </p>

                    <p className='entrega-2'>
                         _____________________________________
                        <span>LEONARDO SANCHEZ MERCEDES.</span>
                              Parte que recibe.

                    </p>
                    <p className='centro'>“LEGALIZACIÓN NOTARIAL”</p>
                    <p>
                       YO, <span>Dr. Ramón Augusto Gómez Mejia</span>, Abogado Notario Público de los del Número para este Municipio de San Pedro de Macorís, 
                       inscrito en el Colegio de Notario Público con el No.6300, <span>CERTIFICO Y DOY FE</span>, que las firmas que anteceden fueron puestas 
                       en mi presencia Libre y  voluntariamente por los Señores(as), <span>{texts.garante}</span> (PARTE QUE ENTREGA) y <span>FINAUTO FPG LA MAYOR 
                       DEL ESTE, SRL</span>, representada por el señor <span>LEONARDO SÁNCHEZ MERCEDES</span> (PARTE QUE RECIBE), quienes me manifestaron que esas son 
                       las firmas que ellos acostumbran utilizar en todos los actos de sus vidas tanto públicas como privadas por lo que las mismas 
                       merecen entero crédito y fe. En el Municipio de Consuelo,  Provincia de San Pedro de Macorís, República Dominicana.  A los (___________) 
                       días del mes de _____________ del año Dos Mil ___________ (202____).
                    </p>
                    <p className='entrega-2'>
                       ______________________________________
                           <span>Dr. Ramón Augusto Gómez Mejia</span>
                                    NOTARIO PÚBLICO

                    </p>
                </section>

            </div>
        </div>
    )
}

export default EntregaVoluntaria2