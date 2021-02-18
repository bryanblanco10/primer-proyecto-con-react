import React, {Component} from 'react'
// Components
import SliderComponent from './SliderComponent'
import SideBarComponent from './SideBarComponent'

class BlogComponent extends Component{
	render(){
		return(
			<div id="blog">
				{/*Slider*/}
	      <SliderComponent
	        title="Blog"
	        size="slider-small"
	      />
	      <div className="center">
		      <div id="content">
						{/*List Articles*/}
					</div>
					{/*Sidebar*/}
      		<SideBarComponent blog="true" />
	      </div>
			</div>
		)
	}
}

export default BlogComponent