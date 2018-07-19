import React, { SFC } from 'react'

export interface ReactVideoTagProps {
    src: string
    poster: string
    type: string
    muted: boolean
    autoPlay: boolean
    playsInline: boolean
    loop: boolean
}

export const reactVideoTag = ({
    src,
    type = 'video/mp4',
    muted = true,
    autoPlay = true,
    playsInline = true,
    loop = true,
    poster,
}: ReactVideoTagProps): string => {
    let output = `<video`
    if (muted) output += ` muted`
    if (autoPlay) output += ` autoplay`
    if (playsInline) output += ` playsinline`
    if (loop) output += ` loop`
    if (poster) output += ` poster="${poster}"`
    output += `>`
    if (src) output += `<source src="${src}" type="${type}">`
    output += `</video>`
    return output
}

export const ReactVideoTag: SFC<ReactVideoTagProps> = (props) => (
  <span
    dangerouslySetInnerHTML={{
      __html: reactVideoTag(props),
    }}
  />
)