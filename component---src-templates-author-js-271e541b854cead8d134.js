(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"7R6r":function(e,C,t){"use strict";t.r(C);var a=t("q1tI"),n=t.n(a),r=t("Wbzz"),l=t("xiL2"),i=t("scdK");C.default=function(e){var C=e.data;return n.a.createElement(l.a,null,n.a.createElement("h1",null,C.strapiUser.username),n.a.createElement("ul",null,C.strapiUser.articles.map((function(e){return n.a.createElement("li",{key:e.id},n.a.createElement("h2",null,n.a.createElement(r.Link,{to:"/"+Object(i.string_to_slug)(e.title)},e.title)),n.a.createElement("p",null,e.content))}))))}},K9nn:function(e,C,t){},scdK:function(e,C){e.exports={string_to_slug:function(e){e=(e=e.replace(/^\s+|\s+$/g,"")).toLowerCase();for(var C="àáäâèéëêìíïîòóöôùúüûñç·/_,:;",t=0,a=C.length;t<a;t++)e=e.replace(new RegExp(C.charAt(t),"g"),"aaaaeeeeiiiioooouuuunc------".charAt(t));return e=e.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}}},xiL2:function(e,C,t){"use strict";var a=t("q1tI"),n=t.n(a),r=t("Wbzz"),l=(t("K9nn"),function(e){e.data;return n.a.createElement("svg",{width:"91",height:"97",viewBox:"0 0 91 97",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("g",{filter:"url(#filter0_d)"},n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M44.3845 54.5032L41.8678 49.692L51.2102 42.6629C50.0299 50.5255 50.6963 56.5747 54.3944 67.2539C53.1786 53.6736 54.5175 47.125 63.4215 43.0094L72.984 61.2012C68.1807 65.0777 67.5845 69.0985 66.9726 71.8262L62.9304 62.3462L68.5458 63.0524L57.6041 56.9554L67.8949 82.9948C68.7225 72.7082 70.1789 67.684 77.4473 62.2195L73.4262 55.156C79.4114 52.6457 81.4739 52.568 85.354 41.9118C80.1971 50.1439 76.6278 49.4982 71.7542 52.6029L66.7129 42.0745C74.1467 39.3526 77.0308 37.3216 81.6444 32.731C76.0602 35.465 72.6743 36.8478 65.6942 38.7606L63.3016 29.2662L70.3767 27.09C85.345 21.9752 77.8325 9.01108 70.0791 9.07874C72.6896 6.80253 73.5344 5.29069 74.5495 2.40702C71.863 6.19308 69.2185 7.84975 67.6846 8.05434C66.3681 8.22993 64.1697 8.37584 60.5412 6.94412C57.6337 5.59981 57.8785 3.02773 63.6385 1.40187C52.9979 0.239284 48.6092 4.40956 41.9939 16.6669C47.7826 8.03801 55.0977 8.88148 56.6685 10.5836C58.2393 12.2856 58.3111 15.7346 52.392 19.2735C55.7201 18.735 56.3948 19.1225 59.2447 17.3564C60.9534 16.2975 65.349 16.1494 69.0249 18.9287C67.3346 17.0876 65.5136 16.0705 63.4928 15.3135C60.2879 14.1129 61.5773 11.0577 65.5373 11.1224C77.5824 11.3194 78.4876 20.5246 71.2542 23.4574C67.3357 25.0462 65.3223 24.7175 60.1501 27.3302C54.978 29.943 52.6316 35.4008 51.1772 38.8873L43.8 44.2379L48.7847 29.3929C39.6366 34.5722 27.1898 40.6069 21.0822 40.2071C15.9706 39.8725 12.9204 35.8417 18.7066 29.0655C20.9168 26.4771 24.0664 27.4127 23.1548 30.4742C22.58 32.4045 22.3519 34.3479 22.9167 36.6978C22.7485 32.3328 25.5523 29.2264 27.509 28.6284C30.7725 27.631 30.8478 26.9044 33.3398 24.812C26.6734 26.9623 23.7318 24.8107 23.2146 22.6323C22.6974 20.454 26.4201 14.6208 37.4129 15.6637C22.7762 13.0133 16.495 13.6663 11.0243 22.112C15.9378 18.9129 18.3132 20.3006 17.707 23.2332C16.7376 26.7434 15.2731 28.2533 14.3198 29.1038C13.209 30.0947 10.1652 31.0094 5.25273 30.6585C8.36672 31.6756 10.1896 31.9815 13.7489 31.4687C10.5007 37.5808 14.6723 42.9817 22.5102 43.3664L29.2393 58.2602C26.1177 57.158 21.6056 57.6474 18.6029 59.0876C15.6002 60.5277 13.1742 63.124 11.775 66.3944C10.3758 69.6649 10.0986 73.3874 10.9948 76.8711C11.8909 80.3548 13.8996 83.3631 16.648 85.3375C19.3964 87.3119 22.6978 88.1185 25.9395 87.6074C29.1812 87.0964 32.143 85.3024 34.2752 82.5585C36.4073 79.8147 37.5651 76.3072 37.5335 72.6872L35.2584 76.6594C35.2767 78.751 30.6606 78.3766 29.4287 79.962C28.1967 81.5474 27.7808 83.67 25.9077 83.9653C20.7674 84.8197 16.4104 80.4053 15.2908 76.0531C14.773 74.0402 14.9088 70.0852 15.7172 68.1955C18.6401 61.3634 26.8583 59.3282 32.7562 64.2609C35.3637 57.8015 39.1754 56.5403 44.3845 54.5032ZM36.1614 38.5652C38.7609 37.5172 40.5532 36.3812 43.7196 35.0254L40.1931 46.837L36.1614 38.5652ZM54.2072 45.8085C54.3094 39.7496 54.7987 36.414 60.1831 31.1059C60.8306 35.3371 61.2944 37.5371 62.2391 39.848C57.8564 42.1401 56.1445 43.4463 54.2072 45.8085ZM33.4546 40.0992C33.4546 40.0992 29.1087 42.0985 25.8055 42.8846L32.6983 57.6259C35.3698 54.8501 36.655 53.9866 39.5873 53.0347L33.4546 40.0992Z",fill:"#303033"}),n.a.createElement("path",{d:"M44.5666 54.9688L45.0861 54.7657L44.8275 54.2714L42.5076 49.8364L50.5486 43.7864C49.5975 51.1856 50.3937 57.2288 53.9219 67.4175L54.8924 67.2093C54.2848 60.4221 54.3275 55.4831 55.5869 51.7419C56.789 48.1708 59.1164 45.6481 63.2021 43.6665L72.3522 61.0738C68.5076 64.3041 67.4206 67.6319 66.8215 70.197L63.7318 62.9509L68.4834 63.5485L68.7892 62.6156L57.8474 56.5187L56.6245 55.8372L57.1391 57.1392L67.4299 83.1785L68.3933 83.0349C68.8067 77.8968 69.3739 74.1397 70.7157 70.9951C72.0493 67.8699 74.1649 65.3128 77.7478 62.6192L78.0996 62.3547L77.8818 61.9722L74.1407 55.4004C74.4095 55.2896 74.6712 55.1828 74.9266 55.0786C77.21 54.1468 78.9739 53.4271 80.5243 51.9507C82.3635 50.1994 83.881 47.4186 85.8238 42.0829L84.9303 41.6464C82.3873 45.7057 80.2609 47.5401 78.1954 48.7486C77.2701 49.29 76.3524 49.7089 75.3843 50.1508C75.2576 50.2087 75.1301 50.2669 75.0016 50.3258C74.0393 50.7671 73.0332 51.2438 71.9647 51.8849L67.4009 42.3534C70.8623 41.064 73.3415 39.9064 75.5053 38.5249C77.7762 37.075 79.6799 35.391 81.997 33.0854L81.4245 32.2819C75.9984 34.9385 72.6707 36.3083 66.0541 38.1427L63.9025 29.6045L70.5237 27.5679L70.531 27.5656L70.5383 27.5631C74.3496 26.2608 76.7939 24.437 78.1522 22.3843C79.5159 20.3234 79.7528 18.0789 79.2334 16.0187C78.3074 12.3462 74.9598 9.2132 71.2771 8.66379C72.1471 7.83127 72.7985 7.06433 73.3319 6.24302C74.0285 5.17053 74.509 4.0279 75.0211 2.57304L74.1417 2.11767C72.8225 3.97679 71.5233 5.29925 70.3802 6.1772C69.2281 7.06215 68.2651 7.47248 67.6184 7.55873C66.3748 7.72461 64.2678 7.87452 60.7382 6.48435C60.0673 6.17215 59.6326 5.81338 59.4079 5.4673C59.1954 5.14019 59.1597 4.81417 59.3019 4.469C59.4554 4.0963 59.8391 3.65086 60.5801 3.18906C61.3152 2.73097 62.363 2.28145 63.7744 1.88306L63.6928 0.904824C58.2934 0.31489 54.3953 1.07211 51.0076 3.60125C47.6565 6.10306 44.8616 10.3006 41.5539 16.4294L42.4091 16.9454C45.2422 12.7223 48.417 10.8599 51.0288 10.2375C52.3393 9.92524 53.5114 9.924 54.4364 10.0943C55.3776 10.2676 56.0102 10.6075 56.3011 10.9227C56.9665 11.6437 57.3294 12.7397 56.8665 14.0761C56.3949 15.4375 55.044 17.1054 52.1354 18.8444L52.4718 19.7671C53.2767 19.6369 53.9239 19.5616 54.4921 19.4955L54.5238 19.4918C55.0956 19.4252 55.6024 19.3658 56.0972 19.2653C57.1122 19.059 58.0489 18.6856 59.5081 17.7814C60.2357 17.3305 61.6384 17.029 63.3471 17.2007C65.037 17.3705 66.9657 17.9986 68.7234 19.3276L69.3932 18.5906C67.6362 16.6768 65.7414 15.6219 63.6682 14.8453C62.9361 14.571 62.5261 14.2147 62.334 13.889C62.1504 13.5778 62.1416 13.2585 62.2825 12.9524C62.58 12.3058 63.6425 11.5915 65.5292 11.6224C71.4537 11.7192 74.4122 14.0197 75.1473 16.4109C75.8777 18.7868 74.5158 21.5955 71.0663 22.9941C69.5262 23.6185 68.2963 23.938 67.0133 24.2714C66.6946 24.3542 66.3727 24.4378 66.0419 24.5272C64.3773 24.9769 62.5477 25.5589 59.9247 26.884C54.6326 29.5573 52.2221 35.0882 50.7699 38.565L44.7714 42.9157L49.2587 29.5521L49.6741 28.3148L48.5383 28.9578C43.974 31.542 38.5939 34.3353 33.5998 36.4311C31.1026 37.4791 28.7101 38.3492 26.5696 38.932C24.4218 39.5167 22.5608 39.8029 21.1148 39.7082C18.6536 39.5471 16.8603 38.5105 16.2785 36.8836C15.6928 35.2456 16.2307 32.735 19.0868 29.3902C20.1097 28.1922 21.2561 27.9136 21.9539 28.1289C22.2943 28.2339 22.553 28.4575 22.6945 28.7929C22.8395 29.1365 22.88 29.645 22.6756 30.3315C22.082 32.3251 21.8406 34.3599 22.4305 36.8147L23.4163 36.6786C23.3366 34.6102 23.9608 32.8444 24.833 31.5264C25.7145 30.1944 26.8196 29.362 27.6551 29.1066C29.3227 28.5969 30.2176 28.1432 31.0185 27.5271C31.4088 27.227 31.7704 26.8929 32.1759 26.5178L32.1981 26.4972C32.6012 26.1243 33.0595 25.7002 33.6613 25.1949L33.1863 24.3361C29.9117 25.3924 27.6256 25.3671 26.1286 24.8708C24.645 24.3791 23.9161 23.4228 23.7011 22.5168C23.6104 22.1349 23.6938 21.4909 24.1098 20.7138C24.5182 19.9511 25.2244 19.1068 26.2882 18.3469C28.4101 16.8311 31.9619 15.6488 37.3657 16.1615L37.502 15.1717C30.186 13.8469 24.8667 13.3271 20.6751 14.2382C16.4322 15.1605 13.3929 17.5356 10.6046 21.8402L11.2971 22.531C12.4987 21.7487 13.5252 21.2601 14.3716 21.0037C15.2222 20.746 15.8584 20.7322 16.3021 20.8551C16.7269 20.9728 16.9987 21.2202 17.151 21.5704C17.3099 21.9357 17.355 22.4544 17.2206 23.1162C16.2813 26.5058 14.8809 27.9331 13.9869 28.7307C13.5265 29.1414 12.5876 29.5935 11.112 29.8944C9.65071 30.1924 7.70818 30.3326 5.28836 30.1598L5.09749 31.1338C6.66573 31.646 7.93864 31.9893 9.28005 32.1344C10.3867 32.2541 11.5243 32.2373 12.8998 32.0824C11.6564 34.9776 11.978 37.733 13.5718 39.8647C15.259 42.1215 18.3058 43.592 22.1792 43.8482L28.3384 57.4806C26.9359 57.1573 25.3713 57.0887 23.8332 57.2224C21.8894 57.3913 19.9505 57.8867 18.3867 58.6367C15.2669 60.1331 12.7586 62.8241 11.3153 66.1978C9.87221 69.5709 9.58721 73.4064 10.5105 76.9957C11.4339 80.5852 13.5064 83.6962 16.3563 85.7436C19.2078 87.7921 22.6413 88.6336 26.0174 88.1013C29.3925 87.5692 32.4648 85.7031 34.67 82.8653C36.8743 80.0286 38.066 76.4104 38.0334 72.6829L38.0173 70.8364L37.0996 72.4387L34.8246 76.4109L34.7573 76.5284L34.7585 76.6637C34.761 76.9556 34.6214 77.1849 34.2615 77.4121C33.8811 77.6523 33.3333 77.8352 32.6774 78.0191C32.5211 78.0629 32.3585 78.1068 32.1926 78.1515C31.6927 78.2865 31.1635 78.4293 30.6908 78.6014C30.066 78.8289 29.4324 79.1422 29.0339 79.6552C28.7027 80.0813 28.4312 80.5373 28.1871 80.9685C28.1249 81.0782 28.0651 81.1854 28.0066 81.2902C27.8297 81.6069 27.6653 81.9012 27.488 82.1771C27.0235 82.8999 26.555 83.3571 25.8298 83.4714L25.8257 83.4721C23.4276 83.8707 21.1949 83.0456 19.4093 81.5756C17.6187 80.1016 16.3083 78.0013 15.7751 75.9285C15.5335 74.9896 15.4371 73.553 15.5061 72.1019C15.5754 70.6458 15.8077 69.2551 16.1769 68.3922C18.9667 61.8711 26.7921 59.9246 32.4354 64.6445L32.9626 65.0854L33.2198 64.4481C34.4925 61.2955 36.0419 59.4461 37.8852 58.1306C39.6101 56.8996 41.6064 56.1221 43.9717 55.2009C44.1674 55.1246 44.3657 55.0474 44.5666 54.9688ZM40.0808 45.4654L36.8439 38.8242C37.954 38.3547 38.9322 37.8676 39.9515 37.3579L40.0376 37.3149C40.9242 36.8715 41.8479 36.4095 42.9309 35.9191L40.0808 45.4654ZM55.685 38.3443C56.3892 36.3797 57.6229 34.4653 59.8415 32.1621C60.3785 35.5445 60.824 37.5819 61.6084 39.6148C58.1414 41.4491 56.3676 42.6849 54.7409 44.4335C54.8211 42.0719 55.0303 40.1709 55.685 38.3443ZM38.894 52.7396C37.6697 53.1637 36.7081 53.6028 35.7675 54.2304C34.838 54.8507 33.9454 55.6443 32.8448 56.7589L26.5145 43.2204C28.0508 42.8076 29.7221 42.1928 31.054 41.6615C31.8094 41.3602 32.4607 41.0836 32.9234 40.8823C33.0301 40.8359 33.1268 40.7935 33.2125 40.7556L38.894 52.7396Z",stroke:"#E3E3E3"})),n.a.createElement("defs",null,n.a.createElement("filter",{id:"filter0_d",x:"0.942139",y:"0.215332",width:"89.3514",height:"96.5418",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},n.a.createElement("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),n.a.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),n.a.createElement("feOffset",{dy:"4"}),n.a.createElement("feGaussianBlur",{stdDeviation:"2"}),n.a.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),n.a.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),n.a.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"}))))}),i=function(e){var C=e.items;return n.a.createElement("ul",{className:"menu"},C.map((function(e,C){var t=e.name,a=e.link;return n.a.createElement("li",{key:C},n.a.createElement(r.Link,{to:a},t))})))},c=(t("yhbT"),function(e){e.siteTitle;return n.a.createElement("header",{className:"header"},n.a.createElement("a",{href:"",className:"logo-wrapper"},n.a.createElement(l,null)),n.a.createElement("input",{className:"menu-btn",type:"checkbox",id:"menu-btn"}),n.a.createElement("label",{className:"menu-icon",htmlFor:"menu-btn"},n.a.createElement("span",{className:"navicon"})),n.a.createElement(i,{items:[{name:"Jorge Luis Parihuamán Arivilca"}]}))});c.defaultProps={siteTitle:""};var L=c;C.a=function(e){var C=e.children,t=Object(r.useStaticQuery)("3649515864");return n.a.createElement(n.a.Fragment,null,n.a.createElement(L,{siteTitle:t.site.siteMetadata.title}),n.a.createElement("main",{className:"main"},C))}},yhbT:function(e,C,t){}}]);
//# sourceMappingURL=component---src-templates-author-js-271e541b854cead8d134.js.map