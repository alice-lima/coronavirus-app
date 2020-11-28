import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-bottom: 2rem;
`;

export const InputIcones = styled.div`
  background-color: #555356;
  width: 100%;
  border: 1px solid gray;
  border-radius: 5px;
  height: 35px;
  padding: 6px;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    background-color: transparent;
    height: auto;
    margin: 0 6px;
    border: none;
  }

  button {
    background: transparent;
    border: none;
    outline: none;
    font-size: 16px;
  }
`;

export const PrimaryButton = styled.button`
  background-color: #2c5364;
  color: white;
  margin: 0 12px;
  height: 35px;
  border: none;
  outline: none;
  padding: 0 36px;
  border-radius: 12px;

  :hover {
    background-color: rgba(44, 83, 100, 0.8);
  }
`;
