import React from 'react'
import "./Recipe.css"
import axios from 'axios'

const Recipe = ({title, calories, image, link, servings}) =>{
	return(
		<div className="container-fluid recipe col-9">
	        <div className="card-horizontal">
	            <div className="img-square-wrapper pr-2 pt-2 pb-2">
	                <img src={image} alt={title} className="foodimg" /><br />
	            </div>
	            <div className="card-body text-white">
	                <h1>{title}</h1>
	                <h4>{Math.round(calories/servings)} calories</h4><br />
	                <button className="br-pill pl-4 pr-4 pt-2 pb-2 text-white open a"><a href={link} target="_blank" className="text-white thatonelink">Open Recipe</a></button><br />
	                
	            </div>
	        </div>
		</div>
	)
}

export default Recipe