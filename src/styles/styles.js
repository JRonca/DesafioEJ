import styled from 'styled-components';
import {shade} from 'polished';
export const Title = styled.h1`
	font-size: 48px;
	color: #3A3A3A;
  margin:auto;
  text-align:center;
	max-width:450px;
`;

export const Form = styled.form`
  margin:5px;
  margin-top:40px;
	display:flex;
	input{
		flex: 1;
		height:70px;
		padding:0 24px;
		border: 0;
		border-radius: 5px;
		color:#3a3a3a;
		border: 2px solid #FFF;
    margin-right:30px;
		&::placeholder{
			color:#a8a8b3;
		}
	}
	button{
		width:400px;
		height:70px;
		background:#04D361;
		border-radius:5px;
    border: 0;
		color:#FFF;
		font-weight:bold;
		transition: background-color 0.2s;
		&:hover{
			background:${shade(0.2,'#04D361')};
		}
	}
`;
export const Table = styled.table`
  width:800px;
	border-collapse: collapse; /* CSS2 */
  background: #FFFFF0;
  margin:auto;
  margin-top:50px;
  tr{
    width:100%;
    display:flex;
    border: 1px solid black;
    td{
      flex:0.5;
      padding:10px;
      border: 1px solid black;
      background: #F0FFF0;
    }
  }
`;