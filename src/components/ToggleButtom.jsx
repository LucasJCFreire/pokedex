import { useState } from "react";
import styled from "styled-components";

function ToggleButtom(props) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <BtnTheme
      className={`toogleTheme ${isActive ? "actived" : ""}`}
      onClick={handleClick}
      {...props}
    >
      <Indicator className="indicator" />
    </BtnTheme>
  );
}
const BtnTheme = styled.div`
  background-color: whitesmoke;
  min-width: 60px;
  height: 30px;
  border-radius: 20px;
  box-shadow: inset 0 1px 20px gray;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 3px;
  cursor: pointer;
  width: 70px;

  &:hover * {
    background-color: #f04037;
  }
  &.actived .indicator {
    transform: translate(40px);
  }
`;

const Indicator = styled.div`
  background-color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 1s ease, transform 0.4s ease;
`;

export default ToggleButtom;
