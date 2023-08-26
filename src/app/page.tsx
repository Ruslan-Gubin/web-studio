import styles from './styles/pages/Home.module.scss';


async function fetchData(): Promise<{ success: boolean, test: boolean }> {
  const url = new URL('https://monopoly-back.onrender.com/api/connect');

  const response = await fetch(url, { 
    next: { revalidate: 60 }  
  });

  if (!response.ok) {
    throw new Error('Failed to connect server')
  }

  return await response.json()
}

export default async function Home() {
  const connect = await fetchData()

  return (
    <main className={styles.main}>
     <h1>Home</h1>
     <p>Connect server {connect.success.toString()}</p>
    </main>
  )
}
