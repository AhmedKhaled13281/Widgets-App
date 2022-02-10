import React , {useState} from 'react'
import Link from './link'
const headers = [
  {
    label: 'Accordion',
    value: 0,
    url: '/'
  },
  {
    label: 'Search',
    value: 1,
    url: '/search'
  },
  {
    label: 'DropDown',
    value: 2,
    url: 'dropdown'
  },
  {
    label: 'Translate',
    value: 3,
    url: '/translate'
  }
]
const Header = () =>{

  return (
    <div className="ui secondary pointing menu">
        <Link href="/" className="item">
            Accordion
        </Link>
        <Link href="/search" className="item">
            Search
        </Link>
        <Link href="/dropdown" className="item">
            DropDown
        </Link>
        <Link href="/translate" className="item">
            Translate
        </Link>
    </div>
  )
}

export default  Header
