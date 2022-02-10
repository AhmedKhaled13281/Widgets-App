import React , { useState , useEffect } from 'react';
import Accordion from './accordion'
import Search from './search'
import Dropdown from './dropDown'
import Translate from './translate'
import Route from './route'
import Header from './header'

const items = [
  {
    title: 'What is React ?',
    content: 'React is a Front-End Javascript Library.'
  },
  {
    title: 'Why use React ?',
    content: 'React is a fav Javascript Library amonng Engineers.'
  },
  {
    title: 'How do you use React ?',
    content: 'You use React by using Components.'
  }
];

const options = [
    {
      label : 'The Color Red',
      value : 'red'
    },
    {
      label : 'The Color Green',
      value : 'green'
    },
    {
      label : 'A Shade of Blue',
      value : 'blue'
    }
]

export default () =>{
  const [selected , onSelectedChange] = useState('')
  return(
    <div>
      <Header/>  
        <Route path="/">
          <Accordion items={items}/>
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/dropdown">
          <Dropdown label="Select a Color" options={options} selected={selected} onSelectedChange={onSelectedChange}/>
        </Route>
        <Route path="/translate">
          <Translate/>
        </Route>
    </div>
  )
}
