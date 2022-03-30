import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {NavLink} from 'react-router-dom';


function Trending() {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, [])

    const getPopular = async () => {

        const check = localStorage.getItem("popular");

        if(check){
            setPopular(JSON.parse(check));
        }else{

            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=be06133287624965964c053d84907e95&number=9`
            );
            const data = await api.json();
           localStorage.setItem("popular", JSON.stringify(data.recipes))
            setPopular(data.recipes)
        }
        
           
        }

    

    return (
        <Trendings>
            <Wrapper>
                <h3>Trending</h3>
                <Splide
                    options={{
                        perPage: 3,
                        arrows: false,
                        gap: '1rem',
                        drag: "free",
                        pagination: false
                    }}>
                    {
                        popular.map((recipes) => {
                            return (
                                <SplideSlide key={recipes.id}>
                                    <Link to={'/Recipe/'+recipes.id}>
                                        <Card>
                                            <p>{recipes.title}</p>
                                            <img src={recipes.image} alt={recipes.title}/>
                                            <Gradient></Gradient>
                                        </Card>
                                    </Link>
                                </SplideSlide>
                            )
                        })
                    }

                </Splide>
            </Wrapper>
        </Trendings>
    )
}

const Trendings = styled.div `
  margin-top:2rem;

  @media only screen and (max-width : 600px) {
    margin-top: -20px;
           
 }

`
const Wrapper = styled.div `
  margin: 4rem 0rem;

  h3{
    padding-bottom:10px;
  }

`

const Card = styled.div `
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position : relative;

  img {
    border-radius:2rem;
    position:absolute;
    left:0;
    height:100%;
    width:100%;
    object-fit:cover;
  }

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

  @media only screen and (max-width : 600px) {
       img{
          height: 160px;
          
       }

       p{
        font-size:0.6rem;
        bottom:100px;
       }
    
    }

`;

const Gradient = styled.div `
  z-index:3;
  position: absolute;
  width:100%;
  height:100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
  border-radius:2rem;

  @media only screen and (max-width : 600px) {
    height:160px;
           
 }
    
`


const Link = styled(NavLink)`
    text-decoration: none;
    color: white;
    text-align: center;
    cursor: pointer;

   `

export default Trending