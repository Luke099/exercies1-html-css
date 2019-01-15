import React from 'react';
import helper from './Helpers';
import { Link } from 'react-router-dom';


const RecipeItem = ({ recipe }) => {
	let imgStyle = { width: 500, height: 300 }
	let rating = helper.renderRating(recipe.rating);
	return (
		<div className="col-lg-4 col-md-6" id={recipe.id}>
			<div className="recipe">
				<Link to={`/detail/${recipe.id}`}>
					<img src={recipe.img} alt={recipe.name} style={imgStyle} />
				</Link>
				<div className="recipe-info">
					<h3>{recipe.name}</h3>
					<div className="rating">
						{rating}
					</div>
				</div>
			</div>
		</div>
	)
}

const ListRecipe = ({ data }) => {
	let recipeItems = [];
	if (data.length > 0) {
		recipeItems = data.map(recipe => {
			return (
				<RecipeItem recipe={recipe} key={recipe.id} />);
		})
	}
	return (<section className="recipes-page spad">
		<div className="container">
			<div className="row" >
				<div className="col-md-8">
					<div className="section-title">
						<h2>Các Công Thức Mới Nhất</h2>
					</div>
				</div>
				<div className="col-md-4">
					<div className="recipe-view">
						<i className="fa fa-bars"></i>
						<i className="fa fa-th active"></i>
					</div>
				</div>
			</div>
			<div className="row">
				{recipeItems}
			</div>
			<div className="site-pagination">
				<span>01</span>
				<a>02</a>
				<a>03</a>
			</div>
		</div>
	</section>);
}
export default ListRecipe;