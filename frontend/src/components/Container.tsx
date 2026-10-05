import React from 'react'
import "./Container.css"

type Pages = {
    children: React.ReactNode
}

export default function Container({ children }: Pages) {
    return (
        <>
            <section>
                { children }
            </section>
        </>
    )
}