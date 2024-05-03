import React, { useContext } from 'react';
import { GlobalContext } from '../../context';
import './Fav.css';

function Favourites() {
    const { fav } = useContext(GlobalContext);

    return (
        <div className='fav'>
            {/* {fav.length > 0 && (
           
            )} */}

            {fav && fav.length && fav.map((item)=>{
              return(
                <div className='favcard'>
                    <img src={item.image_url} alt={item.title} />
                    <h4>{item?.title}</h4>
                </div>)
            })}
        </div>
    );
}

export default Favourites;
