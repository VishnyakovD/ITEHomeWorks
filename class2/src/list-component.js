import React, { Component } from "react";
import UserItemComponent from "./user-item-component";

class ListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  componentDidMount() {
    //загрузка данных
    let requestUrl =
      "http://www.json-generator.com/api/json/get/ckPDzNHDAO?indent=2";
    fetch(requestUrl)
      .then(res => res.json())
      .then(data => {
        let list = data.map(user => {
          return {
            interviewed: false,
            user
          };
        });
        this.setState({ list });
      });
  }

  render() {
    return (
      <div>
        {this.state.list.map((item, key) => {
          return (
            <UserItemComponent
              userItem={item}
              event={() => {
                item.interviewed = !item.interviewed;
                this.forceUpdate();
              }}
            />
          );
        })}
      </div>
    );
  }
}

export default ListComponent;
