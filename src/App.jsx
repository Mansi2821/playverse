import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./Sidebar";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          {/* <main className="flex-1 overflow-y-auto p-6 bg-gray-100"> */}
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          {/* </main> */}
        </div>
      </div>
    </Router>
  );
}

export default App;


