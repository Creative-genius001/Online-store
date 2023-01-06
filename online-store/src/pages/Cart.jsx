import { useContext, useEffect } from "react";
import CartCard from "../components/CartCard";
import Navbar from "../components/Navbar";
import { AppContext } from "../contextApi/context";

const Cart = () => {
	const { getSingleProduct, cartItems } =
		useContext(AppContext);

	return (
		<>
			<Navbar />
			{cartItems.map((item) => {
				return <CartCard items={item} />;
			})}

			<div className="font-semibold text-[0.9rem] w-100 px-2 mt-8 flex flex-row items-center justify-between">
				<p className=" ">Subtotal:</p>
				<span>$200</span>
			</div>
			<button className="btn-shadow mt-4 bg-[#FE6263] w-full h-[40px] cursor-pointer text-white font-medium text-[0.8rem] rounded-md  hover:bg-[#ec525a]">
				Proceed to Checkout
			</button>
		</>
	);
};

export default Cart;
