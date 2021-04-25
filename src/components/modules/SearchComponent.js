import React, {Component} from 'react'
// components
import SliderComponent from './SliderComponent'
import SideBarComponent from './SideBarComponent'
import ArticlesComponent from './ArticlesComponent'

class SearchComponent extends Component{
	render(){
		let search = this.props.match.params.search
		return(
			<div id="blog">
				{/*Slider*/}
	      <SliderComponent
	        title={'Busqueda: ' + search}
	        size="slider-small"
	      />
	      <div className="center">
		      <div id="content">
						{/*List Articles*/}
						<ArticlesComponent search={search} />
					</div>
					<SideBarComponent blog="true" />
	      </div>
			</div>
		)
	}
}

export default SearchComponent