import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
}

export const Loader = styled.div<LoaderProps>`
  width: ${({ size }) => 
    size === 'sm' ? '1.2rem' : 
    size === 'lg' ? '2rem' : '1.5rem'};
  height: ${({ size }) => 
    size === 'sm' ? '1.2rem' : 
    size === 'lg' ? '2rem' : '1.5rem'};
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: currentColor;
  animation: ${spin} 0.8s linear infinite;
`;