import React from 'react';

// ---------------------------------------------------------

import colors from './colors.json';

// ---------------------------------------------------------

import { colors_container, color } from './styles.module.scss';

// ---------------------------------------------------------

const colorVariables = colors.variables[0].mapValue;

// ---------------------------------------------------------

const Colors = () => {
  return (
    <div className={colors_container}>
      {colorVariables.map((variable, index) => {
        return (
          <div className={color} key={index}>
            <div
              style={{
                backgroundColor: `var(${variable.name})`,
              }}
            />
            <div>
              <span>
                <code>
                  <em>var({variable.name})</em>
                </code>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ---------------------------------------------------------

export default {
  title: 'Documentation/Colors',
};

export const availableColors = () => <Colors />;
availableColors.storyName = 'Colors';
availableColors.parameters = {
  storyshots: { disable: true },
};
