import React from 'react'
import { reactVideoTag, ReactVideoTag } from './index'

it('renders to a string', () => {
    expect(reactVideoTag()).toMatchSnapshot()
})

it('renders a component', () => {
    expect(<ReactVideoTag src="video.mp4" />).toMatchSnapshot()
})
