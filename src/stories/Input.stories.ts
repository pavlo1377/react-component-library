import type { Meta, StoryObj } from '@storybook/react-vite';
import Input from '../components/Input/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    clearable: false,
    type: 'password',
  },
};

export const Clearable: Story = {
  args: {
    clearable: true,
    type: 'password',
  },
};
export const TextType: Story = {
  args: {
    clearable: false,
    type: 'text',
  },
};
export const NumberType: Story = {
  args: {
    clearable: false,
    type: 'number',
  },
};
