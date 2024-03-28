function Hero({
  mainMessage,
  subMessage,
}: {
  mainMessage?: string | React.ReactNode
  subMessage?: string
}) {
  const render = (message: string | React.ReactNode) => {
    if (typeof message == 'string') {
      return (
        <div className="text-6xl source-sans-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500">
          {message}
        </div>
      )
    }
    return message
  }
  return (
    <div className="w-1/2 pl-10">
      {render(mainMessage)}
      {subMessage && <div className="text-3xl">{subMessage}</div>}
    </div>
  )
}

export default Hero
