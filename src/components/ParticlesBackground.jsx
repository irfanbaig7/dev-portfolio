import React, { useEffect, useRef } from 'react'

const ParticlesBackground = () => {

  const canvasRef = useRef();

  useEffect(() => {

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d") // to draw somthing into canvas there is used getcontext

    // lets create an particles array
    let particles = [];
    const particlesCount = 50;
    const colors = ["rgba(255, 255, 255, 0.7)"]

    // define the particles actual size, speed etc
    // eslint-disable-next-line react-hooks/unsupported-syntax
    class Particle {
      constructor() {
        // our particle was actully comes from this to positions
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        // size
        this.radius = Math.random() * 2 + 1;

        // color
        this.color = colors[Math.floor(Math.random() * colors.length)]

        // speed
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;

      }

      // draw particle
      draw() {
        ctx.beginPath(); // which are start making new shap
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); // make it into circle shap
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      // particles movements updations
      update() {
        this.x += this.speedX;
        this.y += this.speedY;


        // paricles ka end nhi hoga wo ghumte rahenge
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0

        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0

        this.draw()
      }
    }

    // create upto canvas actual our particles & that was 50
    function createParticles() {
      particles = [];
      for (let i = 0; i < particlesCount; i++) {
        particles.push(new Particle())
      }
    }

    // canvas size should depends on our windows size
    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // jab bhi size re-size hoga particles re-create honge
      createParticles()
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    // continously work this particle animation like a loop
    let animationId;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update())
      animationId = requestAnimationFrame(animate)
    }
    animate();


    // cleanUp fun for avoiding memory leaks
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }

  }, [])

  return (
    <canvas ref={canvasRef} className='fixed top-0 w-full h-full pointer-events-none z-0'>

    </canvas>
  )
}

export default ParticlesBackground