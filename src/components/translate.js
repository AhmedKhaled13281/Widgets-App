import React , {useState}from 'react'
import Dropdown from './dropDown'
import Convert from './convert'
const options = [
  {
    label : 'Afrikans',
    value : 'af'
  },
  {
    label : 'Arabic',
    value : 'ar'
  },
  {
    label : 'Hindi',
    value : 'hi'
  }
]

const Translate = () =>{
  const [language , setLanguage] = useState('')
  const [inputText , setInputText] = useState('')
  return (

    <div>
      <div className="ui form">
        <div className="field">
            <label>Enter a Text to Translate</label>
            <input type="text" onChange={(e) => setInputText(e.target.value)}/>
        </div>
      </div>
        <Dropdown label="Select a Language" options={options} selected={language} onSelectedChange={setLanguage}/>
        <Convert language={language} text={inputText}/>
    </div>
  )
}

export default Translate
