import * as React from "react";
import {
  Root,
  Trigger,
  Portal,
  Close,
  Overlay,
  Content,
} from "@radix-ui/react-dialog";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { styled } from "styled-components";
import { NavLink } from "./NavLink.styled";
import { useScrollNavigation } from "../../context/hooks/useScrollNavigation";

const MobileNav = () => {
  const [open, setOpen] = React.useState(false);
  const { navItems, scrollToSection } = useScrollNavigation();

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild>
        <HamburgerButton>
          <HamburgerMenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </HamburgerButton>
      </Trigger>

      <Portal>
        <DialogOverlay />
        <DialogContent>
          <div className="flex flex-col space-y-6 p-6">
            {navItems.map((item) => (
              <MobileNavLink
                key={item.path}
                to={item.path}
                onClick={() => {
                  scrollToSection(item.label);
                  setOpen(false);
                }}
              >
                {item.label.toUpperCase()}
              </MobileNavLink>
            ))}
          </div>
          <Close asChild>
            <CloseButton>
              <Cross2Icon className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </CloseButton>
          </Close>
        </DialogContent>
      </Portal>
    </Root>
  );
};

const HamburgerButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.textPrimary};
    transition: transform 0.3s ease;

    &:active {
      transform: scale(0.9);
    }

    &[data-state="open"] {
      transform: rotate(90deg);
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: ${({ theme }) => theme.textPrimary};
  background: transparent;
  border: none;
  cursor: pointer;
`;

const DialogOverlay = styled(Overlay)`
  background-color: ${({ theme }) => theme.tagBg};
  backdrop-filter: blur(4px);
  position: fixed;
  inset: 0;
  opacity: 0;
  transition: opacity 300ms ease-out;

  &[data-state="open"] {
    opacity: 1;
  }
`;

const DialogContent = styled(Content)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 300px;
  height: 100vh;
  background: ${({ theme }) => theme.navbarBg};
  padding: 1rem;
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1);

  &[data-state="open"] {
    transform: translateX(0);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const MobileNavLink = styled(NavLink)`
  transform: translateX(20px);
  transition:
    opacity 300ms ease,
    transform 300ms cubic-bezier(0.22, 1, 0.36, 1);

  &[data-state="open"] & {
    opacity: 1;
    transform: translateX(0);
  }

  &:nth-child(1) {
    transition-delay: 100ms;
  }
  &:nth-child(2) {
    transition-delay: 150ms;
  }
  &:nth-child(3) {
    transition-delay: 200ms;
  }
  &:nth-child(4) {
    transition-delay: 250ms;
  }
`;

export default MobileNav;
