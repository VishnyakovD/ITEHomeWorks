import React, { Component } from "react";
import loaderImgSrc from "../loader.svg";

const Stars = ({ count, event, key1 }) => {
  return (
    <div className={`star stars-${count}`} data-key={key1} onClick={event}>
      <div data-count="1" />
      <div data-count="2" />
      <div data-count="3" />
      <div data-count="4" />
      <div data-count="5" />
    </div>
  );
};

class Compositions extends Component {
  state = {
    artist: [],
    loaded: false
  };

  componentDidMount() {
    let { params } = this.props.match;
    fetch("http://www.json-generator.com/api/json/get/bTUcoMILQO?indent=2")
      .then(res => res.json())
      .then(res => {
        this.setState({
          artist: res.filter(it => it.index === Number(params.artistid))[0],
          loaded: true
        });
      });
  }

  getStars = k => {
    let val = localStorage.getItem(k);
    if (!val) return 0;
    return val;
  };

  setStars = event => {
    let k = event.currentTarget.dataset.key;
    let v = event.target.dataset.count;
    if (this.getStars(k) === v) {
      v = 0;
    }
    localStorage.setItem(k, v);
    this.forceUpdate();
  };

  render() {
    let { artist, loaded } = this.state;
    let { params } = this.props.match;

    if (!loaded) {
      return <img src={loaderImgSrc} />;
    } else {
      let album = artist.album.filter(it => it.name === params.albumname)[0];

      return (
        <div>
          <h2>All tracks from the album {album.name}</h2>
          <div>
            {album.compositions.map((comp, key) => {
              let k = `${artist.index}-${album.name}-${comp.id}`;
              return (
                <div key={key}>
                  <h3>
                    {`${comp.id}. ${comp.name} - ${comp.duration}`}
                    <Stars
                      count={this.getStars(k)}
                      event={this.setStars}
                      key1={k}
                    />
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default Compositions;
