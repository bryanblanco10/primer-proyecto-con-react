import React, {Component} from 'react'

class FilmComponent extends Component{
	mark = () =>{
		this.props.markFavorite(this.props.film)
	}
	render(){
		const {title, img} = this.props.film
		return(
			<article className="article-item" id="article-template">
        <div className="image-wrap">
            <img src={img} alt={title} />
        </div>

        <h2>{title}</h2>
        <span className="date">
            Hace 5 minutos
        </span>
        <a href="#">Leer más</a>
        <button onClick={this.mark}>
        	Marcar como favorita
        </button>

        <div className="clearfix"></div>
    	</article>
		)
	}
}

export default FilmComponent