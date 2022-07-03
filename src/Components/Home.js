import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Home() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:8080/person/all')
            const data = await response.json()
            setData(data)
        }
        fetchData()
    }, [])

    const display = data && data.map(person => {
        return (
            <h1 key={person._id}>
                <Link to={`/person/${person._id}`}>{person.name}</Link>
            </h1>
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}