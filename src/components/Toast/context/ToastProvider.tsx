import { useState, type ReactNode } from 'react';
import type { ToastType } from '../Toast';
import { type ToastItem, ToastContext } from './toas-context';
import Toast from '../Toast';
import styled from 'styled-components';

type ToastProviderProps = {
  children: ReactNode;
};

const ToastsContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 99;
`;

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = (
    message: string,
    type: ToastType = 'info',
    duration: number = 3000,
    closable: boolean = true
  ) => {
    const newToast: ToastItem = {
      id: Date.now(),
      message,
      type,
      duration,
      closable,
    };
    setToasts((prevToasts) => [...prevToasts, newToast]);
  };

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastsContainer>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            closable={toast.closable}
            onClose={removeToast}
          />
        ))}
      </ToastsContainer>
    </ToastContext.Provider>
  );
};
