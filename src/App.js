import {useState, useEffect} from 'react';

function App() {

  const [updateCounter, setUpdateCounter] = useState(0)

  const handleCounter = () => {
    setUpdateCounter(updateCounter + 1)
  }

  return (
    <main className="bg-[#191919] max-h-screen">
      <button onClick={handleCounter} className='bg-white p-10'>{updateCounter}</button>
    </main>
  );
}

export default App;
