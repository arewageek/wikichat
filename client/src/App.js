// import {  } from 'react-bootstrap-icons'
import axios from 'axios';
import cors from 'cors'
import './App.css';
import { Container } from './components/Container';
import { TextInput } from './components/TextInput';

import { useState, useEffect } from 'react'

function App() {
  
  const [responses, setResponses] = useState(['First Content'])
  const [prompt, setPrompt] = useState('')
  const [send, setSend] = useState(false)

  const doUpdate = (data) => {
    setPrompt(data)

    makeReq(data)
  }

  const makeReq = async (content) => {
    
    const baseUrl = `http://localhost:5000?prompt=${content}`

    axios.get(baseUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => {
      const result = JSON.stringify(res.data.text)
      setResponses(prev => [...prev, result.replace('?', '')])
    })
    
    
    // const response = await fetch(baseUrl,{
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    
    // console.log(baseUrl)
    // const data = await response.json()
  }
  
  return (
    <div className="w-full min-h-screen flex flex-col justify-end items-between bg-primary-100">

      <div className='w-full py-3 fixed top-0 text-center bg-[#bbb] text-[#222] font-bold text-sm'>
        Wiki Chat :: <span className='text-xs font-semibold'>Research Assistant</span>
      </div>

      <div className='flex flex-col items-baseline justify-end space-y-3 h-full px-5 py-3 overflow-auto text-secondary-200 text-xs italic'>
        {
          responses != '' && <>
            {
              responses.map((comment, id) => <div key={id} className="px-3 py-5 w-full bg-[#333] rounded-r-2xl rounded-tl-2xl `">
                  { comment }
                </div>)
            }
          </>
        }
      </div>

      <Container>
        <div className="w-full flex justify-center p-5">
          
            <TextInput updated={doUpdate} />
          
        </div>
      </Container>
      
    </div>
  );
}

export default App;
