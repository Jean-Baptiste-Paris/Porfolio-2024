function HighlightSpan({
  tagType = 'div',
  highlight,
  classes = '',
  highlightClasses = '',
  children,
}: {
  tagType?: keyof JSX.IntrinsicElements
  highlight: string
  classes?: string
  highlightClasses?: string
  children: string
}) {
  const Tag = tagType as keyof JSX.IntrinsicElements
  const parts = children.split(highlight)
  return (
    <Tag className={classes}>
      {parts[0]}
      <span className={highlightClasses}>{highlight}</span>
      {parts[1]}
    </Tag>
  )
}

export default HighlightSpan
