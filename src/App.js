
import './App.css';

function App() {
  
  return (
    <div className='container mt-5 w-50'>
      <h1 className='text-center'>Todo App using React</h1>
      <div className='input-group'>
    <input className='form-control' type="text"/>
    <button className='btn btn-success'>Add</button>
    </div>
    <ul className='list-group'>
      <li className='list-group-item'>
          <p>todo1</p>
          <button className='btn'>❌</button>
      </li>
      <li className='list-group-item'>
      <p>todo1</p>
      <button className='btn'>❌</button>
      </li>
    </ul>
    </div>
  );
}

export default App;
