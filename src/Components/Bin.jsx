import React from 'react'


export default function Bin({ sentData})
{

    const  logged ='sathis';

    
    return(
        <div>
            <button onClick={()=>{sentData(logged)}}>click</button>



        </div>
    )
}

  