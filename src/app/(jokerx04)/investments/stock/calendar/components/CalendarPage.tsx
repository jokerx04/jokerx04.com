'use client'
import Icon from '@/components/wrappers/Icon'
import { SimpleBar } from '@/components/wrappers/SimpleBar'
import { DateInput, DatesSetArg, EventClickArg, EventDropArg, EventInput } from '@fullcalendar/core'
import koLocale from '@fullcalendar/core/locales/ko'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { DateClickArg, type DropArg } from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import { useRef, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'
import AddEditModal from './AddEditModal'
import { getEventClassName, type StockCalendarMonthlyData, type SubmitEventType } from './data'

const CalendarPage = () => {
  const { height } = useWindowSize()
  const loadedMonthRef = useRef<string>('')

  const [isEditable, setIsEditable] = useState<boolean>(false)
  const [events, setEvents] = useState<EventInput[]>([])
  const [eventData, setEventData] = useState<EventInput>()
  const [dateInfo, setDateInfo] = useState<DateClickArg>()

  const onDatesSet = async (arg: DatesSetArg) => {
    const currentDate = arg.view.currentStart
    const year = currentDate.getFullYear()
    const month = String(currentDate.getMonth() + 1).padStart(2, '0')
    const yearMonth = `${year}-${month}`

    if (loadedMonthRef.current === yearMonth) {
      return
    }
    loadedMonthRef.current = yearMonth

    try {
      const response = await fetch(`/data/investments/stock/calendar/calendar_${yearMonth}.json`)
      if (!response.ok) {
        setEvents([])
        return
      }
      const data: StockCalendarMonthlyData = await response.json()
      const mappedEvents: EventInput[] = (data.events ?? []).map((item) => {
        const startDateTime = item.datetimeKst ? item.datetimeKst.replace(' ', 'T') : item.dateKst
        return {
          id: item.id,
          title: `[${item.countryName}] ${item.event}`,
          start: startDateTime,
          end: startDateTime,
          className: getEventClassName(item.importanceScore, item.category),
          extendedProps: item,
        }
      })
      setEvents(mappedEvents)
    } catch {
      setEvents([])
    }
  }

  const onCloseModal = () => {
    setEventData(undefined)
    setDateInfo(undefined)
    window.HSOverlay?.close('#event-modal')
  }

  const onDateClick = (arg: DateClickArg) => {
    setDateInfo(arg)
    window.HSOverlay?.open('#event-modal')
    setIsEditable(false)
  }

  const onEventClick = (arg: EventClickArg) => {
    const classNames = arg.event.classNames
    const event = {
      id: arg.event.id,
      title: arg.event.title,
      className: Array.isArray(classNames) ? classNames.join(' ') : classNames || '',
    }
    setEventData(event)
    setIsEditable(true)
    window.HSOverlay?.open('#event-modal')
  }

  const onDrop = (arg: DropArg) => {
    const dropEventData = arg
    const title = dropEventData.draggedEl.title
    if (title) {
      const newEvent = {
        id: String(events.length + 1),
        title,
        start: dropEventData ? dropEventData.dateStr : new Date(),
        className: dropEventData.draggedEl.dataset.class,
      }
      const modifiedEvents = [...events]
      modifiedEvents.push(newEvent)

      setEvents(modifiedEvents)
    }
  }

  const onAddEvent = (data: SubmitEventType) => {
    const modifiedEvents = [...events]
    const event = {
      id: String(modifiedEvents.length + 1),
      title: data.title,
      start: Object.keys(dateInfo ?? {}).length !== 0 ? dateInfo?.date : new Date(),
      className: data.category,
    }
    modifiedEvents.push(event)
    setEvents(modifiedEvents)
    onCloseModal()
  }

  const onUpdateEvent = (data: SubmitEventType) => {
    setEvents(
      events.map((e) => {
        if (e.id === eventData?.id) {
          return {
            ...e,
            title: data.title,
            className: data.category,
          }
        } else {
          return e
        }
      })
    )
    onCloseModal()
    setIsEditable(false)
  }

  const onRemoveEvent = () => {
    const modifiedEvents = [...events]
    const idx = modifiedEvents.findIndex((e) => e.id === eventData?.id)
    modifiedEvents.splice(idx, 1)
    setEvents(modifiedEvents)
    onCloseModal()
  }

  const onEventDrop = (arg: EventDropArg) => {
    const modifiedEvents = [...events]
    const idx = modifiedEvents.findIndex((e: EventInput) => e.id === arg.event.id)
    modifiedEvents[idx].title = arg.event.title
    modifiedEvents[idx].className = arg.event.classNames
    modifiedEvents[idx].start = arg.event.start as DateInput
    modifiedEvents[idx].end = arg.event.end as DateInput
    setEvents(modifiedEvents)
    setIsEditable(false)
  }

  return (
    <>
      <div className="flex lg:h-[calc(100vh-192px)]">
        <div className="card flex-1 h-full">
          <div className="card-header inline-flex lg:hidden">
            <button className="btn bg-primary w-full text-white" aria-haspopup="dialog" aria-expanded="false" aria-controls="event-modal" data-hs-overlay="#event-modal">
              <Icon icon="plus" className="me-2 align-middle"></Icon>
              Create New Event
            </button>
          </div>

          <div className="card-body">
            <SimpleBar id="calendar">
              <FullCalendar
                locale={koLocale}
                initialView="dayGridMonth"
                plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
                bootstrapFontAwesome={false}
                handleWindowResize={true}
                slotDuration="00:30:00"
                slotMinTime="00:00:00"
                slotMaxTime="24:00:00"
                buttonText={{
                  today: '오늘',
                  month: '월',
                  week: '주',
                  day: '일',
                  list: '일정',
                }}
                headerToolbar={{
                  left: 'prev,next,today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
                }}
                height={height - 240}
                editable={true}
                selectable={true}
                droppable={true}
                events={events}
                datesSet={onDatesSet}
                dateClick={onDateClick}
                eventClick={onEventClick}
                drop={onDrop}
                eventDrop={onEventDrop}
              />
            </SimpleBar>
          </div>
        </div>
      </div>

      <AddEditModal eventData={eventData} isEditable={isEditable} onAddEvent={onAddEvent} onRemoveEvent={onRemoveEvent} onUpdateEvent={onUpdateEvent} />
    </>
  )
}

export default CalendarPage
