import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../context';
import './New.css'

function Details() {
    const { handleAddFav, fav } = useContext(GlobalContext);
    const params = useParams();
    const [details, setDetails] = useState();

    useEffect(() => {
        async function fetchDetails() {
            try {
                const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`);
                const data = await res.json();
                setDetails(data.data);
            } catch (error) {
                console.error('Error fetching recipe details:', error);
            }
        }

        fetchDetails();
    }, [params.id]);

    return (
        <div className='man'>
            {details && (
                <div>
                    <h1 className='title'>{details.recipe.title}</h1>
                    <h4>{details.recipe.publisher}</h4>
                    <h4 style={{ color: 'red' }}>⏳{details.recipe.cooking_time} min</h4>
                    <img src={details.recipe.image_url} alt="Recipe" />
                </div>
            )}
            <div className='ing'>
                <button onClick={() => handleAddFav(details.recipe)}>
                    {fav.findIndex(item => item.id === details?.recipe?.id) !== -1 ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
                <h1>Ingredients</h1>
                <ul>
                    {details && details?.recipe?.ingredients.map((item, index) => (
                        <li key={index}>{item.quantity} {item.unit} of {item.description}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Details;
