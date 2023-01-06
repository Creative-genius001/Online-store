import { useContext } from "react";
import { IoMdTrash } from "react-icons/io";
import {
	AiOutlineMinus,
	AiOutlinePlus,
} from "react-icons/ai";
import { AppContext } from "../contextApi/context";

const CartCard = ({ items }) => {
	const { inc, dec } = useContext(AppContext);
	return (
		<>
			<div className="cart-card w-100 px-2 flex flex-row mb-4 ">
				<div className="cart-img">
					<img
						src={items.image}
						alt={items.title}
						className="img w-full h-full object-cover "
					/>
				</div>
				<div className="cart-detail">
					<div className="cart-top">
						<div className="cart-name text-[0.9rem] mr-8 font-medium leading-tight">
							{items.title}
						</div>
						<div className="cart-price text-[0.8rem] font-bold text-[#FE6263]">
							{items.price}
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
								value="2"
								name="qty"
								className="input-qty"
							/>
							<button
								className="btn-qty"
								onClick={inc}>
								+
							</button>
						</div>
						<IoMdTrash className="text-[1.2rem]  text-slate-900" />
					</div>
				</div>
			</div>
		</>
	);
};

export default CartCard;
