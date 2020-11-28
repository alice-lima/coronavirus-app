import styled from "styled-components";

export const Header = styled.th`
  background-color: #291733;
  padding: 1rem;
  color: white;
  border: none;
  text-transform: uppercase;

  &:first-child {
    border-top-left-radius: 20px;
  }
  &:last-child {
    border-top-right-radius: 20px;
  }
`;

export const Cell = styled.td`
  border: 1px solid #0f2027;
  color: #0f2027;
  color: #fff;
  padding: 6px 1rem;
  border: none;
`;

export const Row = styled.tr`
  &:nth-child(even) {
    background: #555356;
  }
  &:nth-child(odd) {
    background: #403d42;
  }
`;
