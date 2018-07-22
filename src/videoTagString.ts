export interface VideoTagProps {
    class?: string
    className?: string
    src?: string
    poster?: string
    type?: string
    muted?: boolean
    autoPlay?: boolean
    playsInline?: boolean
    loop?: boolean
}

export const videoTagString = (props: VideoTagProps = {}): string => {
    const classOrClassName = props.className || props.class
    const classString = classOrClassName ? ` class="${classOrClassName}"` : ``
    const muted = props.muted ? ` muted` : ``
    const autoPlay = props.autoPlay ? ` autoplay` : ``
    const playsInline = props.playsInline ? ` playsinline` : ``
    const loop = props.loop ? ` loop` : ``
    const poster = props.poster ? ` poster` : ``
    const src = props.src ? ` src="${props.src}"` : ` src=""` // required
    const type = props.type ? ` type="${props.type}"` : ``

    return `<video${classString}${muted}${autoPlay}${playsInline}${loop}${poster}><source${src}${type}></video>`
}
