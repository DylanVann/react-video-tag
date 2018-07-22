import React, { SFC } from 'react'
import { videoTagString, VideoTagProps } from './videoTagString'

export const VideoTag: SFC<VideoTagProps> = props => (
    <span
        dangerouslySetInnerHTML={{
            __html: videoTagString(props),
        }}
    />
)

VideoTag.defaultProps = {
    muted: true,
    autoPlay: true,
    playsInline: true,
    loop: true,
}
