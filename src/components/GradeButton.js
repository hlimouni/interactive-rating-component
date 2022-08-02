import React, { useContext } from 'react'
import {AppContext} from '../App'

function GradeButton({number}) {
  const {setRatingValue} = useContext(AppContext);
  // const {ratingValue} = useContext(AppContext);

  // const focus = {
  //     backgroundColor: ratingValue === number ? "hsl(217, 12%, 63%)" : "hsl(213, 19%, 22%)",
  //     color: ratingValue === number ? "hsl(0, 0%, 100%)" : "hsl(213, 19%, 60%)"
  //   };

  return (
      <button className='grade-button'
        onClick={() => setRatingValue(number)} >
        {number}
      </button>
  );
}

export default GradeButton