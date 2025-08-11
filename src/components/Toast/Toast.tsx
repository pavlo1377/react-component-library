/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { CloseButton, Message, StyledToast } from './';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

type ToastProps = {
  id: number;
  message: string;
  onClose: (id: number) => void;
  type?: ToastType;
  closable?: boolean;
  duration?: number;
};

const Toast = ({
  id,
  message,
  onClose,
  type = 'info',
  duration = 5000,
  closable = true,
}: ToastProps) => {
  useEffect(() => {
    const timerId = setTimeout(() => onClose(id), duration);
    return () => clearTimeout(timerId);
  }, [duration, onClose, id]);

  return (
    <StyledToast $type={type}>
      <Message>{message}</Message>
      {closable && (
        <CloseButton onClick={() => onClose(id)}>&times;</CloseButton>
      )}
    </StyledToast>
  );
};

export default Toast;
