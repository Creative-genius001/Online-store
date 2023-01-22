import { useState } from "react";

import { BsSortDown } from "react-icons/bs";

const Categories = ({
	getSingleCat,
	allCategories,
	getProducts,
}) => {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			<span className="mr-2 font-medium">
				Filter
			</span>
			<BsSortDown
				className="cursor-pointer "
				onMouseOver={() => setToggle(!toggle)}
			/>
			{toggle ? (
				<ul className="sort-ul">
					<li
						onClick={getProducts}
						className="sort-li">
						All Items
					</li>
					{allCategories?.map((cat, index) => {
						return (
							<li
								key={index}
								onClick={() =>
									getSingleCat(cat.id)
								}
								className="sort-li">
								{cat.name}
							</li>
						);
					})}
				</ul>
			) : (
				<></>
			)}
		</>
	);
};

export default Categories;
