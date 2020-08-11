import React,{ useState } from 'react';
import './output.css';
import logo from './component/images/logo.png';
import {BrowserRouter as Router,Switch,Route, NavLink} from 'react-router-dom';
import MainPage from "./component/Contents";
import ThankYou from './component/thanks';
import People from "./component/people";
import Events from "./component/event";
import Footer from "./component/footer";
import Registration from './component/registration';
export default function App(){
    const [isOpen, setIsOpen] = useState(window.innerWidth <= 640 ? false : true);
    const notFound=()=>{return(
      <div className="flex items-center h-screen text-6xl">
        <h1 className="flex-1 text-center justify-center ">
          404-Not Found
        </h1>
      </div>
    );}
  return(
    <Router>
              <nav className="flex items-center justify-between flex-wrap bg-gray-100 text-blue-600 p-2 lg:fixed lg:w-full lg:top-0 ">
            <NavLink to="/">
                <div className="flex items-center flex-shrink-0 mr-6">
                    <img className="h-16 w-16 mx-4 mt-4" src={logo} alt="logo"/>
                </div>
            </NavLink>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-blue-600 hover:border-grey-100">
                <svg onClick={()=>setIsOpen(!isOpen)} className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            {isOpen?
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                    <NavLink to="/event" className="block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-blue-800">
                        Events
                    </NavLink>
                    <NavLink to="/registration" className="block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-blue-800">
                    Membership
                    </NavLink>
                    <NavLink to="/people" className="block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-blue-800">
                        People
                    </NavLink>
                    </div>
                 </div>
                : ''
            }
        </nav>
        <div>

          <div className="lg:mt-24 md:mt-18">
            <Switch>
              <Route exact path="/" component={MainPage}/>
              <Route path="/event" component={Events}/>
              <Route path="/people" component={People}/>
              <Route path="/registration" component={Registration}/>
              <Route path="/thank" component={ThankYou}/>
              <Route component={notFound}/>
            </Switch>
          </div>

        </div>
        <Footer/>
    </Router>
  );
}
