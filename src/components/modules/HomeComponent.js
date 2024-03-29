import React, {Component} from 'react'
// Components
import SliderComponent from './SliderComponent'
import SideBarComponent from './SideBarComponent'
import ArticlesComponent from './ArticlesComponent'

class HomeComponent extends Component{
	render(){
		return(
			<div id="home">
				{/*Slider*/}
	      <SliderComponent
	        title="Bienvenido a Bryan10 Sport"
	        btn="Ir al blog"
	        size="slider-big"
	      />
	      <div className="center">
		      <div id="content">
						<h1 className="subheader">Últimos Articulos</h1>
						<ArticlesComponent home={"true" }/>
					</div>
					{/*Sidebar*/}
      		<SideBarComponent />
	      </div>
			</div>
		)
	}
}

export default HomeComponent