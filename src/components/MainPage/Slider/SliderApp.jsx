import { useEffect, useRef, useState } from 'react'
import { sliderCards } from '../../../assets/sliderData'
import SliderCard from './SliderCard'
import '../../ComponentsCss/SliderStyle.css'

export default function AutoScrollSlider() {
  const [offset, setOffset] = useState(0)
  const trackRef = useRef(null)
  const CARD_WIDTH = 300 + 20
  const cardsCount = sliderCards.length
  const totalWidth = CARD_WIDTH * cardsCount

  useEffect(() => {
    let animationFrameId
    const step = () => {
      setOffset(prev => {
        let next = prev + 0.5
        if (next >= totalWidth) {
          return 0
        }
        return next
      })
      animationFrameId = requestAnimationFrame(step)
    }
    animationFrameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrameId)
  }, [totalWidth])

  return (
    <div className="slider-wrapper">
      <div
        className="slider-track"
        ref={trackRef}
        style={{ transform: `translateX(-${offset}px)` }}
      >
        {[...sliderCards, ...sliderCards].map((card, index) => (
          <div className="slide" key={index}>
            <SliderCard {...card} />
          </div>
        ))}
      </div>
    </div>
  )
}
