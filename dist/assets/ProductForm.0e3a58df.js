import{j as s,F as N,a as e,B as o,d as y,e as v,r as u,U as x,P as F,u as f,b as C}from"./index.b665e591.js";import{b as P,c as S,F as $,a as k,I as c}from"./Input.b0ec1bd0.js";const b=({name:t,sp_name:r,label:n,element:i,value:d})=>s(N,{children:[e("label",{htmlFor:t,className:"text-sm font-medium text-gray-700",children:n.toUpperCase()}),e(P,{name:t,children:({push:m,remove:p})=>s("div",{children:[d.map((g,a)=>s("div",{className:`${a>0?"flex flex-row gap-2":""}`,children:[s(S,{name:`${t}.${a}`,as:"select",className:"my-2 input",children:[s("option",{value:"",children:["Seleccionar ",r]}),i.map(({name:l,id:h})=>e("option",{value:h,children:l},h))]}),a>0&&e(o,{className:"btn-red self-center",type:"button",onClick:()=>p(a),children:e(y,{})})]},a)),e(o,{className:"btn-green my-2",type:"button",onClick:()=>m(""),children:e(v,{})})]})})]}),_=()=>{const{token:t}=u.exports.useContext(x),{products:r,categories:n,attributes:i,setProducts:d}=u.exports.useContext(F),m=f(),[p]=u.exports.useState({sku:"",name:"",price:0,list_price:0,categories:[""],attributes:[""]});return s("div",{className:"py-3",children:[e(o,{className:"btn-gray mb-5",href:"/products",children:"Volver"}),e($,{initialValues:p,onSubmit:async a=>{r.push(a),d(r),await C.post("http://localhost:8000/api/products",a,{headers:{Authorization:`Bearer ${t}`}}),m("/products")},children:({values:a,isSubmitting:l})=>s(k,{className:"flex flex-col gap-y-2",children:[s("div",{className:"grid grid-cols-12 gap-2",children:[e("div",{className:"col-span-12 md:col-span-6",children:e(c,{name:"sku",placeholder:"SKU",label:"SKU"})}),e("div",{className:"col-span-12 md:col-span-6",children:e(c,{name:"name",placeholder:"Nombre",label:"Nombre"})})]}),s("div",{className:"grid grid-cols-12 gap-2",children:[e("div",{className:"col-span-12 md:col-span-6",children:e(c,{type:"number",name:"price",label:"Precio",placeholder:"$1000"})}),e("div",{className:"col-span-12 md:col-span-6",children:e(c,{type:"number",name:"list_price",label:"Precio de lista",placeholder:"$1000"})})]}),e(b,{name:"categories",element:n,value:a.categories,sp_name:"categoria",label:"Categorias"}),e(b,{name:"attributes",element:i,value:a.attributes,sp_name:"atributo",label:"Atributos"}),e(o,{type:"submit",className:"btn-indigo-compact",disabled:l,children:l?"Cargando...":"Guardar"})]})})]})};export{_ as default};