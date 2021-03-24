
import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

const User=props =>(
  <tr>
    <td>{props.user.username}</td>
    <td>{props.user.gender}</td>
    <td>{props.user.dob}</td>
    <td>{props.user.news.toString()}</td>
    <td>{props.user.email}</td>
    <td>{props.user.photo}</td>
    <td>
      <Link to={"/edit/"+props.user._id}>Modifier</Link> <button className="btn btn-outline-danger btn-sm" onClick={() => { props.deleteUser(props.user._id) }}>Supprimer</button>
    </td>
  </tr>
)

export default class listusers extends Component {
  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
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
  usersList() {
    return this.state.User.map(currentUser => {
      return <User user={currentUser} deleteUser={this.deleteUser} key={currentUser._id}/>;
    })
  }
  
  onChangeID(e) {
    this.setState({
    ID: e.target.value
    });
  }

  deleteUser(id) {
	  axios.delete('http://localhost:5000/users/'+id)
	       .then(res => console.log(res.data));
	  this.setState({
	    User: this.state.username.filter(req => req._id !== id)
	  })
	}

  render() {
    return (
      <div>
        <h3>Liste des Utilisateurs</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <table className="table table-stripped">
              <thead className="thead-dark">
                <tr>
                  <th>Utilisateurs</th>
                  <th>Genres</th>
                  <th>Dobs</th>
                  <th>News</th>
                  <th>Emails</th>
                  <th>Photos</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.usersList()}
              </tbody>
            </table>
          </div>
        </form>
      </div>
    )
  }
}