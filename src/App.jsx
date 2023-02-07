import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [tweet, setTweet] = useState("")

  return (
    <div className="App">
      <div>
        <textarea
        onChange={(e) => setTweet(e.target)}
          placeholder="Paste your tweet here!"
          cols={50}
          rows={10}
        />
      </div>
      <div>
        <button>Get Your Tweet Sentiment - Powered by OpenAPI</button>
      </div>
    </div>
  )
}

export default App
