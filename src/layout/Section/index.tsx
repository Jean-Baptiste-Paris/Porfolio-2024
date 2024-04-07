function Section({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) {
  const classes: string = 'py-10 ' + className
  return <section className={classes}>{children}</section>
}

export default Section
