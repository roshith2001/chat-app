import Header from "./Components/Header";
import ChatArea from "./Components/ChatArea";
import ControlPanel from "./Components/ControlPanel";
import DetailCollection from "./Components/DetailCollection";
import { useState } from "react";


function App() {

  const [messages, setMessage] = useState([]);
  const[value, setValue] = useState('');
  const [inputStatus, setInputStatus] = useState(true);
  const [whoIsChatting, setWhoIsChatting] = useState(true);
  const [nameValue, setNameValue] = useState('')
  
  const changeValue = (newValue) => {
    setValue(newValue);
  }
  const handleClick = (event) => {
    event.preventDefault();
    const message = value;
    setMessage([...messages, {text: message, sender:whoIsChatting}]);
    setValue('');
  }
  const focusHandle = () => {
    setInputStatus(!inputStatus);
  }
  const blurHandle = () => {
    setInputStatus(!inputStatus);
  }
  const handleToggle = () => {
    setWhoIsChatting(!whoIsChatting);
    
  }
  const handleSubmit = (value) => {
    setNameValue(value);
  }
  const Name = nameValue.toUpperCase()

  return (
    <div>
      <DetailCollection onSubmit={handleSubmit}/>
      <Header pName={Name} status= {inputStatus?"Click on the share arrow below to reverse the sender":"typing..."} 
      img="https://img.freepik.com/free-photo/portrait-white-man-
      isolated_53876-40306.jpg"/>
      <ChatArea messageArray = {messages} whoIsSending={whoIsChatting}/>
      <ControlPanel messageSend={handleClick} onValueChange={changeValue} value={value}
      focusChange={focusHandle} blurChange={blurHandle} Who={handleToggle} icon={whoIsChatting?<i class="fa-solid fa-reply"></i>:<i class="fa-solid fa-share"></i>}/>
    </div>
  );
}

export default App;
