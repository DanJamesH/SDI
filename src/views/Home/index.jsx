import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
import logo from '../../logo.svg';
import '../../App.css';

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
]

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h4" style={{color:'#282c34', marginBottom:'3vh'}}>
            Western Cape Renewable Energy Data Portal
        </Typography>
        <Autocomplete
            id="combo-box-demo"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            style={{ width: 300}}
            renderInput={(params) => <TextField {...params} label="Search data" variant="outlined" style={{color:'#ffffff'}}/>}
        />
      </header>
    </div>
  );
}

export default Home;
