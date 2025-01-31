
import { useState, useRef, useEffect } from "react"

interface ScrollingImageBoxProps {
  src: string
  alt: string


}

export default function ScrollingImageBox({ src, alt }: ScrollingImageBoxProps) {
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const image = imageRef.current

    if (!container || !image) return

    const scrollHeight = image.offsetHeight - container.offsetHeight
    const scrollDuration = scrollHeight * 10 // Adjust this value to change scroll speed

    if (isHovering) {
      image.style.transition = `transform ${scrollDuration}ms linear`
      image.style.transform = `translateY(-${scrollHeight}px)`
    } else {
      image.style.transition = "transform 0.5s ease-out"
      image.style.transform = "translateY(0)"
    }
  }, [isHovering])

  return (
    <div
      ref={containerRef}
      className="relative h-64 overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div ref={imageRef} className="absolute top-0 left-0 w-full">
        <img
          src={src}
          alt={alt}
         className="rounded-lg shadow-2xl w-full object-cover"
    
        />
      </div>
    </div>
  )
}

