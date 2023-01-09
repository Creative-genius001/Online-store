import { useContext, useEffect } from "react";
import CartCard from "../components/CartCard";
import Navbar from "../components/Navbar";
import { AppContext } from "../contextApi/context";
import {
	BsArrowLeftShort,
	BsArrowRightShort,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Cart = () => {
	const { getSingleProduct, cartItems } =
		useContext(AppContext);

	return (
		<>
			<Navbar />
			<div className="w-full h-[100vh] bg-white ">
				{cartItems.length !== 0 ? (
					<div className="cart-container  ">
						<div className="cart-cards">
							<h3 className="font-semibold text-[1.4rem] mb-6 ">
								Cart({cartItems.length})
							</h3>

							{[cartItems]?.map((item) => {
								return <CartCard item={item} />;
							})}
						</div>
						<div className="w-[70%] mx-auto mt-4 flex  justify-between items-start mb-16 ">
							<div className="flex items-center cursor-pointer">
								<BsArrowLeftShort className="font-bold text-[1.2rem]" />
								<p className="font-medium ml-[5px] hover:underline ">
									Continue to Shopping
								</p>
							</div>

							<div className="flex flex-col">
								<p>
									Subtotal:{" "}
									<span className="font-semibold">
										$20000
									</span>
								</p>
								<button className=" mt-2 bg-[#FE6263] w-auto px-4 h-[40px] cursor-pointer text-white font-medium text-[0.8rem] flex items-center transition-all ease-in-out  hover:bg-neutral-900">
									Proceed to Checkout{" "}
									<BsArrowRightShort />
								</button>
							</div>
						</div>
						{/* <div className="cart-info">
						<h3 className="font-semibold text-[1.2rem]  ">
							Cart Summary
						</h3>
						<hr></hr>
						<div className="font-semibold text-[1rem] w-100 px-2 mt-4 flex flex-row items-center justify-between">
							<p className=" ">Subtotal:</p>
							<span>$20000</span>
						</div>
						<button className=" mt-4 bg-black w-full h-[50px] cursor-pointer text-white font-medium text-[0.8rem]  hover:bg-neutral-900">
							Proceed to Checkout
						</button>
					</div> */}
					</div>
				) : (
					<div className="w-[95%] h-[100vh] mx-auto flex flex-col justify-center items-center ">
						<h3>Your cart is empty!</h3>
						<p>
							Browse our categories and discover
							our best deals!
						</p>
						<div className="flex items-center cursor-pointer mt-4">
							<BsArrowLeftShort className="font-bold text-[1.2rem] text-[#FE6263] " />
							<Link to="/">
								<p className="font-medium text-[#FE6263] hover:underline ">
									Continue to Shopping
								</p>
							</Link>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Cart;
