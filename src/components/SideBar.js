const SideBar = () => {
  const links = ['Home', 'Profile', 'Notifications', 'Messages', 'Logout'];

  return (
    <div className="side-bar">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href="http://localhost:3000/">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;