import GptMessage from 'src/components/GptMessage/GptMessage'
import MyMessage from 'src/components/MyMessage/MyMessage'

const OrthographyPage = () => {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2"></div>

        {/* bienveninda GPT */}
        <GptMessage text='Hola, puedes escribir tu texto en español y te ayudo con las correcciones'/>
        <MyMessage text='Hola, ¿cómo estás?'/>

      </div>
    </div>
  )
}

export default OrthographyPage
