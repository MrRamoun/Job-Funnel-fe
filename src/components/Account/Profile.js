import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth.js';

export default function Profile() {
    // #region local state
    const [userInfo, setUserInfo] = useState({
        first_name: "Austin",
        last_name: "Powers",
        email: "austin@gmail.com",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor, mauris porttitor venenatis iaculis, eros metus aliquet mi, sit amet consequat est mi vitae tellus. Pellentesque nec nulla cursus, tempor ex id, lobortis massa. Pellentesque ornare, nulla a fringilla consectetur, nisi leo condimentum ligula, luctus suscipit urna libero quis tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aucto. ",
        education: "Lambda School",
        resume: "A PDF",
        profile_img: "https://www.simplemost.com/wp-content/uploads/2018/06/maxresdefault-1-750x500.jpg"
    });
    // #endregion

    // #region useEffects
    // useEffect(() => {
    //     axiosWithAuth().get(`/users/user`)
    //     .then(res => {
    //         console.log(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err.respose.data.message);
    //     })
    // }, [])
    // #endregion

    return (
        <div className="container">
            <div className="profile-container">
                <div className="image-container">
                    <img className="profile-image1" src={userInfo.profile_img} />
                    <div className="image-content">
                        <h3>{userInfo.first_name} {userInfo.last_name}</h3>
                        <h4>{userInfo.email}</h4>
                    </div>
                </div>
                <div className="profile-body-container">
                    <div className="about-me">
                        <h2>About Me</h2>
                        <p>{userInfo.bio}</p>
                        {/* <p>Education: {userInfo.education}</p> */}
                    </div>
                    <div className="job-section">
                        <div className="job-pref">
                            <h3>Job Preferences</h3>
                            <p>This is where the job preferences will go</p>
                        </div>
                        <div className="skills">
                            <h3>Skills</h3>
                            <p>This is where the skills would be listed</p>
                        </div>
                    </div>
                    <div className="resume-container">
                        <div className="resume">
                                <h3>Artifacts</h3>
                                <h4>Github: </h4>
                                <p>Resume: {userInfo.resume}</p>
                                <h4>Portfolio: </h4>
                                <p>Artifacts will go under resume as well</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


