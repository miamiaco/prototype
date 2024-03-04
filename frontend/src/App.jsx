import Feed from './components/Feed';
import Recipe from './components/Recipe';
// import TestComponent from './components/TestComponent';

import {
  BrowserRouter as Router,
  Routes, Route, Link, useParams
} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <header>
        <h1>miamia</h1>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/:title" element={<Recipe />} />
        </Routes>
      </Router>
      <footer>
      </footer>
    </div>
  );
};

export default App;
