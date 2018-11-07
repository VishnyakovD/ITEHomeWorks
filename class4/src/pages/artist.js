import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import loaderImgSrc from "../loader.svg";

class Artist extends Component {
  state = {
    item: {},
    loaded: false
  };

  componentDidMount() {
    let { params } = this.props.match;
    fetch("http://www.json-generator.com/api/json/get/bTUcoMILQO?indent=2")
      .then(res => res.json())
      .then(res => {
        this.setState({
          item: res.filter(it => it.index === Number(params.artistid))[0],
          loaded: true
        });
      });
  }

  sumTime(tracks) {
    let dt = new Date(0, 0, 0, 0, 0, 0, 0);

    if (tracks.length === 0) return dt;

    tracks.forEach(track => {
      let timeArr = track.duration.split(":");
      dt.setMinutes(dt.getMinutes() + Number(timeArr[0]));
      dt.setSeconds(dt.getSeconds() + Number(timeArr[1]));
    });
    return `${dt.getHours() < 10 ? "0" + dt.getHours() : dt.getHours()}:${
      dt.getMinutes() < 10 ? "0" + dt.getMinutes() : dt.getMinutes()
    }:${dt.getSeconds() < 10 ? "0" + dt.getSeconds() : dt.getSeconds()}`;
  }

  render() {
    let { item, loaded } = this.state;
    if (!loaded) {
      return <img src={loaderImgSrc} />;
    } else if (item === undefined) {
      return <Redirect to="/notfound" />;
    } else {
      console.log(item);
      if (item.album.length === 0) {
        return (
          <div>
            <h2>Artist {item.name}</h2>
            <div>Not Albums</div>
          </div>
        );
      } else {
        return (
          <div>
            <h2>Artist {item.name}</h2>
            <table>
              <tr>
                <th />
                <th>Album</th>
                <th>Conpositions</th>
                <th>Total time</th>
              </tr>
              {item.album.map((album, key) => (
                <tr>
                  <td>{key + 1}</td>
                  <td>
                    <Link
                      key={key}
                      to={`/compositions/${item.index}/${album.name}`}
                    >
                      {album.name}
                    </Link>
                  </td>
                  <td className="text-right">{album.compositions.length}</td>
                  <td className="text-right">
                    {this.sumTime(album.compositions)}
                  </td>
                </tr>
              ))}
            </table>
          </div>
        );
      }
    }
  }
}

export default Artist;
