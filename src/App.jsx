import './App.css'
import RootLayout from './layouts/rootLayout'
import About from './pages/about'
import Collection from './pages/collection'
import ContactUs from './pages/contact-us'
import LandingPage from './pages/landing'

import { RouterProvider, createBrowserRouter } from "react-router-dom"



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children:[
      {
        index: true,
        element: <LandingPage />
      },
{
      path: "about-us",
      element: <About />,
    },
    {
      path: "collection",
      element: <Collection />
    },
    {
      path: "contact-us",
      element: <ContactUs />
    },
  ]}
  
  ])

  return <RouterProvider router={router} />;


}

export default App
