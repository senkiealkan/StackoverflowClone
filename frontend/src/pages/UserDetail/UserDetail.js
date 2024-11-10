import React from "react";
import "./UserDetails.css";
import UsersData from "../../data/UsersData";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
const UserDetails = ({  }) => {
    // const { id } = useParams(); // Lấy id từ URL
    // const user = UsersData.find((user) => user.id === id); // Tìm người dùng trong UsersData
    const user = {
        id: "1",
        name: "JohnDoe",
        avatar: "https://www.gravatar.com/avatar/efef01b733b5e8af2d8670efe6990e90?s=328&d=identicon&r=PG",
        questionsAsked: 45,
        comments: 120,
        tags: [
            { name: "react", posts: 15 },
            { name: "javascript", posts: 10 },
        ],
        profileViews: 1500,
        creationDate: "2022-11-01",
    }
    return (
    <>
        <Header/>
        <div className="home-container">
        <LeftSidebar/>
        <div className="user-details-container">
        <div className="user-details-container-1">
            <div className="user-profile-avatar-container">
                <img src={user.avatar} alt="Avatar" className="user-profile-avatar" />
                <p className="user-profile-views">{user.profileViews} profile views</p>

            </div>
            <div className="user-profile-section">
                <h2 className="user-profile-name">{user.name}</h2>
                <p className="user-profile-creation-date">
                    Created on: {user.creationDate} 
                </p>
                <div className="user-profile-stats">
                <p>
                    <strong>{user.questionsAsked}</strong> questions asked
                </p>
                <p>
                    <strong>{user.tags.length}</strong> tags
                </p>
                </div>
                
            </div>
        </div>
        <div className="user-details-container-2">
            {/* Communities Section */}
            <div className="user-communities">
                <h3>Communities</h3>
                <p>🌐 Stack Overflow</p>
            </div>
            {/* TopTags Section */}
            <div className="user-top-tags">
                <h3>Top Tags</h3>       
                {user.tags.map((tag, index) => (
                <p key={index} className="tag-item">
                    <span className="tag-name">{tag.name}</span>
                    <span className="tag-posts">Posts {tag.posts}</span>
                </p>
                ))}
                
            </div>
          
        </div>  
        </div>
        <RightSidebar/>

        </div>
    </>
    );
};

export default UserDetails;
