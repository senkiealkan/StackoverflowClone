import { useContext, useEffect, useState } from 'react';
import './AllQuestionsPage.css';
import Header from '../../components/Header/Header'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionsList from '../../components/QuestionsList/QuestionsList';
import { useNavigate} from 'react-router-dom';

function HomePage(){
    const navigate = useNavigate()

    return(
    <>
        <Header/>
        <div className="home-container">
            <LeftSidebar/>
            <div className="home-container-2">
                <div className="questions-title-container">
                    <h1 className="questions-title" style={{ fontWeight: "400" }}>All Questions</h1>
                    <button className="btn-ask-question" onClick={() => navigate('askquestion')}>Ask Question</button>
                </div>
            <QuestionsList/>          
            </div>  
            <RightSidebar/>
        </div>
        
    </>
    );
}

export default HomePage;