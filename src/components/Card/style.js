import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #555356;
  border-radius: 10px;
  width: 25rem;
  margin-bottom: 2rem;
  background-color: #555356;
  margin: 24px;

  .title {
    background-color: #291733;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    padding: 12px;
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
