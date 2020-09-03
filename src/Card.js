import React from 'react';
import testimage from './testimage.png'

const Card = ({name, email, id}) =>{
return (
	<div div className ='bg-gray dib br3 pa3 ma3 grow'>
	
	 <div>
	  <img src={testimage} alt="Peter Macharia" height='200' width='250' crop='fill'/>
	  <h2>{name}</h2>
	   <p>{email}</p>
      </div>
    </div>
	);
}
export default Card;