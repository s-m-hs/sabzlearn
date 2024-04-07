
import Index from './pages/index/Index'
import CourseInfo from './pages/courseInfo/CourseInfo'
import ArticleInfo from './pages/articleInfo/ArticleInfo'
import Category from './pages/category/Category'
import Cources from './components/cources/Cources'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

let routes=[

{path:'/',element:<Index/>},
{path:'course-info/:courceName',element:<CourseInfo/>},
{path:'article-info/:articleName',element:<ArticleInfo/>},
{path:'category/:categoryName',element:<Category/>},
{path:'cources',element:<Cources/>},
{path:'login',element:<Login/>},
{path:'register',element:<Register/>},


]


export default routes