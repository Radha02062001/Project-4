import React from "react";



const List=({name,model})=>{
    const [addfoll, setAddfoll]=React.useState(false); 
    return(
        <div className='hii'>
        
            <h3>{name}</h3>
            {!addfoll ?(
                <div className="follow">
                    <button onClick={()=> setAddfoll(true)}>
                        Follow
                    </button>
                </div>
            ) :(
                <div className="follow">
                    <button onClick={()=> setAddfoll(false)}>
                        Unfollow
                    </button>
                </div>
            )}
            </div>
        
            
    );
            };

export default List;
