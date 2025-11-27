import styled from "styled-components";
import fundoImg from "../../assets/images/img-login.jpg";

export const FundoFundo = styled.div`
background-color: #252323;
  position: absolute;
  background-image: url(${fundoImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  z-index: 0;
`;

export default function Fundo() {
  return (
    <FundoFundo/>
  );
}
