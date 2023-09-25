export default Page

import React from 'react'
import { Counter } from './Counter.js'

function Page() {
  return (
    <>
      <h1>Vike React app</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  )
}
