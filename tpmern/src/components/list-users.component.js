
import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

const User=props =>(
  <tr>
    <td>{props.user.username}</td>
    <td>{props.user.gender}</td>
    <td>{props.user.dot}</td>
    <td>{props.user.news}</td>
    <td>{props.user.email}</td>
    <td>{props.user.photo}</td>
  </tr>
)

export default class listusers extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeDob = this.onChangeDob.bind(this);
    this.onChangeNews = this.onChangeNews.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhoto = this.onChangePhoto.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      User: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        this.setState({
          User: response.data
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    });
  }

  onChangeDob(e) {
    this.setState({
      dob: Date
    });
  }

  onChangeNews(e) {
    this.setState({
      news: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePhoto(e) {
    this.setState({
      photo: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const users = {
      username: this.state.username,
      gender: this.state.gender,
      dob: this.state.dob,
      new: this.state.news,
      email: this.state.email,
      photo: this.state.photo
    };
  
    console.log(users);

    axios.post('http://localhost:5000/users/'+this.props.match.params.id, users)
      .then(res => console.log(res.data));
    
    window.location = '/';
  }

  usersList() {
    return this.state.User.map(currentUser => {
      return <User user={currentUser} deleteUser={this.deleteUser} key={currentUser._id}/>;
    })
  }
  
  render() {
    return (
      <div>
        <h3>Liste des Utilisateur</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <table className="table table-stripped">
              <thead className="thead-dark">
                <tr>
                  <th>Utilisateur</th>
                  <th>Genre</th>
                  <th>Dob</th>
                  <th>News</th>
                  <th>Email</th>
                  <th>Photo</th>
                </tr>
              </thead>
              <tbody>
                {this.usersList()}
              </tbody>
            </table>
          </div>
          
          <div className="form-group">
            <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}