import Sidebar from "./components/sidebar/sidebar";
import Home from "./components/home/home";
import Announcement from "./components/announcement/announcement";
import Gradebook from "./components/Gradebook/Gradebook";
import Schedule from "./components/Schedule/Schedule";
import Performance from "./components/Performance/Performance";
import Courses from "./components/Courses/Courses";
import RequireAuth from "./components/HOC/requireAuth";
import { BrowserRouter, Route ,Routes} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dashboard" element={<RequireAuth><Sidebar/></RequireAuth>} />
        <Route path="/Announcement" element={<RequireAuth><Announcement/></RequireAuth>}/>
        <Route path="/schedule" element={<RequireAuth><Schedule/></RequireAuth>}/>
        <Route path="/courses" element={<RequireAuth><Courses/></RequireAuth>}/>
        <Route path="/gradebook" element={<RequireAuth><Gradebook/></RequireAuth>}/>
        <Route path="/performance" element={<RequireAuth><Performance/></RequireAuth>}/>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Home />,
  //   },
  //   {
  //     path: '/dashboard',
  //     element: <Sidebar />,
  //     children: [
  //       {
  //         index: true,
  //         element: <Sidebar />,
  //       },
  //       {
  //         path: 'schedule',
  //         element: <Schedule />,
  //       },
  //       {
  //         path: 'courses',
  //         element: <Courses />,
  //       },
  //       {
  //         path: 'gradebook',
  //         element: <Gradebook />,
  //       },
  //       {
  //         path: 'performance',
  //         element: <Performance />,
  //       },
  //       {
  //         path: 'announcement',
  //         element: <Announcement />,
  //       },
  //     ],
  //   },
  // ])
  // return <RouterProvider router={router} />
// }

