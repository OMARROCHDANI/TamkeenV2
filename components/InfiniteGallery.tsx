import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { X } from 'lucide-react';
import { CASE_STUDIES } from '../constants'; // Import real data

interface InfiniteGalleryProps {
    onClose: () => void;
}

const InfiniteGallery: React.FC<InfiniteGalleryProps> = ({ onClose }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeSlide, setActiveSlide] = useState(0);

    // Updated CSS for Dark Mode (Halide Theme)
    const styles = `
        .ig-body {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden !important;
            background-color: #1C1917; /* Dark Stone (Primary) */
            font-family: 'Montserrat', sans-serif;
            color: #FAFAF9; /* Off-White */
            z-index: 200;
        }

        #canvas-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        #ui-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
            pointer-events: none;
        }

        .logo {
            position: absolute;
            top: 40px;
            left: 50px;
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            letter-spacing: 2px;
            font-size: 1rem;
            text-transform: uppercase;
            z-index: 10;
            color: #CA8A04; /* Gold Accent */
            mix-blend-mode: difference;
        }

        .slide-content {
            position: absolute;
            top: 25%;
            left: 8%;
            width: 30%;
            max-width: 450px;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease, transform 0.8s ease-out;
            pointer-events: auto; 
        }

        .slide-content.active {
            opacity: 1;
            transform: translateY(0);
        }

        .ig-h1 {
            font-family: 'Playfair Display', serif;
            font-weight: 400;
            font-style: italic;
            font-size: 4rem;
            margin: 0 0 1.5rem 0;
            line-height: 1;
            color: #FAFAF9;
        }

        .catalogue-number {
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 3px;
            color: #CA8A04; /* Gold Accent */
            margin-bottom: 1.5rem;
            display: inline-block;
            border-bottom: 1px solid rgba(202, 138, 4, 0.3);
            padding-bottom: 5px;
        }

        .description {
            font-size: 1.05rem;
            font-weight: 300;
            line-height: 1.8;
            color: #d6d3d1; /* Light Gray/Stone-300 */
            margin-bottom: 3rem;
            text-align: justify;
        }

        .meta-grid {
            display: grid;
            grid-template-columns: 80px 1fr;
            row-gap: 0.8rem;
            border-top: 1px solid rgba(250, 250, 249, 0.1);
            padding-top: 1.5rem;
        }

        .meta-label {
            font-size: 0.65rem;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: #a8a29e; /* Stone-400 */
            align-self: center;
        }

        .meta-value {
            font-family: 'Playfair Display', serif;
            font-size: 1.1rem;
            font-style: italic;
            color: #FAFAF9;
        }
        
        .scroll-hint {
            position: fixed;
            bottom: 40px;
            left: 50px;
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #78716c; /* Stone-500 */
        }
    `;

    useEffect(() => {
        if (!containerRef.current) return;

        // Body Scroll Lock - CRITICAL
        const originalOverflow = document.body.style.overflow;
        const originalHtmlOverflow = document.documentElement.style.overflow;
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        // THREE.JS LOGIC
        const CONFIG = {
            slideCount: CASE_STUDIES.length, // Dynamic slide count
            spacingX: 45,
            pWidth: 14,
            pHeight: 18,
            camZ: 30,
            wallAngleY: -0.25,
            snapDelay: 200,
            lerpSpeed: 0.06
        };

        const totalGalleryWidth = CONFIG.slideCount * CONFIG.spacingX;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1C1917); // Dark Stone Background
        scene.fog = new THREE.Fog(0x1C1917, 10, 110); // Match fog to background

        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, CONFIG.camZ);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Append to specific container
        const canvasContainer = containerRef.current.querySelector('#canvas-container');
        if (canvasContainer) canvasContainer.appendChild(renderer.domElement);

        const ambient = new THREE.AmbientLight(0xffffff, 0.4); // Slightly dimmed for dark mode
        scene.add(ambient);

        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8); // More directional drama
        dirLight.position.set(10, 20, 10);
        scene.add(dirLight);

        const galleryGroup = new THREE.Group();
        scene.add(galleryGroup);

        const textureLoader = new THREE.TextureLoader();
        const planeGeo = new THREE.PlaneGeometry(CONFIG.pWidth, CONFIG.pHeight);

        // Load images from CASE_STUDIES
        const images = CASE_STUDIES.map(study => study.image);

        const paintingGroups: THREE.Group[] = [];

        for (let i = 0; i < CONFIG.slideCount; i++) {
            const group = new THREE.Group();
            group.position.set(i * CONFIG.spacingX, 0, 0);

            // Added color fallback
            const mat = new THREE.MeshBasicMaterial({
                map: textureLoader.load(images[i]),
                color: 0xffffff
            });
            const mesh = new THREE.Mesh(planeGeo, mat);

            // Darker, subtler outlines for dark mode
            const edges = new THREE.EdgesGeometry(planeGeo);
            const outline = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x44403c })); // Stone-700

            const shadowGeo = new THREE.PlaneGeometry(CONFIG.pWidth, CONFIG.pHeight);
            const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.4 }); // Stronger shadow
            const shadow = new THREE.Mesh(shadowGeo, shadowMat);
            shadow.position.set(0.8, -0.8, -0.5);

            const lineZ = -1;
            const lineLen = CONFIG.spacingX;
            const lineGeo = new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(-lineLen / 2, 14, lineZ), new THREE.Vector3(lineLen / 2, 14, lineZ),
                new THREE.Vector3(-lineLen / 2, -14, lineZ), new THREE.Vector3(lineLen / 2, -14, lineZ)
            ]);
            // Fainter guide lines
            const lines = new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({ color: 0x292524 })); // Stone-800

            group.add(shadow);
            group.add(mesh);
            group.add(outline);
            group.add(lines);

            galleryGroup.add(group);
            paintingGroups.push(group);
        }

        galleryGroup.rotation.y = CONFIG.wallAngleY;
        galleryGroup.position.x = 8;

        let currentScroll = 0;
        let targetScroll = 0;
        let snapTimer: ReturnType<typeof setTimeout> | null = null;
        let mouse = { x: 0, y: 0 };
        let requestID: number;

        function snapToNearest() {
            const index = Math.round(targetScroll / CONFIG.spacingX);
            targetScroll = index * CONFIG.spacingX;
        }

        const handleWheel = (e: WheelEvent) => {
            // Prevent default scrolling of the page
            e.preventDefault();
            targetScroll += e.deltaY * 0.1;
            if (snapTimer) clearTimeout(snapTimer);
            snapTimer = setTimeout(snapToNearest, CONFIG.snapDelay);
        };

        let touchStart = 0;
        let isDragging = false;

        const handleTouchStart = (e: TouchEvent) => {
            // Prevent default scrolling only if we are inside the gallery interaction area if needed, 
            // but for full screen overlay, preventing default is correct.
            /* e.preventDefault(); */ // Setup passive listeners where possible, but here we need to block scroll.
            touchStart = e.touches[0].clientX;
            isDragging = true;
            if (snapTimer) clearTimeout(snapTimer);
        };

        const handleTouchMove = (e: TouchEvent) => {
            // Block native scroll
            if (!isDragging) return;
            // e.preventDefault(); // Handled by passive: false in addEventListener
            const diff = touchStart - e.touches[0].clientX;
            targetScroll += diff * 0.6;
            touchStart = e.touches[0].clientX;
            if (snapTimer) clearTimeout(snapTimer);
        };

        const handleTouchEnd = () => {
            isDragging = false;
            snapToNearest();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };

        function updateUI(scrollX: number) {
            const rawIndex = Math.round(scrollX / CONFIG.spacingX);
            const safeIndex = ((rawIndex % CONFIG.slideCount) + CONFIG.slideCount) % CONFIG.slideCount;
            // Using React state to drive UI instead of direct DOM manipulation for safety
            setActiveSlide(safeIndex);
        }

        function animate() {
            requestID = requestAnimationFrame(animate);
            currentScroll += (targetScroll - currentScroll) * CONFIG.lerpSpeed;
            const xMove = currentScroll * Math.cos(CONFIG.wallAngleY);
            const zMove = currentScroll * Math.sin(CONFIG.wallAngleY);
            camera.position.x = xMove;
            camera.position.z = CONFIG.camZ - zMove;
            paintingGroups.forEach((group, i) => {
                const originalX = i * CONFIG.spacingX;
                const distFromCam = currentScroll - originalX;
                const shift = Math.round(distFromCam / totalGalleryWidth) * totalGalleryWidth;
                group.position.x = originalX + shift;
            });
            camera.rotation.x = mouse.y * 0.05;
            camera.rotation.y = -mouse.x * 0.05;
            updateUI(currentScroll);
            renderer.render(scene, camera);
        }

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchstart', handleTouchStart, { passive: false }); // Chrome requires passive false to preventDefault
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleTouchEnd);

        animate();

        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';

            window.removeEventListener('resize', handleResize);
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);

            cancelAnimationFrame(requestID);
            if (canvasContainer) canvasContainer.removeChild(renderer.domElement);
            planeGeo.dispose();
        };
    }, []);

    return (
        <div className="ig-body" ref={containerRef}>
            <style dangerouslySetInnerHTML={{ __html: styles }} />

            <div className="logo">TAMKEEN ARCHIVES</div>

            <div id="canvas-container"></div>

            <div id="ui-layer">
                {CASE_STUDIES.map((study, index) => (
                    <div
                        key={study.id}
                        className={`slide-content ${activeSlide === index ? 'active' : ''}`}
                        id={`slide-${index}`}
                    >
                        <span className="catalogue-number">0{index + 1} / Case Study</span>
                        <h1 className="ig-h1" dangerouslySetInnerHTML={{ __html: study.title.replace(' ', '<br/>') }} />
                        <div className="description">
                            {study.description}
                        </div>
                        <div className="meta-grid">
                            <span className="meta-label">Category</span> <span className="meta-value">{study.category}</span>
                            <span className="meta-label">Year</span> <span className="meta-value">2024</span>
                            <span className="meta-label">Client</span> <span className="meta-value">{study.title}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="scroll-hint">Scroll to explore</div>

            <button
                onClick={onClose}
                style={{
                    position: 'fixed',
                    top: '40px',
                    right: '50px',
                    zIndex: 100,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                }}
            >
                <X size={32} color="#FAFAF9" />
            </button>

        </div>
    );
};

export default InfiniteGallery;
