import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { GlobalContext } from '../../context';
import { createRoot } from 'react-dom/client';

import { Link, useParams } from 'react-router-dom';

function Home() {
    const { search, setSearch, loading, setLoading } = useContext(GlobalContext);
    const [recipes, setRecipes] = useState([]);
    const [initialREnder,setInitialRender]=useState(false)
    let cnt=0;
    const handleSearch = async () => {
        console.log('handleSearch function called');
        try {
            setLoading(true);
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`);
            const data = await res.json();

            console.log('API response:', data);

            if (data && data.data && data.data.recipes && data.data.recipes.length > 0) {
                setRecipes(data.data.recipes); // Update recipes state with recipes
                setSearch('');
            } else {
                setRecipes([]); // Clear recipes state if no recipes found
            }

            cnt++;
        } catch (error) {
            console.error('Error fetching recipes:', error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(()=>{
        handleSearch()
    },[])

    // function handleRecipe()
    // {
    //     const { recipeId } = useParams();
    //     console.log(recipeId)
    // }

    return (
        <div className='outer'>
            <div className='inpdiv'>
                <input
                    className='inp'
                    type='text'
                    placeholder='Enter Your Item'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            <div className='item' >
                {loading ? (
                    <div>Loading... Please wait</div>
                ) : (recipes && recipes.length > 0) ? (
                        recipes.map((recipe,index)=>{
                            return(
                                <div className='card-container'>
                            <div className='card'>
                                <img src={recipe.image_url} alt="Recipe" />
                                <h4 >{recipe.publisher}</h4>
                                <h1 style={{ fontWeight: 'bold' }}>{recipe.title}</h1>
                                <Link to={`/recipe-item/${recipe.id}`}><button className='btn'>RECIPE DEATILS</button></Link>

                            </div>
                        </div>
                            )
                        })
                ) : ( cnt===0 && recipes.length==0?<h1 style={{fontWeight:'bold'}}>Welcome To The World Of Recipes😋🍲</h1>:
                    <h1 style={{fontWeight:'bold'}}>Sorry, I couldn't find any recipe for you. 😔</h1>
                )}
            </div>
        </div>
    );

}

export default Home;
