import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <>
        <ul>
            <li>
                <Link href={'/usememo'}>useMemo</Link>
            </li>
        </ul>
    </>
  )
}

export default Home