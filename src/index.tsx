import React from 'react'

export interface ReactVideoTagOptions {
    src: string
    poster: string
    type: string
    muted: boolean
    autoPlay: boolean
    playsInline: boolean
    loop: boolean
}

// React does not render the <video> element correctly.
// https://github.com/facebook/react/issues/6544
export const reactVideoTag = ({
    src,
    type,
    muted,
    autoPlay,
    playsInline,
    loop,
    poster,
}: ReactVideoTagOptions): string => {
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

export const ReactVideoTag = (props: ReactVideoTagOptions) => (
  <span
    dangerouslySetInnerHTML={{
      __html: reactVideoTag(props),
    }}
  />
)