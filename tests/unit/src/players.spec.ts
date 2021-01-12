import { shallowMount } from "@vue/test-utils";

import Search from "@/views/Search.vue";

jest.mock('axios');
// ## input
// - Component Data
// - Component Props
// - User Interaction
// - Ex: user clicks a button
// - Lifecycle Methods
// - mounted(), created(), etc.
// - Vuex Store
// - Route Params

// ## output
// - What is rendered to the DOM
// - External function calls
// - Events emitted by the component
// - Route Changes
// - Updates to the Vuex Store
// - Connection with children
// - i.e. changes in child components

// event(input) - result(output)
// Enter characters in the <input> (User Interaction) - enable <input> (What is rendered to the DOM)
// (bad test) Press the search button (User Interaction) - loading status will be true (nothing...)
// (bad test) Press the search button (User Interaction) - error status will be true when receiving an error response (nothing...)
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
