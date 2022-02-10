import React , {useState , useEffect} from 'react'
import Translate from './translate'
import axios from 'axios'

const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
const Convert = ({language , text}) => {
  const [translated , setTranslation] = useState('')

  useEffect(() => {
    const timeId = setTimeout(() => {
      if(text && language){
        (async () =>{
          const respond = await axios.post('https://translation.googleapis.com/language/translate/v2', {} ,{
            params : {
              q : text,
              target : language.value,
              format: "text",
              key : KEY
            }
          })
          setTranslation(respond.data.data.translations[0].translatedText)
        })();
      }
    }, 500)

    return () =>{
      clearTimeout(timeId)
    }
  }, [language , text])
  return (
      <div>
        <h3>{text != '' ? translated : ''}</h3>
      </div>
    )
}

export default Convert
