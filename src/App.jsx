import React from 'react'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"

import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import NotFoundPage from './pages/NotFoundPage'

import quizzical from "./assets/quizzical-screenshot.png"
import intro from "./assets/intro-screenshot.png"
import tenzies from "./assets/tenzies-screenshot.png"
import tictactoe from "./assets/tictactoe-screenshot.png"
import ipTracker from "./assets/ip-tracker-screenshot.png"
import todoList from "./assets/todo-list-screenshot.png"
import countries from "./assets/countries.png"
import sneakers from "./assets/sneakers.png"
import rockpaperscissors from "./assets/rockpaperscissors.png"

export default function App() {

  const projectsArray = [
    {
    title: "Where in the World",
    url: "https://where-in-the-world-reactng.vercel.app/",
    img: countries,
    description: "Uncover this project from Frontend Mentor where I utilized React, React-Router, and Tailwind CSS. Explore country data, search for specific countries, filter by region, and seamlessly switch between light and dark modes. "
    },
    {
    title: "Sneakers Product",
    url: "https://sneakers-product-react.vercel.app/",
    img: sneakers,
    description: "Discover my implementation of this challenge from Frontend Mentor, demostrating my skills in React, JavaScript, and Tailwind CSS. Experience a responsive layout, interactive lightbox product gallery, and seamless cart functionality."
    },
    {
    title: "Todo List",
    url: "https://todo-react-ng.vercel.app/",
    img: todoList,
    description: "Experience this Todo App project developed using React, JavaScript, and Tailwind CSS. Enjoy adding, completing, and deleting todos, as well as filtering and toggling between light and dark modes for an enhanced user experience. (Frontend Mentor challenge)"
    },
    {
    title: "IP Tracker",
    url: "https://address-tracker-react.vercel.app/",
    img: ipTracker,
    description: "Through the use of React, JavaScript, and Tailwind CSS, I built a responsive app that integrates the IP Geolocation API by IPify and LeafletJS. Experience the power of visualizing IP address locations on a dynamic map with this project. (Frontend Mentor challenge)"
    },
    {
    title: "Rock Paper Scissors",
    url: "https://rock-paper-scissors-react-delta-peach.vercel.app/",
    img: rockpaperscissors,
    description: "Experience the Rock, Paper, Scissors game challenge. Using React, JavaScript and Tailwind CSS, I crafted a layout for both desktop and mobile devices, allowing users to play against the computer. (Frontend Mentor challenge)"
    },
    {
    title: "Quizzical Trivia Game",
    url: "https://quizzical-game-rouge.vercel.app/",
    img: quizzical,
    description: "Leveraging an API to retrieve questions and answers, I created a responsive design optimized for both mobile and desktop devices using React, JavaScript, and Tailwind CSS. Immerse yourself in this engaging experience and put your knowledge to the test."
    },
    {
    title: "Intro Section Dropdown",
    url: "https://intro-section-dropdown-seven.vercel.app/",
    img: intro,
    description: "Built using React, JavaScript, and Tailwind CSS, the design ensures that users can seamlessly access relevant dropdown menus on both desktop and mobile devices. (Frontend Mentor challenge)"
    },
    {
    title: "Tenzies Game",
    url: "https://tenzies-game-livid.vercel.app/",
    img: tenzies,
    description: "Initially starting with a simple approach, the focus is on the functionality using JavaScript. Prepare for an exciting challenge that will put your skills to the test. (Scrimba project)"
    },
    {
    title: "Tic Tac Toe",
    url: "https://tic-tac-toe-umber-omega.vercel.app/",
    img: tictactoe,
    description: "Made with React, JavaScript and Tailwind CSS, this game allows you to engage in thrilling matches with friends."
    }
    ];

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage projectsArray={projectsArray}/>}/>
      <Route path="projects" element={<ProjectsPage projectsArray={projectsArray}/>}/>
      <Route path='*' element={<NotFoundPage />}/>
    </Route>
  )) 

  return (
    <RouterProvider router={router}/>
  )
}
