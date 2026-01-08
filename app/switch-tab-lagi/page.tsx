import React, { useState } from "react";
import Popular from "../components/Popular";
import New from "../components/New";
import Trending from "../components/Trending";

const SwitchTabLagi = () => {
	const tabPage = {
		popular: <Popular />,
		new: <New />,
		trending: <Trending />,
	};

	const tabKeys = Object.keys(tabPage);
	const [selectedTab, setSelectedTab] = useState(tabKeys[0]);

	const handleClick = (tab) => {
		setSelectedTab(tab);
	};
	return (
		<div>
			<div className="grid grid-cols-3 text-center py-10 border-b border-b-sky-300">
				{tabKeys.map((tab, i) => {
					return (
						<div key={i} onClick={() => handleClick(tab)}>
							{tab}
						</div>
					);
				})}
			</div>
			<div>{tabPage[selectedTab]}</div>
		</div>
	);
};

export default SwitchTabLagi;
