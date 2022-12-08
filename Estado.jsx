import { useState } from 'react';
import './App.css'



// USANDO STATE ESTADOS NO REACT ALTERANDO SEU VALOR
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



