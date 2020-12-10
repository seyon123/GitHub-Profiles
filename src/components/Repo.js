import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faStar, faCodeBranch} from '@fortawesome/free-solid-svg-icons'
import './Repo.css';




class Repo extends Component {
    render() {
        const repositories = this.props.repositories;
        console.log(repositories)

        if (repositories.length ===  0 || repositories.message === "Not Found") {
            return (
                <div id="repos">
                    <div className='repo-item'>
                        <h1 className='repo-title'>No Repositories Found</h1>
                        <p className='description'>It looks like the person you searched for either has no repositories or they do not exist.</p>
                    </div>
                </div>
            );
        } else {
            return (
                <div id="repos">
                    {repositories.sort((a,b) => Date.parse(b.updated_at) - Date.parse(a.updated_at)).map(repo => (
                        <a key={repo.name} href={repo.html_url} target='_blank' rel="noopener noreferrer">
                            <div className='repo-item'>
                                <h1 className='repo-title'>{repo.owner.login + "/" + repo.name}</h1>
                                <p className='description'>{repo.description}</p>
                                <div className='bottom'>
                                    <div className='language'>
                                        <FontAwesomeIcon icon={faCode} className='img' />{repo.language}
                                    </div>  
                                    <div className='star'>
                                        <FontAwesomeIcon icon={faStar} className='img'/>{repo.stargazers_count}
                                    </div> 
                                    <div className='fork'>
                                        <FontAwesomeIcon icon={faCodeBranch} className='img' />{repo.forks}
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            );
        }

        
    }
}

export default Repo;