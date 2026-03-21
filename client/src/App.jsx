import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Community from './pages/Community'
import WriteArticle from './pages/WriteArticle'
import BlogTitles from './pages/BlogTitles'
import ReviewResume from './pages/ReviewResume'
import GenerateImages from './pages/GenerateImages'
import RemoveBackground from './pages/RemoveBackground'
import RemoveObject from './pages/RemoveObject'
import Layout from './pages/Layout'
import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react'
import {Toaster} from 'react-hot-toast'


const App = () => {

  const { getToken, isLoaded, isSignedIn } = useAuth()

  useEffect(() => {
    const fetchToken = async () => {
      if (isLoaded && isSignedIn) {
        const token = await getToken()
        console.log("Clerk Token:", token)
      }
    }
    
    fetchToken()
  }, [isLoaded, isSignedIn, getToken])
  

  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ai' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='community' element={<Community />} />
          <Route path='write-article' element={<WriteArticle />} />
          <Route path='blog-titles' element={<BlogTitles />} />
          <Route path='review-resume' element={<ReviewResume />} /> 
          <Route path='generate-images' element={<GenerateImages />} />
          <Route path='remove-background' element={<RemoveBackground />} />
          <Route path='remove-object' element={<RemoveObject />} />

        </Route>
      </Routes>
      
    </div>
  )
}

export default App
