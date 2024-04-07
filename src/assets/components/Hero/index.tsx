function Hero({
  mainMessage,
  subMessage,
  children,
}: {
  mainMessage?: string | React.ReactNode
  subMessage?: string
  children?: React.ReactNode
}) {
  const render = (message: string | React.ReactNode) => {
    if (typeof message == 'string') {
      return <div className="text-6xl font-bold">{message}</div>
    }
    return message
  }
  return (
    <div className="flex flex-col justify-center space-y-4">
      {render(mainMessage)}
      {subMessage && <div className="text-4xl">{subMessage}</div>}
      {children}
    </div>
  )
}

export default Hero
