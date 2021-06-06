import React, {Component, useState} from "react";
import {MenuItems} from "./MenuItems";
import "./Navbar.css";
import {NavLink} from "react-router-dom";


class Navbar extends Component {
    state ={clicked: false}
    state={NavbarItems: false}

    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
     changeBackground = () =>{
       if(window.scrollY >= 80){
         this.setState({NavbarItems: true})
       }
       else{
        this.setState({NavbarItems: false})
       }
    };
    componentDidMount() {
    window.addEventListener('scroll', this.changeBackground);
    }
    render() {
        
        return(
            <nav className= {this.state.NavbarItems ? "NavbarItems active" : "NavbarItems"}>
               <span className="logo"> &lt;</span>
               <span className="Navbar-logo">Anup Choudhury</span>
               <span className="logo"> /&gt;</span>
               <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked? 'fas fa-times': 'fas fa-bars'}></i>   
               </div>
               <ul className={this.state.clicked? 'nav-menu active': 'nav-menu'}>
                  {MenuItems.map((item,index) => {
                      return(
                        <li key={index}>
                        <NavLink className={item.cName} activeClassName="activated" exact to={item.url}>
                         {item.title}
                        </NavLink>
                        </li>
                      )
                  })} 
               </ul>
            </nav>
        )
    }
}
export default Navbar;