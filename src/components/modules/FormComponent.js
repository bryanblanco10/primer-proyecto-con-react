import React, {Component} from 'react'
// Components
import SideBarComponent from './SideBarComponent'

class FormComponent extends Component{
	nameRef = React.createRef()
	lastnameRef = React.createRef()
	bioRef = React.createRef()
	genderMRef = React.createRef()
	genderFRef = React.createRef()
	genderORef = React.createRef()

	state = { 
		user:{}
	}

	save = (e) =>{
		e.preventDefault()

		let gender = 'hombre'

		if(this.genderMRef.current.checked){
			gender = this.genderMRef.current.value
		} else if(this.genderFRef.checked){
			gender = this.genderFRef.current.value
		}else{
			gender = this.genderORef.current.value
		}

		let user = {
			name: this.nameRef.current.value,
			lastname: this.lastnameRef.current.value,
			bio: this.bioRef.current.value,
			gender: gender
		}
		
		this.setState({
			user: user
		})
	}

	render(){
		return(
			<div id="formulario">
	      <div className="center">
		      <div id="content">
		      	{this.state.user &&
		      		<h3>{this.state.user.name}</h3>
		      	}
						<h1 className="subheader">Crear Articulo</h1>
						<form className="mid-form" onSubmit={this.save} onChange={this.save}>
              <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input type="text" name="nombre" ref={this.nameRef} />
              </div>

              <div className="form-group">
                  <label htmlFor="apellidos">Apellidos</label>
                  <input type="text" name="apellidos" ref={this.lastnameRef} />
              </div>

              <div className="form-group">
                  <label htmlFor="bio">Biografia</label>
                  <textarea name="bio" ref={this.bioRef}></textarea>
              </div>

              <div className="form-group radibuttons">
                  <input type="radio" name="genero" value="hombre" ref={this.genderMRef} /> Hombre 
                  <input type="radio" name="genero" value="mujer" ref={this.genderFRef} /> Mujer 
                  <input type="radio" name="genero" value="otro" ref={this.genderORef} /> Otro
              </div>

              <div className="clearfix"></div>

              <input type="submit" value="Enviar" className="btn btn-success" />
         		</form>
					</div>
					{/*Sidebar*/}
      		<SideBarComponent />
	      </div>
			</div>
		)
	}
}

export default FormComponent