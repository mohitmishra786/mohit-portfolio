import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/argon-design-system-react.css";
import "../styles/styles.css";
import "../styles/vendor/font-awesome/css/font-awesome.min.css";
import "../styles/vendor/nucleo/css/nucleo.css";
import { Analytics } from '@vercel/analytics/next';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<Analytics />
		</>
	);
}

export default MyApp;
