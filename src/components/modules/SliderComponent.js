import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class SliderComponent extends Component{
	render(){
		return(
			<div id="slider" className={this.props.size}>
        <h1>{this.props.title}</h1>
        {this.props.btn &&
        	<Link to="/blog" className="btn-white">
        		{this.props.btn}
        	</Link>
        }
    </div>
)
	}
}

export default SliderComponent