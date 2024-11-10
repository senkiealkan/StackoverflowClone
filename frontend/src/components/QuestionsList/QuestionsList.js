import React from "react";
import "./QuestionsList.css";
import QuestionsData from "../../data/QuestionsData";
import { Link } from 'react-router-dom';

function QuestionsList() {
    return (
        <div className="question-list-container">
            <div className="questions-header">
                <p>{QuestionsData.length} questions</p>
                <div className="filter-buttons">
                    <button>Newest</button>
                    <button>Active</button>
                    <button>Bountied</button>
                    <button>Unanswered</button>
                </div>
            </div>
            <div className="questions-list">
                {QuestionsData.map(question => (
                    <div key={question._id} className="question-item">
                        <div className="question-stats">
                            <p>{question.upVote - question.downVote} votes</p>
                            <p>{question.answers.length} answers</p>
                            <p>{question.questionTags.length} tags</p>
                        </div>
                        <div className="question-summary">
                            <Link to={`/questions/${question._id}`} className="question-title">
                                {question.questionTitle}
                            </Link>
                            <p className="question-detail">
                                {question.questionDetail.length > 100 ? 
                                  `${question.questionDetail.substring(0, 100)}...` : 
                                  question.questionDetail}
                            </p>
                            <div className="question-tags-meta">
                                <div className="question-tags">
                                    {question.questionTags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="question-meta">
                                    asked on {new Date(question.askedOn).toLocaleString()} by {question.userPosted}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default QuestionsList;
