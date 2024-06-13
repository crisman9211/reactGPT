import GptMessage from 'src/components/GptMessage/GptMessage'
import MyMessage from 'src/components/MyMessage/MyMessage'
import TypingLoader from 'src/components/TypingLoader/TypingLoader'

const OrthographyPage = () => {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2"></div>

        {/* bienveninda GPT */}
        <GptMessage text='Hola, puedes escribir tu texto en español y te ayudo con las correcciones'/>
        <MyMessage text='Hola, ¿cómo estás?'/>
        <TypingLoader className='fade-in'/>
      </div>
    </div>
  )
}

export default OrthographyPage
