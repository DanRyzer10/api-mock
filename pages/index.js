import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <Head>
        <title>Latinia Mock API</title>
        <meta name="description" content="Simple Next.js API with versioned endpoints" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Latinia Mock API</h1>
        <p>The API is running. Send a POST request to <code>/api/v1/send</code> to test it.</p>
        
        <div style={{ marginTop: '2rem', background: '#f0f0f0', padding: '1rem', borderRadius: '4px' }}>
          <h2>Example usage:</h2>
          <pre style={{ background: '#e0e0e0', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
            {`fetch('/api/v1/send', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ text: 'Hello, world!' }),
})`}
          </pre>
        </div>
      </main>
    </div>
  );
}
