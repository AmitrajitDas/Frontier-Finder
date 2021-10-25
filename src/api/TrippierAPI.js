import axios from 'axios'

// const baseURL =
//   'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

// const options = {
//   params: {
//     bl_latitude: '11.847676',
//     tr_latitude: '12.838442',
//     bl_longitude: '109.095887',
//     tr_longitude: '109.149359',
//   },
//   headers: {
//     'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//     'x-rapidapi-key': 'f402df420dmshde17fce5fed2febp15c15bjsn445b723c2d06',
//   },
// }

export const getPlacesData = async (type, ne, sw) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key':
            '9b2c655d63msh717d6130db986b5p1237fbjsn175b5c936574',
        },
      }
    )

    return data
  } catch (error) {
    console.log(error)
  }
}
