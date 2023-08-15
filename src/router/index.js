import { createRouter, createWebHashHistory } from 'vue-router'
import rules from "./requireRules"

const routes = [
    ...rules
]
const router = createRouter(
    {
        history: createWebHashHistory(),
        routes
    },
)
export default router