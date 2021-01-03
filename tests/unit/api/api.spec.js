import axios from 'axios'

import { getPlayers, getStats } from "@/api/api";

jest.mock('axios')

// const samples = [ { sample: 'sample'} ]
// const resp = { data: samples }
// const response = [ {"message":"Request failed with status code 404","name":"Error","stack":"Error: Request failed with status code 404\n    at createError (webpack-internal:///./node_modules/axios/lib/core/createError.js:16:15)\n    at settle (webpack-internal:///./node_modules/axios/lib/core/settle.js:17:12)\n    at XMLHttpRequest.handleLoad (webpack-internal:///./node_modules/axios/lib/adapters/xhr.js:62:7)","config":{"url":"https://www.balldontlie.io/api/v2/players/666609","method":"get","headers":{"Accept":"application/json, text/plain, */*"},"transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"maxBodyLength":-1}} ]

describe("api.ts", () => {

  beforeEach(() => {
  })

  it("getPlayers's nomal return value", async () => {
    axios.get.mockResolvedValueOnce()

    await getPlayers(666609).then(() => {
      console.log('calls', axios.get.mock.calls)
      expect(axios.get.mock.calls[0][0]).toBe('https://www.balldontlie.io/api/v1/players/666609')
      expect(axios.get.mock.calls.length).toBe(1)

      // dont check mock function's return value
      // axios.get.mock.results[0].value.then( response => {
      //   expect(response).toStrictEqual(expectResponse)
      // })
    })
    
  })

  it("getPlayers's nomal return value", async () => {
    axios.get.mockResolvedValueOnce()

    await getStats({
      'player_ids[]': 666609
    }).then(() => {
      console.log('calls', axios.get.mock.calls)
      expect(axios.get.mock.calls[1][0]).toBe('https://www.balldontlie.io/api/v1/stats?player_ids[]=666609')
      expect(axios.get.mock.calls.length).toBe(2)
    })
  })

  // same result eigher normal response or error response
  // it("getPlayers's error return value", async () => {
  //   axios.get.mockRejectedValueOnce(response)

  //   await getPlayers(666609).then(() => {
  //     console.log('calls', axios.get.mock.calls[1])
  //     expect(axios.get.mock.calls[1][0]).toBe('https://www.balldontlie.io/api/v1/players/666609')
  //     expect(axios.get.mock.calls.length).toBe(2)

  //     // dont check mock function's return value
  //     // axios.get.mock.results[0].value.then( response => {
  //     //   expect(response).toStrictEqual(expectResponse)
  //     // })
  //   })
  // })

});
