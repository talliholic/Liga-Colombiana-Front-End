import { useSearchParams } from "react-router-dom"
import Matches from "./Matches"
import Standings from "./Standings"

export default function Results() {
  const [searchParams] = useSearchParams()
  return (
    <>
      <h1>{searchParams.get("year")}</h1>
      <main>
        <Standings />
        <Matches />
      </main>
    </>
  )
}
