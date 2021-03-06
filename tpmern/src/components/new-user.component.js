import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class newuser extends Component {
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
      username: '',
      gender: '',
      dob: new Date(),
      news: '',
      email: '',
      photo: ''
    }

  }

  componentDidMount() {
    this.setState({ 
      username: 'Entrez le username',
      gender: 'Entrez le genre',
      dob: new Date(),
      news: '1',
      email: 'Donnez le mail',
      photo: 'Nomer la photo'
    });
  }

  fetchrand(){
    fetch("https://randomuser.me/api").then((response) => {
      this.setState({
        username: response.data.username,
        gender: response.data.gender,
        dob: new Date(response.data.dob),
        news: response.data.news,
        email: response.data.email,
        photo: response.data.photo
      })   
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

  onChangeDob(Date) {
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
      news: this.state.news,
      email: this.state.email,
      photo: this.state.photo
    };
  
    console.log(users);
    axios.post('http://localhost:5000/users/add/', users).then(res => console.log(res));
    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Creation d'un nouvel utilisateur</h3>
        <input type="submit" value="Utiliser Fletch" className="btn btn-primary" onClick={this.fetchrand}/>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text" required className="form-control" value={this.state.username} onChange={this.onChangeUsername}/>
          </div>
          <div className="form-group"> 
            <label>Genre: </label>
            <input  type="text" required className="form-control" value={this.state.gender} onChange={this.onChangeGender}/>
          </div>
          <div className="form-group">
            <label>Dob: </label>
            <div>
              <DatePicker selected={this.state.dob} onChange={this.onChangeDob} />
            </div>
          </div>
          <div className="form-group"> 
            <label>News: </label>
            <input  type="text" required className="form-control" value={this.state.news} onChange={this.onChangeNews}/>
          </div>
          <div className="form-group"> 
            <label>Email: </label>
            <input  type="text" required className="form-control" value={this.state.email} onChange={this.onChangeEmail}/>
          </div>
          <div className="form-group"> 
            <label>Photo: </label>
            <input  type="text" required className="form-control" value={this.state.photo} onChange={this.onChangePhoto}/>
          </div>

          <div className="form-group">
            <input type="submit" value="Ajouter Nouvel utilisateur" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}