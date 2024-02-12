import { Routes, Route } from "react-router-dom";
import './App.css';
import Main from "./routes/Main/Main.jsx";
import Blog from "./routes/Blog/Blog.jsx";
import Portfolio from "./routes/Portfolio/Portfolio.jsx";
import Reviews from "./routes/Reviews/Reviews.jsx";
import Layout from "./Components/Layout/Layout.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/blog" element={<Blog />} />
                 <Route path="/portfolio" element={<Portfolio />} />
                 <Route path="/reviews" element={<Reviews />} />
            </Routes>
        </>
    );
}

export default App;











































// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
//
// function App() {
//   const [count, setCount] = useState(0)
//
//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


