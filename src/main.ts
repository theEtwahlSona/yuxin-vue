import {createApp} from 'vue'
import App from './App.vue'
import logger from "@/utils/logger";

const application = async () => {
    const app = createApp(App)

    app.mount('#app')
}

application()

logger.prettyPrimary(`欢迎使用`, import.meta.env.VITE_APP_TITLE)
