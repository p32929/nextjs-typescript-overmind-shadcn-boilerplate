import { Context } from "@/overmind/OvermindHelper"
import { State } from "@/overmind/OvermindState"


export const setStates = ({ state }: Context, value: Partial<State>) => {
    state = {
        ...state,
        ...value,
    }
}

