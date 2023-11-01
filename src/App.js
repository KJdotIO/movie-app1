import {useState, useEffect} from 'react';

function App() {

  const [updateCounter, setUpdateCounter] = useState(0)

  const handleCounter = () => {
    setUpdateCounter(updateCounter + 1)
  }

  return (
    <main className="bg-[#191919] main-cont">
      <section class = "main-landing-stuff">
        <h1 class="tagline">Discover Your New Favourite Film!</h1>
        <p>Dive into a cinematic journey tailored just for you. Our advanced algorithms match you with movies that resonate with your tastes, ensuring every recommendation is a potential new favourite. No more endless scrolling; just pure cinematic joy.</p>
        <div class="start-exploring-cont">
        <button type="button" class="start-exploring">Start Exploring Now!</button>
        </div>
      </section>
    </main>
  );
}

export default App;