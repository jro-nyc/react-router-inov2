import { useState } from 'react';
import AppRouter from './AppRouter';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
  useParams,
  useNavigate } from 'react-router-dom';

const BlogPosts = {
  'first-blog-post': {
    title: 'First Blog Post',
    description: 'Lorem ipsum dolor sit amet, consectetur adip.'
  },
  'second-blog-post': {
    title: 'Second Blog Post',
    description: 'Hello React Router v6'
  }
};



function AppLayout() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  function logOut() {
    setUser(null);
    navigate("/");
  }
// const pathname = window.location.pathname
// const validPaths = ["/","/posts","/about","/login","/stats" ]
// const isValidPath = validPaths.includes(pathname)
// if(isValidPath) {
  return (
    <>
      <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>
          Home
          </Link>
          <Link to="/posts" style={{ padding: 5 }}>
          Posts
          </Link>
          <Link to="/about" style={{ padding: 5 }}>
          About
          </Link>
          <span> | </span>
          { user && <Link to="/stats" style={{ padding: 5 }}>
          Stats
          </Link> }
          { !user && <Link to="/login" style={{ padding: 5 }}>
          Login
          </Link> }
          { user && <span onClick={logOut} style={{ padding: 5, cursor: 'pointer' }}>
          Logout
          </span> }<span> | </span>
          <Link to="/abcd" style={{ padding: 5 }}>
          404 route
          </Link><span> | </span>
          <Link to="/efg" style={{ padding: 5 }}>
          404 route #2
          </Link><span> | </span>
          <Link to="/hijk" style={{ padding: 5 }}>
          404 route #3
          </Link><span> | </span>
          <Link to="/lmnop" style={{ padding: 5 }}>
          404 route #4
          </Link><span> | </span>
      </nav>
<AppRouter />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostLists />} />
          <Route path=":slug" element={<Post />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login onLogin={setUser}/>} />
        <Route path="/stats" element={<ProtectedRoute user={user}><Stats user={user}/></ProtectedRoute>} />
        <Route path="*" element={<NoMatch />} />
   
      </Routes> */}
      
    </>)
  //);
}

function App() {
  return (
    <Router>
        <AppLayout/>
    </Router>
  );
}

export default App;
