import styled from "styled-components";

export default styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 80px auto 0;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;

  div {
    justify-content: center;
    display: flex;
    margin: 0 auto;
  }

  a {
    background-color: #06b;
    color: #fff;
    font-size: 24px;
    padding: 4px;

    & + a {
      margin-left: 10px;
    }
  }
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  strong {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  margin-bottom: 5px;
  background-color: ${({ selected }) => (selected ? "#f90" : "#fbfdfd")};
`;
