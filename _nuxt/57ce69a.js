(window.webpackJsonp=window.webpackJsonp||[]).push([[42,12],{317:function(t,e,l){"use strict";l.r(e);var n={name:"Breadcrumbs",props:{items:{type:Array,required:!0}}},r=l(63),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("nav",{staticClass:"flex",attrs:{"aria-label":"Breadcrumb"}},[l("ol",{staticClass:"flex items-center space-x-4"},[l("li",[l("div",[l("nuxt-link",{staticClass:"text-gray-400 hover:text-gray-500",attrs:{to:{path:"/"}}},[l("svg",{staticClass:"flex-shrink-0 h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[l("path",{attrs:{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"}})]),t._v(" "),l("span",{staticClass:"sr-only"},[t._v("Home")])])],1)]),t._v(" "),t._l(t.items,(function(e){return l("li",{key:e.text},[l("div",{staticClass:"flex items-center"},[l("svg",{staticClass:"flex-shrink-0 h-5 w-5 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})]),t._v(" "),l("NuxtLink",{staticClass:"ml-4 text-sm font-medium text-gray-500 hover:text-gray-700",attrs:{disabled:e.disabled,to:{path:e.link}}},[t._v("\n          "+t._s(e.text)+"\n        ")])],1)])}))],2)])}),[],!1,null,null,null);e.default=component.exports},335:function(t,e,l){var content=l(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(58).default)("06b14c84",content,!0,{sourceMap:!1})},361:function(t,e,l){"use strict";l(335)},362:function(t,e,l){var n=l(57)((function(i){return i[1]}));n.push([t.i,".scrollbar-w-2::-webkit-scrollbar{\n  width:.25rem;\n  height:.25rem\n}\n.scrollbar-track-blue-lighter::-webkit-scrollbar-track{\n  --bg-opacity:1;\n  background-color:#f7fafc;\n  background-color:rgba(247,250,252,var(--bg-opacity))\n}\n.scrollbar-thumb-blue::-webkit-scrollbar-thumb{\n  --bg-opacity:1;\n  background-color:#edf2f7;\n  background-color:rgba(237,242,247,var(--bg-opacity))\n}\n.scrollbar-thumb-rounded::-webkit-scrollbar-thumb{\n  border-radius:.25rem\n}",""]),n.locals={},t.exports=n},399:function(t,e,l){"use strict";l.r(e);var n={name:"Chat",components:{Breadcrumbs:l(317).default},data:function(){return{chats:[{img:"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",name:"Guljahon Juraeva",message:"Sizning bu muammoingiz",status:"Faol",time:"9:12"},{img:"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",name:"Guljahon Juraeva",message:"Sizning bu muammoingiz",status:"Faol",time:"kecha"},{img:"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",name:"Guljahon Juraeva",message:"Sizning bu muammoingiz",status:"Faol",time:"10/06/2021"},{img:"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",name:"Guljahon Juraeva",message:"Sizning bu muammoingiz",status:"Faol",time:"10/06/2021"}],items:[{text:"Onlayn konsultatsiya ",link:"/online-consultation",disabled:!0},{text:"Mening konsultatsiyalarim ",link:"/chat",disabled:!1}],isMenu:!1}},methods:{showMenu:function(){this.isMenu=!this.isMenu}}},r=(l(361),l(63)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 pb-10"},[l("div",{staticClass:"px-4 py-6 flex justify-between sm:px-0 items-center"},[l("breadcrumbs",{attrs:{items:t.items}}),t._v(" "),l("div",{staticClass:"flex justify-end"},[l("button",{staticClass:"\n            inline-flex\n            items-center\n            px-4\n            py-2\n            border border-transparent\n            shadow-sm\n            text-base\n            font-medium\n            rounded-md\n            text-white\n            bg-light-orange\n            focus:outline-none\n          ",attrs:{type:"button"},on:{click:function(e){t.$router.push(t.localePath("/login"))}}},[t._v("\n        Yangi konsultatsiya "),l("span",{staticClass:"ml-2"},[t._v("+")])])])],1),t._v(" "),l("div",{staticClass:"grid grid-cols-4 gap-4 mb-56"},[l("div",{staticClass:"border rounded-md shadow-md p-2"},[l("div",{staticClass:"my-2 relative rounded-md shadow-sm"},[l("div",{staticClass:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[l("svg",{staticStyle:{fill:"rgba(156, 163, 175, 1)"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[l("path",{attrs:{d:"M19.023,16.977c-0.513-0.488-1.004-0.997-1.367-1.384c-0.372-0.378-0.596-0.653-0.596-0.653l-2.8-1.337 C15.34,12.37,16,10.763,16,9c0-3.859-3.14-7-7-7S2,5.141,2,9s3.14,7,7,7c1.763,0,3.37-0.66,4.603-1.739l1.337,2.8 c0,0,0.275,0.224,0.653,0.596c0.387,0.363,0.896,0.854,1.384,1.367c0.494,0.506,0.988,1.012,1.358,1.392 c0.362,0.388,0.604,0.646,0.604,0.646l2.121-2.121c0,0-0.258-0.242-0.646-0.604C20.035,17.965,19.529,17.471,19.023,16.977z M9,14 c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S11.757,14,9,14z"}})])]),t._v(" "),l("input",{staticClass:"text-gray-400 text-sm bg-gray-100 block w-full pl-10 sm:text-sm border-gray-50 rounded-md",attrs:{type:"text",name:"search",placeholder:"Suhbatdoshingizni qidiring"}})]),t._v(" "),t._m(0),t._v(" "),t._l(t.chats,(function(e){return l("div",{key:e.name,staticClass:"border-b pb-2"},[l("div",{staticClass:"mt-4 flex items-center pb-2"},[t._m(1,!0),t._v(" "),l("div",{staticClass:"flex items-center overflow-y-auto scroll"},[l("div",{staticClass:"grid grid-cols-3 ml-3"},[l("div",{staticClass:"col-span-2 block mb-1"},[l("p",{staticClass:"text-sm  text-gray-600"},[t._v("\n                  "+t._s(e.name)+"\n                ")]),t._v(" "),l("div",{staticClass:"flex pt-2 space-x-1 w-full text-xs text-gray-500"},[t._v("\n                  "+t._s(e.message)+"\n                ")])]),t._v(" "),l("div",{staticClass:"flex justify-end"},[l("p",{staticClass:"text-xs  text-gray-400"},[t._v("\n                  "+t._s(e.time)+"\n                ")])])])])]),t._v(" "),l("p",{staticClass:"text-green-800 bg-green-50 text-xs px-2 ml-12 py-1 text-center rounded-xl w-14"},[t._v("\n          "+t._s(e.status)+"\n        ")])])}))],2),t._v(" "),l("div",{staticClass:"col-span-2 border rounded-md shadow-md px-3 bg-white"},[l("div",{staticClass:"flex-1 p-3 justify-between flex flex-col h-screen"},[l("div",{staticClass:"flex py-3 space-x-3 border-b"},[t._m(2),t._v(" "),l("div",{staticClass:"flex-shrink-0 self-center flex items-center"},[t._m(3),t._v(" "),l("div",{staticClass:"relative z-30 inline-block text-left"},[l("div",[l("button",{staticClass:"-m-2 p-2 focus:outline-none rounded-full flex items-center text-gray-400 hover:text-gray-600",attrs:{type:"button","aria-expanded":"false","aria-haspopup":"true"},on:{click:t.showMenu}},[l("span",{staticClass:"sr-only"},[t._v("Open options")]),t._v(" "),l("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[l("path",{attrs:{d:"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"}})])])]),t._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:t.isMenu,expression:"isMenu"}],staticClass:"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white Wfocus:outline-none",attrs:{role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-0-button",tabindex:"-1"}},[l("div",{staticClass:"py-1",attrs:{role:"none"}},[l("a",{staticClass:"text-gray-700 flex px-4 py-2 text-sm",attrs:{id:"menu-0-item-0",href:"#",role:"menuitem",tabindex:"-1"}},[l("svg",{staticClass:"mr-3 h-5 w-5 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[l("path",{attrs:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}})]),t._v(" "),l("span",[t._v("Add to favorites")])]),t._v(" "),l("a",{staticClass:"text-gray-700 flex px-4 py-2 text-sm",attrs:{id:"menu-0-item-1",href:"#",role:"menuitem",tabindex:"-1"}},[l("svg",{staticClass:"mr-3 h-5 w-5 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z","clip-rule":"evenodd"}})]),t._v(" "),l("span",[t._v("Embed")])]),t._v(" "),l("a",{staticClass:"text-gray-700 flex px-4 py-2 text-sm",attrs:{id:"menu-0-item-2",href:"#",role:"menuitem",tabindex:"-1"}},[l("svg",{staticClass:"mr-3 h-5 w-5 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z","clip-rule":"evenodd"}})]),t._v(" "),l("span",[t._v("Report content")])])])])])])]),t._v(" "),t._m(4),t._v(" "),l("div",{staticClass:"w-full bg-gray-100 rounded-md my-3"},[l("div",{staticClass:" bottom-0 right-0 left-0 text-gray-400"},[l("div",{staticClass:"flex items-center px-4 py-1"},[l("div",{staticClass:"flex-none"},[l("svg",{staticClass:"inline w-6 h-6 -mt-1 cursor-pointer",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[l("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}})]),t._v(" "),l("svg",{staticClass:"inline w-6 h-6 ml-2 -mt-1 cursor-pointer",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[l("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"}})])]),t._v(" "),t._m(5),t._v(" "),l("div",{staticClass:"flex-none text-right"},[l("svg",{staticClass:"inline w-6 h-6 -mt-1 cursor-pointer",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z","clip-rule":"evenodd"}})])])])])])])]),t._v(" "),l("div",{staticClass:" grid grid-rows-4 space-y-3"},[t._m(6),t._v(" "),l("div",{staticClass:"border row-span-3 p-3 rounded-md shadow-md mt-10"},[t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),l("div",{staticClass:"grid grid-cols-5 mt-3 items-center"},[l("div",{staticClass:"bg-blue-600 w-9 h-9 rounded-md p-2"},[l("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",viewBox:"0 0 20 20"}},[l("path",{attrs:{fill:"#fff","fill-rule":"evenodd",d:"M4 4c0-1.105.895-2 2-2h4.586c.53 0 1.039.21 1.414.586L15.414 6c.375.375.586.884.586 1.414V16c0 1.105-.895 2-2 2H6c-1.105 0-2-.895-2-2V4zm2 6c0-.552.448-1 1-1h6c.552 0 1 .448 1 1s-.448 1-1 1H7c-.552 0-1-.448-1-1zm1 3c-.552 0-1 .448-1 1s.448 1 1 1h6c.552 0 1-.448 1-1s-.448-1-1-1H7z","clip-rule":"evenodd"}})])]),t._v(" "),t._m(12),t._v(" "),l("div",{staticClass:"flex justify-end"},[l("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"}},[l("path",{attrs:{stroke:"#0EA5E9","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12h6m-6 4h6m2 5H7c-1.105 0-2-.895-2-2V5c0-1.105.895-2 2-2h5.586c.265 0 .52.105.707.293l5.414 5.414c.188.188.293.442.293.707V19c0 1.105-.895 2-2 2z"}})])])]),t._v(" "),l("div",{staticClass:"grid grid-cols-5 mt-3 items-center"},[l("div",{staticClass:"bg-yellow-500 w-9 h-9 rounded-md p-2"},[l("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",viewBox:"0 0 20 20"}},[l("path",{attrs:{fill:"#fff","fill-rule":"evenodd",d:"M4 4c0-1.105.895-2 2-2h4.586c.53 0 1.039.21 1.414.586L15.414 6c.375.375.586.884.586 1.414V16c0 1.105-.895 2-2 2H6c-1.105 0-2-.895-2-2V4zm2 6c0-.552.448-1 1-1h6c.552 0 1 .448 1 1s-.448 1-1 1H7c-.552 0-1-.448-1-1zm1 3c-.552 0-1 .448-1 1s.448 1 1 1h6c.552 0 1-.448 1-1s-.448-1-1-1H7z","clip-rule":"evenodd"}})])]),t._v(" "),t._m(13),t._v(" "),l("div",{staticClass:"flex justify-end"},[l("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"}},[l("path",{attrs:{stroke:"#6B7280","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 13l-3 3m0 0l-3-3m3 3V8m0 13c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z"}})])])])])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mt-2"},[l("select",{staticClass:"mt-1 block w-3/4 text-gray-700 pr-10 py-2 border-transparent focus:outline-none text-sm rounded-md",attrs:{id:"location",name:"location"}},[l("option",{attrs:{selected:""}},[t._v("\n            Barcha konsultatsiyalar\n          ")]),t._v(" "),l("option",[t._v("\n            Faol\n          ")]),t._v(" "),l("option",[t._v("Tugallangan")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex-shrink-0"},[l("span",{staticClass:"inline-block relative"},[l("img",{staticClass:"h-10 w-10 rounded-full",attrs:{src:"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""}}),t._v(" "),l("span",{staticClass:"absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400"})])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"min-w-0 flex-1"},[l("p",{staticClass:"text-lg font-medium text-gray-600"},[t._v("\n              Guljahon Jurayeva\n            ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{},[l("p",{staticClass:"text-light-orange bg-orange-50 text-xs font-medium p-2 mx-4 text-center rounded-md"},[t._v("\n                Konsultatsiyani tugatish\n              ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-col space-y-4 overflow-y-auto scrollbar-track-blue-lighter scrollbar-thumb-blue scrollbar-w-2 scrolling-touch"},[l("div",{staticClass:"flex justify-center mt-5"},[l("p",{staticClass:"text-gray-600 text-sm w-auto px-2 py-1 bg-gray-100 rounded-full"},[t._v("\n              Iyul 16\n            ")])]),t._v(" "),l("div",{staticClass:"mt-4 mx-2 flex justify-end"},[l("div",{staticClass:"block"},[l("p",{staticClass:"text-gray-600 text-sm bg-green-100 p-2 rounded-md rounded-br-none"},[t._v("\n                Assalomu aleykum, yordamingiz kerak\n              ")]),t._v(" "),l("p",{staticClass:"text-gray-400 text-xs flex pt-1 justify-end"},[t._v("\n                09:12\n              ")])])]),t._v(" "),l("div",{staticClass:" mt-4 flex justify-start w-1/2"},[l("div",{staticClass:"block"},[l("p",{staticClass:"text-gray-600 text-sm bg-orange-50 p-2 rounded-md rounded-bl-none"},[t._v("\n                Voalaykum assalom, qanday yordam bera olaman?\n              ")]),t._v(" "),l("p",{staticClass:"text-gray-400 text-xs pt-1 flex justify-start"},[t._v("\n                09:20\n              ")])])]),t._v(" "),l("div",{staticClass:"mx-2 mt-4 flex justify-end "},[l("div",{staticClass:"block w-1/2"},[l("p",{staticClass:"text-gray-600 text-sm bg-green-100 p-2 rounded-md rounded-br-none"},[t._v("\n                Archaga parvarish haqida so'ramoqchi edim\n              ")]),t._v(" "),l("p",{staticClass:"text-gray-400 text-xs flex pt-1 justify-end"},[t._v("\n                09:12\n              ")])])]),t._v(" "),l("div",{staticClass:" mt-4 flex justify-start w-1/2"},[l("div",{staticClass:"block"},[l("p",{staticClass:"text-gray-600 text-sm bg-orange-50 p-2 rounded-md rounded-bl-none"},[t._v("\n                Voalaykum assalom, qanday yordam bera olaman?\n              ")]),t._v(" "),l("p",{staticClass:"text-gray-400 text-xs pt-1 flex justify-start"},[t._v("\n                09:20\n              ")])])]),t._v(" "),l("div",{staticClass:"mx-2 mt-4 flex justify-end "},[l("div",{staticClass:"block w-1/2"},[l("p",{staticClass:"text-gray-600 text-sm bg-green-100 p-2 rounded-md rounded-br-none"},[t._v("\n                Archaga parvarish haqida so'ramoqchi edim\n              ")]),t._v(" "),l("p",{staticClass:"text-gray-400 text-xs flex pt-1 justify-end"},[t._v("\n                09:12\n              ")])])]),t._v(" "),l("div",{staticClass:"mx-2 mt-4 flex justify-end "},[l("div",{staticClass:"block w-1/2"},[l("p",{staticClass:"text-gray-600 text-sm bg-green-100 p-2 rounded-md rounded-br-none"},[t._v("\n                Archaga parvarish haqida so'ramoqchi edim\n              ")]),t._v(" "),l("p",{staticClass:"text-gray-400 text-xs flex pt-1 justify-end"},[t._v("\n                09:12\n              ")])])]),t._v(" "),l("div",{staticClass:"mx-2 mt-4 flex justify-end "},[l("div",{staticClass:"block w-1/2"},[l("p",{staticClass:"text-gray-600 text-sm bg-green-100 p-2 rounded-md rounded-br-none"},[t._v("\n                Archaga parvarish haqida so'ramoqchi edim\n              ")]),t._v(" "),l("p",{staticClass:"text-gray-400 text-xs flex pt-1 justify-end"},[t._v("\n                09:12\n              ")])])]),t._v(" "),l("div",{staticClass:"mx-2 mt-4 flex justify-end "},[l("div",{staticClass:"block w-1/2"},[l("p",{staticClass:"text-gray-600 text-sm bg-green-100 p-2 rounded-md rounded-br-none"},[t._v("\n                Archaga parvarish haqida so'ramoqchi edim\n              ")]),t._v(" "),l("p",{staticClass:"text-gray-400 text-xs flex pt-1 justify-end"},[t._v("\n                09:12\n              ")])])]),t._v(" "),l("div",{staticClass:"mx-2 mt-4 flex justify-end "},[l("div",{staticClass:"block w-1/2"},[l("p",{staticClass:"text-gray-600 text-sm bg-green-100 p-2 rounded-md rounded-br-none"},[t._v("\n                Archaga parvarish haqida so'ramoqchi edim\n              ")]),t._v(" "),l("p",{staticClass:"text-gray-400 text-xs flex pt-1 justify-end"},[t._v("\n                09:12\n              ")])])]),t._v(" "),l("div",{staticClass:" mt-4 flex justify-start w-1/2"},[l("div",{staticClass:"block"},[l("p",{staticClass:"text-gray-600 text-sm bg-orange-50 p-2 rounded-md rounded-bl-none"},[t._v("\n                Voalaykum assalom, qanday yordam bera olaman?\n              ")]),t._v(" "),l("p",{staticClass:"text-gray-400 text-xs pt-1 flex justify-start"},[t._v("\n                09:20\n              ")])])]),t._v(" "),l("div",{staticClass:"mx-2 mt-4 flex justify-end "},[l("div",{staticClass:"block w-1/2"},[l("p",{staticClass:"text-gray-600 text-sm bg-green-100 p-2 rounded-md rounded-br-none"},[t._v("\n                Archaga parvarish haqida so'ramoqchi edim\n              ")]),t._v(" "),l("p",{staticClass:"text-gray-400 text-xs flex pt-1 justify-end"},[t._v("\n                09:12\n              ")])])]),t._v(" "),l("div",{staticClass:" mt-4 flex justify-start w-1/2"},[l("div",{staticClass:"block"},[l("p",{staticClass:"text-gray-600 text-sm bg-orange-50 p-2 rounded-md rounded-bl-none"},[t._v("\n                Voalaykum assalom, qanday yordam bera olaman?\n              ")]),t._v(" "),l("p",{staticClass:"text-gray-400 text-xs pt-1 flex justify-start"},[t._v("\n                09:20\n              ")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-grow"},[e("div",{staticClass:"px-4 py-2 w-full"},[e("form",[e("div",{staticClass:" text-gray-600 focus-within:text-gray-800"},[e("input",{staticClass:"w-full py-3 text-sm rounded-full pl-5 focus:outline-none",attrs:{type:"message",placeholder:"Savolingizni yo'llang",autocomplete:"off"}})])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"border rounded-md shadow-md pb-2"},[l("div",{staticClass:"flex justify-center my-3"},[l("div",[l("img",{staticClass:"w-16 h-16 rounded-full",attrs:{src:"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}})])]),t._v(" "),l("div",{staticClass:"text-center self-center"},[l("p",{staticClass:"text-lg text-gray-600 text-center"},[t._v("\n            Guljahon Juraeva\n          ")]),t._v(" "),l("div",{staticClass:"flex justify-center"},[l("p",{staticClass:"text-xs text-green-600 my-2 px-2 py-1 font-medium rounded-full bg-green-50"},[t._v("\n              Chorvachilik va veterenariya\n            ")])]),t._v(" "),l("div",{staticClass:"flex justify-center"},[l("p",{staticClass:"text-gray-500 text-sm"},[l("span",{staticClass:"text-base text-gray-600 font-medium"},[t._v("4.7")]),t._v(" (256 ta baholash)\n            ")])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex justify-between"},[l("p",{staticClass:"text-gray-600 text-sm font-semibold"},[t._v("\n            Rasm va videolar\n          ")]),t._v(" "),l("p",{staticClass:"text-green-600 text-sm font-normal"},[t._v("\n            Barchasi\n          ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"grid grid-cols-3 gap-3"},[l("div",{staticClass:"flex my-3"},[l("img",{staticClass:"w-20 h-20 rounded-md",attrs:{src:"https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/04/pine_pollen-1296x728-header-1296x728.jpg?w=1155&h=1528"}})]),t._v(" "),l("div",{staticClass:"flex my-3"},[l("img",{staticClass:"w-20 h-20 rounded-md",attrs:{src:"https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/04/pine_pollen-1296x728-header-1296x728.jpg?w=1155&h=1528"}})]),t._v(" "),l("div",{staticClass:"flex my-3"},[l("img",{staticClass:"w-20 h-20 rounded-md",attrs:{src:"https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/04/pine_pollen-1296x728-header-1296x728.jpg?w=1155&h=1528"}})])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex justify-between"},[l("p",{staticClass:"text-gray-600 text-sm font-semibold"},[t._v("\n            Ilovalar\n          ")]),t._v(" "),l("p",{staticClass:"text-green-600 text-sm font-normal"},[t._v("\n            Barchasi\n          ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"grid grid-cols-1"},[l("div",{staticClass:"border-b py-2"},[l("p",{staticClass:"text-blue-600 text-sm"},[t._v("\n              https://www.youtube.com/watch?v...\n            ")])]),t._v(" "),l("div",{staticClass:"border-b py-2"},[l("p",{staticClass:"text-blue-600 text-sm"},[t._v("\n              https://www.youtube.com/watch?v...\n            ")])]),t._v(" "),l("div",[l("p",{staticClass:"text-blue-600 py-2 text-sm"},[t._v("\n              https://www.youtube.com/watch?v...\n            ")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex justify-between mt-3"},[l("p",{staticClass:"text-gray-600 text-sm font-semibold"},[t._v("\n            Fayllar\n          ")]),t._v(" "),l("p",{staticClass:"text-green-600 text-sm font-normal"},[t._v("\n            Barchasi\n          ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"block col-span-3"},[l("p",{staticClass:"text-gray-500 text-sm"},[t._v("\n              Chorvachilikdagi holat\n            ")]),t._v(" "),l("p",{staticClass:"text-gray-400 text-xs"},[t._v("\n              docx "),l("span",{staticClass:"ml-2"},[t._v("1.8 Mb")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"block col-span-3"},[l("p",{staticClass:"text-gray-500 text-sm"},[t._v("\n              Chorvani parvarishi\n            ")]),t._v(" "),l("p",{staticClass:"text-gray-400 text-xs"},[t._v("\n              pdf "),l("span",{staticClass:"ml-2"},[t._v("5.3 Mb")])])])}],!1,null,null,null);e.default=component.exports}}]);