import { useSearchParams } from "react-router-dom"

const Search = () => {
    const [serchParams] = useSearchParams();
    const query = serchParams.get("query");

  return (
    <div>Voce digitou  {query}</div>
  )
}

export default Search