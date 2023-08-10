import * as React from 'react'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          歡迎使用 ExplainThis AI 聊天機器人！
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          This is an open source AI chatbot app template built with .
        </p>
      </div>
    </div>
  )
}
