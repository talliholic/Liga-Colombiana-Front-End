import { useSearchParams } from "react-router-dom"
import { useReadResultsQuery } from "./slice"

export default function Matches() {
  const [searchParams] = useSearchParams()
  const { data, isLoading } = useReadResultsQuery(searchParams.toString())

  if (!isLoading)
    return (
      <table className="matches">
        <caption>Partidos</caption>
        <tbody>
          {data.matches.map((match, i) => (
            <tr key={i}>
              <td>{match.year}</td>
              <td>Fecha {match.round}</td>
              <td>{match.home}</td>
              <td>{match.homeGoals}</td>
              <td>{match.awayGoals}</td>
              <td className="left">{match.away}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}
