import { videoTagString } from './videoTagString'

it('outputs a string', () => {
    expect(videoTagString()).toMatchSnapshot()
})

it('outputs a string with props', () => {
    expect(
        videoTagString({
            class: 'test-class',
            src: 'image.png',
            poster: 'image.png',
            type: 'mp4',
        }),
    ).toMatchSnapshot()
})
