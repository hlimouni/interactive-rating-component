import React from 'react'
import GradeButton from './GradeButton'

function RatingScale() {
  const ratings = [1, 2, 3, 4, 5];
  return (
    <div className='rating-scale'>
      {ratings.map((rating, key) => (<GradeButton key={key} number={rating} />))}
    </div>
  );
}

export default RatingScale