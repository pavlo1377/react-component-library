/* eslint-disable no-unused-vars */

import { createContext, useContext } from 'react';
import type { ToastType } from '../Toast';

export type ToastItem = {
  id: number;
  message: string;
  type: ToastType;
  duration?: number;
  closable?: boolean;
};

type ToastContextValue = {
  showToast: (
    message: string,
    type?: ToastType,
    duration?: number,
    closable?: boolean
  ) => void;
};

export const ToastContext = createContext<ToastContextValue | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('Please invoke useToast within ToastProvider');
  }
  return context;
};
