import routes from '../configs/routes.config';
import HomePage from '../pages/HomePage/HomePage';
import AllQuestionsPage from '../pages/AllQuestionsPage/AllQuestionsPage';
import UserListPage from '../pages/UserListPage/UserListPage';
import UserDetail from '../pages/UserDetail/UserDetail';
import TagListPage from '../pages/TagListPage/TagListPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignupPage from '../pages/SignupPage/SignupPage';
import AskQuestionPage from '../pages/AskQuestionPage/AskQuestionPage';
import QuestionDetailPage from '../pages/QuestionDetailPage/QuestionDetaiPage';

// import Login from '~/pages/Login-Register-ForgotPassword/Login';
// import ForgotPassword from '~/pages/Login-Register-ForgotPassword/ForgotPassword';
// import Register from '~/pages/Login-Register-ForgotPassword/Register';

const pages = [
    { path: routes.home, Component: HomePage },
    { path: routes.questions, Component: AllQuestionsPage },
    { path: routes.userlistpage, Component: UserListPage },
    { path: routes.askquestion, Component: AskQuestionPage },
    { path: routes.user, Component: UserDetail },
    { path: routes.tags, Component: TagListPage },
    { path: routes.login, Component: LoginPage },
    { path: routes.signup, Component: SignupPage },
    { path: routes.questionsdetails, Component: QuestionDetailPage },
    
    // { path: routes.login, Component: Login },
    // { path: routes.register, Component: Register },
    // { path: routes.forgotpassword, Component: ForgotPassword },

];

export default pages;