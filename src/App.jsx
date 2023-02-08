import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [tweet, setTweet] = useState("")
  const [sentiment, setSentiment] = useState(""); // "Negative" or "Positive"

  function callOpenAIAPI() {
    console.log("Calling the OpenAI API")
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
        {sentiment !== "" ?
        <h3></h3>: null  
      }
      </div>
    </div>
  )
}

export default App
