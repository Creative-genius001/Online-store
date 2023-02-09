import {
	useContext,
	useEffect,
	useState,
} from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { CommmerceContext } from "../contextApi/commerceAPI";
import Loader from "../components/Loader";
import "../styles/productcard.css";

const ProductPage = () => {
	const { product, getProduct, addToCart } =
		useContext(CommmerceContext);

	const params = useParams();

	useEffect(() => {
		getProduct(params.id);
		// checkProductInCart(params.id);
	}, []);

	const [isLoading, setIsLoading] =
		useState(false);

	const onLoading = () => {
		setIsLoading(true);
		console.log(isLoading);
		setTimeout(() => {
			setIsLoading(false);
		}, 5200);
	};

	return (
		<div className="">
			<Navbar />
			<div className="w-[95%] mx-auto mt-4">
				{product.length >= 1 ? (
					product?.map((p) => {
						return (
							<>
								<div
									key={p.id}
									className="container flex flex-row justify-evenly ">
									<div className="pro-card w-[500px] h-[500px] bg-[#d3d2d2]">
										<img
											src={p.image.url}
											alt={p.name}
											className="w-full h-full object-contain"
										/>
									</div>
									<div className="info-container w-[50%] flex items-center ">
										<div className="info-container2">
											<div className="info-section ">
												<h2 className="p-name text-[2.7rem] font-semibold leading-tight ">
													{p.name}
												</h2>
												<h5 className="uppercase text-[#FE6263] text-[.9rem] font-medium">
													<span className="">
														Category:{" "}
														{p.categories[0].name}
													</span>
												</h5>

												<h5 className="text-black font-semibold text-[1.8rem] mt-2 ">
													${p.price.raw}
												</h5>
											</div>
											<div className="mt-2 ">
												<h5 className="font-bold text-[1.2rem]">
													Product Info
												</h5>
												<p className="description text-[1rem]">
													{p.description}
												</p>
											</div>
											{isLoading ? (
												<button
													disabled
													className="addTocartBtn mt-4 mb-4 bg-black  h-[50px] cursor-pointer text-white font-medium text-[0.8rem] hover:bg-neutral-900  ">
													<div className="px-3">
														<div class="ld-ring ">
															<div></div>
															<div></div>
															<div></div>
															<div></div>
														</div>
													</div>
												</button>
											) : (
												<button
													onClick={() => {
														onLoading();
														addToCart(p.id);
													}}
													className="addTocartBtn mt-4 mb-4 bg-black  h-[50px] cursor-pointer text-white font-medium text-[0.8rem] hover:bg-neutral-900  ">
													Add To cart
												</button>
											)}
										</div>
									</div>
								</div>
							</>
						);
					})
				) : (
					<Loader />
				)}
			</div>
		</div>
	);
};

export default ProductPage;
