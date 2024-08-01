import { createStore } from 'zustand/vanilla'

export interface CounterState {
	psychologist: string
}

export interface CounterActions {
	setPsychologist: (who: string) => void
}

export type CounterStore = CounterState & CounterActions

export const defaultInitState: CounterState = {
	psychologist: 'both'
}

export const createCounterStore = (initState: CounterState = defaultInitState) => {
	return createStore<CounterStore>()(set => ({
		...initState,
		setPsychologist: who => set(state => ({ psychologist: (state.psychologist = who) }))
	}))
}
