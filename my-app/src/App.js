import './App.css';
import FunctionalGreeting from './components/FunctionalGreetings';
import FunctionalGreetingWithProps from './components/FunctionalGreetingsWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState'

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Nice to meet you" name="Connor" age="24"/>
      <StatefulGreeting greeting="im a stateful greeting prop"/> */}
      {/* <StatefulGreetingWithCallback /> */}
      <StatefulGreetingWithPrevState />
    </div>
  );
}

export default App;
