import React, {Component} from 'react'

class MiComponent extends Component{  
	render(){
		let receta = {
			nombre: 'Hamburguesa',
			calorias: 1200,
			ingredientes: ['Carne','Tomate','Cebolla','Lechuga','Queso']
		}
		return(
			<div id="content">
				<h1>{'Receta: ' + receta.nombre}</h1>
				<h3>{'Calorias: ' + receta.calorias}</h3>
				<ol>
					{
						receta.ingredientes.map((el, index) => {
							return(
								<li key={index}>{el}</li>
							)
						})
					}
				</ol>
				<hr />
				{this.props.saludo &&
					<h3>{this.props.saludo}</h3>
				}
			</div>
		)
	}
}

export default MiComponent