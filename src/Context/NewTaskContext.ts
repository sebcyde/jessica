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

export const Context = createContext<ITaskInterface | null>(null);

export const NewTaskContext: ITaskInterface = {
	event: null,
	location: null,
	allday: null,
	start: null,
	ends: null,
	important: null,
	notes: null,
	user: null,
};
