
import Home from "./pages/Home.jsx";
import Todos from "./pages/Todos.jsx";
import Posts from "./pages/Posts.jsx";
import PostDetails from "./pages/PostDetails.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function App()
{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/posts" element={ <Posts /> } />
        <Route path="/todo-list" element={ <Todos /> } />
        <Route path="/post-details" element={ <PostDetails /> } />
      </Routes>
    </BrowserRouter>
  )
}