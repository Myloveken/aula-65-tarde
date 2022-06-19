import './App.css';
// eslint-disable-next-line no-unused-vars
import UseEffectClass from './components/UseEffectClass';
// eslint-disable-next-line no-unused-vars
import UseEffectFunction from './Components/UseEffectFunction.jsx';
// eslint-disable-next-line no-unused-vars
import FetchAPIData from './components/api/FetchAPIData';
// eslint-disable-next-line no-unused-vars
import TodoList from './components/itemsList/TodoList'
// eslint-disable-next-line no-unused-vars
import TodoListCallback from './components/itemsList/TodoListCallback'
import CallbackMemo from './components/CallbackMemo';

function App() {
    return ( <
        div className = "App" > {
            /* <UseEffectClass />
                  <UseEffectFunction />
                  <FetchAPIData /> */
        } { /* <TodoList /> */ } { /* <TodoListCallback /> */ } <
        CallbackMemo / >


        <
        /div>
    );
}

export default App;