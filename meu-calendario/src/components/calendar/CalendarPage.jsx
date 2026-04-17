import CalendarCard from "./CalendarCard";
import CalendarGrid from "./CalendarGrid";
import CalendarHeader from "./CalendarHeader";
import WeekDaysRow from "./WeekDaysRow";

import { CALENDAR_CELLS, CALENDAR_TITLE, WEEK_DAYS} from "./calendarData";

function CalendarPage() {
    return (
        <div>
        <CalendarHeader title={CALENDAR_TITLE} />

        <CalendarCard title="Calendário"> 
        <WeekDaysRow weekDays={WEEK_DAYS} />
        <CalendarGrid cells={CALENDAR_CELLS} />
        
        </CalendarCard>

        <CalendarCard title="Objetivo da aula"> 
            <p>
                Nesta etapa, praticamos componentização, props, children e key
            </p>
        </CalendarCard>
    </div>
    )
}

export default CalendarPage