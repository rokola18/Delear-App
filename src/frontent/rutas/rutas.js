
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
        <Route path='/solicitudPrestamo' element={SolicitudPrestamo}></Route>
      </Routes>
    </Router>
  );

export default AppDealer