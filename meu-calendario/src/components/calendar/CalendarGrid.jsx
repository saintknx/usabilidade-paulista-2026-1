function CalendarGrid({cells, todayDayNumber = null}) {
    return (
        <ol className="mt-3 grid grid-cols-7 gap-2" aria-label="Dia do mês">
            {cells.map((value, index) => {

                const isToday = value !== null && value === todayDayNumber;

                return (
                <li 
                key={`cell-${index}`}
                    className={`flex h-12 items-center justify-center rounded-lg border text-sm ${
                    isToday
                    ? 'border-ocean bg-ocean text-white font-semibold'
                    : 'border-ocean/15 bg-white text-ink'}`}

                    aria-label={

                        value ? isToday
                                ? `Dia ${value} (hoje)`
                                : `Dia ${value}`
                                : 'Espaço vazio'
                                }
                    >
                    {value ?? ''}
                </li>
                )
            })}
        </ol>
    )
}

export default CalendarGrid