import { useRouter } from 'next/router.js';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ModalBaju from '../components/ModalBaju.js'
import ModalCelana from '../components/ModalCelana.js'
import ModalSepatu from '../components/ModalSepatu.js'
import MenusLayout from "./layout";

let lepas = require('../data/tas.json')

export default function outfit() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setLoading(true)
        fetch('/api/apiDipakai')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
    }, [])

    if (isLoading) return <div className='flex w-full h-full justify-center items-center'>Loading</div>
    if (!data) return console.log('failed to load data')

    let ob_data = JSON.parse(data)
    let baju = ob_data.dipakai.baju
    let celana = ob_data.dipakai.celana
    let sepatu = ob_data.dipakai.sepatu
    console.log(baju)


    const lepasbaju = (a) => {
        let baju = lepas.baju.default[0];
        document.getElementById('baju').innerHTML = '<img src="' + baju + '" alt="" style="height: 110%; bottom: -0.5rem/* -8px */; z-index: 40; position: absolute;">';
        document.getElementById('bajudipakai').innerHTML = '<img src="' + baju + '" alt="" />'
    }
    const lepascelana = (a) => {
        let celana = lepas.celana.default[0];
        document.getElementById('celana').innerHTML = '<img src="' + celana + '" alt="" style="height: 110%; bottom: -0.5rem/* -8px */; z-index: 40; position: absolute;">';
        document.getElementById('celanadipakai').innerHTML = '<img src="' + celana + '" alt="" />'
    }
    const lepassepatu = (a) => {
        let sepatu = lepas.sepatu.default[0];
        document.getElementById('sepatu').innerHTML = '<img src="' + sepatu + '" alt="" style="height: 100%; bottom: -0.5rem/* -8px */; z-index: 40; position: absolute;">';
        document.getElementById('sepatudipakai').innerHTML = '<img src="' + sepatu + '" alt="" />'
    }
    return (
        <MenusLayout>
            <div className='flex flex-col xl:flex-row flex-1 h-full w-full justify-center items-center overflow-hidden'>
                <div className='flex flex-col flex-1 justify-center items-center avatar w-full h-full'>
                    <div id='baju' className='relative flex justify-center items-end w-full h-[38%]'>
                        <div className='h-[100%] w-full z-40 absolute'>
                            <Image src={baju} alt="baju" layout='fill' objectFit='contain' />    
                        </div>
                    </div>
                    <div id='celana' className='relative flex justify-center w-full h-[29%]'>
                        <div className='h-[110%] w-full z-30 absolute -top-[0.75rem] '>
                            <Image src={celana} alt="celana" layout='fill' objectFit='contain' />
                        </div>
                    </div>
                    <div id='sepatu' className='relative flex justify-center w-full h-[33%]'>
                        <div className='h-[100%] w-full z-20 absolute-top-[0.75rem]'>
                            <Image src={sepatu} alt="sepatu" layout='fill' objectFit='contain' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-4 md:flex-col flex-none w-full md:w-[40%] justify-center items-center h-fit md:h-full p-2'>
                    <div className='flex flex-none flex-col w-20 h-20 bg-blue-200 rounded-lg overflow-hidden'>
                        <div id='bajudipakai' className='flex justify-center items-center flex-1 w-full-h-full'>
                            <img src={baju} alt="" className="h-10" />
                        </div>
                        <div className='flex flex-none h-[40%] w-full'>
                            <ModalBaju />
                            <button className='flex-1 bg-yellow-500 text-yellow-700 hover:bg-yellow-400 p-1 text-xs' onClick={event => lepasbaju(1)}>Lepas</button>
                        </div>
                    </div>
                    <div className='flex flex-none flex-col w-20 h-20 bg-blue-200 rounded-lg overflow-hidden'>
                        <div id='celanadipakai' className='flex justify-center items-center flex-1 w-full-h-full'>
                            <img src={celana} alt="" className="h-10" />
                        </div>
                        <div className='flex flex-none h-[40%] w-full'>
                            <ModalCelana />
                            <button className='flex-1 bg-yellow-500 text-yellow-700 hover:bg-yellow-400 p-1 text-xs' onClick={event => lepascelana(1)}>Lepas</button>
                        </div>
                    </div>
                    <div className='flex flex-none flex-col w-20 h-20 bg-blue-200 rounded-lg overflow-hidden'>
                        <div id='sepatudipakai' className='flex justify-center items-center flex-1 w-full-h-full'>
                            <img src={sepatu} alt="" className="h-10" />
                        </div>
                        <div className='flex flex-none h-[40%] w-full'>
                            <ModalSepatu />
                            <button className='flex-1 bg-yellow-500 text-yellow-700 hover:bg-yellow-400 p-1 text-xs' onClick={event => lepassepatu(1)}>Lepas</button>
                        </div>
                    </div>
                </div>
            </div>
        </MenusLayout>
    )
}