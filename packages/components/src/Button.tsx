import React from 'react'
import { mStyle } from '@/utils/mergeStyleProp'

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  size?: 'sm' | 'md' | 'lg'
}

const buttonSize = {
  sm: {
    padding: '8px 12px'
  },
  md: {
    padding: '12px 24px'
  },
  lg: {
    padding: '20px 30px'
  }
}

/** Button */
export function Button({ children, size, ...props }: ButtonProps) {
  return (
    <button
      style={mStyle(props, {
        color: 'slateblue',
        background: 'lavender',
        ...buttonSize[size ?? 'sm']
      })}
      {...props}>
      {children}
    </button>
  )
}
