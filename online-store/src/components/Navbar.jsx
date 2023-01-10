import { useContext, useEffect } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { CommmerceContext } from "../contextApi/commerceAPI";
import { Link } from "react-router-dom";

const Navbar = () => {
	const { numberInCart, getCartNumber } =
		useContext(CommmerceContext);

	useEffect(() => {
		getCartNumber();
	}, [numberInCart]);

	return (
		<div className="w-[100%] sticky top-0 bg-white z-50 ">
			<div className="w-[95%] mx-auto py-4 flex flex-row items-center justify-between h-14 ">
				<Link to="/">
					<h1 className="text-left text-[1.5rem] font-extrabold text-black ">
						Online Store.
					</h1>
				</Link>

				<Link to="/cart">
					<AiOutlineShopping className="text-[1.5rem]" />
					<div className="bg-[#FE6263] rounded-[50%] absolute p-2 flex align-middle items-center justify-center h-[18px] w-[18px] right-6 top-3">
						<span className="font-bold text-white text-[0.6rem] ">
							{numberInCart}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
