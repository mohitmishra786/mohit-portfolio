import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

const GreetingLottie = ({ animationPath }) => {
	const [animationData, setAnimationData] = useState(null);

	useEffect(() => {
		fetch(animationPath)
			.then((res) => res.json())
			.then((data) => setAnimationData(data));
	}, [animationPath]);

	if (!animationData) {
		return null;
	}

	return (
		<div onClick={() => null}>
			<Lottie animationData={animationData} loop={true} autoplay={true} />
		</div>
	);
};

export default GreetingLottie;
