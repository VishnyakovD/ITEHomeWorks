import React from 'react';
import Button from './button-component';

const  UserItemComponent=({userItem, event})=>{
  console.log(userItem)
    return (
      <div key={userItem.user.index}>{userItem.user.name} 
      <Button 
        className={ userItem.interviewed ? 'green' : 'blue'}
        text={userItem.interviewed.toString()} 
        event={event}
      />
     </div>
    );
}

  

export default UserItemComponent;