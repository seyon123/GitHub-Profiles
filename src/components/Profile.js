import React, { Component } from 'react';
import './Profile.css';




class Profile extends Component {
    render() {
        const profile = this.props.profile;

        return (
            <div className="p-container">
                <div className="user-profile-container">
                    <div className="user-profile" style={{ backgroundImage: `url(${profile.avatar_url})` }}>
                        <h3>{profile.name}</h3>
                        <p>{profile.login}</p>
                    </div>
                    
                    <ul className="user-info">
                        <li>
                            <h3>{profile.followers}</h3>
                            <small>Followers</small>
                        </li>
                        <li>
                            <h3>{profile.following}</h3>
                            <small>Following</small>
                        </li>
                        <li>
                            <h3>{profile.public_repos}</h3>
                            <small>Repositories</small>
                        </li>      
                    </ul>
                </div>
            </div>

        );
    }
}

export default Profile;