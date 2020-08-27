import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #0f2027;
  border-radius: 10px;
  width: 25rem;
  margin-bottom: 2rem;

  .title {
    background-color: #2c5364;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    padding: 0.5rem;
  }

  .body {
    padding: 1rem;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: red;
  }
`;
