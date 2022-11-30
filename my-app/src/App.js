import './App.css';
import FunctionalGreeting from './components/FunctionalGreetings';
import FunctionalGreetingWithProps from './components/FunctionalGreetingsWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState'
import EventsClass from './components/events/EventsClass';
import EventsFunctional from './components/events/EventsFunctional';
import EventBinding from './components/events/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRendering/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRendering/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsProps/MethodsAsPropsParent';



function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Nice to meet you" name="Connor" age="24"/>
      <StatefulGreeting greeting="im a stateful greeting prop"/>
      <StatefulGreetingWithCallback />
      <StatefulGreetingWithPrevState />
      <EventsFunctional/>
      <EventsClass/> 
      <EventBinding/>
      <ConditionalRenderingClass/>
      <ConditionalRenderingFunctional connected={true}/>
      <NestingComponents/>*/}
      <MethodsAsPropsParent/>
      


    </div>
  );
}

export default App;
