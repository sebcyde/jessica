export interface IToDo {
	name: string | undefined;
	location?: string | undefined;
	important: boolean | undefined;
	notes: string | undefined;
}

export const InitialToDo = {
	name: undefined,
	location: undefined,
	important: undefined,
	notes: undefined,
};
