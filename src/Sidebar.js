import React from 'react';
import { links, social } from './data';

const sideBar = ()=>{
    return (
        <>
        <h4>Sidebar</h4>
        <div className='links-container show-container' >
        <ul className='links' >
                {links.map(item =>{
                  const {id,url,text} = item;
                  return <li key={id}><a href={url} >{text}</a></li>
                })}
        </ul>
      </div>
      </>
    );
}

export default sideBar ;