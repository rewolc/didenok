import React from 'react';
import { useEffect } from 'react';
import './App.scss';
import LeftNav from './components/leftNav/leftNav';
import Main from './pages/mainPage/main';
import { useAppDispatch } from './redux/actions';
import { fetchTeams } from './redux/tems-reducer/team-actions';

const App =()=> {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTeams());
    
 },[]);
  return (
    <div className="container">
    <LeftNav/>
    <Main/>
    </div>
  )
}

export default App;
