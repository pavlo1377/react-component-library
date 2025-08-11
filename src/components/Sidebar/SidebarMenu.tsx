import React, { useState, useEffect } from 'react';
import {
  Backdrop,
  CloseButton,
  CloseIcon,
  ExpandIcon,
  GlobalStyle,
  Header,
  MenuContent,
  MenuItemButton,
  MenuItemContent,
  MenuItemIcon,
  MenuItemLabel,
  MenuItemWrapper,
  SidebarContainer,
  Submenu,
  Title,
} from './';

type MenuItem = {
  id: string;
  label: string;
  icon?: string;
  children?: MenuItem[];
};

type SidebarMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
};

type MenuItemComponentProps = {
  item: MenuItem;
  level?: number;
};

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  isOpen,
  onClose,
  menuItems,
}) => {
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <GlobalStyle $isOpen={isOpen} />
      <Backdrop $isOpen={isOpen} onClick={onClose} />
      <SidebarContainer $isOpen={isOpen}>
        <Header>
          <Title>Menu</Title>
          <CloseButton onClick={onClose} aria-label="Close menu">
            <CloseIcon fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </CloseIcon>
          </CloseButton>
        </Header>
        <MenuContent>
          {menuItems.map((item) => (
            <MenuItemComponent key={item.id} item={item} level={0} />
          ))}
        </MenuContent>
      </SidebarContainer>
    </>
  );
};

const MenuItemComponent: React.FC<MenuItemComponentProps> = ({
  item,
  level = 0,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <MenuItemWrapper>
      <MenuItemButton
        $level={level}
        onClick={() => {
          if (hasChildren) {
            setIsExpanded(!isExpanded);
          }
        }}
      >
        <MenuItemContent>
          {item.icon && (
            <MenuItemIcon role="img" aria-label="icon">
              {item.icon}
            </MenuItemIcon>
          )}
          <MenuItemLabel $level={level}>{item.label}</MenuItemLabel>
        </MenuItemContent>
        {hasChildren && (
          <ExpandIcon
            $isExpanded={isExpanded}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </ExpandIcon>
        )}
      </MenuItemButton>
      {hasChildren && (
        <Submenu $isExpanded={isExpanded}>
          {item.children!.map((childItem) => (
            <MenuItemComponent
              key={childItem.id}
              item={childItem}
              level={level + 1}
            />
          ))}
        </Submenu>
      )}
    </MenuItemWrapper>
  );
};

export default SidebarMenu;
