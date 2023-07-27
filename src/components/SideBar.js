import { useNavigate } from "react-router-dom";

const SideBar = ({ onLogout }) => {
  const links = ['Home', 'Profile', 'Notifications', 'Messages'];
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  }

  return (
    <div className="side-bar">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={"http://localhost:3000/" + link}>{link}</a>
          </li>
        ))}
        <li><button onClick={onLogout}>Logout</button></li>
      </ul>
    </div>
  );
};

export default SideBar;