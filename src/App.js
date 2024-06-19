import { Header } from './components/Header';
import "../src/assets/css/index.css";
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import Login from './components/login';
import Register from './components/Register';
import { AddTask } from "./components/AddTask";
import { ShowTask } from './components/ShowTask';
import './App.css';


function App() {
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || [] );
  const [task, setTask] = useState( {} );
  const [isRegister, setIsRegister] = useState(false);
  const {user, logout } = useContext(AuthContext);

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist))
  }, [tasklist]);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <>
      {user ? (
        <div className='App'>
            <Header />
            <AddTask
              tasklist={tasklist}
              setTasklist={setTasklist}
              task={task}
              setTask={setTask}
            />
            <ShowTask 
              tasklist={tasklist}
              setTasklist={setTasklist}
              task={task}
              setTask={setTask}
            />
        </div>
      ):(
        <div className='App'>
          <Header />
          {isRegister ? <Register toggleForm={toggleForm} /> : <Login toggleForm={toggleForm}/>}
        </div>
      )}
    </>
  );
}

export default App;
