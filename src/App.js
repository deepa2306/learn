//import logo from './logo.svg';
import './App.css';
import Welcome from './Components/WelcomeFunctionalPractice.js';
//import WelcomeStudents from './Components/WelcomeClassCompPractice.js';
function App() {
  return (
    <div className="App">
     <Welcome name="Deepa" sportsName="Badminton" city="Ambathur" Gender="Female">
     <p>React is a framework that employs Webpack to automatically compile React, JSX, and ES6 code while handling CSS file prefixes. 
      React is a JavaScript-based UI development library. 
      Although React is a library rather than a language, 
      it is widely used in web development. jhgyg</p>
      </Welcome>
     <Welcome name="krishna" sportsName="football" city="padi" Gender="Male">
     <button> Click me </button>
     <button> verify </button>
     <button> Confirm </button>
     </Welcome>
     <Welcome name="Jivesh" sportsName="VolleyBall" city="Chennai" Gender="Male">
      <form action="*.do" method="GET">
        <label> USER NAME </label><input type="text" name="userName"></input><br></br>
        <label> PASSWORD </label><input type="text" name="password"></input><br></br>
        <input type="submit" value="submit"></input>
      </form>
     </Welcome>
    </div>
  );
}

export default App;
