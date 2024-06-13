import React, { useRef, useState } from 'react'

interface TextMessageBoxFileProps {
  onSendMessage: (message: string) => void
  placeholder?: string
  disableCorrections?: boolean
  accept?: string //image/*, video/*, audio/*, application/*
}

const TextMessageBoxFile = ({
  onSendMessage,
  placeholder,
  disableCorrections = false,
  accept,
}: TextMessageBoxFileProps) => {
  const [message, setMessage] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>()
  const inputFileRef = useRef(null)

  const handleSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (message.trim().length === 0) return

    onSendMessage(message)
    setMessage('')

    console.log('handleSendMessage')
  }

  return (
    <form
      onSubmit={handleSendMessage}
      className="flex h-16 w-full flex-row items-center rounded-xl bg-white px-4"
    >
      <div className="mr-3">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center  text-gray-400 hover:bg-gray-200 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-white"
          onClick={() => inputFileRef.current?.click()}
        >
          <i className="fa-solid fa-paperclip text-xl"></i>
        </button>
        <input
          type="file"
          className="hidden"
          ref={inputFileRef}
          accept={accept}
          onChange={(event) => {
            if (event.target.files && event.target.files.length > 0) {
              setSelectedFile(event.target.files[0])
            }
          }}
        />
      </div>

      <div className="flex-grow">
        <div className="relative w-full">
          <input
            type="text"
            autoFocus={true}
            name="message"
            className="flex h-10 w-full rounded-xl border pl-4 text-gray-800 focus:border-indigo-300 focus:outline-none"
            placeholder={placeholder}
            autoComplete={disableCorrections ? 'on' : 'off'}
            autoCorrect={disableCorrections ? 'on' : 'off'}
            spellCheck={disableCorrections ? true : false}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
      </div>
      <div className="ml-4">
        <button className="btn-primary" disabled={!selectedFile}>
          {
            (!selectedFile)
            ? <span className="mr-2">Enviar</span>
            : <span className="mr-2">{selectedFile.name.substring(0,15)+'...'}</span>
          }
          <i className="fa-regular fa-paper-plane"></i>
        </button>
      </div>
    </form>
  )
}

export default TextMessageBoxFile
