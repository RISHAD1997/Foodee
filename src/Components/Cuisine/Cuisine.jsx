import React from 'react'
import styled from 'styled-components'
import {GiNoodles, GiRiceCooker, GiChickenOven,GiFullPizza} from "react-icons/gi";
import { NavLink } from 'react-router-dom';

function Cuisine() {
    return (
    <List>
        <Link to={'/Cusine/Italian'}>
            <Catagories>
                <GiFullPizza />
            </Catagories>
            <p>Italian</p>
        </Link>

        <Link to={'/Cusine/Thai'}>
            <Catagories>
                <GiNoodles />
            </Catagories>
            <p>Thai</p>
        </Link>

        <Link to={'/Cusine/Indian'}>
            <Catagories>
                <GiRiceCooker />
            </Catagories>
            <p>Indian</p>
        </Link>

        <Link to={'/Cusine/Chinese'}>
            <Catagories>
                <GiChickenOven />
            </Catagories>
            <p>Chinese</p>
        </Link>
    </List>
    )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
   
`;

const Link = styled(NavLink)`
    text-decoration: none;
    color: white;
    text-align: center;
    cursor: pointer;


    p{
        color: black;
        font-size: 0.8rem;
    }
 
`;

const Catagories = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:50px;
    height:50px;
    background-color:rgb(34, 32, 32);
    border-radius:50%;
    margin-right: 3rem;
    text-align: center;
    margin: auto 1rem;
`;




export default Cuisine