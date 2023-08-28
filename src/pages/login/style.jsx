import styled from "styled-components";

export const Style = styled.div`
  background: #000;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  background: #1e1e1e;
  width: 300px;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  h2 {
    margin: 10px;
    color: #fff;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  button {
    width: 100%;
    margin: 10px;
  }
  @media screen and (max-width: 650px) {
    width: 80%;
    padding: 30px 20px;
  }
`;
