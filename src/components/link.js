import React from 'react'

const Link = ({href , className , children}) => {
 const  onClick = (e) =>{
    e.preventDefault();
    window.history.pushState('' , {} , href);
    const navEvent = new PopStateEvent('popState');
    window.dispatchEvent(navEvent)
  }
  return (
    <a className={className} href={href} onClick={onClick}>{children}</a>
  )
}

export default Link
