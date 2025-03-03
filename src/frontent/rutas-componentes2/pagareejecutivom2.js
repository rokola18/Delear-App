

const PagareEjecutivom2 = ({texts}) => {
    return(
        <div>
            <div className="ejecutivo">
            <h3>PAGARE EJECUTIVO</h3>
            
            <p>
                    Acto No.  _____________, Folio No.______________; En la ciudad, Municipio y Provincia de San Pedro de Macorís, República Dominicana, a los ({texts.dia}) días del mes de {texts.mes} del Año {texts.añoletra} ({texts.añonumero}); Por ante mí, <span>Dr. Ramón Augusto Gómez Mejía</span>, abogado Notario Público, Inscrito en el Colegio de Notarios Públicos con la Matricula 
                    Numero No.6300, para el municipio de San Pedro de Macorís con estudio profesional abierto de manera permanente  en esta ciudad de San Pedro de Macorís, en C/Enríquez 
                    a Valdez #59 Placer Bonito, de esta ciudad de San Pedro de Macorís; Encontrándome en mi despacho y en el regular ejercicio de mis funciones, HA COMPARECIDO LIBRE Y 
                    VOLUNTARIAMENTE, El/la Señor(a), <span>{texts.garante}</span> dominicano(a), mayor de edad, soltero(a), portador(a) de la cedula de identidad y electoral No.{texts.garantecedula}, con domicilio y 
                    residencia en el sector {texts.sectorgarante}, calle {texts.callegarante} casa {texts.casagarante}, {texts.municipioprovinciagarante}, quien bajo la fe del juramento me ha declarado lo siguiente: <span>PRIMERO:</span> Que reconoce 
                    por medio del presente acto ser <span>DEUDOR</span>, del Señor <span>LUIS ACTA MERCEDES</span>, dominicano, mayor de edad, soltero, portador de la cédula de identidad y electoral No. 023-0045609-8, 
                    domiciliado y residente en el municipio de Consuelo, San Pedro de Macorís, República Dominicana, por la suma de {texts.precioinicialletra}, <span>(RD${texts.precioinicialnumero})</span>, moneda de curso legal, de 
                    los cuales se compromete a pagar el valor de un  {texts.porcientoletras} ({texts.porcientonumeros}%) de interes mensual, por {texts.cantidadmeses}, interes que suma la cantidad de {texts.preciointeres} (RD${texts.preciointeresnumero}), 
                    por concepto de intereses convencional generados mensualmente, hasta concluir el tiempo pactadado de {texts.cantidadmeses}, iniciando del dia {texts.fechadeinicioenletras}, {texts.fechadeinicioennumeros}, 
                    y Termina el dia {texts.terminopagareenletras}, {texts.terminopagareennumeros}, de acuerdo a las convenciones establecida entre las partes y en consecuencia, el <span>DEUDOR</span>, 
                    reconoce la obligacion, compromiso y responsabilidad que adquiere frente al <span>ACREEDOR</span> a travez del presente acto de entregar en sus manos inmediatamente le sean requeridos los 
                    valores recicbidos al momento de la firma de este acto. <span>SEGUNDO: EL DEUDOR</span>, se compromete a darle fiel y formal cumplimiento a todo lo estipulado en el presente acto, iniciando 
                    el pago de los intereces el dia {texts.fechadeinicioenletras} y terminando el dia {texts.terminopagareenletras}, en donde entrega la ultima cuota de interes mas el capital, y a falta 
                    de pago de dos mensualidades consecutivas o indistitas se exigira el pago total de los intereces y el capital. <span>TERCERO: EL DEUDOR</span>, pone en garantia todos sus bienes, muebles e inmuebles, 
                    presente y futuro, reconociendo que el presente acto es un Pagare Ejecutivo Notarial y que el mismo posee la fuerza ejecutoria de una sentencia en virtud de lo que establece el Art. 
                    545, del Código de Procedimiento Civil Dominicano, y por el mismo acto las partes renuncian al fuero judicial y cualquier otra ley en cuestion y le otorgan competencia a la Cámara Civil 
                    y Comercial del Juzgado de Primera Instancia del Distrito Judicial de San Pedro de Macorís. Todo esto en presencia de los testigos señores, <span>ANGEL SIMON MERCEDES</span>, dominicano, mayor de edad, 
                    portador de la cédula de identidad y electoral No. 138-0002940-0, domiciliado y residente en esta ciudad de San Pedro de Macorís y <span>RAMON JOSE REYES VALOY</span>, dominicano, mayor de edad, soltero, portador 
                    de la cedula de identidad y electoral No. 138-0007055-2, domiciliado y residente en esta ciudad de San Pedro de Macorís, respectivamente, Testigos Instrumentales del presente acto elegidos 
                    al efecto libres de tachas y excepciones exigidas por la ley. El presente acto ha sido hecho y pasado en mi estudio el dia, mes y año indicado precedentemente, acto este que he leido integramente 
                    y en alta voz a los comparecientes e invitados a leerlo por si mismo, y asi lo han hecho, quienes en señal  de aprobacion han procedido a firmarlo al final del presente acto, conmigo y junto a mi, 
                    de todo lo cual <span>CERTIFICO Y DOY FE.-</span>   
                </p>

                <p className='titulo-4'>
                    _____________________________________
                      <span>{texts.garante}</span>
                                    Deudor

                </p>

                <p className='titulo-4'>
                _______________________________________
                   <span>LUIS ACTA MERCEDES</span>
                             Acreedor

                </p>

                <p className='titulo-4'>

                     ___________________________
                   <span>ANGEL SIMON MERCEDES</span>
                              Testigo


                </p>

                <p className='titulo-4'>
                    ____________________________
                    <span>RAMON JOSE REYES VALOY</span>
                         Testigo

                </p>
                <p className='titulo-4'>
                ___________________________________________
                <span>Dr. RAMON AUGUSTO GOMEZ MEJIA</span>
               <p className='notario'>Notario Público.</p>

                </p>
            </div>
        </div>
    )
}

export default PagareEjecutivom2