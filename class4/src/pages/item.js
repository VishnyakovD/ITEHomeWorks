import React from 'react';



const Item = ({match, location}) => {
    console.log(match)
 
  return(
    <div>
      <h1>Company id: {match.params.itemid}</h1>
    </div>
  )

}

export default Item;