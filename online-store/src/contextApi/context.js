import {
	createContext,
	useContext,
	useReducer,
	useState,
} from "react";
import axios from "axios";
import product2 from "../assets/products/2.png";
import { PRODUCTS } from "../products";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
	const [products, setProducts] = useState([]);
	const [clone, setClone] = useState([]);
	const [quantity, setquantity] = useState(1);
	const [product, setproduct] = useState([]);
	const [productInCart, setProductInCart] =
		useState(Boolean);

	const [cartItems] = useState(
		localStorage.getItem("Cart")
			? JSON.parse(localStorage.getItem("Cart"))
			: [],
	);

	// setcartItems

	const [cart, setCart] = useState(
		cartItems.length,
	);

	const cartFunc = () => {};
	const getAllProducts = async () => {
		await setProducts(PRODUCTS);
	};

	const getSingleProduct = async (id) => {
		const data = PRODUCTS.filter((product) => {
			return product.id == id;
		});
		await setproduct(data);
	};

	const getClothes = async () => {
		const data = PRODUCTS.filter((product) => {
			return product.category == "clothes";
		});
		console.log(data);
		await setProducts(data);
	};

	const getShoes = async () => {
		const data = PRODUCTS.filter((product) => {
			return product.category == "shoes";
		});
		console.log(data);
		await setProducts(data);
	};

	const getWatches = async () => {
		const data = PRODUCTS.filter((product) => {
			return product.category == "watches";
		});
		console.log(data);
		await setProducts(data);
	};

	const getGadgets = async () => {
		const data = PRODUCTS.filter((product) => {
			return product.category == "gadgets";
		});
		console.log(data);
		await setProducts(data);
	};

	const inc = () => {
		updateCart();
		setquantity(quantity + 1);
	};

	const dec = () => {
		updateCart();
		setquantity(quantity - 1);
	};

	function updateCart() {}

	const addToCart = (index, quantity) => {
		const productExist = cartItems.find(
			(item) => item.id == index,
		);
		if (productExist) {
			return null;
		} else {
			let data = PRODUCTS.filter((p) => {
				return p.id === index;
			});

			data = data.map((d) => {
				d.quantity = quantity;
				d.isAddedToCart = true;
				cartItems.push(d);
				localStorage.setItem(
					"Cart",
					JSON.stringify(cartItems),
				);
				return null;
			});

			console.log(cartItems);

			setCart(cartItems.length);
		}
	};

	const removeFromCart = (index, quantity) => {
		let data = cartItems.filter((p) => {
			return p.id === index;
		});

		console.log(data);

		// 	data = data.map((d) => {
		// 		d.quantity = quantity;
		// 		cartItems.push(d);
		// 		localStorage.setItem(
		// 			"Cart",
		// 			JSON.stringify(cartItems),
		// 		);
		// 		return null;
		// 	});

		// 	console.log(cartItems);

		// 	setCart(cartItems.length);
		// }
	};

	const checkProductInCart = (index) => {
		let data = cartItems.filter((p) => {
			return p.id == index;
		});
		if (data.length == 1) {
			setProductInCart(true);
		} else {
			setProductInCart(false);
		}
		console.log(productInCart);
	};

	return (
		<AppContext.Provider
			value={{
				getGadgets,
				getWatches,
				getShoes,
				getClothes,
				getAllProducts,
				productInCart,
				addToCart,
				removeFromCart,
				cart,
				products,
				product,
				checkProductInCart,
				cartItems,
				// setcartItems,
				getSingleProduct,
				inc,
				dec,
				quantity,
				setquantity,
			}}>
			{children}
		</AppContext.Provider>
	);
}
