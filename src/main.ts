import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import logger from "@/utils/logger";

createApp(App).mount('#app')

logger.prettyPrimary(`欢迎使用`, import.meta.env.VITE_APP_TITLE)
