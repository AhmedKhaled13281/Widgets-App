import React , {useState , useEffect , useRef} from 'react';

const DropDown = ({label , options , selected , onSelectedChange}) =>{
  const [open , setOpen] = useState(false);
  const ref = useRef()

  useEffect(() => {
    const clickOnBody = (e) =>{
      if(ref.current.contains(e.target)){
        return ;
      }
      setOpen(false)
    }
    document.body.addEventListener('click', clickOnBody,{capture : true})

    return () =>{
      document.body.removeEventListener('click', clickOnBody,{capture : true})
    }
  }, [])

  const renderTheOptions = options.map(option => {
    if(option.value == selected.value){
      return ;
    }
    return (
      <div
      className="item"
      key={option.value}
      onClick={() => onSelectedChange(option)}
       >
          {option.label}
      </div>
    )
  })

  return(
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>{renderTheOptions}</div>
        </div>
      </div>
    </div>
  )
}

export default DropDown;
