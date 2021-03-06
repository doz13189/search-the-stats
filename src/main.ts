import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

// import firebase from 'firebase/app'
// import 'firebase/analytics'

// const firebaseConfig = {
//   apiKey: "AIzaSyD3LJCWzwVFkDrPWMCiUpt_qmZmNTkZBe4",
//   authDomain: "search-the-stats.firebaseapp.com",
//   projectId: "search-the-stats",
//   storageBucket: "search-the-stats.appspot.com",
//   messagingSenderId: "1071814851005",
//   appId: "1:1071814851005:web:ab499f293afff75d993ad4",
//   measurementId: "G-1KV8568ZHR"
// }
// firebase.initializeApp(firebaseConfig)


createApp(App).use(router).mount('#app')
