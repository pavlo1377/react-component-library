import type { Meta, StoryObj } from '@storybook/react-vite';
import { ToastProvider } from '../components/Toast/context/ToastProvider';
import { useToast } from '../components/Toast/context/toas-context';
import Toast from '../components/Toast/Toast';

const meta: Meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

type ToastDemoProps = {
  type?: 'success' | 'error' | 'warning' | 'info';
  message?: string;
  duration?: number;
  closable?: boolean;
};

const ToastDemo = ({ type, message, duration, closable }: ToastDemoProps) => {
  const { showToast } = useToast();

  return (
    <div style={{ padding: '40px', background: '#f5f5f5', minHeight: '400px' }}>
      <button
        onClick={() => {
          if (message && type) {
            showToast(message, type, duration, closable);
          }
        }}
        style={{
          background: '#3B82F6',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        Show {type} Toast
      </button>
    </div>
  );
};

const WithProvider = (args: ToastDemoProps) => (
  <ToastProvider>
    <ToastDemo {...args} />
  </ToastProvider>
);

export const Success: Story = {
  render: WithProvider,
  args: {
    type: 'success',
    message: 'Operation completed successfully!',
    duration: 4000,
    closable: true,
  },
};

export const Error: Story = {
  render: WithProvider,
  args: {
    type: 'error',
    message: 'Something went wrong!',
    duration: 6000,
    closable: true,
  },
};

export const Warning: Story = {
  render: WithProvider,
  args: {
    type: 'warning',
    message: 'Please check your settings!',
    duration: 5000,
    closable: true,
  },
};

export const Info: Story = {
  render: WithProvider,
  args: {
    type: 'info',
    message: 'New update available!',
    duration: 3000,
    closable: true,
  },
};

export const LongDuration: Story = {
  render: WithProvider,
  args: {
    type: 'warning',
    message: 'This toast lasts 10 seconds',
    duration: 10000,
    closable: false,
  },
};

export const NotClosable: Story = {
  render: WithProvider,
  args: {
    type: 'info',
    message: 'Cannot close this manually',
    duration: 5000,
    closable: false,
  },
};

const MultipleDemo = () => {
  const { showToast } = useToast();

  const showMultiple = () => {
    showToast('Success!', 'success');
    showToast('Warning!', 'warning');
    showToast('Error!', 'error');
    showToast('Info!', 'info');
  };

  return (
    <div style={{ padding: '40px', background: '#f5f5f5', minHeight: '400px' }}>
      <button
        onClick={showMultiple}
        style={{
          background: '#10B981',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        Show All Types
      </button>
    </div>
  );
};

export const Multiple: Story = {
  render: () => (
    <ToastProvider>
      <MultipleDemo />
    </ToastProvider>
  ),
};
