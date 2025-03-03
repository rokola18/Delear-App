
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; // Importa componentes de enrutamiento de React Router.
import EntregaVoluntaria from '../rutas-componentes/entregaVoluntaria';
import EntregaVoluntaria2 from '../rutas-componentes/entregaVoluntaria-2';
import ActoVenta from '../rutas-componentes/actoVenta';
import CartaRuta from '../rutas-componentes/cartaRuta';
import PagareEjecutivo1 from '../rutas-componentes/pagareEjecutivo1';
import pagareEjecutivo2 from '../rutas-componentes/pagareEjecutivo2';
import Recargo from '../rutas-componentes/recargo';
import Despacho from '../rutas-componentes/despacho';
import SolicitudPrestamo from '../rutas-componentes/solicitudPrestamo';
import MyBody from '../componentes/body';
import ActoMotocicletas from '../rutas-componentes/actoMotocicletas';
import ActoMotocicletasm from '../rutas-componentes2/actoventam';
import ActoVentam1 from '../rutas-componentes2/actoventa1m';
import ActoVenta2m from '../rutas-componentes2/actoventa2m';
import CartaRutam from '../rutas-componentes2/cartarutam';
import EntregaVoluntariaM from '../rutas-componentes2/entregavoluntariam';
import EntregaVoluntariaM2 from '../rutas-componentes2/entregavoluntariam2';
import PagareEjecutivom1 from '../rutas-componentes2/pagareejecutivom';
import pagareEjecutivom2 from '../rutas-componentes2/pagareejecutivom2';
import Descargo from '../rutas-componentes2/descargom';
import Despachom from '../rutas-componentes2/despachom';
import DespachoCar from '../rutas-componentes/despachocar';
import DespachoCarm from '../rutas-componentes2/despachocarm';

  const AppDealer = () => (
    <Router>
      <Routes>
        <Route path='/entregaVoluntaria' element={EntregaVoluntaria}></Route>
        <Route path='/body' element={MyBody}></Route>
        <Route path='/entregaVoluntaria-2' element={EntregaVoluntaria2}></Route>
        <Route path='/actoVenta' element={ActoVenta}></Route>
        <Route path='/cartaRuta' element={CartaRuta}></Route>
        <Route path='/pagareEjecutivo1' element={PagareEjecutivo1}></Route>
        <Route path='/pagareEjecutivo2' element={pagareEjecutivo2}></Route>
        <Route path='/recargo' element={Recargo}></Route>
        <Route path='/despacho' element={Despacho}></Route>
        <Route path='/despachocar' element={DespachoCar}></Route>
        <Route path='/solicitudPrestamo' element={SolicitudPrestamo}></Route>
        <Route path='/actoMotocicletas' element={ActoMotocicletas}></Route>
      </Routes>

      <Routes>
         <Route path='/actoventam' element={ActoMotocicletasm}></Route>
         <Route path='/actoventa1m' element={ActoVentam1}></Route>
         <Route path='/actoventa2m' element={ActoVenta2m}></Route>
         <Route path='/cartarutam' element={CartaRutam}></Route>
         <Route path='/entregavoluntariam' element={EntregaVoluntariaM}></Route>
         <Route path='/entregavoluntariam2' element={EntregaVoluntariaM2}></Route>
         <Route path='/pagareejecutivom' element={PagareEjecutivom1}></Route>
         <Route path='/pagareejecutivom2' element={pagareEjecutivom2}></Route>
         <Route path='/descargom' element={Descargo}></Route>
         <Route path='/despachom' element={Despachom}></Route>
         <Route path='/despachocarm' element={DespachoCarm}></Route>
      </Routes>
    </Router>
  );

export default AppDealer