const express = require("express");
require("dotenv").config();
const stripe = require("stripe")(
	process.env.SECRET_KEY,
);
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(
	cors({
		origin: "http://localhost:3000",
	}),
);

const YOUR_DOMAIN = "http://localhost:3000";

// const products = [
// 	{ name: "shoe", quantity: 1, price: 20 },
// 	{ name: "clothes", quantity: 5, price: 25 },
// ];

app.post(
	"/create-checkout-session",
	async (req, res) => {
		products = req.body;
		try {
			const session =
				await stripe.checkout.sessions.create({
					payment_method_types: ["card"],
					line_items: products.map((product) => {
						return {
							price_data: {
								currency: "usd",
								product_data: {
									name: product.name,
								},
								unit_amount:
									product.line_total.raw * 100,
							},
							quantity: product.quantity,
						};
					}),
					mode: "payment",
					success_url: `${YOUR_DOMAIN}?success=true`,
					cancel_url: `${YOUR_DOMAIN}?canceled=true`,
				});

			res.json({ url: session.url });
		} catch (e) {
			res.status(500).json({ error: e.message });
			console.log(e.message);
		}
	},
);

app.listen(5500, () => {
	console.log(`running on port ${5500}`);
});
