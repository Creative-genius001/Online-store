import { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { AppContext } from "../contextApi/context";
import { Footer } from "../components/Footer";

const ProductPage = () => {
	const {
		product,
		getSingleProduct,
		inc,
		dec,
		quantity,
		setquantity,
		addToCart,
		removeFromCart,
	} = useContext(AppContext);
	const params = useParams();

	useEffect(() => {
		setquantity(0);
		getSingleProduct(params.id);
		console.log(product);
	}, []);

	return (
		<div className="">
			<Navbar />
			<div className="w-[95%] mx-auto mt-4">
				{product?.map((p) => {
					return (
						<>
							<div className="flex flex-row justify-evenly ">
								<div className="pro-card w-[500px] h-[500px] bg-[#d3d2d2]">
									<img
										src={p.image}
										alt={p.name}
										className="w-full h-full object-cover"
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
													Category:
												</span>
												{p.category}
											</h5>
											<h5 className="text-black font-semibold text-[1.8rem] mt-2 ">
												${p.price}
											</h5>
										</div>
										<div className="mt-2 ">
											<h5 className="font-bold text-[1.2rem]">
												Product Info
											</h5>
											<p className="text-[1rem]">
												{p.description}
											</p>
										</div>
										<div className=" mt-4 mx-auto flex flex-row items-center">
											<h5 className="font-semibold text-[1rem] mr-1">
												Quantity:
											</h5>
											<button
												disabled={quantity === 0}
												onClick={dec}
												className="btn-qty">
												-
											</button>
											<input
												type="text"
												value={quantity}
												onChange=""
												name="qty"
												className="input-qty"
											/>
											<button
												onClick={inc}
												className="btn-qty">
												+
											</button>
										</div>
										<button
											disabled={quantity === 0}
											onClick={() =>
												addToCart(product)
											}
											className="addTocartBtn mt-4 bg-black  h-[50px] cursor-pointer text-white font-medium text-[0.8rem] hover:bg-neutral-900  ">
											Add To cart
										</button>
									</div>
								</div>
							</div>
						</>
					);
				})}

				{/* {added ? (
					<button
						onClick={() =>
							removeFromCart(product)
						}
						className=" mt-4 bg-slate-700 w-full h-[40px] cursor-pointer text-white font-medium text-[0.8rem] rounded-md">
						REMOVE
					</button>
				) : (
					<button
						disabled={quantity === 0}
						onClick={() => addToCart(product)}
						className="btn-shadow mt-4 bg-[#FE6263] w-full h-[40px] cursor-pointer text-white font-medium text-[0.8rem] rounded-md  hover:bg-[#ec525a]">
						ADD TO CART
					</button>
				)} */}
			</div>
			<Footer />
		</div>
	);
};

export default ProductPage;
