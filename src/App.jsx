import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// make sure you use your own API key
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [tweet, setTweet] = useState("")
  const [sentiment, setSentiment] = useState(""); // "Negative" or "Positive"

  async function callOpenAIAPI() {
    console.log("Calling the OpenAI API")

    // - H "Content-Type: application/json" \
    // - H "Authorization: Bearer $OPENAI_API_KEY" \

    const APIBody = {
      "model": "text-davinci-003",
      "prompt": "Classify the sentiment in these tweets:\n\n1. \"I can't stand homework\"\n2. \"This sucks. I'm bored 😠\"\n3. \"I can't wait for Halloween!!!\"\n4. \"My cat is adorable ❤️❤️\"\n5. \"I hate chocolate\"\n\nTweet sentiment ratings:",
      "temperature": 0,
      "max_tokens": 60,
      "top_p": 1.0,
      "frequency_penalty": 0.0,
      "presence_penalty": 0.0
    }

    await fetch("https://api.openai.com/v1/completions"), {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      }
    }
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
