import { useState, useContext } from "react";
import {
	useParams,
	useNavigate,
	Link,
} from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import { AppContext } from "../contextApi/context";

const ProductCard = ({ product }) => {
	const navigate = useNavigate();
	return (
		<div
			onClick={() => {
				navigate(
					`/product/${product.category}/${product.id}`,
				);
			}}
			className="card cursor-pointer">
			<div className="product-image ">
				<img
					src={product.image}
					alt={product.title}
					className="img w-full transition ease-in-out duration-700 hover:scale-125 "
				/>
			</div>
			<div className="text-div w-full h-auto px-2">
				<h2 className="movie-title truncate ... text-slate-700 font-medium text-[0.9rem] mt-2">
					{product.name}
				</h2>

				<p className="text-black text-[1rem] font-bold ">
					${product.price}
				</p>
			</div>
		</div>
	);
};

export default ProductCard;
