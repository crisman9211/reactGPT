import { useState } from 'react'
import GptMessage from 'src/components/GptMessage/GptMessage'
import GptOthographyMessaje from 'src/components/GptOthographyMessaje/GptOthographyMessaje'
import MyMessage from 'src/components/MyMessage/MyMessage'
import TextMessageBox from 'src/components/TextMessageBox/TextMessageBox'
import TypingLoader from 'src/components/TypingLoader/TypingLoader'
import { orthographyUseCase } from 'src/core/use-cases/orthography.use-case'
import type { Error } from 'src/interfaces/orthography.response'

interface Message {
  text: string
  isGpt: boolean
  info?: {
    userScore: number
    errors: Error[]
    message: string
  }
}

const OrthographyPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])

  const handlePost = async (text: string) => {
    setIsLoading(true)
    setMessages((prev) => [...prev, { text, isGpt: false }])

    const { ok, errors, message, userScore } = await orthographyUseCase(text)

    if (!ok) {
      setMessages((prev) => [
        ...prev,
        { text: 'No se pudo realizar la transacción', isGpt: true },
      ])
    } else {
      setMessages((prev) => [
        ...prev,
        {
          text: message,
          isGpt: true,
          info: {
            userScore,
            errors,
            message,
          },
        },
      ])
    }

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
              <GptOthographyMessaje
                key={index}
                errors={message.info?.errors}
                messsage={message.info?.message}
                userScore={message.info?.userScore}
              />
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
    </div>
  )
}

export default OrthographyPage
