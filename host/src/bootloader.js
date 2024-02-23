// composables
import { createApp } from "vue"
import { createStore } from "vuex"

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
app.use(store).mount('#app')
