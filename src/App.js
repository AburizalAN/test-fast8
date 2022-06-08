import Home from 'pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}/> 
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
