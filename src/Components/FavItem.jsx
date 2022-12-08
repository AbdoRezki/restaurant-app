import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faHeart } from '@fortawesome/free-solid-svg-icons'
const FavItem=(props)=>{
    let navigate = useNavigate();
    
    return(
        <>  
            {
                props.data.map((item,index)=>(
                    
                    <div className="card">
                    <div key={item.idMeal} onClick={()=>navigate(`/${item.idMeal}`)}>
                        <img src={item.strMealThumb} alt="" />
                        <h3>{item.strMeal}</h3>
                        
                    </div>
                    <button onClick={()=>props.handleFavoritesClick(item)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                    </div>
                    
                ))
            }
            
        </>
    )
}
export default FavItem;