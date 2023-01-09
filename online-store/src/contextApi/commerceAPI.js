import {
	createContext,
	useContext,
	useState,
} from "react";
import Commerce from "@chec/commerce.js";

export const CommmerceContext = createContext();

export function CommerceContextProvider({
	children,
}) {
	const commerce = new Commerce(
		"pk_496258b2506ef25539f948fae98472e256aac416b6853",
	);
	const [products, setProducts] = useState([]);
	const [product, setProduct] = useState([]);
	const [pro, setPro] = useState([]);
	const [numberInCart, setNumberInCart] =
		useState(0);

	let ress;
	const getProducts = async () => {
		await commerce.products
			.list()
			.then((product) => {
				setProducts(product.data);
			});
	};
	const getProduct = async (id) => {
		await commerce.products
			.retrieve(id)
			.then((res) => {
				setProduct([res]);
			});
	};

	const addToCart = async (id) => {
		commerce.cart
			.retrieve()
			.then((cart) => console.log(cart));
		commerce.cart.add(id, 1).then((response) => {
			setNumberInCart(response.total_items);
		});
	};
	return (
		<CommmerceContext.Provider
			value={{
				getProducts,
				addToCart,
				getProduct,
				products,
				product,
				numberInCart,
			}}>
			{children}
		</CommmerceContext.Provider>
	);
}
