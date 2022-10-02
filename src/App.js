import Button from "@mui/material/Button";
import SettingsIcon from '@mui/icons-material/Settings';
import NavBar from './components/NavBar';
import About from './components/About';

const textClick = () => {
  alert('Alert popup from outside function');
}

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div style= {{ justifyContent: 'center', alignItems: 'center'}}>
          <NavBar />
          <h1> Hello this is my personal site 🤨</h1>
          <About />
          <Button onClick={()=> textClick()} variant="text" startIcon={<SettingsIcon/>}>Text</Button>
          <Button variant="contained" color="primary">Contained</Button>
          <Button variant="outlined" disabled>Outlined</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
