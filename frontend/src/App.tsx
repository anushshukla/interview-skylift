import React, { useState } from "react";
import axios from "axios";

interface Analytic {
  id: number;
  event: string;
  count: number;
}

const App = () => {
  const [msg, setMsg] = useState('');
  const [analytics, setAnalytics] = useState([] as Analytic[]);
  function onChatMsgChange(event: any) {
    setMsg(event.target?.value);
  }
  async function onSendChatMsg() {
    const res = await axios.post('http://localhost:3001/chat/message', { data: { msg } });
    console.log(res)
    setAnalytics([
      ...analytics,
      ...res.data.data
    ])
    setMsg('');
  }
  return <div>
    <h1>Chat</h1>
    <input type="text" value={msg} onChange={onChatMsgChange} />
    <div onClick={onSendChatMsg}>Send</div>
    <div>Analytics</div>
    <ul>
      {analytics.map((analytic: Analytic, index) => {
        return <li key={analytic.id+index}>
          <div>Id: {analytic.id}</div>
          <div>Event: {analytic.event}</div>
          <div>Count: {analytic.count}</div>
        </li>
      })}
    </ul>
  </div>
};

export default App;
