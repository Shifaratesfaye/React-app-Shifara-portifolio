import './App.css';
import Content from './content.jsx';
function App() {
  return (
    <div className="App">
      <nav className="navigation">
        <a href="/" className="brand-name">
         Shifara
        </a>
        <button className="hamburger">
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className="navigation-menu">
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="app">
        {/* <h1>Welcome to my App</h1> */}
        <div className="content">
          <Content />
        </div>
      </div>
      <header className="App-header">
        <div className="container">
        <img src="elu.png" className="me" alt="logo" />
      
        <h1>Who am I?</h1>
        <p>
        My name is Shifara Tesfaye, Computer science student in bonga University since Aug 29, 2020. <br /> I have strong passion and inspiration in science and technology. In my education Journey i am making endless effort to learn new thing.
         <br /> code is my hobby and design is my art.<span className="heart">♥️</span> My first React Appilication
        </p>
        <p className="small">
          Jan 6, 2023 Started.
        </p>
        </div>
        <p>
          <a
            className="App-link"
            href="https://shifara-w3.w3spaces.com"
            target="_blank"
            rel="noopener noreferrer"
          >
           Contact Me! cv
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
