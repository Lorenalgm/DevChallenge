/* eslint-disable */
import * as nextImage from 'next/image'

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    const { objectFit, placeholder, blurDataURL, ...rest} = props
    return <img {...rest} />
  }
})
