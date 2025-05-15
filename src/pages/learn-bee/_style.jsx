import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text.primary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    min-height: 98vh;
  }
`;

export const Title = styled.h1`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  font-size: ${({ theme }) => theme.typography.fontSize.xxlarge};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xlarge};
  }
`;

export const ItemsWraper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.screen.md}) {
    grid-template-columns: auto auto auto auto;
  }

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    grid-template-columns: auto auto;
  }
`;

export const Item = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  text-transform: capitalize;
  margin:0;
};
`;
