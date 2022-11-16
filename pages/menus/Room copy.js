import { useRef, useEffect } from "react";
import MenusLayout from "./layout";

const Room = (props) => {
    let kanan, a

    const canvasRef = useRef(null)

    useEffect(() => {
        const img = new Image()
        img.src = '/avatar/sprite.png'

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.fillStyle = '#ff0000'
        let w = context.canvas.width
        let h = context.canvas.height
        context.fillRect(0, 0, w*10, h*10)

        img.onload = () => {
            context.imageSmoothQuality = 'high'
            context.drawImage(img, 0, 0, img.width, img.height)
            window.requestAnimationFrame(gameLoop);
        }
    }, [])


    function leftArrowPressed() {
        console.log('left pressed')

        let sprite = document.getElementById('sprite')
        sprite.style.left = '40 px'
    }

    function RightArrowPressed() {
        console.log('right pressed')

        a = 10
        kanan = 'right-' + a
        console.log(kanan)
    }

    useEffect(() => {
        document.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowLeft') {
                leftArrowPressed()
            } else if (e.key === 'ArrowRight') {
                RightArrowPressed()
            }
        })
    }, [])

    return (
        <canvas ref={canvasRef} {...props} width={4932} height={7452} className='w-full h-full' />
    );
}

export default Room