import styled from 'styled-components';
import { auth, provider } from '../firebase';

const Header = (props) => {
	const handleAuth = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	return (
		<Nav>
			<Logo>
				<img src='/images/logo.svg' alt='' />
			</Logo>
			<NavMenu>
				<a href='/home'>
					<img src='/images/home-icon.svg' alt='HOME'></img>
					<span>HOME</span>
				</a>
				<a href='/search'>
					<img src='/images/search-icon.svg' alt='SEARCH'></img>
					<span>SEARCH</span>
				</a>
				<a href='/watchlist'>
					<img src='/images/watchlist-icon.svg' alt='WATCHLIST'></img>
					<span>WATCHLIST</span>
				</a>
				<a href='/originals'>
					<img src='/images/original-icon.svg' alt='ORIGINALS'></img>
					<span>ORIGINALS</span>
				</a>
				<a href='/movies'>
					<img src='/images/movie-icon.svg' alt='MOVIES'></img>
					<span>MOVIES</span>
				</a>
				<a href='/series'>
					<img src='/images/series-icon.svg' alt='SERIES'></img>
					<span>SERIES</span>
				</a>
			</NavMenu>
			<Login onClick={handleAuth}>Login</Login>
		</Nav>
	);
};

const Nav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 70px;
	background-color: #090b13;
	display: flex;
	justify-content: space-space-between;
	align-items: center;
	padding: 0 36px;
	letter-spacing: 16px;
	z-index: 3;
`;

const Logo = styled.a`
	padding: 0;
	width: 90px;
	margin-top: 1px;
	max-height: 70px;
	font-size: 0;
	display: inline-block;

	img {
		display: block;
		width: 100%;
	}
`;

const NavMenu = styled.div`
	display: flex;
	align-items: center;
	flex-flow: row nowrap;
	height: 100%;
	justify-content: flex-end;
	margin: 0;
	padding: 0;
	position: relative;
	margin-right: auto;
	margin-left: 25px;

	a {
		display: flex;
		align-items: center;
		padding: 0 12px;

		img {
			height: 20px;
			min-width: 20px;
			width: 20px;
			z-index: auto;
		}

		span {
			color: rgb(249, 249, 249);
			font-size: 14px;
			margin: 3px 0 0 5px;
			letter-spacing: 1.5px;
			line-height: 1.1;
			padding: 2px 0;
			white-space: nowrap;
			position: relative;

			&::before {
				content: '';
				right: 0;
				left: 0;
				background-color: rgb(249, 249, 249);
				border-radius: 0 0 4px 4px;
				bottom: -6px;
				height: 2px;
				width: auto;
				opacity: 0;
				position: absolute;
				transform-origin: left center;
				transform: scaleX(0);
				transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
				visibility: hidden;
			}
		}

		&:hover {
			span:before {
				transform: scaleX(1);
				visibility: visible;
				opacity: 1 !important;
			}
		}
	}
	/* @media (max-width: 768px) {
		display: none;
	} */
`;

const Login = styled.a`
	background-color: rgb(0, 0, 0, 0.6);
	padding: 8px 16px;
	text-transform: uppercase;
	letter-spacing: 1.5px;
	border: 1px solid #9f9f9f;
	border-radius: 4px;
	transition: all 0.2s ease 0s;

	&:hover {
		background-color: #fff;
		color: #000;
		border-color: transparent;
	}
`;
export default Header;
