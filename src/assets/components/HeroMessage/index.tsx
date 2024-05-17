function HeroMessage({
  mainMessage,
  subMessage,
  children,
}: {
  mainMessage?: string | React.ReactNode
  subMessage?: string | React.ReactNode
  children?: React.ReactNode
}) {
  const render = (message: string | React.ReactNode) => {
    if (typeof message == 'string') {
      return <div className="text-6xl">{message}</div>
    }
    return message
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
        <div className="col-span-2">{render(mainMessage)}</div>
        {subMessage && (
          <div className="text-lg self-end text-end">{render(subMessage)}</div>
        )}
      </div>
      {children}
    </div>
  )
}

export default HeroMessage
