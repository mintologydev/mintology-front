/** @format */

import React from 'react'
// import {Typography} from 'antd'

// const {Text} = Typography

interface Props {
  toCopy: string
}

const CopyToClipboard: React.FC<Props> = ({toCopy, children, ...props}) => {
  // const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false)

  function copy(value: string) {
    const aux = document.createElement('input')
    // aux.setAttribute("value", toCopy);
    aux.setAttribute('value', value)
    document.body.appendChild(aux)
    aux.select()
    document.execCommand('copy')
    document.body.removeChild(aux)
    // setIsTooltipDisplayed(true)
    // setTimeout(() => {
    //   setIsTooltipDisplayed(false)
    // }, 1000)
  }
  return (
    <div
      onClick={
        () => copy(toCopy)
        // {
        // if (navigator.clipboard) {
        //   navigator.clipboard.writeText(toCopy);
        //   setIsTooltipDisplayed(true);
        //   setTimeout(() => {
        //     setIsTooltipDisplayed(false);
        //   }, 1000);
        // }
        // }
      }
      {...props}>
      {/* <Tooltip isTooltipDisplayed={isTooltipDisplayed}>Copied</Tooltip> */}
      {children}
    </div>
  )
}

export default CopyToClipboard
