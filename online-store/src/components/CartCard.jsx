import { useContext } from "react";
import { IoMdTrash } from "react-icons/io";
import {
	AiOutlineMinus,
	AiOutlinePlus,
} from "react-icons/ai";
import { CommmerceContext } from "../contextApi/commerceAPI";

const CartCard = ({ item }) => {
	const {
		deleteItemFromCart,
		updateCartInc,
		updateCartDec,
	} = useContext(CommmerceContext);

	return (
		<>
			<div className="cart-card w-100 flex flex-row mb-8 justify-between items-center mt-2  ">
				<div className="cart-img mr-[1rem]  ">
					<img
						src={item.image.url}
						alt={item.name}
						className="img w-full h-full object-contain "
					/>
				</div>
				<div className="cart-detail">
					<div className="cart-top">
						<div className="cart-name text-[1.2rem] mr-8 font-medium leading-tight">
							{item.name}
						</div>
						<div className="cart-price text-[1.1rem] font-semibold text-black">
							${item.line_total.raw}
						</div>
					</div>
					<div className="cart-bottom">
						<div className="cart-qty">
							<button
								className="btn-qty"
								onClick={() =>
									updateCartDec(
										item.id,
										item.quantity,
									)
								}>
								-
							</button>
							<input
								type="text"
								value={item.quantity}
								name="qty"
								className="input-qty"
							/>
							<button
								className="btn-qty"
								onClick={() =>
									updateCartInc(
										item.id,
										item.quantity,
									)
								}>
								+
							</button>
						</div>
						<IoMdTrash
							onClick={() =>
								deleteItemFromCart(item.id)
							}
							className="text-[1.6rem]  text-slate-900 cursor-pointer hover:text-[#FE6263] "
						/>
					</div>
				</div>
			</div>
			);
		</>
	);
};

export default CartCard;
