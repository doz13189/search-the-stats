import axios from 'axios'
import { shallowMount } from "@vue/test-utils";

import Search from "@/views/Search.vue";

const response = {
  "data": {
    "data":[
      {
        "id":470,
        "first_name":"Yuta",
        "height_feet":6,
        "height_inches":9,
        "last_name":"Watanabe",
        "position":"G",
        "team": {
          "id":28,
          "abbreviation":"TOR",
          "city":"Toronto",
          "conference":"East",
          "division":"Atlantic",
          "full_name":"Toronto Raptors",
          "name":"Raptors"
        },
        "weight_pounds":205
      }
    ],
    "meta": {
      "total_pages":1,
      "current_page":1,
      "next_page":null,
      "per_page":25,
      "total_count":1
    }
  },
  "status":200,
  "statusText":"OK",
  "headers": {
    "cache-control":"max-age=0, private, must-revalidate","content-type":"application/json; charset=utf-8"
  },
  "config": {
    "url":"https://www.balldontlie.io/api/v1/players?search=wata&page=1&",
    "method":"get",
    "headers": {
      "Accept":"application/json, text/plain, */*"
    },
    "transformRequest":[null],
    "transformResponse":[null],
    "timeout":0,
    "xsrfCookieName":"XSRF-TOKEN",
    "xsrfHeaderName":"X-XSRF-TOKEN",
    "maxContentLength":-1,
    "maxBodyLength":-1
  },
  "request":{}
}

jest.mock('axios')


// number : event(input) - result(output)
// (done) Enter characters in the <input> (User Interaction) - enable <input> (What is rendered to the DOM)
// (pass) (bad test) Press the search button (User Interaction) - loading status will be true (nothing...)
// (pass) (bad test) Press the search button (User Interaction) - error status will be true when receiving an error response (nothing...)
// Press the search button (User Interaction) -  "page" is rendered (What is rendered to the DOM)
// Press the search button (User Interaction) -  "current_page" is rendered (What is rendered to the DOM)
// Press the search button (User Interaction) -  "total page" is rendered (What is rendered to the DOM)
// Press the search button (User Interaction) -  previous button is rendered (What is rendered to the DOM)
// Press the search button (User Interaction) -  next button is rendered (What is rendered to the DOM)
// Press the search button (User Interaction) -  Player names, positions and teams are displayed in a list format (What is rendered to the DOM)
// Press the previous button (User Interaction) - The previous page is displayed (What is rendered to the DOM)
// Press the next button (User Interaction) - The next page is displayed (What is rendered to the DOM)
// Press the Check the Stats button (User Interaction) - Go to the PlayerDetail page (Route Changes)

describe("Search.vue", () => {
  beforeEach(() => {
    axios.get.mockResolvedValueOnce(response)
  })

  it('Enter characters in the <input> (User Interaction) - enable <input> (What is rendered to the DOM)', async () => {
    const wrapper = shallowMount(Search)
    const searchInput = wrapper.find('[data-testid="search-input"]')
    expect(wrapper.find('[data-testid="search-button"]').attributes().disabled).toMatch('')
    searchInput.setValue('test')

    await wrapper.find('[data-testid="search-button"]').trigger('click')
    expect(wrapper.find('[data-testid="search-button"]').attributes().disabled).toBeUndefined()
  })

  it('Press the search button (User Interaction) -  "page" is rendered (What is rendered to the DOM)', async () => {
    // const response = [ {"message":"Request failed with status code 404","name":"Error","stack":"Error: Request failed with status code 404\n    at createError (webpack-internal:///./node_modules/axios/lib/core/createError.js:16:15)\n    at settle (webpack-internal:///./node_modules/axios/lib/core/settle.js:17:12)\n    at XMLHttpRequest.handleLoad (webpack-internal:///./node_modules/axios/lib/adapters/xhr.js:62:7)","config":{"url":"https://www.balldontlie.io/api/v2/players/666609","method":"get","headers":{"Accept":"application/json, text/plain, */*"},"transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"maxBodyLength":-1}} ]
    
    const wrapper = shallowMount(Search)
    const searchInput = wrapper.find('[data-testid="search-input"]')
    searchInput.setValue('test')
    await wrapper.find('[data-testid="search-button"]').trigger('click')
    await wrapper.find('[data-testid="search-button"]').trigger('click')
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()

    expect(wrapper.find('[data-testid="page-paragraph"]').element.textContent).toMatch('page : 1')
  })



})
