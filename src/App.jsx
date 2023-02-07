import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [tweet, setTweet] = useState("")

  function callOpenAIAPI() {

  }

  return (
    <div className="App">
      <div>
        <textarea
        onChange={(e) => setTweet(e.target.value)}
          placeholder="Paste your tweet here!"
          cols={50}
          rows={10}
        />
      </div>
      <div>
        <button onClick={callOpenAIAPI}>Get Your Tweet Sentiment - Powered by OpenAPI</button>
      </div>
    </div>
  )
}

export default App
