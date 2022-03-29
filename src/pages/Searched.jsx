import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../Components/Nav/nav';
import Search from '../Components/Search/Search';
import Cuisine from '../Components/Cuisine/Cuisine';
import {NavLink} from 'react-router-dom';

function Searched() {

    const [searched, setSearched] = useState([])

    let params = useParams();

    const getSerached = async (name) => {

       
            const api = await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=be06133287624965964c053d84907e95&number=21`
            );
            const data = await api.json();
           
            setSearched(data.results)
       

    }

    useEffect(() => {
        getSerached(params.search);
    }, [params.search])

    return (
        <div>
            <Nav/>
            <Search/> 
            <Cuisine />
            {
                searched.map((recipes) => {
                    return (
                        <Link to={'/Recipe/'+recipes.id}>
                            <Card key={recipes.id}>
                                <p>{recipes.title}</p>
                                <img src={recipes.image} alt={recipes.title}/>
                                <Gradient></Gradient>
                            </Card>
                        </Link>

                    )
                })
            }
        </div>
    )
}

const Card = styled.div `
  min-height: 15rem;
  border-radius: 2rem;
  position : relative;
  display: inline-block;
  margin: 1.5rem;

  p{
    position:absolute;
    z-index:10;
    bottom:10%;
    left:50%;
    transform: translate(-50% , 0%);
    width: 90%;
    text-align:center;
    font-size:0.7rem;
    font-weight:600;
    height:10%;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  img{
    position: relative;
      border-radius: 2rem;
      width: 270px;
      height: 255px;
  }

`;

const Gradient = styled.div `
  z-index:3;
  position: absolute;
  bottom: 2%;
  width:100%;
  height:100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
  border-radius:2rem;
`;

const Link = styled(NavLink)`
    text-decoration: none;
    color: white;
    text-align: center;
    cursor: pointer;
   `;

export default Searched