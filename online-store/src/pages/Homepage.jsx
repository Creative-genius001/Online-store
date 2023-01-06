import { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { BsSortDown } from "react-icons/bs";
import ProductCard from "../components/ProductCard";
import { AppContext } from "../contextApi/context";
import { PRODUCTS } from "../products";
import banner1 from "../assets/banners/banner1.jpg";
import { Footer } from "../components/Footer";
import { useState } from "react";

export const Homepage = () => {
	const [toggle, setToggle] = useState(false);
	const { getAllProducts, products } =
		useContext(AppContext);
	useEffect(() => {
		getAllProducts();
		console.log(products);
	}, []);

	const toggleFilter = () => {
		setToggle(!toggle);
		console.log(toggle);
	};

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
			<div classname="category-div">
				<h3 className="ml-8 font-bold my-4 text-[1.7rem]">
					Top Products
				</h3>
				{/* <div>
					<span>Sort</span>
					<BsSortDown
						className="cursor-pointer "
						onClick={() => toggleFilter()}
					/>
					{toggle ? (
						<ul className="">
							<li>All Items</li>
							<li>Clothes</li>
							<li>Gadgets</li>
							<li>Watches</li>
							<li>Shoes</li>
						</ul>
					) : (
						<></>
					)}
				</div> */}
			</div>

			<div className="mx-auto w-[95%]">
				<div className="product-card ">
					{products.map((product) => {
						return (
							<ProductCard
								product={product}
								key={product.id}
							/>
						);
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
};
