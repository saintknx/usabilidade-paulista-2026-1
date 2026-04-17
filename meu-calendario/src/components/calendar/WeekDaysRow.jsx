function WeekDaysRow({weekdays}) {
    return (
        <ul>
            {weekdays.map((day) => (
            <li key={day}>{day}</li>
            ))}
        </ul>
    )
}

export default WeekDaysRow