export default function Failure() {
  function handleSubmit(e) {
    e.preventDefault()
    console.log('submit', e)
  }
  return (
    <main>
      <div>
        <h1>Failure</h1>
        <img src="https://via.placeholder.com/350x150" />
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="checkbox"
            placeholder="Enter your name"
            name="name"
            id="name"
          />
          <textarea name="textarea" id="textarea" cols="30" rows="10" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  )
}
