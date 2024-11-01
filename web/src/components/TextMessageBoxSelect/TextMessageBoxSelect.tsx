import { useState } from 'react'

interface TextMessageBoxSelectProps {
  onSendMessage: (message: string, selectedOption: string) => void
  placeholder?: string
  disableCorrections?: boolean
  options: Option[]
}

interface Option {
  id: string
  text: string
}

const TextMessageBoxSelect = ({
  onSendMessage,
  placeholder,
  disableCorrections = false,
  options,
}: TextMessageBoxSelectProps) => {
  const [message, setMessage] = useState('')
  const [selectedOption, setSelectedOption] = useState<string>('')

  const handleSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (message.trim().length === 0) return

    onSendMessage(message, selectedOption)
    setMessage('')

    console.log('handleSendMessage')
  }

  return (
    <form
      onSubmit={handleSendMessage}
      className="flex h-16 w-full flex-row items-center rounded-xl bg-white px-4"
    >
      <div className="flex-grow">
        <div className="flex">
          <input
            type="text"
            autoFocus
            name="message"
            className="h-10 w-full rounded-xl border pl-4 text-gray-800 focus:border-indigo-300 focus:outline-none"
            placeholder={placeholder}
            autoComplete={disableCorrections ? 'on' : 'off'}
            autoCorrect={disableCorrections ? 'on' : 'off'}
            spellCheck={disableCorrections ? 'true' : 'false'}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <select
            name="select"
            className="ml-5 h-10 w-2/5 rounded-xl border pl-4 text-gray-800 focus:border-indigo-300 focus:outline-none"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="">Seleccione</option>
            {options.map(({ id, text }) => (
              <option key={id} value={id}>
                {text}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="ml-4">
        <button className="btn-primary">
          <span className="mr-2">Enviar</span>
          <i className="fa-regular fa-paper-plane"></i>
        </button>
      </div>
    </form>
  )
}

export default TextMessageBoxSelect
