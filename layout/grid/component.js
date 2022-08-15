// ---------------------------------------------------------

import classNames from 'classnames'
import PropTypes from 'prop-types'

// ---------------------------------------------------------

import {
  gap_0,
  gap_20,
  grid,
  layout_is_one_fourth,
  layout_is_one_half,
  layout_is_one_third,
} from './styles.module.scss'

// ---------------------------------------------------------

const gapOptions = {
  0: gap_0,
  20: gap_20,
}

const layoutOptions = {
  '1/2': layout_is_one_half,
  '1/3': layout_is_one_third,
  2: layout_is_one_half,
  3: layout_is_one_third,
  4: layout_is_one_fourth,
}

// ---------------------------------------------------------

const Grid = (properties) => {
  let { children, className, gap, layout } = properties

  // -------------------------------------------------------

  if (!layout) {
    layout = (children || []).length
  }

  // -------------------------------------------------------

  const classes = classNames(grid, {
    [className]: className,
    [gapOptions[gap]]: gapOptions[gap],
    [layoutOptions[layout]]: layoutOptions[layout],
  })

  // -------------------------------------------------------

  return <div className={classes}>{children}</div>
}

// ---------------------------------------------------------

Grid.propTypes = {
  /**
   * Specifies the children of the <Grid />.
   */
  children: PropTypes.node,

  /**
   * Specifies the space in between each child of the grid.
   */
  gap: PropTypes.oneOf(Object.keys(gapOptions)),

  /**
   * Specifies the width of each child in the grid on larger screens.
   */
  layout: PropTypes.oneOf(Object.keys(layoutOptions)),
}

Grid.defaultProps = {
  gap: '20',
}

export default Grid
