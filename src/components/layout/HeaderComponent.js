import React, {Component} from 'react'
import img from '../../assets/img/react.svg'
import {NavLink} from 'react-router-dom'

class HeaderComponent extends Component{
	render(){
		return(
			<header id="header">
        <div className="center">
          <div id="logo">
              <img src={img} className="app-logo" alt="Logotipo" />
              <span id="brand">
                  <strong>Bryan10 Sport</strong>
              </span>
          </div>
          <nav id="menu">
              <ul>
                  <li>
                    <NavLink to="/home" activeClassName="active">Inicio</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog">Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to="/formulario">Formulario</NavLink>
                  </li>
                  <li>
                    <NavLink to="/films">Peliculas</NavLink>
                  </li>
                  <li>
                    <NavLink to="/pruebas/bryan10">Pagina 2</NavLink>
                  </li> 
              </ul>
          </nav>
          <div className="clearfix"></div>
        </div>
      </header>
		)
	}
}

export default HeaderComponent