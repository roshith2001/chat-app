import Header from "./Components/Header";
import ChatArea from "./Components/ChatArea";
import ControlPanel from "./Components/ControlPanel";


function App() {
  return (
    <div>
      <Header pName="Saghav Pinarayi vijayan" status= "Online" 
      img="https://img.freepik.com/free-photo/portrait-white-man-
      isolated_53876-40306.jpg"/>
      <ChatArea />
      <ControlPanel/>
    </div>
  );
}

export default App;
