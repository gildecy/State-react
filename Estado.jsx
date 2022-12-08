import { useState } from 'react';
import './App.css'



// alterando valor no campo de imput com state no react
export function App() {
 const [name, setName] = useState('');
  

  return (
   <div>
     
      <div>
        <p>meu nome é: {name}</p>
        <input type="text" className='text' value={name} onChange={e => setName (e.target.value)}>
        </input>
       
        
      </div>
  </div>
  )
};

export default App;



