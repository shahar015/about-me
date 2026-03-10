import { useEffect, useRef } from 'react'

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      time += 0.002
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gridSize = 80
      const cols = Math.ceil(canvas.width / gridSize) + 1
      const rows = Math.ceil(canvas.height / gridSize) + 1

      // Subtle grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.018)'
      ctx.lineWidth = 0.5

      for (let i = 0; i <= cols; i++) {
        const x = i * gridSize
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let j = 0; j <= rows; j++) {
        const y = j * gridSize
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Pulsing intersection dots
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * gridSize
          const y = j * gridSize
          const pulse = Math.sin(time + i * 0.3 + j * 0.2) * 0.5 + 0.5
          const opacity = 0.015 + pulse * 0.035

          ctx.beginPath()
          ctx.arc(x, y, 1, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(0, 229, 255, ${opacity})`
          ctx.fill()
        }
      }

      // Slow scanning horizontal line
      const scanY = ((time * 40) % (canvas.height + 200)) - 100
      const gradient = ctx.createLinearGradient(0, scanY - 50, 0, scanY + 50)
      gradient.addColorStop(0, 'rgba(0, 229, 255, 0)')
      gradient.addColorStop(0.5, 'rgba(0, 229, 255, 0.03)')
      gradient.addColorStop(1, 'rgba(0, 229, 255, 0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, scanY - 50, canvas.width, 100)

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}
