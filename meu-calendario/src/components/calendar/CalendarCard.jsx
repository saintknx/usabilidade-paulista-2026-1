function CalendarCard({title, children}) {
    return (
        <section className="rounded-2x1 border border-ocean/20 bg-white p-4 shadow-soft sm:p-5">
            <h2 className="font-heading text-xl text-ocean" >{title}</h2>
            <div className="mt-4">{children}</div>
        </section>
    )
}

export default CalendarCard