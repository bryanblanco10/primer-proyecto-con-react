import React, {Component} from 'react'
import articlesServices from '../../services/articlesServices.js'
import {Redirect} from 'react-router-dom'
import SimpleReactValidator from 'simple-react-validator'
import Swal from 'sweetalert2'
// Components
import SideBarComponent from './SideBarComponent'

class UpdateArticle extends Component{
	titleRef = React.createRef()
	contentRef = React.createRef()

	state = {
		article: false,
		status: false,
		selectedFile: null
	}

	componentWillMount(){
		this.loadArticle()
		this.validator = new SimpleReactValidator({
			messages: {
		    required: 'Campo requerido.',
		    alpha: 'El :attribute solo puede tener letras.',
		    alpha_num_space: 'El :attribute solo puede tener letras, números y espacios.'
		  },
		})
	}

	async loadArticle(){
		try{
			let id = this.props.match.params.id
			let {data:res} = await articlesServices.getArticle(id)
			this.setState({
				article: res.article
			})
		}
		catch(err){
			this.setState({
				article: false
			})
		}
	}

	changeState =  () => {
		this.setState({
			article:{
				title: this.titleRef.current.value,
				content: this.contentRef.current.value
			}
		})
		this.validator.showMessages()
		this.forceUpdate()
	}

	fileChange = (event) => {
		this.setState({
			selectedFile: event.target.files[0]
		})
	}

	saveArticle = async (e) =>{
		e.preventDefault()

		// Rellenar state con formulario
		this.changeState()
		// Save
		if(this.validator.allValid()){
			try{
				let {data:res} = await articlesServices.postArticle(this.state.article)
				if(res.status == "success"){
					//Subir la imagen
					if(this.state.selectedFile !== null){
						// Sacar id del article guardado
						const { _id } = res.article
						// Crear form data y añadir el fichero
						let formData = new FormData()

						formData.append(
							'file0',
							this.state.selectedFile,
							this.state.selectedFile.name
						)
						// Petición ajax
						try{
							let {data:res} = await articlesServices.postImageArticle(_id, formData)
							if(res.status == "success"){
								this.setState({
									status: true
								})
								Swal.fire({
								  icon: 'success',
								  title: 'Articulo creado con exito',
								})
							}
						}
						catch(err){
							Swal.fire({
							  icon: 'error',
							  title: 'Articulo no creado',
							})
						}
					}else{
						this.setState({
							status: true
						})
						Swal.fire({
						  icon: 'success',
						  title: 'Articulo creado con exito',
						})
					}
				}else{
					this.setState({
						status: false
					})
				}
			}
			catch(err){
				Swal.fire({
				  icon: 'error',
				  title: 'Articulo no creado',
				})
			}
		}else{
			this.validator.showMessages()
			this.forceUpdate()
		}
	}

	render(){
		const {title, content} = this.state.article
		if(this.state.status){
			return(
				<Redirect to={'/blog'} />
			)
		}

		return(
			<div className="center">
	      <div id="content">
					<h2 className="subheader">Actualizar Articulo</h2>
					{this.state.article &&
						<form className="mid-form" onSubmit={this.saveArticle} onChange={this.changeState}>
							<div className="form-group">
								<label htmlFor="title">Titulo</label>
								<input 
									type="text" 
									name="title"
									defaultValue={title} 
									ref={this.titleRef}
								/>
								{this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}		  
							</div>
							<div className="form-group">
								<label htmlFor="content">Contenido</label>
								<textarea name="content" ref={this.contentRef} defaultValue={content}></textarea>	  
							</div>
							<div className="form-group">
								<label htmlFor="file0">Imagen</label>
								<input type="file" name="file0" onChange={this.fileChange} />		  
							</div>

							<div className="clearfix"></div>
	            <input type="submit" value="Actualizar" className="btn btn-success" />
						</form>
					}
					{!this.state.article &&
						<div id="articles">
							<h2 className="subheader">Cargando...</h2>
							<p>Espere mientras carga el contenido</p>
						</div>
					}
					
				</div>
				<SideBarComponent />
      </div>
		)
	}
}

export default UpdateArticle