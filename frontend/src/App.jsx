import Feed from './components/Feed';
import Recipe from './components/Recipe';

import {
  BrowserRouter as Router,
  Routes, Route, Link, useParams
} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>MiaMia</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/:title" element={<Recipe />} />
        </Routes>
      </Router>
      <footer></footer>
    </div>
  );
};

export default App;
