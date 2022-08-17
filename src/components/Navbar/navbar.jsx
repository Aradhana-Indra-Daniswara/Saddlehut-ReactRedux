import React from 'react';
import saddlehut_icon from '../../assets/img/Saddlehut_icon.svg'
import saddlehut_logo from '../../assets/img/Saddlehut_logo.svg'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

const NavbarLink = styled.div`
    font-size: 1.6rem;
    cursor: pointer;
    p{
        diplay: flex;
    }
    p:active{
        text-decoration: none;
    }
    p::after{
        content: "";
        display: block;
        width: 0;
        transition: width 0.1s;
        height: 0.15rem;
        background-color: black; 
        border-radius: 50rem;
    }
    &:hover p::after{
        width: 100%;
    }
`
function Navbar() {
    return (
        <div className="container" css={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '2rem 6.4rem',
        }}>
            <Link to="/">
                <div className="logo" css={{
                    height: '5rem'
                }}>
                    <img src={saddlehut_icon} alt="" css={{
                        height: '100%'
                    }} />
                    <img src={saddlehut_logo} alt="" css={{
                        height: '100%'
                    }} />
                </div>
            </Link>

            <nav css={css`
                display: flex;
                align-items: center;
                gap: 4.8rem;`
            }>
                <NavLink to="/about">
                    <NavbarLink>
                        <p>About</p>
                    </NavbarLink>
                </NavLink>
                <NavLink to="/techstack">
                    <NavbarLink>
                        <p>Tech Stack</p>
                    </NavbarLink>
                </NavLink>
                <NavLink to="/creator">
                    <NavbarLink>
                        <p>Creator</p>
                    </NavbarLink>
                </NavLink>

            </nav>
        </div >
    )
}



export default Navbar;