import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute'
    ,
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

export default function ModalCelana() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setLoading(false)
    fetch('/api/apiCelana')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return console.log('loading data...')
  if (!data) return console.log('failed to load data')

  let ob_data = JSON.parse(data)
  let dCelanaR = ob_data.tas.celana.r
  let dCelanaSR = ob_data.tas.celana.sr
  let dCelanaSSR = ob_data.tas.celana.ssr
  let subtitle, isitas = "", setCelana

  function openModal() {
    setIsOpen(true);
  }

  function set(a) {
    setCelana = isitas[a]
    console.log(setCelana)
    document.getElementById('setCelana').value = setCelana
  }

  function list() {
    isitas = dCelanaSSR.concat(dCelanaSR, dCelanaR)
    console.log(isitas)

    let divCelana = document.getElementById('isiCelana');
    let a = 0;
    for (let i of isitas) {
      divCelana.innerHTML += '<a href="#" id="celana' + a + '" class="flex rounded-md p-1 h-10 hover:bg-gray-500 focus:outline-none focus:bg-gray-500 focus:ring-1 focus:ring-gray-700"><img src="' + i + '" alt=""></a>';
      a++
    }

    for (let i = 0; i < divCelana.childElementCount; i++) {
      let id = divCelana.children[i].id
      document.getElementById(id).onclick = (function () {
        return function () {
          set(i)
        }
      })()
    }
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#000';
    list();
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    // Get data from the form.
    const data = {
      first: event.target.setCelana.value
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/apiCelana'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result.data.first}`)
    console.log('sukses')
    setIsOpen(false)
    event.preventDefault()

  }

  return (
    <div className='flex-1'>
      <button onClick={openModal} className='bg-white w-full h-full text-blue-700 hover:bg-blue-400 p-1 text-xs'>Ganti</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
        overlayClassName='z-50 bg-transparent'
        className='flex flex-col z-50 select-none bg-white items-start p-4 rounded-lg gap-4'
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='pb-1'>Celana yang kamu punya nih :</h2>
        <div id='isiCelana' className='flex bg-slate-400 w-full gap-1 p-2 rounded-lg overflow-x-scroll'></div>
        <div className='flex gap-2 justify-end w-full'>
          <form onSubmit={handleSubmit}>
            <input type="text" id='setCelana' name="setCelana" value={setCelana} hidden={true} />
            <button type='submit' className='p-2 bg-green-200 text-green-600 rounded-md'>Pakai</button>
            <button type='button' onClick={closeModal} className='p-2 bg-red-200 text-red-600 rounded-md'>Batal</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

