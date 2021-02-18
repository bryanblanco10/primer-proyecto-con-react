import React, {Component} from 'react'
import {Route,Switch} from 'react-router-dom'

// components
import HomeComponent from './components/modules/HomeComponent'
import BlogComponent from './components/modules/BlogComponent'
import Error404Component from './components/Error404Component'
import Films from './components/Films'
import FormComponent from './components/modules/FormComponent'


class Router extends Component{
	render(){
		return(
			<React.Fragment>
				{/*Configuraciòn rutas y pàginas*/}
				<Switch>
					<Route exact path="/" component={HomeComponent} />
					<Route exact path="/home" component={HomeComponent} />
					<Route exact path="/blog" component={BlogComponent} />
					<Route exact path="/films" component={Films} />
					<Route exact path="/formulario" component={FormComponent} />
					<Route exact path="/pagina-1" render={() =>(
						<React.Fragment>
							<h1>Hola desde Ruta: Página 1</h1>
						</React.Fragment>
					)} />
					<Route exact path="/pruebas/:name/:lastname?" render={(props) => {
						let name = props.match.params.name
						let lastname = props.match.params.lastname
						return(
							<section id="content">
								<h1 className="subheader">Página de pruebas</h1>
								{name && !lastname &&
									<h3>{name}</h3>
								}
								{name && lastname &&
									<h3>{name + ' ' +  lastname}</h3>
								}
								
							</section>
						)
					}} />
					<Route path="*" component={Error404Component} />
				</Switch>
			</React.Fragment>
		)
	}
}

export default Router