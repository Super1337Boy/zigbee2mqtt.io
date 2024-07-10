"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[85976],{121810:(e,t,a)=>{a.r(t),a.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-d68a07e8","path":"/devices/BSD-2.html","title":"Bosch BSD-2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Bosch BSD-2 control via MQTT","description":"Integrate your Bosch BSD-2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-03-30T17:14:41.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Smoke (binary)","slug":"smoke-binary","link":"#smoke-binary","children":[]},{"level":3,"title":"Test (binary)","slug":"test-binary","link":"#test-binary","children":[]},{"level":3,"title":"Alarm smoke (binary)","slug":"alarm-smoke-binary","link":"#alarm-smoke-binary","children":[]},{"level":3,"title":"Alarm burglar (binary)","slug":"alarm-burglar-binary","link":"#alarm-burglar-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Sensitivity (enum)","slug":"sensitivity-enum","link":"#sensitivity-enum","children":[]},{"level":3,"title":"Broadcast alarm (enum)","slug":"broadcast-alarm-enum","link":"#broadcast-alarm-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1720613247000},"filePathRelative":"devices/BSD-2.md"}')},345824:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var o=a(166252);const i=(0,o._)("h1",{id:"bosch-bsd-2",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#bosch-bsd-2","aria-hidden":"true"},"#"),(0,o.Uk)(" Bosch BSD-2")],-1),d=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"BSD-2")],-1),r=(0,o._)("td",null,"Vendor",-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Smoke alarm II")],-1),n=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"smoke, test, alarm_smoke, alarm_burglar, battery, sensitivity, broadcast_alarm, linkquality")],-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/BSD-2.png",alt:"Bosch BSD-2"})])],-1),u=(0,o._)("h2",{id:"notes",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,o.Uk)(" Notes")],-1),h=(0,o._)("h3",{id:"pairing",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,o.Uk)(" Pairing")],-1),m=(0,o._)("ul",null,[(0,o._)("li",null,"Before starting the pairing process the device's install code needs to be added to Zigbee2MQTT. Scan the QR code printed on the bottom of the device with the camera of your mobile phone and copy the received value (Attention: The install code printed in plain text on the device is not sufficient!)"),(0,o._)("li",null,"The install code can be found inside the device before attaching it to the mounting plate"),(0,o._)("li",null,"Add this install code under Settings -> Tools -> Add install code")],-1),b=(0,o.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="smoke-binary" tabindex="-1"><a class="header-anchor" href="#smoke-binary" aria-hidden="true">#</a> Smoke (binary)</h3><p>Indicates whether the device detected smoke. Value can be found in the published state on the <code>smoke</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> smoke is ON, if <code>false</code> OFF.</p><h3 id="test-binary" tabindex="-1"><a class="header-anchor" href="#test-binary" aria-hidden="true">#</a> Test (binary)</h3><p>Indicates whether the device is currently performing a test. Value can be found in the published state on the <code>test</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> test is ON, if <code>false</code> OFF.</p><h3 id="alarm-smoke-binary" tabindex="-1"><a class="header-anchor" href="#alarm-smoke-binary" aria-hidden="true">#</a> Alarm smoke (binary)</h3><p>Toggle the smoke alarm siren. Value can be found in the published state on the <code>alarm_smoke</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;alarm_smoke&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_smoke&quot;: NEW_VALUE}</code>. If value equals <code>true</code> alarm smoke is ON, if <code>false</code> OFF.</p><h3 id="alarm-burglar-binary" tabindex="-1"><a class="header-anchor" href="#alarm-burglar-binary" aria-hidden="true">#</a> Alarm burglar (binary)</h3><p>Toggle the burglar alarm siren. Value can be found in the published state on the <code>alarm_burglar</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;alarm_burglar&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_burglar&quot;: NEW_VALUE}</code>. If value equals <code>true</code> alarm burglar is ON, if <code>false</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#sensitivity-enum" aria-hidden="true">#</a> Sensitivity (enum)</h3><p>Sensitivity of the smoke detector. Value can be found in the published state on the <code>sensitivity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sensitivity&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="broadcast-alarm-enum" tabindex="-1"><a class="header-anchor" href="#broadcast-alarm-enum" aria-hidden="true">#</a> Broadcast alarm (enum)</h3><p>Set siren state of all BSD-2 via broadcast. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;broadcast_alarm&quot;: NEW_VALUE}</code>. The possible values are: <code>smoke_off</code>, <code>smoke_on</code>, <code>burglar_off</code>, <code>burglar_on</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17),p={},g=(0,a(983744).Z)(p,[["render",function(e,t){const a=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),i,(0,o._)("table",null,[d,(0,o._)("tbody",null,[l,(0,o._)("tr",null,[r,(0,o._)("td",null,[(0,o.Wm)(a,{to:"/supported-devices/#v=Bosch"},{default:(0,o.w5)((()=>[(0,o.Uk)("Bosch")])),_:1})])]),s,n,c])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,h,m,(0,o.kq)(" Notes END: Do not edit below this line "),b])}]])}}]);