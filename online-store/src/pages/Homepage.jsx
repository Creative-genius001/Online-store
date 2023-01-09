import { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { BsSortDown } from "react-icons/bs";
import ProductCard from "../components/ProductCard";
import { AppContext } from "../contextApi/context";
import { CommmerceContext } from "../contextApi/commerceAPI";
import { PRODUCTS } from "../products";
import banner1 from "../assets/banners/banner1.jpg";
import { Footer } from "../components/Footer";
import { useState } from "react";
import Loader from "../components/Loader";

export const Homepage = () => {
	const [toggle, setToggle] = useState(false);
	const {
		getAllProducts,
		// products,
		getClothes,
		getShoes,
		getWatches,
		getGadgets,
		cartItems,
	} = useContext(AppContext);
	const { getProducts, products } = useContext(
		CommmerceContext,
	);
	useEffect(() => {
		getProducts();
		console.log(products);
	}, []);

	return (
		<div>
			<Navbar />
			<div className="w-100 bg-black h-12 flex items-center justify-center">
				<h2 className="font-medium text-white text-[0.8rem] ">
					Products Now in Stock!!
				</h2>
			</div>
			<div className="banner">
				<img
					src={banner1}
					className="banner-img"
				/>
			</div>
			<section classname="category-div">
				<h3 className="ml-8 font-bold my-4 text-[1.7rem]">
					Top Products
				</h3>
				<div className="sort flex items-center mr-4">
					<span className="mr-2 font-medium">
						Filter
					</span>
					<BsSortDown
						className="cursor-pointer "
						onMouseOver={() => setToggle(!toggle)}
					/>
					{toggle ? (
						<ul className="sort-ul">
							<li
								onClick={getAllProducts}
								className="sort-li">
								All Items
							</li>
							<li
								onClick={getClothes}
								className="sort-li">
								Clothes
							</li>
							<li
								onClick={getGadgets}
								className="sort-li">
								Gadgets
							</li>
							<li
								onClick={getWatches}
								className="sort-li">
								Watches
							</li>
							<li
								onClick={getShoes}
								className="sort-li">
								Shoes
							</li>
						</ul>
					) : (
						<></>
					)}
				</div>
			</section>

			<div className="mx-auto w-[95%]">
				<div className="product-card ">
					{products.length > 0 ? (
						products.map((product) => {
							return (
								<ProductCard
									product={product}
									key={product.id}
								/>
							);
						})
					) : (
						<Loader />
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
};
