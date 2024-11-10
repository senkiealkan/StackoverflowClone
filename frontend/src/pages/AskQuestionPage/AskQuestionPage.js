import React from 'react';
import './AskQuestionPage.css';
import Header from '../../components/Header/Header';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';

function AskQuestionPage() {
    return (
        <>
            <Header />
            <div className="ask-question-container">
                <div className="ask-question-form-container">
                    <h1>Ask a public question</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <p>Be specific and imagine you’re asking a question to another person.</p>
                            <input
                                type="text"
                                id="title"
                                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="body">Body</label>
                            <p>Enter body with minimum 30 characters.</p>
                            <textarea
                                id="body"
                                placeholder="Enter body with minimum 30 characters"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tags">Tag Name</label>
                            <p>Add up to 5 tags to describe what your question is about.</p>
                            <input
                                type="text"
                                id="tags"
                                placeholder="e.g. ajax django string"
                            />
                        </div>
                        <button type="submit">Post your question</button>
                    </form>
                </div>
                <div className="ask-question-sidebar">
                    <h2 className="ask-question-sidebar-title">Writing a good title</h2>
                    <div className = "ask-question-sidebar-details">
                        <p>Your title should summarize the problem.</p>
                        <p>You might find that you have a better idea of your title after writing out the rest of the question.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AskQuestionPage;
