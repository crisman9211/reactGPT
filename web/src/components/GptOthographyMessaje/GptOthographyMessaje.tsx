import Markdown from 'react-markdown'
import type { Error } from 'src/interfaces/orthography.response'

interface GptOthographyMessajeProps {
  userScore: number
  errors: Error[]
  messsage: string
}

const GptOthographyMessaje = ({
  userScore,
  errors,
  messsage,
}: GptOthographyMessajeProps) => {
  return (
    <div className="col-start-1 col-end-9 rounded-lg bg-gray-800 p-3 shadow-xl">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex w-full items-center ">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
            G
          </div>
        </div>
        <div className="relative w-full rounded-3xl bg-gray-700 p-4 text-sm shadow-inner">
          <h3 className="text-center text-3xl text-green-500">
            Puntaje: {userScore}%
          </h3>
          <p className="text-center text-gray-300">{messsage}</p>
          {errors.length === 0 ? (
            <p className="text-center text-green-500">
              ¡No se encontraron errores, perfecto!
            </p>
          ) : (
            <>
              <h3 className="text-center text-2xl text-red-400">
                Errores encontrados
              </h3>
              <br />
              <ul className="w-full space-y-2">
                {errors.map((error, index) => (
                  <li
                    key={index}
                    className="flex flex-col items-center justify-between rounded-md bg-gray-600 p-2 md:flex-row"
                  >
                    <p className="text-left text-gray-200">
                      <strong  className="text-red-400">Original:</strong> {error.original}
                    </p>
                    <p className="text-right text-gray-200">
                      <strong  className="text-green-400">Corregido:</strong> {error.corrected}
                    </p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default GptOthographyMessaje
