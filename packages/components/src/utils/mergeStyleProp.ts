import React from 'react'

export function mergeStyleProp<P extends { style?: React.CSSProperties }>(
  props: P,
  style: P['style']
) {
  return {
    ...props.style,
    ...style
  }
}

export const mStyle = mergeStyleProp
