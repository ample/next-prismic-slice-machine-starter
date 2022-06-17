// ---------------------------------------------------------

import initStoryshots, {
  Stories2SnapsConverter,
} from '@storybook/addon-storyshots'
import wait from 'waait'
import { act, create } from 'react-test-renderer'
import { createElement } from 'react'

// ---------------------------------------------------------

const converter = new Stories2SnapsConverter()

// ---------------------------------------------------------

initStoryshots({
  asyncJest: true,
  configPath: './.config/.storybook',
  integrityOptions: { cwd: __dirname },
  test: async ({ context, done, story }) => {
    let renderer
    act(() => {
      renderer = create(createElement(story.render))
    })

    // -------------------------------------------------------

    await act(() => wait(0))

    // -------------------------------------------------------

    const snapshotFileName = converter.getSnapshotFileName(context)
    expect(renderer).toMatchSpecificSnapshot(snapshotFileName)

    done()
  },
})
