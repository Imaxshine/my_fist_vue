import {createApp} from "vue";
import myApp from "@/App.vue";
import Router from '@/route';
import {createPinia} from "pinia";

// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//Unda app
let app = createApp(myApp);
// Use router
app.use(Router);
app.use(createPinia())

//Register Global components
import BaseBtn from "@/components/base/BaseBtn.vue";
import BaseIpt from "@/components/base/BaseIpt.vue";

app.component('BaseButton', BaseBtn);
app.component('BaseInput', BaseIpt);
app.mount("#my-app")