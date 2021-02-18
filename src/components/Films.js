import React, {Component} from 'react'
// Components
import SliderComponent from './modules/SliderComponent'
import SideBarComponent from './modules/SideBarComponent'
import FilmComponent from './FilmComponent'

class Films extends Component{
	state = {}

	updateNameFilm = () => {
		let {films}= this.state
		// Numeros aleatorios de 0 al 4
		let random = Math.floor(Math.random() * 4);
		films[random].title = "Focus Focus"

		this.setState({
			films: films
		})
	}

	filmFavorite = (film) =>{
		this.setState({
			nameFilmFavorite: film.title
		})
	}

	// ciclos de vida de los components

	// Antes de montarse el component
	componentWillMount(){
		this.setState({
			films: [
				{title: 'Focus', img: 'https://i.pinimg.com/originals/76/88/7d/76887dd7e92b0a3cf20b97ef2a1f9e7a.jpg'},
				{title: 'Casa de papel', img: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWhm4HUcyKdZ8OpDTM2YLIJkhS2vub_6n_SotQi3uXCO93fsPbhF2cVTAqVObqVOyXnbUEIvcUeBG6_qQcwYx5E-ikCYEPK0VCTc-bITRNj1eJGzsMNvnFzng-hkLQ.jpg?r=11b'},
				{title: 'Black List', img: 'http://es.web.img2.acsta.net/pictures/17/08/30/11/50/532007.jpg'},
				{title: 'Fast and Furious Five', img: 'https://i.pinimg.com/originals/a5/06/38/a5063877093f03027bd085a141a0215b.jpg'}
			],
			name: 'Bryan Blanco',
			nameFilmFavorite: ''
		})
	}

	// Despues de montarse el componenet
	componentDidMount(){
		// alert('Mounted')
	}

	// Desmontar un componenet
	componentWillUnmount(){
		// alert('Desmontando el component')
	}

	render(){
		let pStyle = {background: 'red', color: 'white', padding: '10px'}
		let favorites;

		if(this.state.nameFilmFavorite){
			favorites = (<h4 style={pStyle}><strong>Mark Favorites Movies: </strong><span>{this.state.nameFilmFavorite}</span></h4>)
		}else{
			favorites = (<h4>No hay peliculas favoritas</h4>)
		}
		
		return(
			<div id="home">
				{/*Slider*/}
	      <SliderComponent
	        title="Peliculas"
	        size="slider-small"
	      />
	      <div className="center">
		      <div id="content">
						<h2 className="subheader">Films</h2>
						<h3><strong>{this.state.name} Favorites Movies</strong></h3>
						{/*this.state.nameFilmFavorite ? (
							<h4 style={pStyle}><strong>Mark Favorites Movies: </strong><span>{this.state.nameFilmFavorite}</span></h4>) : (
								<h4>No hay peliculas favoritas</h4>
							)
						*/}
						{favorites}
					
						<p><button onClick={this.updateNameFilm}>Cambiar nombre</button></p>
						<div id="articles">
							{
								this.state.films.map((el, index) =>{
									return(
										<FilmComponent 
											film={el} 
											key={index}
											markFavorite={this.filmFavorite} 
										/>
									)
								})
							}
							 <div className="clearfix"></div>
						</div>
					</div>
					{/*Sidebar*/}
      		<SideBarComponent />
				</div>
			</div>
		)
	}
}

export default Films	