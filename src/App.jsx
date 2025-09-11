import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useParams,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./Sidebar";
import Home from "./pages/home";
import LoginSignup from "./pages/LoginSignup";
import AllCategories from "./pages/AllCategories";
import Popular from "./pages/Popular"; // ✅ Import Popular page

// ✅ Proper dynamic category page using useParams
function CategoryPage() {
  const { name } = useParams();
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">{name} Games</h1>
      <p className="text-gray-300">Showing games for {name} category.</p>
    </div>
  );
}

// ✅ Layout wrapper for pages with Navbar + Sidebar
function MainLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto bg-gray-950">
          {children}
        </div>
      </div>
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();

  // 🔹 Pages WITHOUT Navbar + Sidebar
  if (location.pathname === "/login") {
    return (
      <Routes>
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    );
  }

  // 🔹 Default layout WITH Navbar + Sidebar
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-categories" element={<AllCategories />} />
        <Route path="/popular" element={<Popular />} /> {/* ✅ New route */}
        <Route path="/category/:name" element={<CategoryPage />} />
      </Routes>
    </MainLayout>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
