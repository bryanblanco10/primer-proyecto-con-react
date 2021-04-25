import React, {Component}  from 'react'
import articlesServices from '../../services/articlesServices.js'
// components
import ArticleComponent from './ArticleComponent'

class ArticlesComponent extends Component{
	state = {
		articles: [],
		succes: false
	}

	componentWillMount(){
		let home = this.props.home
		let search = this.props.search
		if(home === 'true'){
			this.loadLastArticles()
		}else if(search && search != null){
			this.loadSearchArticles(search)
		}else{
			this.loadArticles()
		}
	}
	async loadArticles(){
		try{
			let {data:res} = await articlesServices.getArticles()
			this.setState({
				articles: res.articles,
				succes: true
			})
			console.log(this.state.articles)
		}
		catch(err){
			console.log(err)
		}
	}

	async loadLastArticles(){
		try{
			let {data:res} = await articlesServices.getLastArticles()
			this.setState({
				articles: res.articles,
				succes: true
			})
			console.log(this.state.articles)
		}
		catch(err){
			console.log(err)
		}
	}

	async loadSearchArticles(search){
		try{
			let {data:res} = await articlesServices.searchArticle(search)
			this.setState({
				articles: res.articles,
				succes: true
			})
			console.log(this.state.articles)
		}
		catch(err){
			this.setState({
				articles: [],
				succes: true
			})
		}
	}

	render(){
		if(this.state.articles.length > 0){
			let articles = this.state.articles.map((article, index) =>{
				return(
					<ArticleComponent
						article={article}
						key={index} 
					/>
				)
			})

			return(
				<div id="articles">{articles}</div>
			)

		} else if(this.state.articles.length === 0 && this.state.succes === true){
			return(
				<div id="articles">
					<h2 className="subheader">No hay articulos para mostrar</h2>
					<p>Todavia no hay contenido en esta sección</p>
				</div>
			)
		} else{
			return(
				<div id="articles">
					<h2 className="subheader">Cargando...</h2>
					<p>Espere mientras carga el contenido</p>
				</div>
			)
		}
	}
}

export default ArticlesComponent