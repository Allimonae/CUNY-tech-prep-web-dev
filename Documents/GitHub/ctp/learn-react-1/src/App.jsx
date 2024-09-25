import { useState } from 'react'
import { StudentInfo } from './StudentInfo'
import './App.css'
import { useEffect } from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  useEffect(async () => {
    const response = await fetch('https://json.link/oJbmHxLn8f.json');
    const data = await response.json();
    console.log(data);
  };
  getStudents();
},[])
  return (
    <>
      <StudentInfo firstName="Jane" lastName="Doe" />
      <StudentInfo firstName="John" lastName="Doe"/>
      <div>
        <h1>Welcome to CTP</h1>
        <p>List of Students</p>
      </div>
    </>
  )
}
export default App