import sorov from "../baza/sorov";
import Filter from "../src/components/Filter/Filter";
import List from "../src/components/List/List";

export async function getServerSideProps(context){
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      sorov[genre].url || sorov.fetchTrending.url
    }`
  ).then((res) => res.json())
  
  const results = request.results || [];

  return {
    props: {
      results: results,
    }
  }
}

export default function Home({ results }) {

  return (
    <div>
      <Filter />
      <List results={results} />
    </div>
  )
}
