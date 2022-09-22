import '../Theme/Base.scss';
import FadeLoader from 'react-spinners/FadeLoader';

export const LoadingPage = () => {
	const color: string = '#457b9d';

	return (
		<div className="Page flex just-cent align-cent">
			<FadeLoader color={color} />
		</div>
	);
};

export default LoadingPage;
