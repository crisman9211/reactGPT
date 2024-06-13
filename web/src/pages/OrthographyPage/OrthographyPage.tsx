import GptMessage from 'src/components/GptMessage/GptMessage'
import MyMessage from 'src/components/MyMessage/MyMessage'
import TextMessageBox from 'src/components/TextMessageBox/TextMessageBox'
import TypingLoader from 'src/components/TypingLoader/TypingLoader'

const OrthographyPage = () => {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2"></div>

        {/* bienveninda GPT */}
        <GptMessage text="Hola, puedes escribir tu texto en español y te ayudo con las correcciones" />
        <MyMessage text="Hola, ¿cómo estás?" />
        <TypingLoader className="fade-in" />
      </div>
      <TextMessageBox onSendMessage={(message)=>console.log(message)} placeHolder='Escribe lo que deseas' disableCorrections />
    </div>
  )
}

export default OrthographyPage
