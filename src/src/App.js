import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
 import PrivateRoute from "./components/session/PrivateRoute";
import Logout from "./components/session/Logout";
import Login from "./components/session/Logout";
import history from "./utils/History"
import Index from './pages/Index';
import Curso from './pages/Curso';
import Nivel from './pages/Nivel';
import Historial from './pages/Historial';
import Busqueda from './pages/Busqueda';
import CrearCurso from './pages/CrearCurso';
import CrearNivel from './pages/CrearNivel';
import Mensajes from './pages/Mensajes';
import NavBar from './components/NavBar';
import './css/index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
  integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
  crossorigin="anonymous"
/>

function App() {
  return (
    <Router history = {history}>
      <img className="bg" src="https://scontent.fntr1-1.fna.fbcdn.net/v/t1.15752-9/247746276_1200340643805015_1847650706867872243_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeGoL8QVCn6JNFUN6B-ZNl_DWKT_1mxhx4dYpP_WbGHHh-oapr15PwdPD-qX2csgHYA&_nc_ohc=FZ--rCnknzkAX_HVi8Z&_nc_ht=scontent.fntr1-1.fna&oh=8411ab26279f8f3d7afbc8aa2250b729&oe=6199FC97"/>
       
      <NavBar />
      <div className="parent">
        <Switch>
          <PrivateRoute exact path='/' component={Index} />
          <Route exact path='/Curso' component={Curso} />
          <Route exact path='/Nivel' component={Nivel} />
          <Route exact path='/Historial' component={Historial} />
          <Route exact path='/Busqueda' component={Busqueda} />
          <Route exact path='/CrearCurso' component={CrearCurso} />
          <Route exact path='/CrearNivel' component={CrearNivel} />
          <Route exact path='/Mensajes' component={Mensajes} />
          <Route path="/login" component={Login} exact/>
          <Route path="/logout" component={Logout} exact/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
