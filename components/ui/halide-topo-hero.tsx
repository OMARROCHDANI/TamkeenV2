import React, { useEffect, useRef } from 'react';

interface HalideTopHeroProps {
  onOpenGallery?: () => void;
}

const HalideTopHero: React.FC<HalideTopHeroProps> = ({ onOpenGallery }) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Mouse Parallax Logic
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.pageX) / 25;
      const y = (window.innerHeight / 2 - e.pageY) / 25;

      // Rotate the 3D Canvas
      canvas.style.transform = `rotateX(${55 + y / 2}deg) rotateZ(${-25 + x / 2}deg)`;

      // Apply depth shift to layers
      layersRef.current.forEach((layer, index) => {
        if (!layer) return;
        const depth = (index + 1) * 15;
        const moveX = x * (index + 1) * 0.2;
        const moveY = y * (index + 1) * 0.2;
        layer.style.transform = `translateZ(${depth}px) translate(${moveX}px, ${moveY}px)`;
      });
    };

    // Entrance Animation
    canvas.style.opacity = '0';
    canvas.style.transform = 'rotateX(90deg) rotateZ(0deg) scale(0.8)';

    const timeout = setTimeout(() => {
      /* canvas.style.transition = 'all 2.5s cubic-bezier(0.16, 1, 0.3, 1)'; */
      // React 18 / strict mode safety: check properly
      if (canvas) {
        canvas.style.transition = 'all 2.5s cubic-bezier(0.16, 1, 0.3, 1)';
        canvas.style.opacity = '1';
        canvas.style.transform = 'rotateX(55deg) rotateZ(-25deg) scale(1)';
      }
    }, 300);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <style>{`
        :root {
          /* Tamkeen Palette Mapping */
          --bg-halide: #1C1917; /* Primary */
          --silver-halide: #FAFAF9; /* Background/White */
          --accent-halide: #CA8A04; /* CTA */
          --grain-opacity: 0.12;
        }

        .halide-body {
          background-color: var(--bg-halide);
          color: var(--silver-halide);
          /* Font Mapping */
          font-family: 'Montserrat', sans-serif;
          overflow: hidden;
          height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .halide-grain {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          z-index: 10;
          opacity: var(--grain-opacity);
        }

        .viewport {
          perspective: 2000px;
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
          position: absolute;
          top: 0; left: 0;
          z-index: 5;
        }

        .canvas-3d {
          position: relative;
          width: 800px; height: 500px;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .layer {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(250, 250, 249, 0.1); /* light border */
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease;
        }

        /* Update Images to match "Architecture/Nature" theme of Tamkeen */
        .layer-1 { background-image: url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200'); filter: grayscale(1) contrast(1.2) brightness(0.5); }
        .layer-2 { background-image: url('https://images.unsplash.com/photo-1518005020951-ecc8593a89a0?auto=format&fit=crop&q=80&w=1200'); filter: grayscale(1) contrast(1.1) brightness(0.7); opacity: 0.6; mix-blend-mode: screen; }
        .layer-3 { background-image: url('https://images.unsplash.com/photo-1518005020951-ecc8593a89a0?auto=format&fit=crop&q=80&w=1200'); filter: grayscale(1) contrast(1.3) brightness(0.8); opacity: 0.4; mix-blend-mode: overlay; }

        .contours {
          position: absolute;
          width: 200%; height: 200%;
          top: -50%; left: -50%;
          background-image: repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 40px, rgba(202, 138, 4, 0.1) 41px, transparent 42px);
          transform: translateZ(120px);
          pointer-events: none;
        }

        .interface-grid {
          position: absolute;
          inset: 0;
          padding: 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto 1fr auto;
          z-index: 20;
          pointer-events: none;
        }
        
        @media (min-width: 768px) {
            .interface-grid {
                padding: 4rem;
            }
        }

        .hero-title {
          grid-column: 1 / -1;
          align-self: center;
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 10vw, 9rem);
          line-height: 0.85;
          letter-spacing: -0.02em;
          mix-blend-mode: color-dodge;
          text-align: center;
        }

        .cta-button {
          pointer-events: auto;
          background: var(--silver-halide);
          color: var(--bg-halide);
          padding: 1rem 2rem;
          text-decoration: none;
          font-weight: 700;
          font-family: 'Montserrat', sans-serif;
          clip-path: polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%);
          transition: 0.3s;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.8rem;
          cursor: pointer;
          border: none;
          display: inline-block;
        }

        .cta-button:hover { background: var(--accent-halide); color: var(--silver-halide); transform: translateY(-5px); }

        .cta-button.secondary {
            background: rgba(250, 250, 249, 0.1);
            color: var(--silver-halide);
            backdrop-filter: blur(4px);
            clip-path: polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%);
        }
        
        .cta-button.secondary:hover {
            background: rgba(250, 250, 249, 0.2);
            color: var(--accent-halide);
            transform: translateY(-5px);
        }
      `}</style>

      <div className="halide-body">
        {/* SVG Filter for Grain */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>

        <div className="halide-grain" style={{ filter: 'url(#grain)' }}></div>

        <div className="interface-grid">
          {/* Removed duplicate navbar elements */}

          <div style={{ gridColumn: '1 / -1', gridRow: '2', alignSelf: 'center', textAlign: 'center', zIndex: 30 }}>
            <h1 className="hero-title" style={{ marginBottom: '1.5rem' }}>
              IHSAAN<br />
              <span style={{ fontFamily: 'Playfair Display', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent-halide)' }}>at</span> SCALE
            </h1>
            <p style={{
              fontFamily: 'Montserrat',
              fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
              fontWeight: 300,
              maxWidth: '600px',
              margin: '0 auto',
              color: '#d6d3d1', // stone-300
              lineHeight: 1.6
            }}>
              Crafting ethical digital experiences that honor your values without compromising on world-class aesthetics.
            </p>
          </div>

          <div style={{ gridColumn: '1 / -1', gridRow: '3', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#work" className="cta-button">EXPLORE WORK</a>

            {onOpenGallery && (
              <button onClick={onOpenGallery} className="cta-button secondary">
                VIEW 3D GALLERY
              </button>
            )}
          </div>
        </div>

        <div className="viewport">
          <div className="canvas-3d" ref={canvasRef}>
            <div className="layer layer-1" ref={(el) => (layersRef.current[0] = el)}></div>
            <div className="layer layer-2" ref={(el) => (layersRef.current[1] = el)}></div>
            <div className="layer layer-3" ref={(el) => (layersRef.current[2] = el)}></div>
            <div className="contours"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HalideTopHero;
