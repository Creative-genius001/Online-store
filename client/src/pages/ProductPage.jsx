import { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { CommmerceContext } from "../contextApi/commerceAPI";
import Loader from "../components/Loader";

const ProductPage = () => {
	const { product, getProduct, addToCart } =
		useContext(CommmerceContext);

	const params = useParams();

	useEffect(() => {
		getProduct(params.id);
		// checkProductInCart(params.id);
	}, []);

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
									className="flex flex-row justify-evenly ">
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
												<h2 className="text-[3rem] font-semibold leading-tight ">
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
												<span className="text-[1rem]">
													{p.description}
												</span>
											</div>

											{/* quantity section */}

											{/* <div className=" mt-4 mx-auto flex flex-row items-center">
												<h5 className="font-semibold text-[1rem] mr-1">
													Quantity:
												</h5>
												<button
													disabled={
														quantity === 1
													}
													onClick={dec}
													className="btn-qty">
													-
												</button>
												<input
													type="text"
													value={
														p.quantity
															? p.quantity
															: 1
													}
													name="qty"
													className="input-qty"
												/>
												<button
													onClick={() =>
														inc(p.id, p.quantity)
													}
													className="btn-qty">
													+
												</button>
											</div> */}
											{
												// <button
												// 	disabled
												// 	onClick={() =>
												// 		addToCart(
												// 			p.id,
												// 			p.quantity,
												// 		)
												// 	}
												// 	className="addTocartBtn mt-4 bg-white  h-[50px] cursor-not-allowed text-black font-medium text-[0.8rem] border border-black ">
												// 	Added To cart
												// </button>

												<button
													onClick={() =>
														addToCart(p.id)
													}
													className="addTocartBtn mt-4 bg-black  h-[50px] cursor-pointer text-white font-medium text-[0.8rem] hover:bg-neutral-900  ">
													Add To cart
												</button>
											}
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
			<Footer />
		</div>
	);
};

export default ProductPage;
