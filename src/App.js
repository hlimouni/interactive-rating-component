import { createContext, useState } from 'react';
import Rating from './components/Rating';
import ThankYou from './components/ThankYou';

export const AppContext = createContext(null);

export default function App() {
  const [ratingValue, setRatingValue] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  return (
    <div className="App">
      <AppContext.Provider value={{ratingValue, setRatingValue, isSubmit, setIsSubmit}}>
        {ratingValue && isSubmit ? <ThankYou/> : <Rating/>}
      </AppContext.Provider>
    </div>
  );
}

