import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Trending = () => {
	return (
		<Container>
			<h4>Trending Content</h4>
			<Content>
				<Wrap>
					<Link to=''>
						<img
							src='https://static.posters.cz/image/1300/posters/marvel-captain-america-i34925.jpg'
							alt=''
						/>
					</Link>
				</Wrap>
				<Wrap>
					<Link to=''>
						<img
							src='https://static.posters.cz/image/1300/posters/marvel-captain-america-i34925.jpg'
							alt=''
						/>
					</Link>
				</Wrap>
				<Wrap>
					<Link to=''>
						<img
							src='https://static.posters.cz/image/1300/posters/marvel-captain-america-i34925.jpg'
							alt=''
						/>
					</Link>
				</Wrap>
				<Wrap>
					<Link to=''>
						<img
							src='https://static.posters.cz/image/1300/posters/marvel-captain-america-i34925.jpg'
							alt=''
						/>
					</Link>
				</Wrap>
			</Content>
		</Container>
	);
};

const Container = styled.div`
	padding: 0 0 26px;
`;

const Content = styled.div`
	display: grid;
	grid-gap: 25px;
	gap: 25px;
	grid-template-columns: repeat(4, minmax(0, 1fr));

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
`;

const Wrap = styled.div`
	padding-top: 57%;
	border-radius: 10px;
	box-shadow: rgb(0 0 0 / 70%) 0 25px 38px -10px,
		rgb(0 0 0 / 73%) 0 16px 10px -10px;
	cursor: pointer;
	overflow: hidden;
	position: relative;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
	border: 3px solid rgba(249, 249, 249, 0.1);

	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 1;
		position: absolute;
		transition: opacity 500ms ease-in-out 0s;
		z-index: 1;
		top: 0;
	}

	&:hover {
		box-shadow: rgb(0 0 0 / 70%) 0 25px 38px -10px,
			rgb(0 0 0 / 73%) 0 16px 10px -10px;
		transform: scale(1.05);
		border: 3px solid rgba(249, 249, 249, 0.8);
	}
`;
export default Trending;
