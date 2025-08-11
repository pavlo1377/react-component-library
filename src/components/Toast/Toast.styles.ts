import styled, { keyframes } from 'styled-components';
import type { ToastType } from './Toast';

const slideIn = keyframes`
    0%{
        transform:translateX(100%);
    }
    100%{
        transform:translateX(0)
    }
`;

export const StyledToast = styled.div<{ $type: ToastType }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  padding: 16px;
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: ${slideIn} 0.3s ease-out;

  ${({ $type }) => {
    const colors = {
      success: '#10B981',
      error: '#EF4444',
      warning: '#F59E0B',
      info: '#3B82F6',
    };
    return `background-color: ${colors[$type]}`;
  }}
`;

export const Message = styled.div`
  flex: 1;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  margin-left: 12px;
  padding: 4px;
  border-radius: 4px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;