import React , {useState , useEffect} from 'react';
import axios from 'axios'
const Search = () =>{
  const [term , setTerm] = useState("")
  const [result , setResult] = useState([])
  useEffect(() => {
    const timeId = setTimeout(()=>{
      if(term){
        (async () =>{
        const response =  await axios.get('https://en.wikipedia.org/w/api.php' , {
            params:{
              action : 'query',
              list : 'search',
              format : 'json',
              origin : '*',
              srsearch : term
            }
          })
          setResult(response.data.query.search)
        })();
      }
    }, 500)

    return () =>{
      clearTimeout(timeId)
    }

  },[term])



  const renderResults = result.map(result => {
    return(
      <div className="item" key={result.pageid}>
          <div className="content">
          <div className="right floated content">
              <a className="ui button" target="_blank" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
          </div>
             <div className="header">
                {result.title}
             </div>
             {result.snippet.replace(/<[^>]*>/g, ' ').replace(/\s{2,}/g, ' ').trim()}
          </div>
      </div>
    )
  })

  const changeTerm = (e) =>{
    setTerm(e)
  }

  return (
    <React.Fragment>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input className="input" value={term} onChange={(e) => changeTerm(e.target.value)}/>
        </div>
        <div className="ui celled list">
            {renderResults}
        </div>
      </div>
    </React.Fragment>
    )
}
export default Search
