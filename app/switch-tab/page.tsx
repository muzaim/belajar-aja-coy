import React, { useState } from "react";
import Popular from "../components/Popular";
import New from "../components/New";
import Trending from "../components/Trending";

const SwitchTab = () => {
	type TabKeys = "popular" | "new" | "trending";

	const tabPage = {
		popular: <Popular />,
		new: <New />,
		trending: <Trending />,
	};

	const tabKeys: TabKeys[] = Object.keys(tabPage) as TabKeys[];
	const [selectedTab, setSelectedTab] = useState(tabKeys[0]);

	const handleClick = (tab: TabKeys) => {
		setSelectedTab(tab);
	};

	return (
		<div>
			<div className="grid grid-cols-3">
				{tabKeys.map((tab, i) => {
					return (
						<div
							key={i}
							className="text-center py-10 border-b-2"
							onClick={() => handleClick(tab)}
						>
							{tab}
						</div>
					);
				})}
			</div>
			<div className="mt-4">{tabPage[selectedTab]}</div>
		</div>
	);
};

export default SwitchTab;
