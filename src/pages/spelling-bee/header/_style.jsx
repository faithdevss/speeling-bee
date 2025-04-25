import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Button = styled.button`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.secondary : props.theme.colors.white};
  color: ${(props) =>
    props.selected
      ? props.theme.colors.text.light
      : props.theme.colors.text.primary};
  transition: all ${({ theme }) => theme.transitions.medium};

  &:hover {
    transform: scale(1.05);
  }
`;
