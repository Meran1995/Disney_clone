import styled from 'styled-components';

const Detail = (props) => {
	return (
		<Container>
			<Background>
				<img
					alt=''
					src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F6CDB6C0EB2D77EB19BCADA31F85066E001A1F61FA68F4AC3356A73FE076477F/scale?width=1440&aspectRatio=1.78&format=jpeg'
					/>
			</Background>
		</Container>
	);
};

const Container = styled.div`
	position: relative;
	min-height: calc(100vh - 250px);
	overflow: hidden;
	display: block;
	top: 72px;
	padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
	left: 0px;
	opdacity: 0.8;
	position: fixed;
	right: 0px;
	top: 0px;
	z-index: -1;

	img {
		width: 100vw;
		height; 100vh;

		@media (max-width: 768px) {
			width: initial;
		}
	}
`;
export default Detail;
