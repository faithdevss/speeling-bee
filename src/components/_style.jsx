import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const TextButton = styled.p`
  cursor: pointer;
  line-height: normal;
  color: ${({ theme }) => theme.colors.primary};
  transition: all ${({ theme }) => theme.transitions.medium};
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Button = styled.button`
  background-color: ${(props) =>
    props.variant === "primary"
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text.light};
  border: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  transition: transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: scale(1.05);
  }
`;

export const Input = styled.input`
  width: 300px;
  padding: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 200px;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 10px rgba(52, 152, 219, 0.3);
  }
`;
