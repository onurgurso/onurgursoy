import Alinks from "../details/Alinks";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 400px;
  position: absolute;
  top: 40%;
  left: 50%;
  display: flex;
  flex-direction: column;
  transform: translate(-100%, -50%);

  & > * {
    padding-top: 1.8rem;
  }

  h1 {
    transform: rotate(25deg) skew(25deg);
    display: inline;
    font-size: 70px;
  }
  h2 {
    transform: rotate(25deg) skew(25deg);
  }

  @media (max-width: 850px) {
    transform: translate(-60%, -50%);
    /* height: 300px; */
    h1 {
      font-size: 50px;
      padding-top: 2rem;
    }
    h2 {
      font-size: 18px;
    }
  }
  @media (max-width: 600px) {
    transform: translate(-50%, -50%);
    height: 300px;
    width: 300px;
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 16px;
    }
  }
  @media (max-height: 700px) {
    transform: translate(-50%, -30%);
  }
  

`;

const Home = () => {
  return (
    <StyledDiv>
      <Alinks />
      <h1>ONUR GURSOY</h1>
      <h2>Front-end Developer</h2>
    </StyledDiv>
  );
};

export default Home;
