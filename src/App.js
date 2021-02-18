import './assets/css/styles.css';
import Router from './Router'
import {BrowserRouter} from 'react-router-dom'

// components
import HeaderComponent from './components/layout/HeaderComponent'
import FooterComponent from './components/layout/FooterComponent'

// function holaMundo(nombre, edad){
//   let presentacion = (
//     <div>
//       <h2>Visca Barca! {nombre}</h2>
//       <h4>Tengo {edad} años</h4>
//     </div>
//   )
//   return presentacion
// }

function App() {
  return (
    <div className="App">
    	<BrowserRouter>
    		{/*Header*/}
	      <HeaderComponent />
	      	<Router />
	      	<div className="clearfix"></div>
	    	{/*Footer*/}
	      <FooterComponent />
    	</BrowserRouter>
    </div>
  );
}

export default App;
