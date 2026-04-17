function CalendarCard({title, children}) {
    return (
        <section>
            <h2>{title}</h2>
            <div>{children}</div>
        </section>
    )
}

export default CalendarCard