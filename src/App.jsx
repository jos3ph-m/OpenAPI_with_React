import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const API_KEY = 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

console.log(API_KEY)

function App() {
  const [tweet, setTweet] = useState("")
  const [sentiment, setSentiment] = useState(""); // "Negative" or "Positive"

  function callOpenAIAPI() {
    console.log("Calling the OpenAI API")
  }

  console.log(tweet)
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
        <h3>This Tweet Is: {sentiment}</h3>: null  
      }
      </div>
    </div>
  )
}

export default App
