import './App.css';
function Header() {
  return (
    <header>
      <nav className='navbar'>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;