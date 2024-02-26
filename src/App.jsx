import './App.scss';
import { Fragment, useEffect, useState } from 'react';
import { Header } from './Components/Header/Header';
import { Sidebar } from './Components/Sidebar/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './Components/Footer/Footer';
import { Dashboard } from './Pages/Dashboard/Dashboard.jsx';
import { Tables } from "./Pages/Tabels/Tables.jsx";
import { Billing } from "./Pages/Billing/Billing.jsx";
import { Sales } from './Pages/Sales/Sales.jsx';
function App() {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(prevState => !prevState);
  };

  useEffect(() => {
    const sidebar = document.querySelector("aside");
    const bars = document.querySelector(".bars");

    bars.addEventListener("click", handleClick);
    if (state === true) {
      if (sidebar.className === "") {
        sidebar.className = "sidebar-return";
      } else if (sidebar.className === "sidebar-move") {
        sidebar.className = "sidebar-return"
      } else if (sidebar.className === "sidebar-return") {
        sidebar.className = "sidebar-move"
      }
    } else {
      sidebar.className = ""
    }
    return () => {
      bars.removeEventListener("click", handleClick);
    };
  }, [state]);
  return (
    <Fragment>
        <Header />
          <BrowserRouter>
            <div className="content d-flex">
              <Sidebar />
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/tables' element={<Tables />} />
                <Route path='/billing' element={<Billing />} />
                <Route path='/sales' element={<Sales />} />
              </Routes>
            </div>
          </BrowserRouter>
        <Footer />
    </Fragment>
  );
}

export default App;
