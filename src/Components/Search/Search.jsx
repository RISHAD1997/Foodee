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

                        <FiSearch
                            onClick={submitHandler}
                            style={{
                                position: 'absolute',
                                top: '21%',
                                right: '37%',
                                color: '#fff',
                                zindex: '10'
                            }}
                            />
              
                </SearchBox>
            </form>
        </div>
    )
    
}


const SearchBox = styled.div `
display:flex;
justify-content : center;
align-items: center;
`;

export default Search