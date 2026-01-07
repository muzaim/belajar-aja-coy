import React from 'react'

const TanggalEmpat = () => {
    const today = new Date()
    const dayOfWeek = today.getDay()
    const startWeek = new Date(today)

    startWeek.setDate(today.getDate() - dayOfWeek)

    const weekDays = [...Array(7)].map((_, i) => {
        const date = new Date(startWeek)
        date.setDate(date.getDate() + i)

        return date
    })

    console.log(weekDays)
    return (
        <div className='grid grid-cols-7'>
            {weekDays.map((date, i) => {
                const isToday = date.toDateString() === today.toDateString()
                return (
                    <div key={i} className={`text-center py-10 border ${isToday ? "bg-red-300 text-white" : ""}`}>
                        {date.toDateString()}
                    </div>
                )
            })}
        </div>
    )
}

export default TanggalEmpat
