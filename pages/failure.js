export default function Failure() {
  function handleSubmit(e) {
    e.preventDefault()
    console.log('submit', e)
  }
  return (
    <div>
      <h1>Failure</h1>
      <img src="https://via.placeholder.com/350x150" />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" name="name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
