import { useState, useContext } from "react";
import {
	useNavigate,
	Link,
} from "react-router-dom";
import { CommmerceContext } from "../contextApi/commerceAPI";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import "../styles/productcard.css";

const ProductCard = ({ product }) => {
	const [isClicked, setIsClicked] =
		useState(false);
	const { addToCart } = useContext(
		CommmerceContext,
	);
	const navigate = useNavigate();
	function clickFunc() {
		setIsClicked(true);
		const myTimeout = setTimeout(
			showLoader,
			3000,
		);
	}

	function showLoader() {
		setIsClicked(false);
	}

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

					{isClicked ? (
						<div class="lds-ring">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					) : (
						<MdOutlineAddShoppingCart
							onClick={() => {
								clickFunc();
								addToCart(product.id);
							}}
							className="text-[1.2rem] text-[#FE6263] cursor-pointer "
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
