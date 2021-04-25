import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import API_CONFIG from '../../config.js'
import Moment from 'react-moment'
import 'moment/locale/es';

let {API_URL} = API_CONFIG

class ArticleComponent extends Component{
	render(){
		const {title, image, content, date, _id} = this.props.article
		return(
			<article className="article-item" id="article-template">
          <div className="image-wrap">
              <img src={API_URL + 'get-image/' + image} alt={title} />
          </div>

          <h2>{title}</h2>
          <span className="date">
             <Moment fromNow>{date}</Moment>
          </span>
          <Link to={'/blog/articulo/' + _id}>Leer más</Link>

          <div className="clearfix"></div>
      </article>
		)
	}
}	

export default ArticleComponent