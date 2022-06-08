import Home from 'pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
