
const TanggalTiga = () => {
    const today = new Date()
    today.setDate(today.getDate() + 2)


    const handleClick = (date: Date) => {
        alert(`tanggal :${date.toLocaleDateString()}`)
    }
    return (
        <div className="grid grid-cols-7">
            {[...Array(7)].map((_, i) => {
                const date = new Date(today)
                date.setDate(today.getDate() - 3 + i)

                const isToday = today.getDate() === date.getDate()

                return (
                    <div key={i}
                        onClick={() => handleClick(date)}
                        className={`text-center border py-6 ${isToday ? "bg-red-800 text-white" : ""}`}>
                        {date.toLocaleDateString('id-ID', { day: 'numeric' })}
                    </div>
                )
            })}
        </div>
    )
}

export default TanggalTiga
