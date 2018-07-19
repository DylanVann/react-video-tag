import React, { SFC } from 'react'

export interface ReactVideoTagProps {
    src: string
    poster?: string
    type?: string
    muted?: boolean
    autoPlay?: boolean
    playsInline?: boolean
    loop?: boolean
}

export const reactVideoTag = (props?: ReactVideoTagProps): string => {
    const muted = props.muted ? ` muted` : ``
    const autoPlay = props.autoPlay ? ` autoplay` : ``
    const playsInline = props.playsInline ? ` playsinline` : ``
    const loop = props.loop ? ` loop` : ``
    const poster = props.poster ? ` poster` : ``
    const src = props.src ? ` src="${props.src}"` : ``
    const type = props.type ? ` type="${props.type}"` : ``
    return `<video${muted}${autoPlay}${playsInline}${loop}${poster}><source${src}${type}></video>`
}

export const ReactVideoTag: SFC<ReactVideoTagProps> = props => (
    <span
        dangerouslySetInnerHTML={{
            __html: reactVideoTag(props),
        }}
    />
)
