// composables
import { createApp } from "vue"
import { createStore } from "vuex"

// routes
import router from "./router"

// main component
import App from "./App.vue"

// Plugins
import { registerPlugins } from './plugins'

// create basic store
const store = createStore({
    state() {
        return {
            count: 1,
        }
    },
    mutations: {
        addOne(state) {
            console.log("addOne")
            state.count++
        }
    },
})

const app = createApp(App)
registerPlugins(app)
app.use(router).use(store).mount('#app')
