import React from 'react'
import renderer from 'react-test-renderer'
import { VideoTag } from './VideoTag'

it('renders', () => {
    const tree = renderer.create(<VideoTag />).toJSON()
    expect(tree).toMatchSnapshot()
})

it('renders with src', () => {
    const tree = renderer.create(<VideoTag src="test.png" />).toJSON()
    expect(tree).toMatchSnapshot()
})
