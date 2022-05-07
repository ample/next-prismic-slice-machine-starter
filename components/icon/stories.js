import { capitalize } from 'lodash';

// ---------------------------------------------------------

import { fixtures, component as Icon, iconOptions } from '.';

// ---------------------------------------------------------

export default {
  component: Icon,
  title: 'Components/Icon',
};

const Template = (args) => (
  <div style={{ width: '30px' }}>
    <Icon {...args} />
  </div>
);

// --------------------------------------------------------

export const _props = Template.bind({});
_props.args = fixtures._props;
_props.parameters = {
  chromatic: { disableSnapshot: true },
};

// --------------------------------------------------------

const iconName = {
  alignItems: 'center',
  display: 'flex',
  marginBottom: '30px',
  width: 'calc(25% - 20px)',
};

const iconType = {
  marginBottom: '10px',
};

const iconTypeGroup = {
  borderTop: '1px solid var(--color-gray-5)',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginTop: '-10px',
  padding: '10px 0',
};

const svg = {
  marginRight: '8px',
};

// --------------------------------------------------------

export const icons = () =>
  iconOptions.map((icons, index) => {
    return (
      <div key={index} style={{ ...iconType }}>
        <h3>{capitalize(icons.type)}</h3>

        <div style={{ ...iconTypeGroup }}>
          {icons.name.map((name, index) => {
            let icon = `${icons.type}-${name}`;

            return (
              <div key={index} style={{ ...iconName }}>
                <div style={{ ...svg }}>
                  <Icon name={icon} />
                </div>
                <em style={{ display: 'block' }}>{icon}</em>
              </div>
            );
          })}
        </div>
      </div>
    );
  });
