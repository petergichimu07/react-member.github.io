import React from 'react';
import Card from './Card';
// import members from './members';
const CardList = ({members}) => {
  // the function below gets the users from the user list 
	const cardComponent = members.map((user, i) =>{
     return (
      <Card 
     key={i} 
     id={members.[i]}
     name={members[i].name} 
     email={members[i].email}
     />
        );
		})
	return (
		
         
       <div>
           {cardComponent}
        
       </div>
		);
}

export default CardList;