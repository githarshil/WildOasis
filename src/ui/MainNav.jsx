import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HouseIcon } from "@animateicons/react/lucide";
import { CalendarRangeIcon } from "@animateicons/react/lucide";
import { UserIcon } from "@animateicons/react/lucide";
import { MountainIcon } from "@animateicons/react/lucide";
import { SettingsIcon } from "@animateicons/react/lucide";

import { useRef } from "react";


const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

export default function MainNav() {
  const homeRef = useRef(null);
  const bookingsRef = useRef(null);
  const userRef = useRef(null);
  const cabinRef = useRef(null);
  const settingsRef = useRef(null);

  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink
            to="/dashboard"
            onClick={() => homeRef.current?.startAnimation()}
          >
            <HouseIcon ref={homeRef} />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            to="/bookings"
            onClick={() => bookingsRef.current?.startAnimation()}
          >
            <CalendarRangeIcon ref={bookingsRef} color="" />
            <span>Bookings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            to="/users"
            onClick={() => userRef.current?.startAnimation()}
          >
            <UserIcon ref={userRef} color="" />
            <span>User</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            to="/cabins"
            onClick={() => cabinRef.current?.startAnimation()}
          >
            <MountainIcon ref={cabinRef} color="" />
            <span>Cabins</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            to="/settings"
            onClick={() => settingsRef.current?.startAnimation()}
          >
            <SettingsIcon ref={settingsRef} color="" />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

