import React, { Component } from 'react';
import './Main.css';
import Profile from './Profile';
import Repo from './Repo';
import { withRouter } from "react-router";



class Main extends Component {

    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.getSearch = this.getSearch.bind(this);
        this.state = {
            value: '',
            repositories: [
                {
                    name: 'No Repos Found',
                    html_url: '',
                    owner: {
                        login: '',
                        avatar_url: '',
                    },
                    description: '',
                    language: '-',
                    stargazers_count: 0,
                    forks: 0,
                },
            ],
            message: '',
            profile: {
                avatar_url: '',
                login: '',
                html_url: '',
                followers: 0,
                following: 0,
                name: '',
                public_repos: 0,

            },

        };
    }

    componentDidMount() {
        const profile = this.props.match.params.id || "seyon123";
        this.setState({ value: profile});
        console.log(this.state.value);
        setTimeout(()=>{
            this.getRepos();
            this.getProfile();
        }, 0);
        document.title = `${profile} | GitHub Profiles`;
    }

    // componentDidUpdate(){
    //     this.props.history.push(`/${this.state.value}`)
    // }

    change(event){
        this.setState({value: event.target.value});
    }
    
    
    getSearch(event){
        event.preventDefault();
        this.getRepos();
        this.getProfile();
        this.props.history.push(`/${this.state.value}`)
        document.title = `${this.state.value} | GitHub Profiles`;
    }
    
    async getRepos(){
        const response = await fetch(`https://api.github.com/users/${this.state.value}/repos`);
        const data = await response.json();
        this.setState({ repositories: data });
    }

    async getProfile(){
        const response = await fetch(`https://api.github.com/users/${this.state.value}`);
        const data = await response.json();
        this.setState({ profile: data });
    }


    render() {
        const { value, repositories, profile } = this.state;
        return (
            <div id="main">
                <form id="form" onSubmit={this.getSearch}>
                    <input autoFocus={true}
                        value={value}
                        onChange={this.change}
                        type="text"
                        placeholder="Search for a user..."
                        className="search"/>
                </form>
                <div id="content">

                    <Profile profile={profile}></Profile>

                    <Repo repositories={repositories}></Repo>

                </div>
                
            </div>

        );
    }
}

export default withRouter(Main);