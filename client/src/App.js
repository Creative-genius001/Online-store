import axios from "axios";
import { Homepage } from "./pages/Homepage";
import { useEffect, useState } from "react";
import ProductPage from "./pages/ProductPage";
import { AppContextProvider } from "./contextApi/context";
import { CommerceContextProvider } from "./contextApi/commerceAPI";
import {
	Routes,
	Route,
	BrowserRouter,
} from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
	return (
		<CommerceContextProvider>
			<AppContextProvider>
				<BrowserRouter>
					<Routes>
						<Route
							path="/"
							element={<Homepage />}
						/>

						<Route
							path="/product/:category/:id"
							element={<ProductPage />}
						/>
						<Route
							path="/cart/"
							element={<Cart />}
						/>
					</Routes>
				</BrowserRouter>
			</AppContextProvider>
		</CommerceContextProvider>
	);
}

export default App;
