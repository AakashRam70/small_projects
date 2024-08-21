import './App.css';
import Accordion from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className='App'>
      {/* Accordian Component  */}
      {/* <Accordion /> */}

      {/* Random Color Generator  */}
      {/* <RandomColor /> */}

      {/* Star Rating Component */}
      <StarRating noOfStars={10} />

    </div>
  )
}

export default App;
