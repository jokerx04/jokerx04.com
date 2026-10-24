import{r as i,j as s}from"./index-BDxE4Xl-.js";import{P as d}from"./PageBreadcrumb-eZkeWhE7.js";import{E as n,D as c}from"./index-CvbRN1I6.js";import"./dataTables.responsive--f8_cvm3.js";import{p as o,t as h}from"./data-BKPNkDrc.js";const m=t=>`
    <div class="grid md:grid-cols-3 items-center">
      <div class="col-md-4">
        <h5 class="fs-base mb-1">Rating:</h5>
        <div>${t.rating??"-"} ★</div>
      </div>
      <div class="col-md-4">
        <h5 class="fs-base mb-1">Status:</h5>
        <span class="badge badge-label ${t.status==="bullish"?"bg-success/15 text-success":"bg-danger/15 text-danger"}">${t.status.charAt(0).toUpperCase()+t.status.slice(1)}</span>
      </div>
      <div class="col-md-4">
        <h5 class="fs-base mb-1">Extra info:</h5>
        <div>Additional details here...</div>
      </div>
    </div>
  `,x=[{className:"dt-control dt-child-rows-btn",orderable:!1,data:null,defaultContent:'<svg  xmlns="http://www.w3.org/2000/svg"  width="22"  height="22"  viewBox="0 0 24 24"  fill="currentColor"  class="text-primary"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14zm8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z" /></svg>'},{data:"company"},{data:"symbol"},{data:"price",render:t=>`${t}`,className:"text-start"},{data:"change",render:t=>`${t}%`,className:"text-start"},{data:"volume",className:"text-start"},{data:"marketCap",render:t=>`${t}`}],p=()=>{n.use(c);const t=i.useRef(null);return i.useEffect(()=>{if(!t.current)return;const e=t.current.dt();if(!e)return;const l=function(){const a=this.closest("tr");if(!a)return;const r=e.row(a);r.child.isShown()?(r.child.hide(),a.classList.remove("shown"),this.innerHTML=`<span>
                     <svg  xmlns="http://www.w3.org/2000/svg"  width="22"  height="22"  viewBox="0 0 24 24"  fill="currentColor"  class="text-primary"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14zm8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z" /></svg>
                   </span>`):(r.child(m(r.data())).show(),a.classList.add("shown"),this.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" class="text-primary">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
               <path d="M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14zm4.071 7.071a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2h-6z"/>
                  </svg>`)};return e.on("click","td.dt-control",l),()=>{e.off("click","td.dt-control",l)}},[]),s.jsx(n,{ref:t,data:h.body,columns:x,options:{order:[[1,"asc"]],language:{paginate:o},dom:"<'md:flex justify-between items-center mb-3'<'hs-dropdown relative'l> f >rt<'md:flex justify-between align-center mt-2'ip>"},className:"table-striped dt-responsive table align-middle",children:s.jsx("thead",{className:"thead-sm text-2xs uppercase",children:s.jsxs("tr",{children:[s.jsx("th",{}),s.jsx("th",{children:"Company"}),s.jsx("th",{children:"Symbol"}),s.jsx("th",{children:"Price"}),s.jsx("th",{children:"Change"}),s.jsx("th",{children:"Volume"}),s.jsx("th",{children:"Market Cap"})]})})})},v=()=>s.jsxs("div",{className:"card",children:[s.jsx("div",{className:"card-header justify-between",children:s.jsx("h4",{className:"card-title",children:"Example"})}),s.jsx("div",{className:"card-body",children:s.jsx(p,{})})]}),j=()=>s.jsxs(s.Fragment,{children:[s.jsx(d,{title:"Child Row",subtitle:"DataTables"}),s.jsx("div",{className:"container",children:s.jsx("div",{className:"grid grid-cols-1 gap-base",children:s.jsx(v,{})})})]});export{j as default};
