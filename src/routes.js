
import Index from './pages/index/Index'
import CourseInfo from './pages/courseInfo/CourseInfo'
import ArticleInfo from './pages/articleInfo/ArticleInfo'
import Category from './pages/category/Category'
import Cources from './components/cources/Cources'
import Login from './components/login/Login'


let routes=[

{path:'/',element:<Index/>},
{path:'cource-info/:courceName',element:<CourseInfo/>},
{path:'article-info/:articleName',element:<ArticleInfo/>},
{path:'category/:categoryName',element:<Category/>},
{path:'cources',element:<Cources/>},
{path:'login',element:<Login/>},


]


export default routes