// ---------------------------------------------------------

import Button from '@components/button'
import Card from '@slices/Card'
import Layout from '@layout/index'

// ---------------------------------------------------------

import fixtures from '@slices/Card/fixtures'

// ---------------------------------------------------------

const StaticPage = () => (
  <Layout>
    <h1>Heading</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
      pharetra fermentum. Phasellus pulvinar luctus laoreet. Donec vehicula
      turpis vitae mi luctus mattis. Donec tristique augue at tempor posuere.
      Aliquam imperdiet eleifend dapibus. Ut eget justo lorem. Vivamus quis
      aliquet enim. In hac habitasse platea dictumst. Sed vulputate elit non
      elementum condimentum. Pellentesque nec risus quis ex iaculis blandit.
      Aliquam ultricies turpis risus, ornare venenatis dui congue sed. Curabitur
      at tortor congue, vestibulum dui a, bibendum ipsum.
    </p>
    <p>
      Fusce sem urna, convallis ut risus et, commodo pretium nulla. Duis cursus
      auctor venenatis. Orci varius natoque penatibus et magnis dis parturient
      montes, nascetur ridiculus mus. Aliquam sed fringilla felis, sed tristique
      diam. Praesent consequat rutrum mauris, aliquet hendrerit mi hendrerit ut.
      Duis erat tellus, varius vitae condimentum non, malesuada nec velit. Sed
      in molestie ex. Integer imperdiet elit eget elit sodales, eu iaculis orci
      dictum. Ut placerat, lectus in posuere tristique, urna ante blandit
      tortor, eu semper ipsum arcu ac felis. Phasellus posuere purus eu mi
      congue convallis. Vestibulum mi magna, vulputate vel velit a, imperdiet
      egestas enim. Morbi porttitor eros nec lectus dictum ullamcorper.
    </p>
    <p>
      Nunc sit amet ultricies ligula. Class aptent taciti sociosqu ad litora
      torquent per conubia nostra, per inceptos himenaeos. Ut tempor purus et
      quam venenatis, ac bibendum leo ornare. Suspendisse condimentum, metus et
      aliquet egestas, enim diam molestie mi, nec tincidunt metus ipsum eget
      est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque
      in ante nec lacus laoreet malesuada. Vivamus rutrum dui id tortor
      scelerisque pharetra et sed tortor. In hac habitasse platea dictumst.
      Etiam eget nibh tortor. Pellentesque euismod dui lorem, quis fermentum
      lacus finibus a. Suspendisse potenti. Nulla nec fringilla ex.
    </p>
    <p>
      <Button url="/">Homepage</Button>{' '}
      <Button url="/flexible">Flexible Page</Button>{' '}
      <Button url="/static">Static page</Button>{' '}
      <Button url="/404/">404</Button>
    </p>

    <Card {...fixtures._props} />
  </Layout>
)

// ---------------------------------------------------------

export default StaticPage
