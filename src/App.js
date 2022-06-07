// import logo from './logo.svg';
import './App.css';
import './Reset.css';

function App() {
  return (
    <div className="wrap">
      <header>
        <h1>logo</h1>
        <ul>
          <li>main</li>
          <li>market</li>
          <li>history</li>
          <li>contact</li>
        </ul>
        <div className="visual">
          <video controls autoplay muted>
            <source src="/src/video/main2.mp4" type="video/mp4" />
          </video>
        </div>
      </header>
    </div>
  );
}

export default App;
