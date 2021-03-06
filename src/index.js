// react router v6 https://www.youtube.com/watch?v=0cSVuySEB0A&t=476s

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* when you type localhost:3000/myapps and hit enter, the path changes to localhost:3000/learn */}
      {/* <Route path="/myapps" element={<Navigate replace to="/learn" />} /> */}
      {/* localhost:3000/myapps brings you to /learn, if you hit the back button it goes to localcost:3000/,  */}
      {/* Adding the replace keyword isn't laying anything on top of it... just use it*/}
      <Route path="/myapps" element={<Navigate to="/learn" />} />
      <Route path="/learn" element={<Learn />}>
        <Route path="courses" element={<Courses />}>
          <Route path=":courseid" element={<CourseId />} />
        </Route>
        <Route path="bundles" element={<Bundles />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

function Home() {
  return (
    <div>
      <h1>Home router</h1>
    </div>
  );
}

function Learn() {
  return (
    <div>
      <h1>Learn</h1>
      <h4>All courses are listed here</h4>
      <Link className="btn text-white" to="/learn/courses">
        courses
      </Link>
      {` | `}
      <Link className="btn text-white" to="/learn/bundles">
        bundle
      </Link>
      <Outlet />
    </div>
  );
}

function Courses() {
  const courseList = ['React', 'Angular', 'Vue', 'Nodejs'];
  const randomCourseName =
    courseList[Math.floor(Math.random() * courseList.length)];

  return (
    <div>
      <h1>Courses list</h1>
      <h4>Courses card</h4>

      <p>More test</p>
      <NavLink
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? 'pink' : 'yellow',
          };
        }}
        to={`/learn/courses/${randomCourseName}`}
      >
        {randomCourseName}
      </NavLink>
      <NavLink className="btn" to={`/learn/courses/tests`}>
        tests
      </NavLink>

      <Outlet />
    </div>
  );
}
function Bundles() {
  return (
    <div>
      <h1>Bundle list</h1>
      <h4>Bundle card</h4>
    </div>
  );
}
function CourseId() {
  const navigate = useNavigate();
  const { courseid } = useParams();
  return (
    <div>
      <h1>URL Params is : {courseid}</h1>
      <button
        onClick={() => {
          navigate('/dashboard', { state: courseid });
        }}
        className="btn"
      >
        Price
      </button>
      <Link to="/dashboard" state={'DJANGO'}>
        test link
      </Link>
    </div>
  );
}
function Dashboard() {
  const location = useLocation();
  return (
    <div>
      <h1>Here is the info that I got {location.state}</h1>
    </div>
  );
}
