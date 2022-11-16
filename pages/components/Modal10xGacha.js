import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function GachaTen() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false)
  const [sumGacha, setSumGacha] = useState(null)
  let subtitle

  useEffect(() => {
    setLoading(true)
    fetch('/api/apiGacha')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return console.log('loading data...')
  if (!data) return console.log('failed to load data')

  let ob_data = JSON.parse(data)
  let d_baju = ob_data.baju
  let zonk = ob_data.zonk

  const R = 9000, SR = 900, SSR = 100;
  const range = R + SR + SSR;
  const grantrange = SR + SSR;

  let poolpull = [1];
  let tenpull = [];

  function openModal1() {
    setIsOpen(true);
    setSumGacha(1)
  }

  function openModal10() {
    setIsOpen(true);
    setSumGacha(10)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    const vid = document.getElementById('video')
    vid.addEventListener('ended', function () {
      vid.style.display = 'none'
      pull(sumGacha)
    })

  }

  function closeModal() {
    setIsOpen(false);
  }

  let bajussr = d_baju.ssr
  let bajusr = d_baju.sr
  let bajur = d_baju.r
  let ssrleng = bajussr.length
  let srleng = bajusr.length
  let rleng = bajur.length
  let gotssr = Math.floor(Math.random() * parseFloat(ssrleng))
  let gotsr = Math.floor(Math.random() * parseFloat(srleng))
  let gotr = Math.floor(Math.random() * parseFloat(rleng))

  function pull(a) {
    for (let i = 1; i <= a; i++) {
      if (poolpull.length % 10 === 0) {
        if (poolpull.length % 80 === 0) {
          poolpull.push(bajussr[gotssr])
          tenpull.push(bajussr[gotssr])
        } else {
          let pickpull = Math.floor(Math.random() * parseFloat(grantrange));
          if (SSR >= pickpull) {
            poolpull.push(bajussr[gotssr])
            tenpull.push(bajussr[gotssr])
          } else {
            poolpull.push(bajusr[gotsr])
            tenpull.push(bajusr[gotsr])
          }
        }

      } else {
        let pickpull = Math.floor(Math.random() * parseFloat(range));
        if (SSR >= pickpull) {
          poolpull.push(bajussr[gotssr])
          tenpull.push(bajussr[gotssr])
        } else if (SR >= pickpull) {
          poolpull.push(bajusr[gotsr])
          tenpull.push(bajusr[gotsr])
        } else {
          poolpull.push(bajur[gotr])
          tenpull.push(bajur[gotr])
        }

      }
    }
    listGacha(tenpull)
  }

  const listGacha = (tenpull) => {
    const divDapat = document.getElementById('diDapat')
    let a = 0;
    for (let i of tenpull) {
      divDapat.innerHTML += '<img src="' + i.icon + '" class="bg-gray-300 w-24 h-24" alt="' + i.icon + '" />'
      a++
    }
  }



  return (
    <div className='flex flex-1 h-full gap-4'>
      <button onClick={event => openModal1(1)} type="button" className="rounded-full flex-1 h-full bg-gradient-to-br from-green-300 via-teal-400 to-emerald-500 text-green-700 hover:scale-110 transform ease-in-out focus:outline-none hover:ring hover:ring-white hover:text-white">1x</button>
      <button onClick={openModal10} type="button" className="rounded-full flex-1 h-full bg-gradient-to-br from-violet-300 via-purple-400 to-fuchsia-500 text-purple-700 hover:scale-110 transform ease-in-out focus:outline-none hover:ring hover:ring-white hover:text-white">10x</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        ariaHideApp={false}
        contentLabel="Example Modal"
        parentSelector={() => document.querySelector('#mainlayout')}
        overlayClassName='flex bg-gradient-to-b from-cyan-500 via-blue-700 to-blue-900 absolute inset-0 z-[9999] bg-red-500 w-full h-full'
        className='flex absolute flex-col inset-0 flex-1 z-50 select-none bg-hero-patterns items-start p-4 gap-4'
      >
        <video id='video' className='flex absolute z-[9990] bg-black left-0 top-0 h-auto w-[140%]' autoPlay muted priority>
          <source src="/video/gacha.mp4" type="video/mp4" />
        </video>
        <div id='diDapat' className='flex flex-wrap w-full h-full justify-center items-center gap-1 p-4 overflow-y-auto'></div>
        <div className='flex gap-2 justify-end w-full'>
          <button type='button' onClick={closeModal} className='animate-ping p-2 text-white text-md font-bold'>OK{' >'}</button>
        </div>
      </Modal>
    </div>
  );
}

