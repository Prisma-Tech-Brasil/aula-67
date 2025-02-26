import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/appRoutes";
import AppHeader from "./components/appHeader";

function App() {
  return (
    <>
      <Router>
        <AppHeader />
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
