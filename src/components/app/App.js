// import logo from './logo.svg';
import JsxExamples from '../jsxExamples';
import Task4 from '../task4/task4';
import Task5 from '../task5/task5';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <JsxExamples 
        myFirstProp={" It is my first text in prop. Task3"}
        surName = "Smith"
        />
        <Task4>
        <h1>Hello, world!</h1>
        <p>This is some children text from Task4.</p>
        </Task4> 
        <Task5
        texttask5={"Task5.Hello world"}
/>
      </header>
    </div>
  );
}

export default App;
