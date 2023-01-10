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
	const [cartList, setCartList] = useState([]);
	const [cartLength, setCartLength] = useState();
	const [allCategories, setAllCategories] =
		useState([]);
	const [subTotal, setSubTotal] = useState();
	const [numberInCart, setNumberInCart] =
		useState(0);

	const getCartNumber = async () => {
		await commerce.cart
			.retrieve()
			.then((cart) => {
				setNumberInCart(cart.total_items);
			});
	};

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
		commerce.cart.add(id, 1).then((response) => {
			setNumberInCart(response.total_items);
		});
	};

	const getCartContents = async () => {
		// await commerce.cart
		// 	.contents()
		// 	.then((items) => setCartList(items));
		await commerce.cart
			.retrieve()
			.then((cart) => {
				setCartList(cart.line_items);
				setSubTotal(cart.subtotal.raw);
				setCartLength(cart.total_items);
			});
	};

	const deleteItemFromCart = async (id) => {
		await commerce.cart
			.remove(id)
			.then((response) => {
				setCartList(response.line_items);
				setSubTotal(response.subtotal.raw);
			});
	};

	const getAllCategories = async () => {
		await commerce.categories
			.list()
			.then((category) =>
				setAllCategories(category.data),
			);
	};

	const getSingleCat = async (id) => {
		await commerce.categories
			.retrieve(id)
			.then((category) => {
				console.log(category.slug);
				let catName = category.slug;
				let catDetails = products.filter(
					(product) => {
						return (
							product.categories[0].slug ==
							catName
						);
					},
				);
				console.log(catDetails);
				setProducts(catDetails);
			});
	};

	async function updateCartInc(id, quantity) {
		quantity = quantity + 1;
		await commerce.cart
			.update(id, {
				quantity,
			})
			.then((response) =>
				setSubTotal(response.subtotal.raw),
			);
	}

	async function updateCartDec(id, quantity) {
		quantity = quantity - 1;
		await commerce.cart
			.update(id, {
				quantity: quantity--,
			})
			.then((response) =>
				setSubTotal(response.subtotal.raw),
			);
	}

	return (
		<CommmerceContext.Provider
			value={{
				updateCartInc,
				updateCartDec,
				cartLength,
				getCartNumber,
				getAllCategories,
				allCategories,
				getSingleCat,
				deleteItemFromCart,
				cartList,
				subTotal,
				getCartContents,
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
