import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import articlesServices from '../../services/articlesServices.js'
import Moment from 'react-moment'
import 'moment/locale/es';
import API_CONFIG from '../../config.js'
import Swal from 'sweetalert2'
// components
import SideBarComponent from './SideBarComponent.js'

let {API_URL} = API_CONFIG

class ArticleShowComponent extends Component{
	state = {
		article: false,
		succes: false,
		status: false
	}

	componentWillMount(){
		this.loadArticle()
	}

	async loadArticle(){
		try{
			let id = this.props.match.params.id
			let {data:res} = await articlesServices.getArticle(id)
			this.setState({
				article: res.article,
				succes: true
			})
		}
		catch(err){
			this.setState({
				article: false,
				succes: true
			})
		}
	}

	removeArticle = (_id) =>{
		Swal.fire({
		  title: '¿Deseas eliminar este articulo?',
		  text: "¡Una vez eliminado no podras recuperar este articulo!",
		  icon: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Eliminar',
		  cancelButtonText: 'Cancelar'
		}).then((result) => {
		  if (result.isConfirmed) {
		  	this.deleteArticle(_id)
		  }
		})
	}

	deleteArticle = async (_id) => {
		try{
			let {data:res} = await articlesServices.deleteArticle(_id)
			if(res.status === 'success'){
				this.setState({
					status: true
				})
				Swal.fire({
				  icon: 'success',
				  title: 'Articulo eliminado con exito',
				})
			}else{
				this.setState({
					status: false
				})
				Swal.fire({
				  icon: 'error',
				  title: 'Articulo no eliminado',
				})
			}
		}
		catch(err){
			Swal.fire({
			  icon: 'error',
			  title: 'Articulo no eliminado',
			})
		}
	}

	render(){
		if(this.state.status){
			return(
				<Redirect to={'/blog'} />
			)
		}
		const {title, image, content, date, _id} = this.state.article
		return(
			<div className="center">
	      <div id="content">
	      {this.state.article &&
	      	<article className="article-item article-detail">
		        <div className="image-wrap">
		          <img src={API_URL + 'get-image/' + image} alt={title} />
		        </div>

		        <h1 className="subheader">{title}</h1>
		        <span className="date">
		          <Moment fromNow>{date}</Moment>
		        </span>
		        <p>
		        	{content}
		        </p>

		        <Link  to={'/blog/editar-articulo/' + _id } className="btn btn-warning">Editar</Link>
		        <a onClick={() =>{
		        	this.removeArticle(_id)
		        }} className="btn btn-danger">Eliminar</a>
		        <div className="clearfix"></div>
		    	</article>
	      }

	      {!this.state.article && this.state.succes == true &&
	      	<div id="articles">
						<h2 className="subheader">El articulo no existe</h2>
						<p>Intentelo denuevo mas tarde.</p>
					</div>
	      }

	      {this.state.succes == false &&
	      	<div id="articles">
						<h2 className="subheader">Cargando...</h2>
						<p>Espere mientras carga el contenido</p>
					</div>
	      }
      		
    		</div>
    		{/*Sidebar*/}
    		<SideBarComponent />
		  </div>
		)
	}
}

export default ArticleShowComponent