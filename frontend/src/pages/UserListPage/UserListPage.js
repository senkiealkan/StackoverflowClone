import React from "react";
import "./UserListPage.css";
import Header from "../../components/Header/Header";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import UsersData from "../../data/UsersData";
import { Link } from "react-router-dom";

const Users = () => {

  return (
    <>
        <Header/>
        <div className="home-container">
            <LeftSidebar/>
            <div className="user-container">
            <h1 style={{ fontWeight: "400" }}>Users</h1>
            <div className="user-list-container">
                {UsersData.map((user) => (
                    <Link key={user.id} to={`/user/${user.id}`} className="user-profile-link">
                    <img src={user.avatar} alt={user.name} className="user-avatar" />
                    <div className="user-info">
                      <p><strong>{user.name}</strong></p>
                      <p>{user.questionsAsked} questions</p>
                      <p className="user-profile-view">{user.profileViews} profile views</p>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
            <RightSidebar/>
        </div>
        
      </>  
  );
};

export default Users;