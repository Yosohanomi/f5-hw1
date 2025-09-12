import worldcat from './worldcat.jpg';
import './App.css';
const greeting = {
  name: 'Sofia',
  text: "Ласкаво просимо до нашого сайту!",
  subtextImg: 'cat with world'
}

const website = {
  name: 'react',
  url: 'https://legacy.reactjs.org/'
}
const firstNum = 6;
const secondNum = 10;

const colors =  ["Червоний", "Синій", "Зелений"];

function App() {
  return (
    <div className="App">
      <div className="thumb">
      <h1 className="title">{greeting.name}</h1>
      <p className="text">{greeting.text}</p>
      <img src={worldcat} className="image" alt={greeting.subtextImg} />
      <a href={website.url} className="link">{website.name}</a>
      <p className="number">{firstNum}+{secondNum}={firstNum + secondNum}</p>
      <ul className="list">
        {
          colors.map(color => {
            return <li className="list__item" data-color={color.toLocaleLowerCase()}>{color}</li>
          })
        }
      </ul>
      </div>
    </div>
  );
}

export default App;
