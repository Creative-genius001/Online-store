import { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { CommmerceContext } from "../contextApi/commerceAPI";
import banner1 from "../assets/banners/banner1.jpg";
import { Footer } from "../components/Footer";
import Loader from "../components/Loader";
import Categories from "../components/Categories";

export const Homepage = () => {
	const {
		getProducts,
		products,
		allCategories,
		getAllCategories,
		getSingleCat,
	} = useContext(CommmerceContext);
	useEffect(() => {
		getProducts();
		getAllCategories();
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
			<section className="category-div">
				<h3 className="ml-8 font-bold my-4 text-[1.7rem]">
					Top Products
				</h3>
				<div className="sort flex items-center mr-4">
					<Categories
						getProducts={getProducts}
						allCategories={allCategories}
						getSingleCat={getSingleCat}
					/>
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
