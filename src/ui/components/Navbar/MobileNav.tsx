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

const MobileNav = () => {
  const [open, setOpen] = React.useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

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
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
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
  }
`;

const DialogOverlay = styled(Overlay)`
  background-color: ${({ theme }) => theme.tagBg};
  backdrop-filter: blur(4px);
  position: fixed;
  inset: 0;
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
  transition: transform 0.3s ease;
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

export default MobileNav;
