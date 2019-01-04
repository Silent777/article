import styled from 'styled-components'

export const Button = styled.div`
	color: #fff;
	background: #ec6088;
	font-weight: 900;
	padding: 12px 22px;
	border-radius: 50px;
	display: inline-block;
	border: none;
	cursor: pointer;
	display: inline-flex;
	&:hover {
	text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
	box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
	transition: all 0.4s ease 0s;
	}
	${p => p.enabled
? 
	`
	background-color: #ec6088;
	`
:
	`	
	background-color: #d3d3d3;
	pointer-events: none;
	`}
	@media screen and (max-width: 780px) {
		width: 100%;
		display: inline-block;
		text-align: center;
		margin: 20px 0 0;
		padding: 12px 0;
  }
`

export const StyledFont = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-right: 20px;
`