import { useContext, useEffect, useState } from 'react';
import './HomePage.css';
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
                <div className="home-title-container">
                    <h1 className="home-title" style={{ fontWeight: "400" }}>Top Questions</h1>
                    <button className="btn-ask-question" onClick={() => navigate('/questions/askquestion')}>Ask Question</button>
                </div>
            <QuestionsList/>          
            </div>  
            <RightSidebar/>
        </div>
        
    </>
    );
}

export default HomePage;