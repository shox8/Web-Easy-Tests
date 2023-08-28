import styled from "styled-components";

export const Style = styled.div`
  width: 100%;
  background: #000;
  color: #fff;
  min-height: 100vh;
  border: 0.1px solid transparent;
  h1.hello {
    margin: 20px;
    text-align: center;
  }
  button {
    position: relative;
    left: 50%;
    transform: translate(-50%);
  }
  .test {
    width: 90%;
    background: #1e1e1e;
    color: #fff;
    margin: 20px auto;
    border: 0.5px solid #2c2c2c;
    border-radius: 5px;
    padding: 0 20px;
    .line {
      border-radius: 5px;
      min-height: 50px;
      width: 100%;
      border: 0.5px solid #2c2c2c;
      margin: 20px auto;
      display: flex;
      align-items: center;
      padding-left: 15px;
      input {
        width: 20px;
        height: 20px;
      }
      h2 {
        margin: 0 10px;
      }
    }
  }
  @media screen and (max-width: 650px) {
    .test .line h1{
      font-size: 20px;
    }
  }
`;

export const Card = styled.div`
  border: 0.5px solid #2c2c2c;
  border-radius: 5px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 300px;
  h1 {
    text-align: center;
    margin: 20px 0;
  }
`;
