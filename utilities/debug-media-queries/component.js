// ---------------------------------------------------------

import classNames from 'classnames'
import { useState } from 'react'

// ---------------------------------------------------------

import { debug, debug_media_queries, is_showing } from './styles.module.scss'

// ---------------------------------------------------------

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
const { DEBUG_MEDIA_QUERIES } = publicRuntimeConfig

// ---------------------------------------------------------

const DebugMediaQueries = () => {
  const [isOpen, setOpen] = useState(false)

  // -------------------------------------------------------

  if (DEBUG_MEDIA_QUERIES !== 'true') return null

  // -------------------------------------------------------

  const classes = classNames(debug, isOpen, {
    [is_showing]: isOpen,
  })

  const handleClick = () => {
    setOpen(!isOpen)
  }

  return (
    <div aria-hidden="true" className={classes} onClick={handleClick}>
      <div className={debug_media_queries} />
    </div>
  )
}

export default DebugMediaQueries
