import '../css/cartaRuta.css'

const CartaRuta = ({texts}) => {
    return(
        <div>
            <div className='papa-2'>
                <img className="img-fina" src="./finautoDanny.jpg" alt="finauto"></img>
                <p className='fecha'>{texts.fecharuta}</p>
                <p className='interesar'>A QUIEN PUEDA INTERESAR</p>
                <section className='carta-info'>
                    <p>
                    Por Medio  de la Presente <span>EL SEÑOR(A) {texts.vendedor} DOMINICANO(A), MAYOR DE EDAD, SOLTERO(A), PORTADOR DE LA CEDULA DE IDENTIDAD 
                    Y ELECTORAL NO.{texts.cedula}, CON DOMICILIO Y RESIDENCIA EN EL SECTOR {texts.sector}, CALLE {texts.calle} CASA {texts.casa}, CONSUELO  CIUDAD DE SAN PEDRO 
                    DE MACORIS, ha adquirido de la Compañía FINAUTO LA MAYOR DEL ESTE, LA MOTOCICLETA</span> la cual se describe a   Continuación:
                    </p>
                    <div className='moto-info'>
                      <p>MODELO: {texts.modelo}</p>
                      <p>COLOR: {texts.color}</p>
                      <p>CHASIS: {texts.chasis}</p>
                    </div>

                    <p>
                    Dicha Carta es para pedir a las autoridades  de la Policía Nacional, fiscalía de Plan Piloto y la Autoridad Metropolitana de 
                    Transporte (AMET), permitir transitar libremente a este ciudadano, y a la vez notificamos que se están tramitando asuntos correspondientes 
                    a placa y Matricula.
                    </p>

                    <p>
                    Toda venta a crédito está sujeta a las condiciones establecidas por la ley No.483, del 9 de Noviembre de 1964, sobre venta Condicional de 
                    muebles, que establece que así adquiere un mueble, no es propietario del mismo, hasta tanto, no es pagado en su totalidad, así mismo esta 
                    ley nos da la opción de perseguir el pago de las obligaciones y la indicación del mueble y castigo con la pena de abuso de confianza, la 
                    defraudación del comprador.
                    </p>

                    <p>
                    Nota: LAS MOTOCICLETAS Incautados tienen 10 días de plazo, más lo recargos generados por incumplimiento del contrato, y este documento no 
                    avala saldo de alguna deuda existente, para más información de este vehículo, contactar a  la Compañía FINAUTO LA MAYOR DEL ESTE.
                    </p>

                    <p className='despide'>Se despide:</p>



                    <p className='departamento'>
                    ___________________________________________________
                                  <span>Departamento de Venta</span>

                    </p>
                     
                </section>

            </div>
        </div>
    )
}

export default CartaRuta