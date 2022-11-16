import { useRouter } from "next/router";
import { useRef, useEffect } from "react";
import RoomLayout from "./roomlayout";

const Room = (props) => {
    let kanan, a, x = 2000, y = 3000
    let router = useRouter()

    const canvasRef = useRef(null)

    useEffect(() => {
        const img = new Image()
        img.src = '/avatar/sprite-left.png'

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.fillStyle = '#ff000000'
        let w = context.canvas.width
        let h = context.canvas.height
        context.fillRect(0, 0, w * 10, h * 10)

        img.onload = () => {
            context.imageSmoothQuality = 'high'
            context.drawImage(img, x, y, img.width, img.height)
        }

        document.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowLeft') {
                if (x <= 200) {
                    x += 0
                } else {
                    x += -30
                }
                img.src = '/avatar/sprite-left.png'
            } else if (e.key === 'ArrowRight') {
                if (x >= 3900) {
                    x += 0
                } else {
                    x += 30
                }
                img.src = '/avatar/sprite-right.png'
            } else if (e.key === 'ArrowUp') {
                if (y <= 200) {
                    y += 0
                } else {
                    y += -30
                }
            } else if (e.key === 'ArrowDown') {
                if (y >= 5900) {
                    y += 0
                } else {
                    y += 30
                }
            }
        })

        function refresh() {
            context.clearRect(0, 0, w * 10, h * 10);
            context.fillRect(0, 0, w * 10, h * 10);
            context.drawImage(img, x, y, img.width, img.height)
            requestAnimationFrame(refresh)
        }

        requestAnimationFrame(refresh)


    }, [])

    return (
        <RoomLayout>
            <canvas ref={canvasRef} {...props} width={4932} height={7452} className='w-full h-full' />
            <a href='/menus/Outfit'>
                <button className="absolute bottom-10 left-10 p-2 rounded-full bg-white text-red-500 font-bold text-2xl transform hover:scale-110 ease-in-out">{'< '}Back</button>
            </a>
        </RoomLayout>
    );
}

export default Room