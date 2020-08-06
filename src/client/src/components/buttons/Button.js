import React from 'react';

export default function Button(props) {
  console.log(props)
  return (
  <button className={`${props.className} button`}>{props.children}</button>
  )
}