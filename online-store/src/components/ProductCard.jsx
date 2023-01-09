import { useState, useContext } from "react";
import {
	useParams,
	useNavigate,
	Link,
} from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import { AppContext } from "../contextApi/context";
import { CommmerceContext } from "../contextApi/commerceAPI";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const ProductCard = ({ product }) => {
	const { addToCart } = useContext(
		CommmerceContext,
	);
	const navigate = useNavigate();
	return (
		<div className="card ">
			<div
				onClick={() => {
					navigate(
						`/product/${product.categories[0].name}/${product.id}`,
					);
				}}
				className="product-image cursor-pointer ">
				<img
					src={product.image.url}
					alt={product.title}
					className="img w-full transition ease-in-out duration-500 hover:scale-125 "
				/>
			</div>
			<div className="text-div w-full h-auto px-2  ">
				<h2 className="movie-title truncate ... text-slate-700 font-medium text-[0.9rem] mt-2">
					{product.name}
				</h2>
				<div className="flex justify-between items-center ">
					<p className="text-black text-[1rem] font-bold ">
						${product.price.raw}
					</p>

					<MdOutlineAddShoppingCart
						onClick={() => addToCart(product.id)}
						className="text-[1.2rem] text-[#FE6263] cursor-pointer "
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
