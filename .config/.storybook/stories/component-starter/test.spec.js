// TODO: REMOVE the "FPO snapshot test" below and add additional tests.
// ----  Snapshots tests are not necessary because they’re created automatically with Storyshots.
// ---------------------------------------------------------
// ----  If tests are not required for the component, remove this file.
// ---------------------------------------------------------

import React from 'react';
import renderer from 'react-test-renderer';

// ---------------------------------------------------------

import { component as ComponentName, fixtures } from '.';

// ---------------------------------------------------------

describe('ComponentName', () => {
  it('FPO snapshot', () => {
    const tree = renderer
      .create(<ComponentName {...fixtures.componentProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
