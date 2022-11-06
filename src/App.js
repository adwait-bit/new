import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes,Route,Link} from 'react-router-dom';
import AdminLogin from './Admin/AdminRegister';
import UserLogin from './User/UserLogin';
import UserRegister from './User/UserRegister';
// import ShowPolicy from './ShowPolicy/Login';
import RegisterPolicy from './Policy/RegisterPolicy';
import AdminRegister from './Admin/AdminRegister';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
        
        {/* <li><Link to="/">Home</Link> </li>
        <li><Link to="ShowPolicy">ShowAllPolicy</Link> </li> */}
        {/* <li><Link to="UserRegister">UserRegister</Link> </li> */}
        {/* 
        
        
         */}
         {/* <li><Link to="RegisterPolicy">RegisterPolicy</Link> </li>
         <li><Link to="AdminLogin">AdminLogin</Link> </li> */}
         <li><Link to="UserLogin">UserLogin</Link> </li>
         <li><Link to="AdminRegister">AdminRegister</Link> </li>
      
      
      </ul>
      <Routes>
        {/* <Route path='/' element={<Home/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/ShowPolicy' element={<ShowPolicy/>}></Route> */}
        {/* <Route path='/UserRegister' element={<UserRegister/>}></Route> */}
        {/* 
        
        <Route path='/AdminLogin' element={<AdminLogin/>}></Route>
        
        <Route path='/RegisterPolicy/:id' element={<RegisterPolicy/>}></Route> */}
        {/* <Route path='/RegisterPolicy' element={<RegisterPolicy/>}></Route>
         */}
        <Route path='/UserLogin' element={<UserLogin/>}></Route>
        <Route path='/AdminRegister' element={<AdminRegister/>}></Route>



     </Routes>
      </BrowserRouter>
      {/* <AdminLogin></AdminLogin> */}
      {/* */}
      {/* <UserRegister></UserRegister> */}
      {/* <ShowPolicy></ShowPolicy> */}
      {/* <RegisterPolicy></RegisterPolicy>
       */}
      <UserLogin></UserLogin> 
      <AdminRegister></AdminRegister>
    </div>
  );
}



export default App;