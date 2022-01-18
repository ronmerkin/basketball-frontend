import './App.css'
import Lineups from './components/Lineups'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <main>
        <section>
          <Header />
          <Lineups />
        </section>
      </main>
    </div>
  );
}

export default App;