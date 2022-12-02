import './App.css';
import FunctionalGreeting from './components/FunctionalGreetings';
import FunctionalGreetingWithProps from './components/FunctionalGreetingsWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState'
import EventsClass from './components/Events/EventsClass';
import EventsFunctional from './components/Events/EventsFunctional';
import EventBinding from './components/Events/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRendering/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRendering/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsProps/MethodsAsPropsParent';
import RenderingLists from './components/RenderingLists.js/RenderingLists';
import Clock from './components/ComponentLifeCycle/Clock';
import LifeCycleCDM from './components/ComponentLifeCycle/LifeCycleCDM';
import LifeCylceCDU from './components/ComponentLifeCycle/LifeCylceCDU';
import LifeCycleCWU from './components/ComponentLifeCycle/LifeCycleCWU';
import ControlledForm from './components/Forms/ControlledForm';
import UnControlledForm from './components/Forms/UnControlledForm';
import SearchBar from './components/Forms/SearchBar';
import HooksCounter from './components/Hooks/HooksCounter';
import ControlledFormHooks from './components/Hooks/ControlledFormHooks';
import UseStateWithArrays from './components/Hooks/UseStateWithArrays';
import UseStateWithObjects from './components/Hooks/UseStateWithObjects';



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
      <NestingComponents/>
      <MethodsAsPropsParent/>
      <RenderingLists/>
      <Clock/>
      <LifeCycleCDM/>
      <LifeCylceCDU/>
      <LifeCycleCWU/>
      <ControlledForm/>
      <UnControlledForm/>
      <SearchBar/>
      <HooksCounter/>
      <ControlledFormHooks/>
      <UseStateWithArrays/>*/}
      <UseStateWithObjects/>

      


    </div>
  );
}

export default App;
