import styled from "styled-components";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const StyledAlink = styled.div`
  height: 60px;
  width: 300px;
  margin-bottom: 60px;

  ul {
    position: relative;
    display: flex;
    transform: rotate(25deg) skew(25deg);
    transform-style: preserve-3d;
  }
  ul li {
    position: relative;
    list-style: none;
    width: 60px;
    height: 60px;
    margin: 0px 10px;
  }
  ul li:before {
    content: "";
    position: absolute;
    bottom: -9px;
    left: 0px;
    width: 100%;
    height: 9px;
    background: #2a2a2a;
    transform-origin: top;
    transform: skewX(-41deg);
  }

  ul li:after {
    content: "";
    position: absolute;
    top: 0px;
    left: -9px;
    width: 9px;
    height: 99%;
    background: #2a2a2a;
    transform-origin: right;
    transform: skewY(-49deg);
  }

  ul li span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    background: #2a2a2a;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 30px;
    transition: 1.5s ease-out;
  }
  ul li:hover span {
    z-index: 1000;
    transition: 0.3s;
    color: #fff;
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.5);
  }
  ul li:hover span:nth-child(5) {
    transform: translate(40px, -40px);
    opacity: 1;
  }
  ul li:hover span:nth-child(4) {
    transform: translate(30px, -30px);
    opacity: 0.8;
  }
  ul li:hover span:nth-child(3) {
    transform: translate(20px, -20px);
    opacity: 0.6;
  }
  ul li:hover span:nth-child(2) {
    transform: translate(10px, -10px);
    opacity: 0.4;
  }
  ul li:hover span:nth-child(1) {
    transform: translate(0px, 0px);
    opacity: 0.2;
  }
  ul li:nth-child(1):hover span {
    background: #52e19f;
  }
  ul li:nth-child(2):hover span {
    background: #2c3456;
  }
  ul li:nth-child(3):hover span {
    background: #ea6e96;
  }
  ul li:nth-child(4):hover span {
    background: #fceb00;
  }
  @media (max-width: 850px) {
    height: 100px;
    width: 300px;
    margin-bottom: 30px;

    ul li {
      width: 60px;
      height: 60px;
    }
  }
  @media (max-width: 600px) {
    height: 100px;
    width: 300px;

    ul li {
      width: 40px;
      height: 40px;
    }
  }
`;

const Alinks = () => {
  return (
    <StyledAlink>
      <ul>
        <li>
          <a href="mailto:onur.gursoy@student.kyh.se">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="SiGmail">
              <SiGmail />
            </span>
          </a>
        </li>
        <li>
          <a href="https://github.com/OGurso">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="FaGithub">
              <FaGithub />
            </span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ogursoy/">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="FaLinkedin">
              <FaLinkedin />
            </span>
          </a>
        </li>
      </ul>
    </StyledAlink>
  );
};

export default Alinks;
