import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-bottom: 2rem;

  input {
    width: 50%;
    border: 1px solid gray;
    border-radius: 5px;
  }

  button {
    margin: 0 3rem;
  }

  button.primary {
    background-color: #2c5364;
    color: white;
  }
`;
