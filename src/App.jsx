import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Layout } from './components/Layout'
import { ListMovies } from './components/ListMovies'
import { DetailMovie } from './components/DetailMovie'
import { Home } from './components/Home'
// Import from react-router-dom
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import TableMovies from './components/TableMovies'

const router=createBrowserRouter([
  {
    path: '/',
    element:<Home/>

  },
  {
    path:'/movie/',
    element:<ListMovies/>
  }
  ,
  {
    path:'/movie-table',
    element:<TableMovies/>
  },
  {
    path:'/movie/:id',
    element:<DetailMovie/>
  }
])

export function App(){
  return (
    <Layout>
      <RouterProvider router={router}/>
    </Layout>
  )
}
