// ---------------------------------------------------------
// TODO: REMOVE the "FPO snapshot test" below and add additional tests.
// ----  Snapshots tests are not necessary because they’re created automatically with Storyshots.
// ---------------------------------------------------------
// ----  If tests are not required, remove this file.
// ---------------------------------------------------------

import renderer from 'react-test-renderer'

// ---------------------------------------------------------

import ComponentName from '.'

// ---------------------------------------------------------

import fixtures from './fixtures'

// ---------------------------------------------------------

describe('ComponentName', () => {
  it('FPO snapshot', () => {
    const tree = renderer
      .create(<ComponentName {...fixtures._props} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
