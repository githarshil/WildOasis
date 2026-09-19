import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import MainNav from "./../ui/MainNav"

const StyledSideBar = styled.aside`
    background-color: var(--color-grey-0);
        grid-template-columns: 26rem 1fr;
    grid-template-rows: 3.2rem 2.4rem; 
    grid-row: 1/-1;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`

export default function SideBar() {
    return (
        <StyledSideBar>
            <Logo />
            <MainNav />
        </StyledSideBar>
    )
}
