import { BrowserRouter , Route , Routes } from 'react-router-dom'
import { Blog } from './pages/Blog'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import './App.css'
import { Blogs } from './pages/Blogs'
import {  NewStory } from './pages/NewStory'


function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
                  <Route path='/signup' element={<Signup/>}/>
                  <Route path='/signin' element={<Signin/>}/>
                  <Route path='/blogs' element={<Blogs/>} />
                  <Route path='/blog/:id' element={<Blog/>}/>
                  <Route path='/new-story' element={<NewStory/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
