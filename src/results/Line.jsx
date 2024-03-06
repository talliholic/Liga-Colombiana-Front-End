import { Link } from "react-router-dom"

export default function ResultLine({ year, line, i }) {
  return (
    <tr>
      <td>{i + 1}</td>
      <td className="left">
        <Link to={`/tournaments/${line.team}/century`}>{line.team}</Link>
      </td>
      <td className="bold">{line.points}</td>
      <td>{line.games}</td>
      <td>{line.wins}</td>
      <td>{line.ties}</td>
      <td>{line.losses}</td>
      <td>{line.goalsFor}</td>
      <td>{line.goalsAgainst}</td>
      <td>{line.goalDifference}</td>
      <td className="bold">{Math.round(line.possiblePoints * 100)}</td>
      {year === "2024-1" && (
        <td>
          <Link to={`/tournaments/${line.team}/century?games=${line.games}`}>
            Historial en fecha {line.games}{" "}
          </Link>
        </td>
      )}
    </tr>
  )
}
