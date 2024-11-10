import React from "react";
import "./TagListPage.css"; // Tạo file CSS riêng cho trang này
import Header from "../../components/Header/Header";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import AllTagsData from "../../data/AllTagsData";
import {Link} from 'react-router-dom'

const TagListPage = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <LeftSidebar />
        <div className="tag-container">
          <h1 style={{ fontWeight: "400" }}>Tags</h1>
          <p className="tag-description">
            A tag is a keyword or label that categorizes your question with other, similar questions. <br></br>
            Using the right tags makes it easier for others to find and answer your question.
          </p>
          <div className="tag-list-container">

            {AllTagsData.map((tag) => (
              <Link key={tag._id} to={`/tags/${tag._id}`} className="tag-card-link">
                  <p className="tag-name">{tag.name}</p>
                  <p className="tag-posts">{tag.posts} questions</p>
                  <p className="tag-time">{tag.createdAt} questions</p>
              </Link>
            ))}
          </div>
        </div>
        <RightSidebar />
      </div>
    </>
  );
};

export default TagListPage;
