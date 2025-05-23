import Link from 'next/link'
import React from 'react'

export default function layout({ children }) {
    return (
        <div>

            <h1>this is profile layout</h1>
            <li> <Link href='/profile/admin'>Admin</Link> </li> 
            <li> <Link href='/profile/user'>User</Link> </li> 
            <ul>
            </ul>
            {children}</div>
    )
}
