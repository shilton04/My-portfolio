(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[281],{1469:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return o},getImageProps:function(){return l}});let r=i(8229),a=i(8883),s=i(3063),n=r._(i(1193));function l(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let o=s.Image},1542:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>l});var r=i(5155),a=i(3537),s=i(8809),n=i(8869);function l(){return(0,r.jsx)("main",{className:"pt-24 pb-16",children:(0,r.jsxs)("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[(0,r.jsxs)("div",{className:"max-w-3xl mx-auto text-center mb-16",children:[(0,r.jsxs)("h1",{className:"text-3xl md:text-4xl font-bold mb-6 tracking-tight",children:["My ",(0,r.jsx)("span",{className:"text-primary",children:"Portfolio"})]}),(0,r.jsx)("p",{className:"text-muted-foreground mb-8 leading-relaxed",children:"A curated selection of my recent work showcasing my skills in design, development, and animation."}),(0,r.jsx)(s.ProjectFilter,{})]}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:n.d&&n.d.map((e,t)=>(0,r.jsx)(a.ProjectCard,{title:e.title,description:e.description,tags:e.tags,imageSrc:e.imageSrc,link:e.link,githubLink:e.githubLink,delay:.1*(t+1)},e.id))})]})})}},2979:(e,t,i)=>{Promise.resolve().then(i.bind(i,1542))},3537:(e,t,i)=>{"use strict";i.d(t,{ProjectCard:()=>m});var r=i(5155),a=i(6766),s=i(6874),n=i.n(s),l=i(9788),o=i(3786),d=i(9099),c=i(7168);function m(e){let{title:t,description:i,tags:s=[],imageSrc:m,link:h,githubLink:u,delay:p=0}=e;return(0,r.jsx)(l.P.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.5,delay:p},children:(0,r.jsxs)(l.P.div,{whileHover:{y:-10},transition:{type:"spring",stiffness:300},className:"group bg-card rounded-lg overflow-hidden shadow-sm border border-border h-full flex flex-col",children:[(0,r.jsxs)("div",{className:"relative h-48 w-full overflow-hidden",children:[(0,r.jsx)(a.default,{src:m||"/placeholder.svg",alt:t||"Project",fill:!0,className:"object-cover transition-transform duration-500 group-hover:scale-105"}),(0,r.jsx)("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"})]}),(0,r.jsxs)("div",{className:"p-6 flex-grow flex flex-col",children:[(0,r.jsx)("h3",{className:"text-xl font-bold mb-2",children:t||"Untitled Project"}),(0,r.jsx)("p",{className:"text-muted-foreground mb-4 flex-grow",children:i||"No description available"}),(0,r.jsx)("div",{className:"flex flex-wrap gap-2 mb-4",children:s&&s.map((e,t)=>(0,r.jsx)("span",{className:"text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground",children:e},t))}),(0,r.jsxs)("div",{className:"flex gap-2 mt-auto",children:[h&&(0,r.jsx)(c.$,{asChild:!0,size:"sm",variant:"outline",className:"flex-1",children:(0,r.jsxs)(n(),{href:h,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center",children:["Live Demo",(0,r.jsx)(o.A,{className:"ml-2 h-4 w-4"})]})}),u&&(0,r.jsx)(c.$,{asChild:!0,size:"sm",variant:"outline",className:"flex-1",children:(0,r.jsxs)(n(),{href:u,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center",children:["Code",(0,r.jsx)(d.A,{className:"ml-2 h-4 w-4"})]})})]})]})]})})}},3786:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});let r=(0,i(9946).A)("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]])},3999:(e,t,i)=>{"use strict";i.d(t,{cn:()=>s});var r=i(2596),a=i(9688);function s(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,a.QP)((0,r.$)(t))}},6766:(e,t,i)=>{"use strict";i.d(t,{default:()=>a.a});var r=i(1469),a=i.n(r)},7168:(e,t,i)=>{"use strict";i.d(t,{$:()=>d});var r=i(5155),a=i(2115),s=i(9708),n=i(2085),l=i(3999);let o=(0,n.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,t)=>{let{className:i,variant:a,size:n,asChild:d=!1,...c}=e,m=d?s.DX:"button";return(0,r.jsx)(m,{className:(0,l.cn)(o({variant:a,size:n,className:i})),ref:t,...c})});d.displayName="Button"},8809:(e,t,i)=>{"use strict";i.d(t,{ProjectFilter:()=>l});var r=i(5155),a=i(2115),s=i(9788),n=i(7168);function l(){let[e,t]=(0,a.useState)("all"),i=[{id:"all",label:"All"},{id:"web",label:"Web Development"},{id:"ui",label:"UI/UX Design"},{id:"mobile",label:"Mobile"}];return(0,r.jsx)("div",{className:"flex flex-wrap justify-center gap-2 mb-8",children:i&&i.map(i=>(0,r.jsx)(s.P.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,r.jsx)(n.$,{variant:e===i.id?"default":"outline",size:"sm",onClick:()=>t(i.id),className:"rounded-full",children:i.label})},i.id))})}},8869:(e,t,i)=>{"use strict";i.d(t,{d:()=>r});let r=[{id:1,title:"E-Commerce Platform",description:"A modern e-commerce platform with advanced filtering, animations, and a seamless checkout experience.",tags:["Next.js","TypeScript","Tailwind CSS","Framer Motion"],imageSrc:"/placeholder.svg?height=600&width=800",link:"https://example.com/ecommerce",githubLink:"https://github.com/username/ecommerce",category:"web"},{id:2,title:"Portfolio Website",description:"A creative portfolio for a photographer with immersive galleries and smooth transitions.",tags:["React","GSAP","Styled Components"],imageSrc:"/placeholder.svg?height=600&width=800",link:"https://example.com/portfolio",githubLink:"https://github.com/username/portfolio",category:"web"},{id:3,title:"Dashboard UI",description:"An intuitive admin dashboard with data visualization, dark mode, and responsive design.",tags:["Next.js","Chart.js","Tailwind CSS"],imageSrc:"/placeholder.svg?height=600&width=800",link:"https://example.com/dashboard",githubLink:"https://github.com/username/dashboard",category:"ui"},{id:4,title:"Mobile App UI",description:"UI/UX design and prototype for a fitness tracking mobile application with animations.",tags:["Figma","Prototyping","UI/UX"],imageSrc:"/placeholder.svg?height=600&width=800",link:"https://example.com/fitness-app",category:"mobile"},{id:5,title:"Marketing Website",description:"A high-converting landing page with interactive elements and optimized performance.",tags:["HTML","CSS","JavaScript","GSAP"],imageSrc:"/placeholder.svg?height=600&width=800",link:"https://example.com/marketing",githubLink:"https://github.com/username/marketing",category:"web"},{id:6,title:"Web Application",description:"A full-featured web application with authentication, real-time updates, and animations.",tags:["React","Firebase","Tailwind CSS","Framer Motion"],imageSrc:"/placeholder.svg?height=600&width=800",link:"https://example.com/webapp",githubLink:"https://github.com/username/webapp",category:"web"}]},9099:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});let r=(0,i(9946).A)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]])}},e=>{var t=t=>e(e.s=t);e.O(0,[874,756,63,441,684,358],()=>t(2979)),_N_E=e.O()}]);