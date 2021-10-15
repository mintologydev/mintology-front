/** @format */

import React, {useState, useEffect, useRef} from 'react'
import 'style/countdown.less'

// const Countdown: React.FC = props => {
type CountdownProps = {
  size?: string
  timeStamp?: number
}
// 默认时间戳11.1
const Countdown = ({size, timeStamp = 1635696000000}: CountdownProps) => {
  const intervalRef = useRef<any>(null)
  const now: any = Math.round(new Date().getTime())
  const end: any = timeStamp

  const [leftTime, setLeftTime] = useState(end - now)
  const [d, setDays] = useState<any>('')
  const [h, setHours] = useState<any>('')
  const [m, setMinutes] = useState<any>('')
  const [s, setSeconds] = useState<any>('')

  useEffect(() => {
    if (leftTime > 0) {
      intervalRef.current = setInterval(() => {
        const newNow: any = Math.round(new Date().getTime()) // 重新获取当前时间

        const newLeftTime = timeStamp - newNow
        setLeftTime(() => newLeftTime) //计算新的时间间隔数值

        const days =
          Math.floor(newLeftTime / 1000 / 60 / 60 / 24) < 10
            ? `0${Math.floor(newLeftTime / 1000 / 60 / 60 / 24)}`
            : Math.floor(newLeftTime / 1000 / 60 / 60 / 24)

        const hours =
          Math.floor((newLeftTime / 1000 / 60 / 60) % 24) < 10
            ? `0${Math.floor((newLeftTime / 1000 / 60 / 60) % 24)}`
            : Math.floor((newLeftTime / 1000 / 60 / 60) % 24)
        const minutes =
          Math.floor((newLeftTime / 1000 / 60) % 60) < 10
            ? `0${Math.floor((newLeftTime / 1000 / 60) % 60)}`
            : Math.floor((newLeftTime / 1000 / 60) % 60)
        const seconds =
          Math.floor((newLeftTime / 1000) % 60) < 10
            ? `0${Math.floor((newLeftTime / 1000) % 60)}`
            : Math.floor((newLeftTime / 1000) % 60)

        setDays(() => days) // 函数写法 设置天
        setHours(() => hours) //函数写法 设置小时
        setMinutes(() => minutes) //函数写法 设置分钟
        setSeconds(() => seconds) //函数写法保证值在setInterval里更新，避免useEffect的bug
      }, 1000)
    } else {
      setLeftTime(0)
      setDays(0)
      setHours(0)
      setMinutes(0)
      setSeconds(0)
      clearInterval(intervalRef.current)
    }
    return () => clearInterval(intervalRef.current)
  }, []) //不传依赖

  return (
    <div className={size ? `countdown-block ${size}` : 'countdown-block'}>
      <div className="tiem-block">
        <div className="num">
          <div></div>
          <div></div>
          <span>{d}</span>
        </div>
        <p>Days</p>
      </div>
      <div className="gap">
        <div></div>
        <p></p>
      </div>
      <div className="tiem-block">
        <div className="num">
          <div></div>
          <div></div>
          <span>{h}</span>
        </div>
        <p>Hours</p>
      </div>
      <div className="gap">
        <div></div>
        <p></p>
      </div>
      <div className="tiem-block">
        <div className="num">
          <div></div>
          <div></div>
          <span>{m}</span>
        </div>
        <p>Mins</p>
      </div>
      <div className="gap">
        <div></div>
        <p></p>
      </div>
      <div className="tiem-block">
        <div className="num">
          <div></div>
          <div></div>
          <span>{s}</span>
        </div>
        <p>Secs</p>
      </div>
    </div>
  )
}

export default Countdown
