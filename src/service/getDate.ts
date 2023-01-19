import axios from 'axios'

export async function getDate() {
  try {
    const { data } = await axios.get(
      'https://brasilapi.com.br/api/feriados/v1/2023',
    )

    return data
  } catch (err) {
    return err
  }
}
