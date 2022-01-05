import './App.css';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
// import { BrowserRouter as SomeName} from 'react-router-dom';

const User = ({ match }) => {
  return (
    <div>
      <h2>how are you {match.params.username}?</h2>
    </div>
  );
};

const User2 = ({ match }) => {
  return (
    <div>
      <div>asdf</div>
      <div>lol `${match.params.slug}` </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div>it's working</div>
        <Routes>
          {/* <Route path="/" element={<User />} /> */}
          {/* <Route path="/user" element={<User ha="user ha" />} /> */}
          {/* <Route path="/user/:username" element={<User />} /> */}
          <Route path="/blog/:slug" element={<User2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
