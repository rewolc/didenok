import "./App.scss";

import LeftNav from "./components/leftNav/leftNav";
import Main from "./pages/mainPage/main";
import EmployePage from "./pages/employePage/employePage";

import { useEffect } from "react";
import { useAppDispatch } from "./redux/actions";
import { fetchTeams } from "./redux/tems-reducer/team-actions";

import { Route, Routes } from "react-router-dom";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTeams());
  }, []);

  return (
    <div className="container">
      <LeftNav />
      <Routes>
        <Route path="/" element={<Main key={"main"} />} />
        <Route
          path="/:id/:employe"
          element={<EmployePage key={"employee"} />}
        />
      </Routes>
    </div>
  );
};

export default App;
