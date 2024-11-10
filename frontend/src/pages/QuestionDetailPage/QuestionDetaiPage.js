import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './QuestionDetailPage.css';
import Header from '../../components/Header/Header';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';

import upvote from '../../assets/sort-up.svg';
import downvote from '../../assets/sort-down.svg';
import QuestionsData from '../../data/QuestionsData';

function QuestionDetailPage(){
    //const { id } = useParams();

    const [question, setQuestion] = useState({
        _id: "1",
        questionTitle: "What is the purpose of useEffect in React?",
        questionDetail:
        "I am learning React and came across the useEffect hook. Can someone explain its purpose and provide a simple example of how it's used?",
        questionTags: ["react", "hooks", "lifecycle"],
        upVote: 4,
        downVote: 1,
        askedOn: "2024-11-09T12:00:00Z",
        userPosted: "CodeLearner",
        comments: [
        { commentText: "useEffect helps manage side effects in React components.", user: "ReactGuru" },
        { commentText: "It is similar to lifecycle methods like componentDidMount.", user: "FrontendDev" },
        ],
        answers: [
        {
            answerText: "useEffect is used to perform side effects like fetching data, setting up subscriptions, or manually changing the DOM.",
            user: "ReactGuru", upVote: 2, downVote: 0,
        },
        {
            answerText: "You can also use it to clean up resources when a component is unmounted by returning a function inside the hook.",
            user: "JSPro", upVote: 2, downVote: 3,
        },
        ],
    });

    const [newComment, setNewComment] = useState('');
    const [newAnswer, setNewAnswer] = useState('');

    const handleAddComment = () => {
        setQuestion(prevState => ({
            ...prevState,
            comments: [...prevState.comments, { commentText: newComment, user: "CurrentUser" }]
        }));
        setNewComment('');
    };

    const handleAddAnswer = () => {
        setQuestion(prevState => ({
            ...prevState,
            answers: [...prevState.answers, { answerText: newAnswer, user: "CurrentUser", upVote: 0, downVote: 0 }]
        }));
        setNewAnswer('');
    };

    const handleUpVote = () => {
        setQuestion(prevState => ({
            ...prevState,
            upVote: prevState.upVote + 1
        }));
    };

    const handleDownVote = () => {
        setQuestion(prevState => ({
            ...prevState,
            downVote: prevState.downVote + 1
        }));
    };

    return (
        <>
            <Header/>
            <div className="home-container">
                <LeftSidebar/>
                <div className="question-details-container">
                    <h1>{question.questionTitle}</h1>
                    <div className="question-body">
                        <div className="question-votes">
                            <img
                                src={upvote}
                                alt="Upvote"
                                width="18"
                                className="votes-icon"
                                onClick={handleUpVote}
                            />
                            <p>{question.upVote - question.downVote}</p>
                            <img
                                src={downvote}
                                alt="Downvote"
                                width="18"
                                className="votes-icon"
                                onClick={handleDownVote}
                            />
                        </div>
                        <div className="question-body-details">
                            <p>{question.questionDetail}</p>
                            <div className="question-details-tags">
                                {question.questionTags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                            </div>
                            <div className="question-user-info">
                                <p>asked by {question.userPosted}</p>
                            </div>
                            <div className="comments-section">
                                {question.comments.map((comment, index) => (
                                    <div key={index} className="comment">
                                        <p>{comment.commentText} - {comment.user}</p>
                                    </div>
                                ))}
                                <input 
                                    type="text" 
                                    value={newComment} 
                                    onChange={e => setNewComment(e.target.value)} 
                                    placeholder="Add a comment" 
                                />
                                <button onClick={handleAddComment}>Add Comment</button>
                            </div>
                        </div>
                    </div>
                
                    
                    <div className="answers-section">
                        <h2>Answers</h2>
                        {question.answers.map((answer, index) => (
                            <div className="answers-container">
                                <div className="answer-votes">
                                    <img
                                        src={upvote}
                                        alt="Upvote"
                                        width="18"
                                        className="votes-icon"
                                        onClick={handleUpVote}
                                    />
                                    <p>{answer.upVote - answer.downVote}</p>
                                    <img
                                        src={downvote}
                                        alt="Downvote"
                                        width="18"
                                        className="votes-icon"
                                        onClick={handleDownVote}
                                    />
                                </div>
                                <div className="answer-body-details">
                                    <p>{answer.answerText}</p>
                                    <div className="answer-user-info">
                                        <p>answered by {answer.user}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <input 
                            type="text" 
                            value={newAnswer} 
                            onChange={e => setNewAnswer(e.target.value)} 
                            placeholder="Add an answer" 
                        />
                        <button onClick={handleAddAnswer}>Add Answer</button>
                    </div>
                </div>  
                <RightSidebar/>
            </div>
        </>
    );
}

export default QuestionDetailPage;
