import Header from "./Components/Header";
import ChatArea from "./Components/ChatArea";
import ControlPanel from "./Components/ControlPanel";
import { useState } from "react";


function App() {

  const [messages, setMessage] = useState([]);
  const[value, setValue] = useState('');

  const changeValue = (newValue) => {
    setValue(newValue);
  }
  const handleClick = (event) => {
    event.preventDefault();
    const message = value;
    setMessage([...messages, {text: message}]);
    setValue('');
  }
  

  return (
    <div>
      <Header pName="Saghav Pinarayi vijayan" status= "Online" 
      img="https://img.freepik.com/free-photo/portrait-white-man-
      isolated_53876-40306.jpg"/>
      <ChatArea messageArray = {messages}/>
      <ControlPanel messageSend={handleClick} onValueChange={changeValue} value={value}/>
    </div>
  );
}

export default App;
