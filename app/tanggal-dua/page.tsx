import React from 'react'

const TanggalDua = () => {
    const today = new Date()
    const dayOfWeek = today.getDay()

    const startOfWeek = new Date(today)
    startOfWeek.setDate(today.getDate() - dayOfWeek)

    const weekDays = [...Array(7)].map((_, i) => {
        const date = new Date(startOfWeek)
        date.setDate(startOfWeek.getDate() + i)
        return date
    })

    const handleClick = (date: Date) => {
        alert(`tanggal: ${date.toLocaleDateString("id-ID")}`)
    }

    return (
        <div className="grid grid-cols-7">
            {weekDays.map((date, i) => {
                const isToday = date.toDateString() === today.toDateString()
                return (
                    <div
                        key={i}
                        onClick={() => handleClick(date)}
                        className={`border text-center py-10 cursor-pointer ${isToday ? "bg-red-500 text-white" : ""
                            }`}
                    >
                        {date.toLocaleDateString("id-ID", { day: "numeric" })}
                    </div>
                )
            })}
        </div>
    )
}

export default TanggalDua
