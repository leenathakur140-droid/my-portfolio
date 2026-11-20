
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./contact.jsx";
import Navbar from "./navbar.jsx";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
const router = createBrowserRouter([

{
    path:"/",
    element:<>
    <Navbar/>
    <Home/>
    
    </>
},
{
    path:"/about",
    element:<>
    <Navbar/>
    <About/>
    <Contact/>
    </>
},
{
    path:"/contact",
    element:<>
    <Navbar/>
    <Contact/>
    </>
}
]);
function App(){
return(
<>
<RouterProvider router={router}/>

</>
)
}

export default App