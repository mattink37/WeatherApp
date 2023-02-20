import { getCurrentWeather } from "../businessLogic/appRequest";

function App() {
  getCurrentWeather("Atlanta")?.then((data) => console.log(data));
  return <div></div>;
}

export default App;
