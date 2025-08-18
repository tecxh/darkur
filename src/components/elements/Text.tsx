import { createElement, type PropsWithChildren } from "react"
import type { HTMLTextType } from '../../../types'


interface TextProps extends PropsWithChildren {
    variant?: HTMLTextType;
    level?: HTMLTextType;
}


const variantMap: Record<HTMLTextType, string> = {
    h1: 'text-6xl font-semibold',
    h2: 'text-5xl font-semibold',
    h3: 'text-4xl font-medium',
    h4: 'text-2xl font-extralight uppercase',
    h5: 'text-1xl font-semibold',
    h6: 'text:base font-bold',
    p: 'text-sm',
}

export const Text = (props: TextProps) => {
    const { children, level = 'p', variant = 'p' } = props;

    return createElement(level, { className: variantMap[variant] }, children)
}