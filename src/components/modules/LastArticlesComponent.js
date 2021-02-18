import React, {Component} from 'react'
import Films from '../Films'
let img = "https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8"

class LastArticlesComponent extends Component{

	state = {
		count: 0
	}

	restar = () => {
		this.setState({
			count: this.state.count - 1
		})
	}
	sumar = () => {
		this.setState({
			count: this.state.count + 1
		})
	}

	render(){
		return(
      <section id="content">
          <h2 className="subheader">Últimos artículos</h2>

          {/*Listado articulos*/}
          <div id="articles">
              <article className="article-item" id="article-template">
                  <div className="image-wrap">
                      <img src={img} alt="Paisaje" />
                  </div>

                  <h2>Articulo de prueba</h2>
                  <span className="date">
                      Hace 5 minutos
                  </span>
                  <a href="#">Leer más</a>

                  <div className="clearfix"></div>
              </article>
          </div>

          <h2 className="subheader">States in React</h2>
          <p>Contador:
          	<input type="button" value="Restar" onClick={this.restar} /> 
          	{this.state.count}
          	<input type="button" value="Sumar" onClick={this.sumar} />
          </p>
          {/*Films*/}
          <Films />

      </section>
		)
	}
}

export default LastArticlesComponent