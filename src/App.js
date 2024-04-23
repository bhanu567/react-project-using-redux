import OldCounter from "./components/OldCounter";
import NewCounter from "./components/NewCounter";
import Header from "./components/CourseDownload/Header";
import Auth from "./components/CourseDownload/Auth";
import UserProfile from "./components/CourseDownload/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div>
      {/* <OldCounter /> */}
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <NewCounter />
    </div>
  );
}

export default App;
