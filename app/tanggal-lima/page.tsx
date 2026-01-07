import React from 'react'

const TanggaLima = () => {
    const today = new Date()
    const daysOfWeek = today.getDay()
    const startWeek = new Date(today)
    startWeek.setDate(today.getDate() - daysOfWeek)

    const week = [...Array(7)].map((_, i) => {
        const date = new Date(startWeek)
        date.setDate(date.getDate() + i)

        return date
    })

    console.log(week)
    return (
        <div>
            {week.map((date, i) => {
                return (
                    <div key={i}>
                        {date.toDateString()}
                    </div>
                )
            })}
        </div>
    )
}

export default TanggaLima
