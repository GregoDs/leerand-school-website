import React from 'react';
import './UpcomingEvents.css';

const scheduledEvents = [
  {
    day: '12',
    month: 'Jul',
    title: 'Kindergarten Open Morning',
    time: '8:30 AM - 10:30 AM',
    audience: 'Prospective parents',
    location: 'Early Years Block',
  },
  {
    day: '19',
    month: 'Jul',
    title: 'Primary Learning Showcase',
    time: '10:00 AM - 12:00 PM',
    audience: 'Primary families',
    location: 'Main Hall',
  },
  {
    day: '26',
    month: 'Jul',
    title: 'Junior School Briefing',
    time: '2:00 PM - 3:30 PM',
    audience: 'Grade 6 and 7 parents',
    location: 'Academic Centre',
  },
];

const calendarDays = [
  '', '', '1', '2', '3', '4', '5',
  '6', '7', '8', '9', '10', '11', '12',
  '13', '14', '15', '16', '17', '18', '19',
  '20', '21', '22', '23', '24', '25', '26',
  '27', '28', '29', '30', '31', '', '',
];

const markedDays = new Set(['12', '19', '26']);
const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function UpcomingEvents() {
  return (
    <section id="events" className="events-section" aria-labelledby="events-title">
      <div className="events-divider events-divider-top" />

      <div className="events-inner">
        <div className="events-heading">
          <span className="events-eyebrow">School Calendar</span>
          <h2 id="events-title" className="events-title">Upcoming Events</h2>
          <p className="events-subtitle">
            Keep track of the moments that bring our families together.
          </p>
        </div>

        <div className="events-layout">
          <aside className="calendar-panel" aria-label="July school calendar">
            <div className="calendar-top">
              <div>
                <span className="calendar-label">This Month</span>
                <h3>July 2026</h3>
              </div>
              <span className="calendar-count">3 Events</span>
            </div>

            <div className="calendar-weekdays" aria-hidden="true">
              {weekDays.map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>

            <div className="calendar-grid">
              {calendarDays.map((day, index) => (
                <span
                  key={`${day}-${index}`}
                  className={`calendar-day ${day ? '' : 'calendar-day-empty'} ${markedDays.has(day) ? 'calendar-day-marked' : ''}`}
                  aria-label={day ? `${day} July 2026${markedDays.has(day) ? ', event scheduled' : ''}` : undefined}
                >
                  {day}
                </span>
              ))}
            </div>
          </aside>

          <div className="events-list" aria-label="Scheduled events">
            {scheduledEvents.map((event) => (
              <article className="event-card" key={event.title}>
                <div className="event-date">
                  <span>{event.month}</span>
                  <strong>{event.day}</strong>
                </div>

                <div className="event-body">
                  <div className="event-meta">
                    <span>{event.time}</span>
                    <span>{event.audience}</span>
                  </div>
                  <h3>{event.title}</h3>
                  <p>{event.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="events-divider events-divider-bottom" />
    </section>
  );
}
