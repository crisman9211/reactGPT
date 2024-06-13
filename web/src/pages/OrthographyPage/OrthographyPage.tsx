import { useState } from 'react'
import GptMessage from 'src/components/GptMessage/GptMessage'
import MyMessage from 'src/components/MyMessage/MyMessage'
import TextMessageBox from 'src/components/TextMessageBox/TextMessageBox'
import TextMessageBoxFile from 'src/components/TextMessageBoxFile/TextMessageBoxFile'
import TypingLoader from 'src/components/TypingLoader/TypingLoader'

interface Message {
  text: string
  isGpt: boolean
}

const OrthographyPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])

  const handlePost = async (text: string) => {
    setIsLoading(true)
    setMessages((prev) => [...prev, { text, isGpt: false }])

    //TODO: UseCase

    setIsLoading(false)

    //TODO: Add message isGpt in true
  }

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          {/* Bienvenida */}
          <GptMessage text="Hola, puedes escribir tu texto en español, y te ayudo con las correcciones" />

          {messages.map((message, index) =>
            message.isGpt ? (
              <GptMessage key={index} text="Esto es de OpenAI" />
            ) : (
              <MyMessage key={index} text={message.text} />
            )
          )}

          {isLoading && (
            <div className="fade-in col-start-1 col-end-12">
              <TypingLoader />
            </div>
          )}
        </div>
      </div>

      <TextMessageBox
        onSendMessage={handlePost}
        placeholder="Escribe aquí lo que deseas"
        disableCorrections
      />

      <TextMessageBoxFile
        onSendMessage={handlePost}
        placeholder="Escribe aquí lo que deseas"
        disableCorrections
      />
    </div>
  )
}

export default OrthographyPage
