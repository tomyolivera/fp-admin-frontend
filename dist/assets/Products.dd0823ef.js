import{j as s,a as e,r as o,P as n,L as d}from"./index.b665e591.js";import{T as p,a as i}from"./TableButtonsAction.0d7be34e.js";const l=({sku:t,name:a,price:r,list_price:c})=>s("tr",{children:[e("td",{className:"px-6 py-4 whitespace-nowrap",children:t}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:a}),s("td",{className:"px-6 py-4 whitespace-nowrap",children:["$",r]}),s("td",{className:"px-6 py-4 whitespace-nowrap",children:["$",c]}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:e(p,{})})]}),m=()=>{const{loading:t,products:a}=o.exports.useContext(n),[r]=o.exports.useState(["SKU","Nombre","Precio","Precio de lista"]);return t?e(d,{}):e("div",{children:e(i,{head:r,createButtonLabel:"Producto",hrefCreateButton:"/products/add",Element:l,elements:a})})};export{m as default};