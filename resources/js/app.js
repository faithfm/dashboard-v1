/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue'
import vuetify from './vuetify'; // import and use vuetify
import {
    InertiaApp,
    plugin
} from '@inertiajs/inertia-vue'
import {
    InertiaProgress
} from '@inertiajs/progress'
import App from './Shared/TheSharedLayout'

window.Vue = require('vue');
Vue.use(plugin)

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

InertiaProgress.init()

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const app = document.getElementById('app')

new Vue({
    vuetify,
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: (name) => {
                const module = require(`./Pages/${name}`);

                if (!module.default.layout) {
                    module.default.layout = App
                }

                return module.default;
            }
        },
    }),
}).$mount(app)
