import '../css/recargo.css'

const Recargo = ({texts}) => {
    return(
        <div>
            <div className="recargo">
                <h3 className='descargo'>DESCARGO DE RESPONSABILIDAD CIVIL Y/O PENAL</h3>
                <p className='prime'>
                  YO, <span>{texts.vendedor}</span>, dominicano(a), mayor de edad, Titular de la Cedula de Identidad y 
                  Elector No. {texts.cedula}, Por si y por <span>FINAUTO FPG LA MAYOR DEL ESTE SRL</span>, en calidad de 
                  gerente, titular de RCN Núm. 132-08635-1, con domicilio social en CARRETERA MELLA NO.70, 
                  CONSUELO, SAN PEDRO DE MACORIS, República Dominicana. HAGO CONSTAR y DECLARO libre y 
                  voluntariamente lo siguiente:
                </p>
                <p className='prime'>
                PRIMERO: Que en fecha {texts.dia} días del mes de {texts.mes} del año {texts.añonumero}, he adquirido conforme y a mi entera 
                satisfacción, mediante compra realizada a la sociedad comercial FINAUTO LA MAYOR DEL ESTE., titular 
                del RNC No. 132-08635-1, con domicilio en la CARRETERA MELLA, ENTRADA DE CONSUELO, SAN PEDRO DE MACORIS 
                de la República Dominicana, los vehículos de motor descritos a continuación:
                </p>

                <p className='prime'><span>Marca:</span> {texts.modelo}</p>
                <p className='prime'><span>Año:</span> {texts.año}</p>
                <p className='prime'><span>Color:</span> {texts.color}</p>
                <p className='prime'><span>Chasis No.</span> {texts.chasis}</p>

                <p className='prime'>
                SEGUNDO: Que hasta tanto se haga el traspaso de la matricula a mi nombre, asumo TOTAL responsabilidad de 
                cualquier daño material o moral que pudiera ocasionar la conducción o uso del vehículo descrito precedentemente 
                a mi persona, a terceros y a otros vehículos o propiedades, sean estos muebles o inmuebles, por lo que DESCARGO, 
                eximo y me obligo a mantener indemne a la sociedad comercial FINAUTO LA MAYOR DEL ESTE de cualquier reclamo, acción 
                o demanda en responsabilidad civil, penal, de tránsito o de cualquier índole.
                </p>

                <p className='prime'>
                Dado en la ciudad de san pedro de macoris, municipio de consuelo, República Dominicana, a los {texts.dia} días del mes de {texts.mes} del año {texts.añonumero}.
                </p>

                <p  className="titulo-4 prime">
                ________________________________
                    <span>{texts.vendedor}</span>

                </p>

                <p className='prime'>
                YO, Dr. Ramón Augusto Gómez Mejia, Abogado-Notario Público de los del Número del Distrito Nacional, miembro activo del 
                Colegio Dominicano de Notarios, INC., matriculado bajo el número (2920) CERTIFICO Y DOY FE: Que la firma que antecede del 
                señor LEONARDO SANCHEZ MERCEDES, de generales que constan, fueron puestas en mi presencia libre y voluntariamente por el firmante, 
                quien me ha declarado que es la misma que acostumbra a usar en todos los actos de su vida pública y privada. En la ciudad de Santo 
                Domingo de Guzmán, Distrito Nacional, Capital de la República Dominicana, a los {texts.dia} días del mes de {texts.mes} del año {texts.añonumero}.
                </p>

                <p className="titulo-4 prime">
                ________________________________
                 <span>Notario Público</span>

                </p>

            </div>
        </div>
    )
}

export default Recargo