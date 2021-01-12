import { shallowMount } from "@vue/test-utils";

import Search from "@/views/Search.vue";

jest.mock('axios');

describe("Search.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    // const wrapper = shallowMount(Search, {
    //   props: { msg }
    // });
    const wrapper = shallowMount(Search)

    // expect(wrapper.text()).toMatch(msg);
  });

  // it("renders props.msg when passed", () => {
  //   const wrapper = shallowMount(Players);
    
  //   // expect(wrapper.text()).toMatch(msg);
  // });
});
