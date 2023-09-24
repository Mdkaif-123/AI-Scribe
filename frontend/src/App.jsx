import './App.css'
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/auth/Login';
import GenerateStory from './pages/story/GenerateStory';
import MyStory from './pages/story/MyStory';
import SignUp from './pages/auth/SignUp';

function App() {
  return (
    <>
      <main>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />}>
              <Route index element={<Dashboard />} />
              <Route path='generate-story' element={<GenerateStory />} />
              <Route path='my-story' element={<MyStory />} />
            </Route>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/sign-up' element={<SignUp />} />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App
