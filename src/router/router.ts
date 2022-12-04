import { createRouter } from 'vue-router'
import { history } from './config/history'
import { routes } from './config/routes'
export const router = createRouter({ history, routes })

