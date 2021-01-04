import { shallowMount } from "@vue/test-utils";

import Players from "@/components/Players.vue";

jest.mock('axios');

describe("Players.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Players, {
      props: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });

  // it("renders props.msg when passed", () => {
  //   const wrapper = shallowMount(Players);
    
  //   // expect(wrapper.text()).toMatch(msg);
  // });
});
