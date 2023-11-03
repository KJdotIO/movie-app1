
import Navbar from './Components/Navbar';

function App() {
    return (
        <>
            <Navbar/>
            <main className="bg-[#191919] max-h-screen main-cont">
                <section className="main-landing-stuff">
                    <h1 className="tagline">Discover Your New Favourite Film!</h1>
                    <p>Dive into a cinematic journey tailored just for you. Our advanced algorithms match you with movies that resonate with your taste</p>
                    <div className="start-exploring-cont">
                        <button type="button" className="start-exploring">Start Exploring Now!</button>
                    </div>
                </section>
            </main>
        </>
    );
}

export default App;
