import { useState, createContext } from 'react';
import ReactDOM from 'react-dom/client';

interface ITaskInterface {
	event: string | null;
	location?: string | null;
	allday: boolean | null;
	start: string | null;
	ends: string | null;
	important: boolean | null;
	notes?: string | null;
}

export const NewTaskContext = createContext<ITaskInterface>({
	event: null,
	location: null,
	allday: null,
	start: null,
	ends: null,
	important: null,
	notes: null,
});
