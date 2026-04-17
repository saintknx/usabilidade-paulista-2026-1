function CalendarGrid({cells}) {
    return (
        <ol>
            {cells.map((value, index) => (
                <li key={`cell-${index}`}>
                    {value ?? ''}
                </li>
            ))}
        </ol>
    )
}

export default CalendarGrid