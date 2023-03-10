import { createContext, useState } from "react";
import Commerce from "@chec/commerce.js";

export const CommmerceContext = createContext();

export function CommerceContextProvider({
	children,
}) {
	const commerce = new Commerce(
		process.env.REACT_APP_PUBLIC_KEY,
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
	const [isLoading, setIsLoading] =
		useState(false);

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
		await commerce.cart
			.add(id, 1)
			.then((response) => {
				setNumberInCart(response.total_items);
			});
	};

	const getCartContents = async () => {
		setIsLoading(true);
		await commerce.cart
			.retrieve()
			.then((cart) => {
				setCartList(cart.line_items);
				setSubTotal(cart.subtotal.raw);
				setCartLength(cart.total_items);
				setIsLoading(false);
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
				let catSlug = category.slug;
				let catDetails = products.filter(
					(product) => {
						return (
							product.categories[0].slug ==
							catSlug
						);
					},
				);

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
				isLoading,
				numberInCart,
			}}>
			{children}
		</CommmerceContext.Provider>
	);
}
