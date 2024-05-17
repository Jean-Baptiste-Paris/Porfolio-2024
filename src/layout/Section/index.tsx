function Section({
  className,
  anchor,
  children,
}: {
  className?: string
  anchor?: string
  children?: React.ReactNode
}) {
  const classes: string = 'py-10 space-y-6 ' + className
  return (
    <section className={classes}>
      <a className="block relative invisible -top-20" id={anchor}></a>
      {children}
    </section>
  )
}

export default Section
