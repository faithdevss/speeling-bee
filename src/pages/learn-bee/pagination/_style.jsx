import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 1rem;
`;

export const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  background-color: ${({ active }) => (active ? "#007bff" : "#f0f0f0")};
  color: ${({ active }) => (active ? "white" : "black")};
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ active }) => (active ? "#0056b3" : "#e0e0e0")};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
