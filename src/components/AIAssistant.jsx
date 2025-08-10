// -------------------- src/components/AIAssistant.jsx --------------------
import React, {useState, useRef, useEffect} from 'react'

export default function AIAssistant({ apiUrl, apiKey }){
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{from:'bot', text:'Hi — ask me anything about Sadiq: projects, skills, availability.'}])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const boxRef = useRef(null)

  useEffect(()=>{ if(open) boxRef.current?.scrollTo({top: boxRef.current.scrollHeight, behavior:'smooth'}) },[messages, open])

  async function send(){
    if(!input.trim()) return
    const user = {from:'user', text:input}
    setMessages(m=> [...m, user])
    setInput('')
    setLoading(true)

    try{
      const res = await fetch(apiUrl, {
        method:'POST',
        headers: {
          'Content-Type':'application/json',
          ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {})
        },
        body: JSON.stringify({ prompt: `User asked: ${user.text}. Answer as assistant who knows Sadiq Ahmad (frontend dev). Be concise.`, max_tokens:300 })
      })
      if(!res.ok) throw new Error('API')
      const data = await res.json()
      const reply = data.reply || data.answer || (data.choices && data.choices[0] && data.choices[0].text) || JSON.stringify(data)
      setMessages(m=> [...m, {from:'bot', text: reply}])
    }catch(e){
      setMessages(m=> [...m, {from:'bot', text:'Sorry — something went wrong connecting to the AI.'}])
    }finally{ setLoading(false) }
  }

  return (
    <>
      <div className="fixed right-6 bottom-6 z-50">
        <button onClick={()=> setOpen(true)} className="w-14 h-14 rounded-full bg-indigo-600 text-white shadow-lg">AI</button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={()=> setOpen(false)}></div>
          <div className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-4 flex flex-col">
            <div className="flex items-center justify-between">
              <div className="font-semibold">Ask about Sadiq</div>
              <button onClick={()=> setOpen(false)} className="text-sm opacity-70">Close</button>
            </div>

            <div ref={boxRef} className="mt-3 max-h-64 overflow-y-auto space-y-3 px-2">
              {messages.map((m,i)=> (
                <div key={i} className={`p-3 rounded-lg ${m.from === 'user' ? 'bg-indigo-50 self-end text-right' : 'bg-gray-100 dark:bg-gray-800'}`}>
                  <div className="text-sm">{m.text}</div>
                </div>
              ))}
            </div>

            <div className="mt-3 flex gap-2">
              <input value={input} onChange={(e)=> setInput(e.target.value)} onKeyDown={(e)=> e.key === 'Enter' && send()} placeholder="Ask something..." className="flex-1 p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-900" />
              <button onClick={send} disabled={loading} className="px-4 py-2 bg-indigo-600 text-white rounded-lg">{loading ? '...' : 'Send'}</button>
            </div>

            <div className="mt-2 text-xs opacity-60">Powered by your REST AI — change URL/key via environment variables.</div>
          </div>
        </div>
      )}
    </>
  )
}
