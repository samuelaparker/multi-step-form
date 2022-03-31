import React from 'react'
import { Interface } from 'readline'

interface Name {
    first: string,
}

export default function TestComponent({first}: Name) {
  return (
    <div>{first}</div>
  )
}
