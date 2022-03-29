import React, {useState, useEffect} from 'react'
import Cuisine from '../Components/Cuisine/Cuisine'
import Nav from '../Components/Nav/nav'
import Search from '../Components/Search/Search'
import {useParams} from 'react-router-dom';
import {Row, Col , Button} from 'antd';

function Recipe() {

    const [recipe, setRecipe] = useState({});
    const [ingredients, setIngredients] = useState([]);
    const [active , setActive]  = useState(true);
    

    let params = useParams();

    useEffect(() => {
        getRecipes(params.name);
    }, [params.name])

    const getRecipes = async () => {
        
        const api = await fetch(
            `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=be06133287624965964c053d84907e95`
        );
        const data = await api.json();

        setRecipe(data)
        console.log(recipe.extendedIngredients)
        setIngredients(data.extendedIngredients)

    }

    return (
        <div>
            <Nav/>
            <Search/>
            <Cuisine/>

            <Row>
                <Col span={12}>
                    <h2>{recipe.title}</h2>
                    <img src={recipe.image} alt={recipe.title} style={{width:"70%"}}/>
                </Col>
                <Col span={12}>
                  <Button type={active ? "primary" : null} size={10} onClick={()=>setActive(true)} style={{marginRight:"1rem"}}>Ingredients</Button>
                  <Button type={active ? null : "primary" } size={10} onClick={()=>setActive(false)}>Description</Button>
                  {active ?  
                  <ol style={{paddingTop:"2rem"}}>
                        {
                            ingredients.map((item) => {
                                return (
                                    <div key={item.id}>
                                        <li>{item.original}</li>
                                    </div>
                                )
                            })
                        }

                    </ol> : 
                        <div>
                            <p style={{paddingTop:"2rem"}} dangerouslySetInnerHTML={{__html: recipe.summary}}></p>
                            <h2 style={{paddingTop:"2rem"}}>Instructions</h2>
                            <p  dangerouslySetInnerHTML={{__html: recipe.instructions}}></p>
                         </div>
                    }
                   
                   
                </Col>
            </Row>

        </div>
    )
}

export default Recipe