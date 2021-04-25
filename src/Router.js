import React, {Component} from 'react'
import {Route,Switch, Redirect} from 'react-router-dom'

// components
import HomeComponent from './components/modules/HomeComponent'
import BlogComponent from './components/modules/BlogComponent'
import Error404Component from './components/Error404Component'
import Films from './components/Films'
import FormComponent from './components/modules/FormComponent'
import ArticleShowComponent from './components/modules/ArticleShowComponent'
import SearchComponent from './components/modules/SearchComponent'
import CreateArticle from './components/modules/CreateArticle'
import UpdateArticle from './components/modules/UpdateArticle'

class Router extends Component{
	render(){
		return(
			<React.Fragment>
				{/*Configuraciòn rutas y pàginas*/}
				<Switch>
					<Route exact path="/" component={HomeComponent} />
					<Route exact path="/home" component={HomeComponent} />
					<Route exact path="/blog" component={BlogComponent} />
					<Route exact path="/blog/busqueda/:search" component={SearchComponent} />
					<Route exact path="/blog/articulo/:id" component={ArticleShowComponent} />
					<Route exact path="/blog/crear-articulo" component={CreateArticle} />
					<Route exact path="/blog/editar-articulo/:id" component={UpdateArticle} />
					<Route exact path="/films" component={Films} />
					<Route exact path="/redirect/:search" render={
						(props) => {
							let search = props.match.params.search
							return(
								<Redirect to={'/blog/busqueda/' + search} />
							)
						}
					} />
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