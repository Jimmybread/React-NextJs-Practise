import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function App() {
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        id && fetch(`/api/detail/${id}`)
            .then(res => res.json())
            .then(json => console.log(json))
    }, [id])
    return (
        <div>{id}</div>
    )
}
