import React from 'react';

export default function Button(props) {
  return (
    <button className={`${props.className} button`}>{props.children}</button>
  )
}