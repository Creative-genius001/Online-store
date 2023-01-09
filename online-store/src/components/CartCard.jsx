import { useContext } from "react";
import { IoMdTrash } from "react-icons/io";
import product4 from "../assets/products/4.png";
import product5 from "../assets/products/5.png";
import {
	AiOutlineMinus,
	AiOutlinePlus,
} from "react-icons/ai";
import { AppContext } from "../contextApi/context";

const CartCard = ({ item }) => {
	const { inc, dec, quantity, removeFromCart } =
		useContext(AppContext);

	return (
		<>
			{item?.map((i) => {
				return (
					<div className="cart-card w-100 flex flex-row mb-8 justify-between items-center mt-2  ">
						<div className="cart-img mr-[1rem]  ">
							<img
								src={i.image}
								alt={i.name}
								className="img w-full h-full object-contain "
							/>
						</div>
						<div className="cart-detail">
							<div className="cart-top">
								<div className="cart-name text-[1.2rem] mr-8 font-medium leading-tight">
									{i.name}
								</div>
								<div className="cart-price text-[1.1rem] font-semibold text-black">
									${i.price}
								</div>
							</div>
							<div className="cart-bottom">
								<div className="cart-qty">
									<button
										className="btn-qty"
										onClick={dec}>
										-
									</button>
									<input
										type="text"
										value={i.quantity}
										name="qty"
										className="input-qty"
									/>
									<button
										className="btn-qty"
										onClick={() =>
											inc(i.id, i.quantity)
										}>
										+
									</button>
								</div>
								<IoMdTrash
									onClick={() =>
										removeFromCart(i.id)
									}
									className="text-[1.6rem]  text-slate-900 cursor-pointer"
								/>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default CartCard;
