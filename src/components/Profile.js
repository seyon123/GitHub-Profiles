import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
	render() {
		const profile = this.props.profile;

		return (
			<div className="p-container">
				<div className="user-profile-container">
                    <a className="profile-link" href={`https://github.com/${profile.login}`} target="_blank" rel="noopener noreferrer">
                        <div className="user-profile" style={{ backgroundImage: `url(${profile.avatar_url})` }}>
                            <h3>{profile.name}</h3>
                            <p>{profile.login}</p>
                        </div>
                    </a>

					<ul className="user-info">
						<li>
							<a href={`https://github.com/${profile.login}?tab=followers`} target="_blank" rel="noopener noreferrer">
								<h3>{profile.followers}</h3>
								<small>Followers</small>
							</a>
						</li>
						<li>
							<a href={`https://github.com/${profile.login}?tab=following`} target="_blank" rel="noopener noreferrer">
								<h3>{profile.following}</h3>
								<small>Following</small>
							</a>
						</li>
						<li>
							<a href={`https://github.com/${profile.login}?tab=repositories`} target="_blank" rel="noopener noreferrer">
								<h3>{profile.public_repos}</h3>
								<small>Repositories</small>
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Profile;
