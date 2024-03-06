import { Link, useParams, useSearchParams } from "react-router-dom"
import { useReadTournamentsQuery } from "./slice"

export default function Tournaments() {
  const { team, years } = useParams()
  const [searchParams] = useSearchParams()
  const games = searchParams.toString() ? searchParams.get("games") : null
  const sortData = searchParams.toString() ? searchParams.get("sortData") : null
  const { data, isLoading } = useReadTournamentsQuery({
    team,
    years,
    games,
    sortData,
  })

  const sortPptsLink = () => {
    if (games && !sortData) return `?games=${games}&sortData=ppts`
    else if (games && sortData) return `?games=${games}&sortData=${sortData}`
    else if (!games && sortData) return `?sortData=${sortData}`
    else return `?sortData=ppts`
  }

  if (!isLoading)
    return (
      <main>
        <table>
          <caption>{team}</caption>
          <thead>
            <tr>
              <th>Año</th>
              <th>PTS</th>
              <th>PJ</th>
              <th>PG</th>
              <th>PE</th>
              <th>PP</th>
              <th>GF</th>
              <th>GC</th>
              <th>GD</th>
              <th>
                <Link
                  to={`/tournaments/${team}/${years}${sortPptsLink()}`}
                  className="light-link"
                >
                  %
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>
                  <Link to={`/results?year=${item.year}`}>{item.year}</Link>
                </td>
                <td className="bold">{item.general.points}</td>
                <td>{item.general.games}</td>
                <td>{item.general.wins}</td>
                <td>{item.general.ties}</td>
                <td>{item.general.losses}</td>
                <td>{item.general.goalsFor}</td>
                <td>{item.general.goalsAgainst}</td>
                <td>{item.general.goalDifference}</td>
                <td className="bold">
                  {Math.round(item.general.possiblePoints * 100)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <caption>{team} de local</caption>
          <thead>
            <tr>
              <th>Año</th>
              <th>PTS</th>
              <th>PJ</th>
              <th>PG</th>
              <th>PE</th>
              <th>PP</th>
              <th>GF</th>
              <th>GC</th>
              <th>GD</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>
                  <Link to={`/results?year=${item.year}`}>{item.year}</Link>
                </td>
                <td className="bold">{item.home.points}</td>
                <td>{item.home.games}</td>
                <td>{item.home.wins}</td>
                <td>{item.home.ties}</td>
                <td>{item.home.losses}</td>
                <td>{item.home.goalsFor}</td>
                <td>{item.home.goalsAgainst}</td>
                <td>{item.home.goalDifference}</td>
                <td className="bold">
                  {Math.round(item.home.possiblePoints * 100)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <caption>{team} de visitante</caption>
          <thead>
            <tr>
              <th>Año</th>
              <th>PTS</th>
              <th>PJ</th>
              <th>PG</th>
              <th>PE</th>
              <th>PP</th>
              <th>GF</th>
              <th>GC</th>
              <th>GD</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>
                  <Link to={`/results?year=${item.year}`}>{item.year}</Link>
                </td>
                <td className="bold">{item.away.points}</td>
                <td>{item.away.games}</td>
                <td>{item.away.wins}</td>
                <td>{item.away.ties}</td>
                <td>{item.away.losses}</td>
                <td>{item.away.goalsFor}</td>
                <td>{item.away.goalsAgainst}</td>
                <td>{item.away.goalDifference}</td>
                <td className="bold">
                  {Math.round(item.away.possiblePoints * 100)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    )
}
