
type Name = {
    first: string,
}

export default function TestComponent({first}: Name) {
  return (
    <div>{first}</div>
  )
}
