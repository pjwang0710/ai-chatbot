/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import ClearButton from '@/components/clear-history'

export async function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b bg-gradient-to-b from-background/10 via-background/50 to-background/80 px-4 backdrop-blur-xl">
      <div className="flex items-center space-x-3">
        <div className="relative flex h-8 w-8 items-center">
          <img src="https://explainthis.s3-ap-northeast-1.amazonaws.com/4aa043d5ade843f39fb5fc1de2f3ac63.png" alt="logo" />
        </div>
        <div className="text-lg font-medium">
        ExplainThis AI 聊天機器人
        </div>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <ClearButton />
      </div>
    </header>
  )
}
