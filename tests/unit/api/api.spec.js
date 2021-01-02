import axios from 'axios'
import { request } from '@/utils/request'

import { getPlayers, getStats } from "@/api/api";

jest.mock('axios');

describe("api.ts", () => {
  it("renders props.msg when passed", () => {
    const users = [{name: 'Bob'}];
    const resp = {data: users};
    axios.get.mockResolvedValue(resp);

    request('/players', '/666609').then(res => {
      console.log(res)
    }).then( _ => {
      console.log('calls', axios.get.mock.calls.length)
      console.log('results', axios.get.mock.results[0].value)
    })
    expect('a').toMatch('a');
  });

  it("renders props.msg when passed", () => {
    const users = [{name: 'Bob'}];
    const resp = {data: users};
    axios.get.mockResolvedValue(resp);

    getPlayers('/players', '/666609').then(res => {
      console.log(res)
      
    }).then( _ => {
      console.log('calls', axios.get.mock.calls.length)
      console.log('results', axios.get.mock.results[0].value)
    })
    expect('a').toMatch('a');
  });

});
