import React, { Component } from 'react';
import { Link, Switch,  Route} from 'react-router-dom';
import loaderImgSrc from '../loader.svg';


class Artists extends Component {


  state={
    data:[],
    loaded:false
  }
  
    componentDidMount(){
  
      fetch('http://www.json-generator.com/api/json/get/bTUcoMILQO?indent=2')
        .then( res => res.json() )
        .then( res => {
          console.log(res);
          this.setState({
            data: res,
            loaded: true
          })
        })
  
    }

    render() {
      let {data, loaded} = this.state;
      return (          
        <div>
              <h2>Artists</h2>
              {
                !loaded
                ?
                  <img src={loaderImgSrc}/> 
                : 
                <div className="list-menu">
                  {data.map( (artist, key) => (<Link key={key} to={"/artist/"+artist.index}>{artist.name}</Link>))}
                </div>
              }        
        </div>
      );
    }
  }

  export default Artists;