"use client"

import React from 'react'
import { useActions, useAppState } from "@/lib/overmind/OvermindHelper"
import { Button } from '@/components/ui/button'

interface Props {

}

const index: React.FC<Props> = (props) => {
  const actions = useActions()
  const states = useAppState()

  return (
    <div className='flex flex-col justify-start p-10 gap-y-4'>
      <p className='text-center text-4xl'>{states.test.counter}</p>
      <Button onClick={() => {
        actions.increaseCounter(1)
      }}>++</Button>
    </div>
  )

}

export default index;