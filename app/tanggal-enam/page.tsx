import React from 'react'

const TanggalEnam = () => {
    const today = new Date()
    today.setDate(today.getDate() + 2)
    const dayOfWeek = today.getDay()
    const startWeek = new Date(today)
    startWeek.setDate(today.getDate() - dayOfWeek)

    const week = [...Array(7)].map((_, i) => {
        const date = new Date(startWeek)
        date.setDate(date.getDate() + i)
        return date
    })


    return (
        <div>
            {week.map((date, i) => {
                const isToday = date.getDate() === today.getDate()
                return (
                    <div key={i} className={`${isToday ? "text-red-300" : ""}`}>
                        {date.toDateString()}
                    </div>
                )
            })}
        </div>
    )
}

export default TanggalEnam
