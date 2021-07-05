(window.webpackJsonp=window.webpackJsonp||[]).push([[50,4,11],{318:function(t,e,n){"use strict";n.r(e);var r={name:"Breadcrumbs",props:{items:{type:Array,required:!0}}},o=n(63),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"flex",attrs:{"aria-label":"Breadcrumb"}},[n("ol",{staticClass:"flex items-center space-x-4"},[n("li",[n("div",[n("nuxt-link",{staticClass:"text-gray-400 hover:text-gray-500",attrs:{to:{path:"/"}}},[n("svg",{staticClass:"flex-shrink-0 h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"}})]),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Home")])])],1)]),t._v(" "),t._l(t.items,(function(e){return n("li",{key:e.text},[n("div",{staticClass:"flex items-center"},[n("svg",{staticClass:"flex-shrink-0 h-5 w-5 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})]),t._v(" "),n("NuxtLink",{staticClass:"ml-4 text-sm font-medium text-gray-500 hover:text-gray-700",attrs:{disabled:e.disabled,to:{path:e.link}}},[t._v("\n          "+t._s(e.text)+"\n        ")])],1)])}))],2)])}),[],!1,null,null,null);e.default=component.exports},321:function(t,e,n){"use strict";n.r(e);n(25);var r={name:"Sidebar",props:{sidebar:Array},methods:{showHideMenu:function(){this.showMenuInMobile=!this.showMenuInMobile},menuChildClicked:function(t,e){return t.children.forEach((function(t){t.current=e===t})),this.$router.push(this.localePath(e.route)),e},menuWithChildClicked:function(t){return this.sidebar.forEach((function(menu){t===menu?(menu.current=!menu.current,menu.children.forEach((function(t){t.current=!1}))):menu.current=!1})),t},menuClicked:function(t){return this.sidebar.forEach((function(menu){menu.current=t===menu})),this.$router.push(this.localePath(t.route)),t}}},o=n(63),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-span-1 flex overflow-hidden"},[n("div",{staticClass:"fixed inset-0 flex md:hidden",attrs:{role:"dialog","aria-modal":"true"}},[n("div",{staticClass:"fixed inset-0 bg-opacity-75",attrs:{"aria-hidden":"true"}}),t._v(" "),n("div",{staticClass:"relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4"},[n("div",{staticClass:"absolute top-0 right-0 -mr-12 pt-2"},[n("button",{staticClass:"\n                  ml-1\n                  flex\n                  items-center\n                  justify-center\n                  h-10\n                  w-10\n                  rounded-full\n                  focus:outline-none\n                  focus:ring-2 focus:ring-inset focus:ring-white\n                ",on:{click:t.showHideMenu}},[n("span",{staticClass:"sr-only"},[t._v("Close sidebar")]),t._v(" "),n("svg",{staticClass:"h-6 w-6 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]),t._v(" "),n("div",{staticClass:"mt-5 flex-1 h-0 overflow-y-auto"},[n("nav",{staticClass:"flex-1 px-2 py-4 b space-y-1"},t._l(t.sidebar,(function(e,r){return n("div",{key:r},[e.children?n("div",[n("a",{class:e.current?"cursor-pointer  text-white group flex items-center px-2 py-2 text-base font-medium rounded-md":"cursor-pointer text-gray-300  hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md",on:{click:function(n){return t.menuWithChildClicked(e)}}},[t._v("\n                "+t._s(t.$t(e.name))+"\n                "),n("font-awesome-icon",{staticClass:"text-gray-400 group-hover:text-gray-300 ml-4 flex-shrink-0 h-6 w-6",attrs:{icon:e.current?e.iconUp:e.iconDown}})],1),t._v(" "),t._l(e.children,(function(r,o){return n("div",{directives:[{name:"show",rawName:"v-show",value:e.current,expression:"item.current"}],key:o},[n("a",{class:r.current?"cursor-pointer  text-white group flex items-center px-2 py-2 text-base font-medium rounded-md":"cursor-pointer text-gray-300  hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md",attrs:{to:r.route},on:{click:function(n){return t.menuChildClicked(e,r)}}},[t._v("\n                  "+t._s(t.$t(r.name))+"\n                ")])])}))],2):n("a",{class:e.current?"cursor-pointer  text-white group flex items-center px-2 py-2 text-base font-medium rounded-md":"cursor-pointer text-gray-300  hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md",on:{click:function(n){return t.menuClicked(e)}}},[t._v("\n              "+t._s(t.$t(e.name))+"\n              "),n("font-awesome-icon",{staticClass:"text-gray-400 group-hover:text-gray-300 ml-4 flex-shrink-0 h-6 w-6",attrs:{icon:e.icon}})],1)])})),0)])]),t._v(" "),n("div",{staticClass:"flex-shrink-0 w-14",attrs:{"aria-hidden":"true"}})]),t._v(" "),n("div",{staticClass:"hidden md:flex md:flex-shrink-0 border shadow-md w-72"},[n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"flex  flex-col h-0 flex-1"},[n("div",{staticClass:"flex-1 flex flex-col overflow-y-auto"},[n("nav",{staticClass:"flex-1 bg-white px-2 "},t._l(t.sidebar,(function(e,r){return n("div",{key:r.id,staticClass:"border-b"},[e.children?n("div",[n("div",{staticClass:"flex justify-between"},[n("a",{class:e.current?"cursor-pointer bg-white text-gray-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md":"cursor-pointer text-gray-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md",on:{click:function(n){return t.menuWithChildClicked(e)}}},[t._v("\n                    "+t._s(t.$t(e.name))+"\n\n                  ")]),t._v(" "),n("div",{staticClass:"flex justify-end items-center"},[n("font-awesome-icon",{staticClass:"text-gray-700 group-hover:text-gray-700 mx-4 h-4 w-4",attrs:{icon:e.current?e.iconUp:e.iconDown}})],1)]),t._v(" "),t._l(e.children,(function(r,o){return n("div",{directives:[{name:"show",rawName:"v-show",value:e.current,expression:"item.current"}],key:o},[n("a",{class:r.current?"cursor-pointer ml-10 bg-white text-gray-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md":"cursor-pointer ml-10 text-gray-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md",attrs:{to:r.route},on:{click:function(n){return t.menuChildClicked(e,r)}}},[t._v("\n                    "+t._s(t.$t(r.name))+"\n                  ")])])}))],2):n("a",{class:e.current?"cursor-pointer bg-white text-gray-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md":"cursor-pointer text-gray-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md",on:{click:function(n){return t.menuClicked(e)}}},[t._v("\n                "+t._s(t.$t(e.name))+"\n              ")])])})),0)])])])])])}),[],!1,null,null,null);e.default=component.exports},361:function(t,e,n){"use strict";n.r(e);var r=[{id:1,name:"Barcha elonlar",current:!1},{id:2,name:"Osimliklarni ximoya qilish vositalari boyicha",iconDown:"chevron-down",iconUp:"chevron-up",children:[{name:"text.tradingList",route:"/online-consultation",current:!1},{name:"text.tradingCategories",route:"/online-consultation",current:!1}],current:!1},{id:3,name:"Elon kategoriyasi",iconDown:"chevron-down",iconUp:"chevron-up",children:[{name:"text.newsList",route:"/online-consultation",current:!1},{name:"text.newsCategories",route:"/online-consultation",current:!1},{name:"text.interestingInformation",route:"/online-consultation",current:!1},{name:"text.informationCategories",route:"/online-consultation",current:!1}],current:!1},{id:4,name:"Elon kategoriyasi",iconDown:"chevron-down",iconUp:"chevron-up",children:[{name:"text.newsList",route:"/online-consultation",current:!1},{name:"text.newsCategories",route:"/online-consultation",current:!1},{name:"text.interestingInformation",route:"/online-consultation",current:!1},{name:"text.informationCategories",route:"/online-consultation",current:!1}],current:!1},{id:5,name:"Elon kategoriyasi",iconDown:"chevron-down",iconUp:"chevron-up",children:[{name:"text.newsList",route:"/online-consultation",current:!1},{name:"text.newsCategories",route:"/online-consultation",current:!1},{name:"text.interestingInformation",route:"/online-consultation",current:!1},{name:"text.informationCategories",route:"/online-consultation",current:!1}],current:!1}],o=n(321),l=n(318),c={components:{Sidebar:o.default,Breadcrumbs:l.default},data:function(){return{showMenuInMobile:!1,locale:this.$i18n.locale,tradingFloor:r,items:[{text:"Savdo maydonchasi",link:"/trading-floor",disabled:!1}],consultants:[{url:"https://cdn.potatopro.com/cdn/ff/QorPLBXY-3RtL07IykH0JLdDK5llHo7zNstOONPhJtc/1618977322/public/styles/1200_wide/public/field/image/azerbaijan-potato-varieties-1200.jpg?itok=reNjDgCn",alt:"girl",name:"Мафтуна Лутфилаева",position:"Голланд ред скарлет картошкаси",info:"Марказий Осиёда пиёздош сабзавотлар етиштириш бўйича мутахассис ва маслаҳатчи"},{url:"https://cdn.potatopro.com/cdn/ff/QorPLBXY-3RtL07IykH0JLdDK5llHo7zNstOONPhJtc/1618977322/public/styles/1200_wide/public/field/image/azerbaijan-potato-varieties-1200.jpg?itok=reNjDgCn",alt:"girl",name:"Алия Наркулова",position:"Голланд ред скарлет картошкаси",info:"Марказий Осиёда пиёздош сабзавотлар етиштириш бўйича мутахассис ва маслаҳатчи"},{url:"https://cdn.potatopro.com/cdn/ff/QorPLBXY-3RtL07IykH0JLdDK5llHo7zNstOONPhJtc/1618977322/public/styles/1200_wide/public/field/image/azerbaijan-potato-varieties-1200.jpg?itok=reNjDgCn",alt:"girl",name:"Гулжахон Санжарбекова",position:"Голланд ред скарлет картошкаси",info:"Марказий Осиёда пиёздош сабзавотлар етиштириш бўйича мутахассис ва маслаҳатчи"},{url:"https://cdn.potatopro.com/cdn/ff/QorPLBXY-3RtL07IykH0JLdDK5llHo7zNstOONPhJtc/1618977322/public/styles/1200_wide/public/field/image/azerbaijan-potato-varieties-1200.jpg?itok=reNjDgCn",alt:"girl",name:"Гулжахон Санжарбекова",position:"Голланд ред скарлет картошкаси",info:"Марказий Осиёда пиёздош сабзавотлар етиштириш бўйича мутахассис ва маслаҳатчи"},{url:"https://cdn.potatopro.com/cdn/ff/QorPLBXY-3RtL07IykH0JLdDK5llHo7zNstOONPhJtc/1618977322/public/styles/1200_wide/public/field/image/azerbaijan-potato-varieties-1200.jpg?itok=reNjDgCn",alt:"girl",name:"Гулжахон Санжарбекова",position:"Голланд ред скарлет картошкаси",info:"Марказий Осиёда пиёздош сабзавотлар етиштириш бўйича мутахассис ва маслаҳатчи"},{url:"https://cdn.potatopro.com/cdn/ff/QorPLBXY-3RtL07IykH0JLdDK5llHo7zNstOONPhJtc/1618977322/public/styles/1200_wide/public/field/image/azerbaijan-potato-varieties-1200.jpg?itok=reNjDgCn",alt:"girl",name:"Гулжахон Санжарбекова",position:"Голланд ред скарлет картошкаси",info:"Марказий Осиёда пиёздош сабзавотлар етиштириш бўйича мутахассис ва маслаҳатчи"}]}}},d=n(63),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"},[n("div",{staticClass:"px-4 py-6 flex justify-between sm:px-0"},[n("breadcrumbs",{attrs:{items:t.items}}),t._v(" "),t._m(0)],1),t._v(" "),n("div",{staticClass:"grid grid-cols-4"},[n("sidebar",{attrs:{sidebar:t.tradingFloor}}),t._v(" "),n("div",{staticClass:"col-span-3"},[n("div",{staticClass:"grid grid-cols-3 gap-3"},t._l(t.consultants,(function(e){return n("div",{key:e.url},[n("div",{staticClass:"col-span-3 flex gap-4 h-auto"},[n("div",{staticClass:"gap-x-2 rounded-md hover:shadow-lg shadow-md"},[n("div",{},[n("img",{staticClass:"w-72 h-60 object-cover shadow-lg rounded-md rounded-b-none",attrs:{src:e.url,alt:e.alt}})]),t._v(" "),n("div",{staticClass:"p-3"},[n("h3",{staticClass:"text-gray-600 font-medium text-base"},[t._v("\n                    "+t._s(e.name)+"\n                  ")]),t._v(" "),n("p",{staticClass:"text-sm my-2 text-green-600"},[t._v("\n                    "+t._s(e.position)+"\n                  ")]),t._v(" "),n("div",{staticClass:"grid grid-cols-1 justify-between mr-3"},[t._m(1,!0),t._v(" "),n("div",{staticClass:"flex justify-between"},[n("div",{staticClass:"flex items-center"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"none",viewBox:"0 0 12 12"}},[n("path",{attrs:{stroke:"#9CA3AF","stroke-linecap":"round","stroke-linejoin":"round",d:"M7.5 6c0 .828-.672 1.5-1.5 1.5-.829 0-1.5-.672-1.5-1.5S5.17 4.5 6 4.5c.828 0 1.5.672 1.5 1.5z"}}),t._v(" "),n("path",{attrs:{stroke:"#9CA3AF","stroke-linecap":"round","stroke-linejoin":"round",d:"M1.229 6C1.866 3.971 3.761 2.5 6 2.5s4.134 1.471 4.771 3.5c-.637 2.029-2.532 3.5-4.77 3.5-2.24 0-4.135-1.471-4.772-3.5z"}})]),t._v(" "),n("span",{staticClass:"ml-2 text-xs text-gray-400"},[t._v("678")])]),t._v(" "),n("p",{staticClass:"text-gray-500 text-xs text-right"},[t._v("\n                        so'm / donasi\n                      ")])])])])])])])})),0)])],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-end"},[n("button",{staticClass:"\n            inline-flex\n            items-center\n            px-4\n            py-2\n            border border-transparent\n            shadow-sm\n            text-base\n            font-medium\n            rounded-md\n            text-white\n            bg-green-600\n            focus:outline-none\n          ",attrs:{type:"button"}},[t._v("\n          E'lon berish "),n("span",{staticClass:"ml-2"},[t._v("+")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-between mt-3"},[n("p",{staticClass:"text-green-800 bg-green-50 text-xs px-2 py-1 text-center rounded-xl w-14"},[t._v("\n                        Sotish\n                      ")]),t._v(" "),n("p",{staticClass:"text-green-600 text-base text-right"},[t._v("\n                        140,000,000\n                      ")])])}],!1,null,null,null);e.default=component.exports}}]);