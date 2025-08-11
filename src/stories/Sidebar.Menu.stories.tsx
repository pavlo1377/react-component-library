import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import SidebarMenu from '../components/Sidebar/SidebarMenu';
import styled from 'styled-components';

const menuItemsWithNestedSubmenus = [
  {
    id: '1',
    label: 'Dashboard',
    icon: '📊',
  },
  {
    id: '2',
    label: 'Products',
    icon: '📦',
    children: [
      { id: '2-1', label: 'All Products' },
      { id: '2-2', label: 'Categories' },
      {
        id: '2-3',
        label: 'Inventory',
        children: [
          { id: '2-3-1', label: 'Stock Levels' },
          { id: '2-3-2', label: 'Low Stock Alerts' },
        ],
      },
    ],
  },
  {
    id: '3',
    label: 'Orders',
    icon: '🛒',
    children: [
      { id: '3-1', label: 'All Orders' },
      { id: '3-2', label: 'Pending' },
      { id: '3-3', label: 'Completed' },
    ],
  },
  {
    id: '4',
    label: 'Customers',
    icon: '👥',
  },
];

const menuItemsOneLevel = [
  { id: '1', label: 'Home', icon: '🏠' },
  { id: '2', label: 'About', icon: 'ℹ️' },
  { id: '3', label: 'Contact', icon: '✉️' },
];

const DemoContainer = styled.div`
  padding: 24px;
  background-color: #f3f4f6;
  min-height: 100vh;
`;

const OpenButton = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #2563eb;
  }
`;

const InteractiveSidebarWrapper = (
  args: StoryObj<typeof SidebarMenu>['args']
) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DemoContainer>
      <OpenButton onClick={() => setIsOpen(true)}>Open Sidebar Menu</OpenButton>
      <SidebarMenu
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        menuItems={args?.menuItems ?? []}
      />
    </DemoContainer>
  );
};

const meta: Meta<typeof SidebarMenu> = {
  title: 'Components/SidebarMenu',
  component: SidebarMenu,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    menuItems: { control: 'object' },
    onClose: { action: 'closed' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <InteractiveSidebarWrapper {...args} />,
  args: {
    menuItems: menuItemsWithNestedSubmenus,
  },
};

export const OpenState: Story = {
  args: {
    isOpen: true,
    menuItems: menuItemsWithNestedSubmenus,
  },
  render: (args) => {
    return (
      <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
        <SidebarMenu {...args} />
      </div>
    );
  },
};

export const OneLevelMenu: Story = {
  args: {
    menuItems: menuItemsOneLevel,
  },
  render: (args) => <InteractiveSidebarWrapper {...args} />,
};
