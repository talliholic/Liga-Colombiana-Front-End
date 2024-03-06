import { useNavigate, useSearchParams } from "react-router-dom"

const years = [
  "2000",
  "2001",
  "2002-1",
  "2002-2",
  "2003-1",
  "2003-2",
  "2004-1",
  "2004-2",
  "2005-1",
  "2005-2",
  "2006-1",
  "2006-2",
  "2007-1",
  "2007-2",
  "2008-1",
  "2008-2",
  "2009-1",
  "2009-2",
  "2010-1",
  "2010-2",
  "2011-1",
  "2011-2",
  "2012-1",
  "2012-2",
  "2013-1",
  "2013-2",
  "2014-1",
  "2014-2",
  "2015-1",
  "2015-2",
  "2016-1",
  "2016-2",
  "2017-1",
  "2017-2",
  "2018-1",
  "2018-2",
  "2019-1",
  "2019-2",
  "2020",
  "2021-1",
  "2021-2",
  "2022-1",
  "2022-2",
  "2023-1",
  "2023-2",
  "2024-1",
]

export default function Menu() {
  const [searchParams] = useSearchParams()
  const year = searchParams.get("year")
  const navigate = useNavigate()

  const handleChange = e => navigate(`/results?year=${e.target.value}`)

  return (
    <nav>
      <label htmlFor="year">Buscar campeonato: </label>
      <select id="year" onChange={handleChange} defaultValue={year}>
        {years.map((year, i) => (
          <option defaultValue={year} key={i}>
            {year}
          </option>
        ))}
      </select>
    </nav>
  )
}
