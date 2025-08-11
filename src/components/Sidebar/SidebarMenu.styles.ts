import styled, { createGlobalStyle, css } from 'styled-components';

type StyleProps = {
  $isOpen?: boolean;
  $isExpanded?: boolean;
  $level?: number;
  $isActive?: boolean;
};

export const GlobalStyle = createGlobalStyle<StyleProps>`
  body {
    overflow: ${({ $isOpen }) => ($isOpen ? 'hidden' : 'auto')};
  }
`;

export const Backdrop = styled.div<StyleProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 40;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
`;

export const SidebarContainer = styled.div<StyleProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  height: 100%;
  background-color: white;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 50;
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});

  @media (max-width: 768px) {
    width: 280px;
  }
  @media (max-width: 480px) {
    width: 100vw;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
  background-color: white;
`;

export const Title = styled.h2`
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
`;

export const CloseButton = styled.button`
  padding: 8px;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f3f4f6;
  }
  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
`;

export const CloseIcon = styled.svg`
  width: 20px;
  height: 20px;
  color: #6b7280;
`;

export const MenuContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-bottom: 20px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;

export const MenuItemWrapper = styled.div`
  border-bottom: 1px solid #f3f4f6;
`;

const activeMenuItemStyles = css`
  background-color: #eff6ff;
  color: #1d4ed8;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background-color: #1d4ed8;
  }
`;

export const MenuItemButton = styled.button<StyleProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  padding-left: ${({ $level = 0 }) => $level * 20 + 16}px;
  border: none;
  background-color: ${({ $level = 0 }) => ($level > 0 ? '#f9fafb' : 'white')};
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-align: left;
  position: relative;

  &:hover {
    background-color: #f9fafb;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background-color: #3b82f6;
    }
  }

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: -2px;
  }

  ${({ $isActive }) => $isActive && activeMenuItemStyles}
`;

export const MenuItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const MenuItemIcon = styled.span`
  font-size: 16px;
  color: #6b7280;
`;

export const MenuItemLabel = styled.span<StyleProps>`
  color: #374151;
  font-size: ${({ $level = 0 }) => ($level > 0 ? '13px' : '14px')};
  font-weight: ${({ $level = 0 }) => ($level > 0 ? 400 : 500)};
`;

export const ExpandIcon = styled.svg<StyleProps>`
  width: 16px;
  height: 16px;
  color: #9ca3af;
  transition: transform 0.2s ease;
  transform: rotate(${({ $isExpanded }) => ($isExpanded ? '90deg' : '0deg')});
`;

export const Submenu = styled.div<StyleProps>`
  overflow: hidden;
  transition:
    max-height 0.3s ease-in-out,
    opacity 0.2s ease-in-out;
  max-height: ${({ $isExpanded }) => ($isExpanded ? '400px' : '0')};
  opacity: ${({ $isExpanded }) => ($isExpanded ? '1' : '0')};
`;

export const DemoContainer = styled.div`
  padding: 24px;
  background-color: #f3f4f6;
  min-height: 100vh;
`;

export const OpenButton = styled.button`
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
