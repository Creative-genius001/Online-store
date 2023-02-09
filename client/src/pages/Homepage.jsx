import {
	useContext,
	useEffect,
	useState,
} from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { CommmerceContext } from "../contextApi/commerceAPI";
import banner1 from "../assets/banners/banner1.jpg";
import { Footer } from "../components/Footer";
import Categories from "../components/Categories";
import "../styles/homepage.css";
import Loader from "../components/Loader";

export const Homepage = () => {
	const [isLoading, setIsLoading] =
		useState(false);

	const {
		getProducts,
		products,
		allCategories,
		getAllCategories,
		getSingleCat,
	} = useContext(CommmerceContext);

	function timeoutFunc() {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}

	useEffect(() => {
		timeoutFunc();
		getProducts();
		getAllCategories();
	}, []);

	return (
		<div>
			<Navbar />
			{isLoading ? (
				<Loader />
			) : (
				<>
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
						<h3 className="h3">Top Products</h3>
						<div className="sort flex items-center mr-4">
							<Categories
								getProducts={getProducts}
								allCategories={allCategories}
								getSingleCat={getSingleCat}
							/>
						</div>
					</section>

					<div className="mx-auto w-[90%] ">
						<div className="product-card ">
							{products.length > 0
								? products.map((product) => {
										return (
											<ProductCard
												product={product}
												key={product.id}
											/>
										);
								  })
								: ""}
						</div>
					</div>
					<Footer />
				</>
			)}
		</div>
	);
};
