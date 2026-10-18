import UserProfile from './UserProfile'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <UserProfile />
      <nav>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
