import { initialTexts } from './inicialText';
import React, {useState} from 'react';
import '../css/camposdinamicos.css'
import EntregaVoluntaria from '../rutas-componentes/entregaVoluntaria';
import ActoVenta from '../rutas-componentes/actoVenta';
import EntregaVoluntaria2 from '../rutas-componentes/entregaVoluntaria-2';
import CartaRuta from '../rutas-componentes/cartaRuta';
import PagareEjecutivo1 from '../rutas-componentes/pagareEjecutivo1';
import PagareEjecutivo2 from '../rutas-componentes/pagareEjecutivo2';
import Recargo from '../rutas-componentes/recargo';
import Despacho from '../rutas-componentes/despacho';
import SolicitudPrestamo from '../rutas-componentes/solicitudPrestamo';
import MyBody from './body';
import ActoMotocicletas from '../rutas-componentes/actoMotocicletas';

const CamposDinamicos = ({showContent}) => {

    const [texts, setTexts] = useState(initialTexts);
    
        const handleTextChange = (key, value) => {
          setTexts((prevTexts) => ({
            ...prevTexts,
            [key]: value,
          }));
        };

    return(
        <div>
            <div className='camposdinamicos '>

            {showContent === 'home' && (
            <>

            <section className='tercera'>

<div>
   <h2 className='titulo-3 dinamico'>Editar textos dinámicos</h2>

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
       value={texts.municipioprovincia}
       onChange={(e) => handleTextChange("municipioprovincia", e.target.value)}
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

     <label>
     Dia actual en letras:{" "}
     <input
       value={texts.dialetra}
       onChange={(e) => handleTextChange("dialetra", e.target.value)}
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
           {showContent === 'body' && <MyBody texts={texts} />}
           {showContent === 'actoVenta' && <ActoVenta texts={texts} />}
           {showContent === 'entregaVoluntaria-2' && <EntregaVoluntaria2 texts={texts} />}
           {showContent === 'cartaRuta' && <CartaRuta texts={texts} />}
           {showContent === 'pagareEjecutivo1' && <PagareEjecutivo1 texts={texts} />}
           {showContent === 'pagareEjecutivo2' && <PagareEjecutivo2 texts={texts} />}
           {showContent === 'recargo' && <Recargo texts={texts} />}
           {showContent === 'despacho' && <Despacho texts={texts} />}
           {showContent === 'solicitudPrestamo' && <SolicitudPrestamo texts={texts} />}
           {showContent === 'actoMotocicletas' && <ActoMotocicletas texts={texts} />}

        </div>
    )
}

export default CamposDinamicos