import Head from 'next/head'

export default function Failure() {
  function handleSubmit(e) {
    e.preventDefault()
    console.log('submit', e)
  }
  return (
    <main>
      <Head>
        <title>RVA.js - Failure</title>
        <meta name="description" content="RVA.js - Failure" />
      </Head>
      <div>
        <h1>Failure</h1>
        <img src="https://via.placeholder.com/350x150" alt="placeholder" />
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              id="name"
            />
          </label>
          <label>
            Text area
            <textarea name="textarea" id="textarea" cols="30" rows="10" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  )
}
