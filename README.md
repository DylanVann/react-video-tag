# react-video-tag

This package was created because React does not render `<video>` correctly.

Specifically it does not render the `muted` attribute, which means it's 
not possible to get some videos to behave as GIFS on mobile devices.

See: https://github.com/facebook/react/issues/6544

## Usage

```js
import { reactVideoTag, ReactVideoTag } from 'react-video-tag'

// reactVideoTag renders a string from props.
reactVideoTag({ src: '...', poster: '...' })

// ReactVideoTag renders a wrapping span and uses dangerouslySetInnerHTML.
const MyComponent = () => (
    <ReactVideoTag src={mySrc} poster={myPoster} />
)
```