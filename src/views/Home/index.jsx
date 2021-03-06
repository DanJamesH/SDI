import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
import '../../App.css';
import data from '../../assets/data.json'
import { useHistory } from "react-router-dom";
import ParticlesComponent from './Particles';

const Home = () => {

  let history = useHistory();

  const [value, setValue] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');

  useEffect(() => {
    if(inputValue !== ""){
      const route = data.data.find((element) => element.title === inputValue)
      history.push(`/${route.id}`)
    }
  }, [value])

  return (
    <div className="App">
      <header className="App-header">
        <ParticlesComponent/>
        <Typography variant="h4" style={{color:'#282c34', marginBottom:'3vh'}}>
            Western Cape Renewable Energy Data Portal
        </Typography>
        <Autocomplete
            id="combo-box-demo"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            options={data.data}
            getOptionLabel={(option) => option.title}
            style={{ width: '40vh', backgroundColor:'white'}}
            renderInput={(params) => <TextField {...params} label="Search data" variant="outlined" style={{backgroundColor:'#ffffff'}}/>}
        />
      </header>
    </div>
  );
}

export default Home;
