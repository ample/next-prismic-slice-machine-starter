// ---------------------------------------------------------

const child = (
  <div>
    <h2>Lorem ipsum dolor sit amet</h2>
    <p>
      Malesuada fames ac turpis egestas maecenas. Purus sit amet volutpat
      consequat mauris nunc congue. Id venenatis a condimentum vitae sapien
      pellentesque. Adipiscing commodo elit at imperdiet dui accumsan sit amet
      nulla. In fermentum et sollicitudin ac orci phasellus egestas tellus
      rutrum. Bibendum est ultricies integer quis auctor elit. Sed viverra ipsum
      nunc aliquet bibendum enim facilisis. Maecenas volutpat blandit aliquam
      etiam erat. Ornare quam viverra orci sagittis eu volutpat odio. Donec enim
      diam vulputate ut pharetra.
    </p>
  </div>
)

// ---------------------------------------------------------

export default {
  _props: {
    children: [{ ...child, key: '1' }],
  },
  withBackgroundImage: {
    backgroundImage: {
      alt: 'Placeholder image',
      copyright: null,
      dimensions: { height: 500, width: 900 },
      url: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=900&h=500&fit=crop',
    },
    children: [{ ...child, key: '1' }],
  },
}
