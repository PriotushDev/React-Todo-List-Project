import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import Todos from "./pages/Todos.jsx"
import Posts from "./pages/Posts.jsx"
import PostDetails from "./pages/PostDetails.jsx"

export default function App() {
    return (
        <BrowserRouter>
            <div className="app-layout">
                {/* 🔵 Scroll Progress Bar */}
                <ScrollProgress />

                <Navbar />

                <main className="app-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/todos" element={<Todos />} />
                        <Route path="/posts" element={<Posts />} />
                        <Route path="/posts/:id" element={<PostDetails />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </BrowserRouter>
    );
}


