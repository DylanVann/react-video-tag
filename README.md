# react-video-tag

This package was created because React does not render `<video>` correctly.

Specifically it does not render the `muted` attribute, which means it's
not possible to get some videos to behave as GIFS on mobile devices.

See: https://github.com/facebook/react/issues/6544

## Usage

```bash
npm install react-video-tag
# or
yarn add react-video-tag
```

```js
import { videoTagString, VideoTag } from 'react-video-tag'

// reactVideoTag renders a string from props.
videoTagString({ src: '...', poster: '...' })

// ReactVideoTag renders a wrapping span and uses dangerouslySetInnerHTML.
const MyComponent = () => <VideoTag src={mySrc} poster={myPoster} />
```

**Props:**

```ts
export interface VideoTagProps {
    src: string
    poster: string
    type: string
    muted: boolean
    autoPlay: boolean
    playsInline: boolean
    loop: boolean
}
```

**By default the props on this component make it behave like a GIF:**

```js
const defaults = {
    type = 'video/mp4',
    muted = true,
    autoPlay = true,
    playsInline = true,
    loop = true,
}
```
