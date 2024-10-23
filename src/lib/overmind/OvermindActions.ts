import { Context } from "@/lib/overmind/OvermindHelper"
import { State } from "@/lib/overmind/OvermindState"


export const setStates = ({ state }: Context, value: Partial<State>) => {
    state = {
        ...state,
        ...value,
    }
}

export const increaseCounter = ({ state }: Context, value: number) => {
    state.test.counter += value
}

