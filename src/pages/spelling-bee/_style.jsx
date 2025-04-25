import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text.primary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  width: 100%;
  min-height: 95vh;
  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    min-height: 98vh;
  }
`;

export const Title = styled.h1`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${bounce} 2s infinite;
  font-size: ${({ theme }) => theme.typography.fontSize.xxlarge};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.large};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  animation: ${fadeIn} 0.5s ease-in;
  transition: all ${({ theme }) => theme.transitions.medium};
  background-color: ${({ theme }) => theme.colors.card};
`;

export const ScoreBoard = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ScoreItem = styled.div`
  background-color: ${(props) => {
    switch (props.type) {
      case "correct":
        return props.theme.colors.success;
      case "streak":
        return props.theme.colors.warning;
      default:
        return props.theme.colors.error;
    }
  }};
  color: ${({ theme }) => theme.colors.text.light};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  animation: ${(props) => (props.animate ? bounce : "none")} 0.5s;
`;

export const Message = styled.div`
  color: ${(props) =>
    props.type === "success"
      ? props.theme.colors.success
      : props.theme.colors.error};
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  margin: ${({ theme }) => `${theme.spacing.sm} 0`};
  animation: ${fadeIn} 0.5s;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin: ${({ theme }) => `${theme.spacing.sm} 0`};
  overflow: hidden;
`;

export const Progress = styled.div`
  width: ${(props) => props.progress}%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  transition: width ${({ theme }) => theme.transitions.medium};
`;

export const AnswerBoard = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;
