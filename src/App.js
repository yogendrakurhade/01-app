import './App.css';
import Header  from './components/Header';
import TodoItem from './components/TodoItem';
import Button from './components/Button';
import CounterState from './components/CounterState';

function App() {
  return (
    <div className="App">
      <Header/>
      <CounterState/>
      <TodoItem text='Eat'/>
      <TodoItem text='Code'/>
      <TodoItem text='Play'/>
      <TodoItem text='Study'/>
      <TodoItem text='Sleep'/>
      <Button/>
    </div>
  );
}

export default App;
