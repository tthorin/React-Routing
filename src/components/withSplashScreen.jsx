import "./withSplashScreen.css";
import { useState, useEffect } from 'react';


const SplashScreen = () => {
	return (
		<div>
			<img src="../images/splash.png" alt="ugly splash screen" />
		</div>
	)
}

const withSplashScreen = (Component) => {
	const [showSplashScreen, setShowSplashScreen] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setShowSplashScreen(false);
		}, 2000);
	})

	if (showSplashScreen) {
		return <SplashScreen />
	}
	return <Component />
}

export default withSplashScreen;