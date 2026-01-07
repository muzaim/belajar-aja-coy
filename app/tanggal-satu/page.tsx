"use client"
export default function TanggalSatu() {
    const today = new Date()

    const handleClick = (date: Date) => {
        alert(`tanggal: ${date.toLocaleDateString("id-ID", { day: "numeric" })}`)
    }

    return (
        <div className="grid grid-cols-7">
            {[...Array(7)].map((_, i) => {
                const date = new Date(today)
                date.setDate(today.getDate() - 3 + i)

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
