import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, Icon, Image, List } from 'semantic-ui-react';

class App extends Component {
  state = {
    values: []  
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/values')
    .then((response) => {
      this.setState({
        values: [{id: 1, name: 'Values101'}, {id: 2, name: 'Values102'}]
      });
    });
    
  }

  
  render() {
  return (
    <div>
        
        <Header as='h2' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content>Friends</Header.Content>
        </Header>
        <List>
          {this.state.values.map((value) =>
              <li key={value.id}>
                {value.name}
              </li>
            )}
        </List>
    </div>
  );
  }
}

 export default App;
