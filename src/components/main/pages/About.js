import styled from "styled-components";
import { useState, useEffect } from "react";
import {
  FaHtml5,
  FaJs,
  FaCss3Alt,
  FaReact,
  FaFigma,
  FaGithub,
  FaGitSquare,
} from "react-icons/fa";

const StyledParent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100vw - 240px);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 10%;

  & > * {
    margin: 1rem 0;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .text {
    width: 450px;
    padding: 0 40px;
    text-align: justify;
  }
  .langs {
    display: flex;
    flex-direction: column;
    align-items: space-between;
  }

  .tools > * {
    font-size: 30px;
    color: #2efddf;
    margin: 0 2px;
  }

  img {
    width: 200px;
    height: auto;
    border-radius: 50%;
  }

  h2 {
    font-size: 20px;
    padding-bottom: 30px;
    text-align: center;
  }
  p {
    font-size: 16px;
  }

  @media (max-width: 960px) {
    width: 100vw;
  }

  @media (max-width: 850px) {
    padding: 50px 0;

    /* padding: 0 0; */

    & > div {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }

    img {
      width: 150px;
      height: auto;
      padding-bottom: 20px;
    }
    .text {
      width: 450px;
      padding: 0 10px;
    }
  }
  @media (max-width: 600px) {
    .text {
      width: 300px;
    }
    h2 {
      font-size: 15px;
    }
    p{
      font-size:14px;
    }
  }
`;

const About = () => {
  const [gitAPI, setGitAPI] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/OGurso")
      .then((response) => response.json())
      .then((data) => setGitAPI(data));
  }, []);

  return (
    <div>
      <StyledParent>
        <h1>About me</h1>
        <div>
          <div className="text">
            <h2>I am {gitAPI.name}</h2>
            <p>{gitAPI.bio}</p>
          </div>
          <div>
            <img src={gitAPI.avatar_url} alt="Avatar" />
          </div>
        </div>
        <div className="langs">
          <h2>Tools in the bag</h2>
          <div className="tools">
            <FaHtml5 />
            <FaCss3Alt />
            <FaJs />
            <FaReact />
            <FaGitSquare />
            <FaGithub />
            <FaFigma />
          </div>
        </div>
      </StyledParent>
    </div>
  );
};

export default About;
