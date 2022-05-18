// ---------------------------------------------------------

const child = (
  <div style={{ backgroundColor: 'lightgrey', padding: '20px' }}>
    <h2>Lorem ipsum dolor sit amet</h2>
    <p>
      Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
    </p>
  </div>
)

// ---------------------------------------------------------

export default {
  _props: {
    children: [
      {
        ...child,
        key: 1,
      },
      {
        ...child,
        key: 2,
      },
      {
        ...child,
        key: 3,
      },
    ],
    gap: '20',
    layout: '1/2',
  },
}
