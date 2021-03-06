import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import RelaxUI from 'RelaxPlus'
import '@RelaxPlus/theme/relax.less'

// import RelaxUI from '@RelaxPlus/lib/relax.min.js'
// import '@RelaxPlus/lib/relax.css'
import demoBlock from '@RelaxPlus/config/demoBlock.vue'
import '@/style/global.less'


createApp(App)
.use(router)
.use(RelaxUI)
.component('demo-block', demoBlock)
.mount('#app')
