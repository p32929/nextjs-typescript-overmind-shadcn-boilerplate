import { IContext } from 'overmind'
import * as actions from './OvermindActions'
import { createActionsHook, createStateHook } from 'overmind-react'
import { state } from '@/lib/overmind/OvermindState';

export const config = {
    state,
    actions
};

export type Context = IContext<{
    state: typeof config.state
    actions: typeof config.actions
}>


export const useAppState = createStateHook<Context>()
export const useActions = createActionsHook<Context>()