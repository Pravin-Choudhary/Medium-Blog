import { BrowserRouter , Route , Routes } from 'react-router-dom'
import { Blog } from './pages/Blog'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import './App.css'
import { Blogs } from './pages/Blogs'
import {  NewStory } from './pages/NewStory'
import {UpdateStory} from './pages/UpdateStory'


function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
                  <Route path='/' element={<Signup/>}/>
                  <Route path='/signup' element={<Signup/>}/>
                  <Route path='/signin' element={<Signin/>}/>
                  <Route path='/blogs' element={<Blogs/>} />
                  <Route path='/blog/:id' element={<Blog/>}/>
                  <Route path='/new-story' element={<NewStory/>} />
                  <Route path='/update-story/:id' element={<UpdateStory/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
