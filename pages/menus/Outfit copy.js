import ModalBaju from '../components/ModalBaju.js'
import ModalCelana from '../components/ModalCelana.js'
import ModalSepatu from '../components/ModalSepatu.js'

let lepas = require('../data/tas.json')
let lagipakai = require('../data/dipakai.json')

export default function outfit() {
    
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
        <div className='flex flex-col md:flex-row flex-1 h-full w-full justify-center items-center overflow-hidden'>
            <div className='flex flex-col flex-1 justify-center items-center avatar w-full h-full'>
                <div className='flex justify-center w-full h-[17%]'></div>
                <div id='baju' className='relative flex justify-center items-end w-full h-[20%] pr-1'>
                    {/* <img src={baju} alt="" className='h-[110%] -bottom-2 z-40 absolute' /> */}
                </div>
                <div id='celana' className='relative flex justify-center w-full h-[32%]'>
                    {/* <img src={celana} alt="" className='h-[110%] z-20 absolute' /> */}
                </div>
                <div id='sepatu' className='relative flex justify-center w-full h-[36%]'>
                    {/* <img src={sepatu} alt="" className='h-[100%] z-0 absolute' /> */}
                </div>
            </div>
            <div className='flex flex-row gap-4 md:flex-col flex-none w-full md:w-[40%] justify-center items-center h-fit md:h-full p-2'>
                <div className='flex flex-none flex-col w-20 h-20 bg-blue-200 rounded-lg overflow-hidden'>
                    <div id='bajudipakai' className='flex justify-center items-center flex-1 p-2 w-full-h-full'></div>
                    <div className='flex w-full'>
                        <ModalBaju />
                        <button className='flex-1 bg-yellow-500 text-yellow-700 hover:bg-yellow-400 p-1 text-xs' onClick={event => lepasbaju(1)}>Lepas</button>
                    </div>
                </div>
                <div className='flex flex-none flex-col w-20 h-20 bg-blue-200 rounded-lg overflow-hidden'>
                    <div id='celanadipakai' className='flex justify-center items-center flex-1 w-full-h-full'></div>
                    <div className='flex w-full'>
                        <ModalCelana />
                        <button className='flex-1 bg-yellow-500 text-yellow-700 hover:bg-yellow-400 p-1 text-xs' onClick={event => lepascelana(1)}>Lepas</button>
                    </div>
                </div>
                <div className='flex flex-none flex-col w-20 h-20 bg-blue-200 rounded-lg overflow-hidden'>
                    <div id='sepatudipakai' className='flex justify-center items-center flex-1 w-full-h-full'></div>
                    <div className='flex w-full'>
                        <ModalSepatu />
                        <button className='flex-1 bg-yellow-500 text-yellow-700 hover:bg-yellow-400 p-1 text-xs' onClick={event => lepassepatu(1)}>Lepas</button>
                    </div>
                </div>
            </div>
        </div>
    )
}