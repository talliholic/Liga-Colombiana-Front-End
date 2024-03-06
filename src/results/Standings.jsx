import { useParams, useSearchParams } from "react-router-dom"
import { useReadResultsQuery } from "./slice"
import ResultLine from "./Line"

export default function Standings() {
  const [searchParams] = useSearchParams()
  const { data, isLoading } = useReadResultsQuery(searchParams.toString())

  if (!isLoading)
    return (
      <table>
        <caption>Posiciones</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Equipo</th>
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
          {data?.standings.general.map((line, i) => (
            <ResultLine
              year={searchParams.get("year")}
              line={line}
              key={i}
              i={i}
            />
          ))}
        </tbody>
      </table>
    )
}
