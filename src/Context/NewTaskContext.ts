import React, { createContext } from 'react';

interface ITaskInterface {
	event: string | null;
	location?: string | null;
	allday: boolean | null;
	start: string | null;
	ends: string | null;
	important: boolean | null;
	notes?: string | null;
	user: Object | null;
}

export const InitNewTask: ITaskInterface = {
	event: null,
	location: null,
	allday: null,
	start: null,
	ends: null,
	important: null,
	notes: null,
	user: null,
};

interface ICalendarInt {
	selectedMonth: string | null;
	selectedDay: string | null;
}

export const InitCalendar: ICalendarInt = {
	selectedMonth: null,
	selectedDay: null,
};

export const NewTaskContext = createContext<ITaskInterface | null>(null);
export const CalendarContext = createContext<ICalendarInt | null>(null);
