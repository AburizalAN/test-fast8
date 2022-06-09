import Home from 'pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}/> 
            <Route path="/personnel-list" element={<Home />}/> 
            <Route path="/daily-attendance" element={<Home />}/> 
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
