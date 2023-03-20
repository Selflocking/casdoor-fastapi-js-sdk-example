// Copyright 2022 The Casdoor Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {createApp} from 'vue'
import App from './App.vue'
import router from './route/index'
import SDK from 'casdoor-js-sdk'
const sdkConfig = {
  serverUrl: "https://door.casdoor.com",
  clientId: "294b09fbc17f95daf2fe",
  organizationName: "casbin",
  appName: "app-vue-python-example",
  redirectPath: "/callback",
  signinPath: "/api/signin",
}
window.sdk = new SDK(sdkConfig)
const app = createApp(App)
app.use(router)
app.mount('#app')
