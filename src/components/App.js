import React, {useState} from 'react';
import './App.css';
import './Accordion'
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown'

  const options = [
    {
      label: 'The Color Red',
      value: 'red'
    },
    {
      label: 'The Color Green',
      value: 'green'
    },
    {
      label: 'The Color Blue',
      value: 'blue'
    }
  ];

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end Javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite Javascript framework among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  },
]

export default () => {
  const [selected, setSelected] = useState(options[0])
  return <div>
    <br/>
  <Dropdown
    selected={selected}
    onSelectedChange={setSelected}
    options={options}/>
    <br/>
    <br/>
  <Accordion items={items} />
    <br/>
  <Search />
    <br/>
  </div>
}


