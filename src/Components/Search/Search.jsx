import React, {useState} from 'react'
import styled from 'styled-components'
import {FiSearch} from "react-icons/fi";
import './Search.css' 
import {useNavigate} from 'react-router-dom';


function Search() {

    const [search, setSearch] = useState('');
    const navigate = useNavigate();
  

    function handleChange(event) {

        setSearch(event.target.value)

    }

    function submitHandler(event){
        event.preventDefault();
        navigate('/Searched/'+search)
    }

  

  

    return (
        <div>
            <form onSubmit={submitHandler}>
                <SearchBox>
                    <input
                        type="text"
                        placeholder='Search your favourite recipe'
                        onChange={handleChange}
                        value = {search}
                       />

                        <CustomFiSearch onClick={submitHandler} />        
                </SearchBox>
            </form>
        </div>
    )
    
}


const SearchBox = styled.div `
display:flex;
justify-content : center;
align-items: center;
margin-left: 20px;
`;

const CustomFiSearch = styled(FiSearch)`
    position: absolute;
    top:22%;
    right: 37%;
    color: #ffffff;
   

    @media only screen and (max-width : 600px) {
        
        position: relative;
        right: 20%;
        font-size: 1.5rem;
        color: #fff;
           
    }

    @media only screen and (min-width: 601px) and (max-device-width: 1024px){
        position: relative;
        right: 12%;
        font-size: 1.5rem;
    }
`

export default Search