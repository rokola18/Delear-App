import React, {useState} from 'react';
import '../css/body.css'
import EntregaVoluntaria from '../rutas-componentes/entregaVoluntaria';
import { initialTexts } from './inicialText';
import ActoVenta from '../rutas-componentes/actoVenta';
import EntregaVoluntaria2 from '../rutas-componentes/entregaVoluntaria-2';
import CartaRuta from '../rutas-componentes/cartaRuta';
import PagareEjecutivo1 from '../rutas-componentes/pagareEjecutivo1';
import PagareEjecutivo2 from '../rutas-componentes/pagareEjecutivo2';
import Recargo from '../rutas-componentes/recargo';
import Despacho from '../rutas-componentes/despacho';
import SolicitudPrestamo from '../rutas-componentes/solicitudPrestamo';

const MyBody = ({showContent}) => {

   const [texts, setTexts] = useState(initialTexts);

    const handleTextChange = (key, value) => {
      setTexts((prevTexts) => ({
        ...prevTexts,
        [key]: value,
      }));
    };

    return(
        <div>
          <div className='papa'>
          
         {showContent === 'home' && (
           <>

            <section className='primera'>        

            <h1 className='titulo-2 acto'> ACTO DE VENTA BAJO FIRMA PRIVADA.</h1>
            <p className='venta'>
               <span>ENTRE:</span> una parte el señor <span>{texts.vendedor}</span> dominicano, mayor de edad, soltero, portador de la cedula de identidad y 
               electoral No.<span>{texts.cedula}</span>, con domicilio y residencia en el sector <span className='nada'>{texts.sector}</span>, calle <span>{texts.calle}</span> casa <span>{texts.casa}</span> <span>{texts.municipioProvincia}</span>, quien en lo que sigue del presente acto se denominará <span>EL VENDEDOR</span>; 
            </p>
            <p className='venta'>
               <span>Y DE LA OTRA PARTE:</span> la compañía <span>FINAUTO FPG LA MAYOR DEL ESTE, SRL;</span> RNC-132-08635-1, ubicada en la calle Isidro Barro, 
               No.19, Barrio Libertad, Municipio de Consuelo, provincia San Pedro de Macorís, debidamente representada por  el Señor 
               <span> LEONARDO SANCHEZ MERCEDES</span>, dominicano, mayor de edad, soltero, portador de la cédula de identidad y electoral No.<span>023-0040271-2</span>, 
               domiciliado y residente en la calle Isidro Barro, No.19, Barrio Libertad, Municipio de Consuelo, provincia San Pedro de Macorís, 
               quien en lo que sigue del presente acto se denominará <span>EL COMPRADOR</span>. 
            </p>

            <p className='titulo-3 venta'>
               SE HA CONVENIDO Y PACTADO LO SIGUIENTE:
            </p>


            <p className='venta'>
            <span>PRIMERO:</span> Que la primera parte,  <span>{texts.vendedor}</span>, por medio del presente acto, VENDE, CEDE Y TRANSFIERE, con todas las garantías de derecho, 
            desde ahora y para siempre, a favor del COMPRADOR(A) SR(A) LEONARDO SANCHEZ MERCEDES, quien acepta conforme el siguiente  VEHICULO que se 
            describe a continuación:
            </p>

            <span className='venta'>
            EL VEHICULO IDENTIFICAD0 COMO MODELO: {texts.modelo}, CHASIS:{texts.chasis}, AÑO: {texts.año}, COLOR: {texts.color}. UBICADO EN EL MUNICIPIO DE CONSUELO, 
            PROVINCIA DE SAN PEDRO DE MACORIS. 
            </span>

            <p className='venta'>
            <span>SEGUNDO:</span> La presente venta ha sido convenida y pactada por el precio de {texts.precio}, moneda de curso legal que 
            <span> EL VENDEDOR</span>, asegura haber recibido de manos del COMPRADOR, de una forma satisfactoria y conforme, quien acepta y recibe conforme el vehículo 
            que se describió procedentemente, otorgándole a la parte VENDEDORA formal descargo y finiquito legar de la pre-indicada suma de dinero en este 
            mismo acto a favor del COMPRADOR. 
            </p>

            <p className='venta'>
            <span>TERCERO:</span> La parte VENDEDORA justifica su derecho de propiedad mediante la posesión del vehículo, matrícula original, para todos los casos no 
            previstos en el presente acto, las partes se remiten a las prescripciones del derecho común y eligen domicilio en los lugares indicado al inicio 
            del presente Acto de Venta.
            </p>

            <p className='venta'>
            <span>CUARTO:</span> Que <span>El VENDEDOR</span>, se hará responsable ante cualquier Litis, arbitrio o cualquier situación judicial que pueda tener el inmueble descrito 
            anteriormente durante el proceso de transferencia. 
            </p>

            </section>

            <section className='segunda'>

            <p className='venta'>
             Hecho en un (02) original, en la Ciudad, Municipio y Provincia de San Pedro de Macorís, República Dominicana. A los ({texts.dia}) días del Mes de {texts.mes} del año {texts.añoletra} ({texts.añonumero}).
            </p>

            <p className='titulo-4 venta'>
            ________________________________________________
                          <span>{texts.vendedor} </span>
                            El Vendedor.

            </p>

            <p className='titulo-4 venta'>
            ______________________________________
              <span>FINAUTO FPG LA MAYOR DEL ESTE, SRL </span>
                    Representada por
               <span> LEONARDO SANCHEZ MERCEDES </span>
                       Comprador

            </p>

            <p className='titulo-2 venta'>
            “LEGALIZACIÓN NOTARIAL”
            </p>

            <p className='venta'>
            <span>YO, Dr. Ramón Augusto Gómez Mejia</span>, Abogado Notario Público de los del Número para este Municipio de San Pedro de Macorís, inscrito en el Colegio de 
            Notario Público con el No.6300, <span>CERTIFICO Y DOY FE</span>, que las firmas que anteceden fueron puestas en mi presencia Libre y voluntariamente por señores, 
            <span> {texts.vendedor}</span>, (EL VENDEDOR) Y LA <span>COMPAÑIA FINAUTO FPG LA MAYOR DEL ESTE, SRL</span>; RNC-132-08635-1, REPRESENTADA POR EL SEÑOR <span>LEONARDO SANCHEZ MERCEDES </span> 
            (EL COMPRADOR), quienes me manifestaron que esas son las firmas que ellos acostumbran utilizar en todos los actos de sus vidas tanto públicas como privadas 
            por lo que las mismas merecen entero crédito y fe. En la Ciudad, Municipio y Provincia de San Pedro de Macorís, República Dominicana.  A los ({texts.dia}) días del mes 
            de {texts.mes} del año {texts.añoletra} ({texts.añonumero}).
            </p>

            <p className='titulo-4 venta'>
            __________________________________________
         <span>Dr. Ramón Augusto Gómez Mejia</span> 
                   Abogado Notario Público. -

            </p>

  </section>


  <section className='tercera'>

     <div>
        <h4 className='titulo-3 dinamico'>Editar textos dinámicos</h4>

   <div className='etiquetas'>
      <div>
        <label>
          Comprador:{" "}
          <input
            value={texts.vendedor}
            onChange={(e) => handleTextChange("vendedor", e.target.value)}
          />
        </label>

        <label>
          Cedula:{" "}
          <input
            value={texts.cedula}
            onChange={(e) => handleTextChange("cedula", e.target.value)}
          />
        </label>

        <label>
          Sector:{" "}
          <input
            value={texts.sector}
            onChange={(e) => handleTextChange("sector", e.target.value)}
          />
        </label>

        </div>

        <div>

        <label>
          Calle:{" "}
          <input
            value={texts.calle}
            onChange={(e) => handleTextChange("calle", e.target.value)}
          />
        </label>

        <label>
          Casa:{" "}
          <input
            value={texts.casa}
            onChange={(e) => handleTextChange("casa", e.target.value)}
          />
        </label>

        <label>
          Municipio y Provinvia:{" "}
          <input
            value={texts.municipioProvincia}
            onChange={(e) => handleTextChange("municipio y provinvia", e.target.value)}
          />
        </label>

        </div>

        <div>

        <label>
          Modelo y Marca:{" "}
          <input
            value={texts.modelo}
            onChange={(e) => handleTextChange("modelo", e.target.value)}
          />
        </label>
        <label>
          Chasis:{" "}
          <input
            value={texts.chasis}
            onChange={(e) => handleTextChange("chasis", e.target.value)}
          />
        </label>
        <label>
          Año del vehiculo:{" "}
          <input
            value={texts.año}
            onChange={(e) => handleTextChange("año", e.target.value)}
          />
          </label>
         </div>

         <div>

        <label>
          Color:{" "}
          <input
            value={texts.color}
            onChange={(e) => handleTextChange("color", e.target.value)}
          />
        </label>
        <label>
          Precio:{" "}
          <input
            value={texts.precio}
            onChange={(e) => handleTextChange("precio", e.target.value)}
          />
        </label>
        <label>
          Dia actual:{" "}
          <input
            value={texts.dia}
            onChange={(e) => handleTextChange("dia", e.target.value)}
          />
          </label>
         </div>

         <div>

        <label>
          Mes actual:{" "}
          <input
            value={texts.mes}
            onChange={(e) => handleTextChange("mes", e.target.value)}
          />
        </label>

        <label>
          Año en letras actual:{" "}
          <input
            value={texts.añoletra}
            onChange={(e) => handleTextChange("añoletra", e.target.value)}
          />
        </label>

        <label>
          Año en numeros actual:{" "}
          <input
            value={texts.añonumero}
            onChange={(e) => handleTextChange("añonumero", e.target.value)}
          />
          </label>

        </div>

        <div>

          <label>
          Garante:{" "}
          <input
            value={texts.garante}
            onChange={(e) => handleTextChange("garante", e.target.value)}
          />
          </label>

          <label>
          Cedula del garante:{" "}
          <input
            value={texts.garantecedula}
            onChange={(e) => handleTextChange("garantecedula", e.target.value)}
          />
          </label>

          <label>
          Sector del garante:{" "}
          <input
            value={texts.sectorgarante}
            onChange={(e) => handleTextChange("sectorgarante", e.target.value)}
          />
          </label>

          </div>

          <div>

          <label>
          Calle del garante:{" "}
          <input
            value={texts.callegarante}
            onChange={(e) => handleTextChange("callegarante", e.target.value)}
          />
          </label>

          <label>
          Casa del garante:{" "}
          <input
            value={texts.casagarante}
            onChange={(e) => handleTextChange("casagarante", e.target.value)}
          />
          </label>

          <label>
          Fecha de la ruta:{" "}
          <input
            value={texts.fecharuta}
            onChange={(e) => handleTextChange("fecharuta", e.target.value)}
          />
          </label>

          </div>

          <div>

          <label>
          Precio menos el inicial en letra:{" "}
          <input
            value={texts.precioinicialletra}
            onChange={(e) => handleTextChange("precioinicialletra", e.target.value)}
          />
          </label>

          <label>
          Precio menos el inicial en numeros:{" "}
          <input
            value={texts.precioinicialnumero}
            onChange={(e) => handleTextChange("precioinicialnumero", e.target.value)}
          />
          </label>

          <label>
          Por ciento en letras:{" "}
          <input
            value={texts.porcientoletras}
            onChange={(e) => handleTextChange("porcientoletras", e.target.value)}
          />
          </label>

          </div>

          <div>

          <label>
          Por ciento en numeros:{" "}
          <input
            value={texts.porcientonumeros}
            onChange={(e) => handleTextChange("porcientonumeros", e.target.value)}
          />
          </label>

          <label>
          Cantidad de meses:{" "}
          <input
            value={texts.cantidadmeses}
            onChange={(e) => handleTextChange("cantidadmeses", e.target.value)}
          />
          </label>

          <label>
           Costo del interes en letras:{" "}
          <input
            value={texts.preciointeres}
            onChange={(e) => handleTextChange("preciointeres", e.target.value)}
          />
          </label>

          </div>

          <div>

          <label>
           Costo del interes en numeros:{" "}
          <input
            value={texts.preciointeresnumero}
            onChange={(e) => handleTextChange("preciointeresnumero", e.target.value)}
          />
          </label>

          <label>
           Fecha de inicio del pagare en letras:{" "}
          <input
            value={texts.fechadeinicioenletras}
            onChange={(e) => handleTextChange("fechadeinicioenletras", e.target.value)}
          />
          </label>

          <label>
           Fecha de inicio del pagare en numeros:{" "}
          <input
            value={texts.fechadeinicioennumeros}
            onChange={(e) => handleTextChange("fechadeinicioennumeros", e.target.value)}
          />
          </label>

          <label>
           Fecha de termino del pagare en letras:{" "}
          <input
            value={texts.terminopagareenletras}
            onChange={(e) => handleTextChange("terminopagareenletras", e.target.value)}
          />
          </label>

          </div>

          <div>

          <label>
           Fecha de termino del pagare en numeros:{" "}
          <input
            value={texts.terminopagareennumeros}
            onChange={(e) => handleTextChange("terminopagareennumeros", e.target.value)}
          />
          </label>

          <label>
           Fecha actual para el despacho:{" "}
          <input
            value={texts.fechadespacho}
            onChange={(e) => handleTextChange("fechadespacho", e.target.value)}
          />
          </label>

          <label>
           Telefono del comprador:{" "}
          <input
            value={texts.telefonovende}
            onChange={(e) => handleTextChange("telefonovende", e.target.value)}
          />
          </label>

          </div>

          <div>

          <label>
           Ocupacion del comprador:{" "}
          <input
            value={texts.ocupacion}
            onChange={(e) => handleTextChange("ocupacion", e.target.value)}
          />
          </label>

          <label>
           Estado civil del comprador:{" "}
          <input
            value={texts.civil}
            onChange={(e) => handleTextChange("civil", e.target.value)}
          />
          </label>

          <label>
           Salario del comprador:{" "}
          <input
            value={texts.salario}
            onChange={(e) => handleTextChange("salario", e.target.value)}
          />
          </label>

          </div>

          <div>
          <label>
           Parentezco:{" "}
          <input
            value={texts.parentezco}
            onChange={(e) => handleTextChange("parentezco", e.target.value)}
          />
          </label>

          <label>
           Trabajo del garante:{" "}
          <input
            value={texts.trabajo}
            onChange={(e) => handleTextChange("trabajo", e.target.value)}
          />
          </label>

          <label>
           Telefono del garante:{" "}
          <input
            value={texts.telefonogara}
            onChange={(e) => handleTextChange("telefonogara", e.target.value)}
          />
          </label>
          </div>

          <div>
          <label>
           Tipo del vehiculo:{" "}
          <input
            value={texts.tipo}
            onChange={(e) => handleTextChange("tipo", e.target.value)}
          />
          </label>
          </div>

        </div>
      </div>
      </section>

             </>
            )}
           </div>

           {showContent === 'entregaVoluntaria' && <EntregaVoluntaria texts={texts} />}
           {showContent === 'actoVenta' && <ActoVenta texts={texts} />}
           {showContent === 'entregaVoluntaria-2' && <EntregaVoluntaria2 texts={texts} />}
           {showContent === 'cartaRuta' && <CartaRuta texts={texts} />}
           {showContent === 'pagareEjecutivo1' && <PagareEjecutivo1 texts={texts} />}
           {showContent === 'pagareEjecutivo2' && <PagareEjecutivo2 texts={texts} />}
           {showContent === 'recargo' && <Recargo texts={texts} />}
           {showContent === 'despacho' && <Despacho texts={texts} />}
           {showContent === 'solicitudPrestamo' && <SolicitudPrestamo texts={texts} />}

        </div>

    )
    
}
export default MyBody