import React from "react";

export default class Fetch100users extends React.Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({person: data.results[1],loading: false})
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person.name) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        <div>{this.state.person.name}</div>
      </div>
    );
  }
}