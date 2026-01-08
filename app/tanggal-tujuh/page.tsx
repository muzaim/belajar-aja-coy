import React from "react";

const TanggalTujuh = () => {
	const today = new Date();
	const dayOfWeek = today.getDate();

	const startWeek = new Date(today);
	startWeek.setDate(dayOfWeek - today.getDay());

	const week = [...Array(7)].map((_, i) => {
		const date = new Date();
		date.setDate(startWeek.getDate() + i);

		return date;
	});

	const handleClick = (date: Date) => {
		alert(date.toDateString());
	};

	return (
		<div className="grid grid-cols-7">
			{week.map((date, i) => {
				const isToday = date.getDate() === today.getDate();
				return (
					<div
						key={i}
						onClick={() => handleClick(date)}
						className={`text-center py-10 border ${
							isToday ? "bg-red-700" : ""
						}`}
					>
						{date.toDateString()}
					</div>
				);
			})}
		</div>
	);
};

export default TanggalTujuh;
