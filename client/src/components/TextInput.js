import React, { useState } from 'react'
import { SendCheckFill, Telegram } from 'react-bootstrap-icons'

export const TextInput = (props) => {

    const [prompt, setPrompt] = useState('')
    
    // props.updated

    const forwardPrompt = () => {
        console.log('yes')
        // props.updated(prompt)
    }
    
    return (
        <form  method="get" className="w-full flex p-3 rounded-md ">
            <input value={prompt} onChange={e => {setPrompt(() => e.target.value);}} type="text" placeholder="Type your questions here ..." className="w-full py-4 px-3 bg-transparent bg-[#ccc] border-input-300 shadow-lg rounded-l-lg focus:border-accent-100 hover:border-accent-100" />
            <button onClick={() => props.updated(prompt)} type="button" className="w-auto py-4 bg-transparent border-2 border-[#bbb] shadow-lg text-xl font-bold px-6 bg-[#333] text-[#bbb] rounded-r-lg hover:bg-input-200 hover:text-primary-100 hover:border-input-200 transition">
                <SendCheckFill  />
            </button>
        </form>
    )
}