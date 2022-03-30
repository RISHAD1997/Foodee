import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import Nav from '../Components/Nav/nav';
import {useParams} from 'react-router-dom';
import Cuisine from '../Components/Cuisine/Cuisine';
import Search from '../Components/Search/Search';
import {NavLink} from 'react-router-dom';
import {motion} from 'framer-motion';

function Cusine() {

    const [cusine, setCusine] = useState([]);
    let params = useParams();

    useEffect(() => {
        getCusine(params.type);
    }, [params.type])

    const getCusine = async (name) => {

        // const check = localStorage.getItem("cusine");
        // if (check) {
        //     setCusine(JSON.parse(check));
        // } else {

            const api = await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=be06133287624965964c053d84907e95&number=20&cuisine=${name}`
            );
            const data = await api.json();

            // localStorage.setItem("cusine", JSON.stringify(data.results))
            setCusine(data.results)
      

    }

    return (
        <motion.div
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity:0}}        
            transition={{duration:0.5}}
        >
            <Nav/>
            <Search />
            <Cuisine/> {
                cusine.map((recipes) => {
                    return (
                        <Link to={'/Recipe/'+recipes.id}>
                            <Card>
                                <p>{recipes.title}</p>
                                <img src={recipes.image} alt={recipes.title}/>
                                <Gradient></Gradient>
                            </Card>
                        </Link>

                    )
                })
            }
        </motion.div>
    )
}

const Card = styled.div `
  min-height: 15rem;
  border-radius: 2rem;
  position : relative;
  display: inline-block;
  margin: 1rem;

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
      border-radius: 2rem;
      width: 230px;
      height: 250px;
  }

  @media only screen and (max-width : 600px) {
    margin-right: 1rem;
    min-height: 10rem;
    margin-left:25px ;
    img{
        width: 130px;
      height: 150px;
  }
  p{
        font-size:0.6rem;
        bottom:40px;
       }        
 }
`;

const Gradient = styled.div `
  z-index:3;
  position: absolute;
  bottom: 1%;
  width:100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
  border-radius:2rem;

  @media only screen and (max-width : 600px) {
    height: 150px ;
    bottom: 7%;
           
 } 
`;

const Link = styled(NavLink)`
    text-decoration: none;
    color: white;
    text-align: center;
    cursor: pointer;
   `;



export default Cusine