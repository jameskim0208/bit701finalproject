import './App.css';
import carimg from './image/car1.png';
function App() {
  return (
    <div className="App">
      <img alt='' src={carimg} width={300} border="1"/>
      <br/><br/>
      <h2>Docker 배포 성공 기원!!!!</h2>
      <h1>우와 실시간으로 바뀌네? 대박!!!</h1>
    </div>
  );
}

export default App;
