import React, { Component } from 'react';
import loaderImgSrc from './loader.svg';


class LoaderImg extends Component{
    state={
        src:'',
        loaderImgSrc,
        loadComplite:false
    }

    loaded = () => {
        let { loadComplite } = this.state;
        loadComplite=!loadComplite;
        this.setState({loadComplite});
      }

    static getDerivedStateFromProps=(props, state)=>{
        if( props.src !== undefined ){
            return {
            src: props.src
            }
        } else {
            return null
        }
    }

    render = () => {
        let { loaded } = this;
        let { loadComplite, loaderImgSrc, src} = this.state;
        return(
            <div className="img-container">
                {  
                    !loadComplite
                    ?
                    <img className={'img-load'} src={loaderImgSrc}/>         
                    :
                    null
                }
                <img className={!loadComplite?'hide':null} onLoad={loaded} src={src}/>
            </div>
   
        )
      }
}

export default LoaderImg;