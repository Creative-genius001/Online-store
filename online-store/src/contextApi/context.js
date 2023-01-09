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
	const [products, setProducts] =
		useState(PRODUCTS);
	const [clone, setClone] = useState([]);
	const [quantity, setquantity] = useState("1");
	const [product, setproduct] = useState([]);
	const [productInCart, setProductInCart] =
		useState(Boolean);

	let cartItems = localStorage.getItem("Cart")
		? JSON.parse(localStorage.getItem("Cart"))
		: [];

	// setcartItems

	const [cart, setCart] = useState(
		cartItems.length,
	);

	const cartFunc = () => {};
	const getAllProducts = async () => {
		await setProducts(PRODUCTS);
	};

	const getSingleProduct = async (id) => {
		let data = cartItems.filter((product) => {
			return product.id == id;
		});

		console.log(data[0]);
		if (data.length != 0) {
			setproduct(data);
		} else {
			data = products.filter((product) => {
				return product.id == id;
			});
			setproduct(data);
		}
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

	const inc = (index, quantity) => {
		updateCart(index, quantity);
		setquantity(quantity + 1);
	};

	const dec = () => {
		updateCartDec();
		setquantity(quantity - 1);
	};
	function updateCartDec(index, quantity) {}

	function updateCart(index, quantity) {
		// console.log(data[num]);

		// let cart = [...cartItems];
		// let num2 = cart.findIndex(
		// 	(arg) => arg.id == index,
		// );

		// if (num2) {
		// 	cart[num2].quantity++;
		// 	cartItems = [];
		// 	cartItems.push(cart);
		// 	localStorage.setItem(
		// 		"Cart",
		// 		JSON.stringify(cartItems),
		// 	);
		// } else {
		let data = [...products];
		let num = data.findIndex(
			(arg) => arg.id == index,
		);
		data[num].quantity++;

		// data = data.filter((d) => d.id === index);
		// data = data.map((d) => {
		// 	d.quantity++;
		// 	console.log(d);
		// });
		//data[num].value++;

		// cartItems.push(productExist);
		// localStorage.setItem(
		// 	"Cart",
		// 	JSON.stringify(cartItems),
		// );
	}

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
				d.isAddedToCart = true;
				cartItems.push(d);
				localStorage.setItem(
					"Cart",
					JSON.stringify(cartItems),
				);
				return null;
			});

			setProductInCart(true);

			setCart(cartItems.length);
		}
	};

	const removeFromCart = (index) => {
		let data = cartItems.filter((p) => {
			return p.id !== index;
		});

		if (data.length <= 0) {
			cartItems = [];
			localStorage.removeItem("Cart");
		} else {
			cartItems = [];
			cartItems.push(data);
			localStorage.setItem(
				"Cart",
				JSON.stringify(data),
			);
		}
		console.log(cartItems);
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
