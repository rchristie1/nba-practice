import './App.scss';
import Footer from './components/footer';
import { Route, Routes } from "react-router-dom";
import Header from './components/header';
import LeagueLeaders from './components/leagueLeaders';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/leaders" Component={LeagueLeaders} />
        working
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
