import React, { StrictMode } from 'react'
import ReactDom, { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function ClassList() {
  return (
    <div>
      <h1>Welcome to CTP</h1>
      <p>List of Students</p>
    </div>
  );
}

function StudentInfo() {
  return (
    <div>
      <div>
        Doe, Jane
      </div>
      <ul>
        <li>
          <strong>ID:</strong> 123
        </li>
        <li>
          <strong>School:</strong> Queens College
        </li>
        <li>
          <strong>Major:</strong> Computer Science
        </li>
      </ul>
    </div>
  );
}

function ClassList() {
  return (
    <div>
      <h1>Welcome to CTP</h1>
      <p>List of Students</p>
      <StudentInfo />
    </div>
  );
}

const htmlContainer = document.getElementById("root");
const root = ReactDOM.createRoot(htmlContainer);

root.render(<h1>Hello World!</h1>)
