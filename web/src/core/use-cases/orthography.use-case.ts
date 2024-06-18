import type { OrthographyResponse } from "src/interfaces/orthography.response"

interface OrthographyUseCase extends OrthographyResponse {
  ok: boolean;
}

export const orthographyUseCase = async (prompt: string) : Promise <
OrthographyUseCase
>  => {
  try {
    const response: any = await fetch(
      `${process.env.REDWOOD_ENV_GPT_API}/orthograpy-check`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      }
    )

    if (!response.ok) {
      throw new Error('No se pudo completar la corrección del texto.')
    }

    const data = await response.json() as OrthographyResponse


    return {
      ok: true,
      ...data,
    }

  } catch (error) {
    return {
      ok: false,
      userScore: 0,
      errors: [],
      message: `No se pudo completar la corrección del texto: ${error.message}`,
    }
  }
}
