import{d as h,r as k,a as p,o as x,e as w,f as a,w as t,u as i,b as o,E as d}from"./index-BW3nvoI6.js";const q=h({__name:"index",setup(C){const s=k(!1),c=()=>{s.value=!s.value};let g=[{type:"input",value:"",label:"用户名",prop:"username",placeholder:"请输入用户名",rules:[{required:!0,message:"用户名不能为空",trigger:"blur"},{min:2,max:6,message:"用户名在2-6位之间",trigger:"blur"}],attrs:{clearable:!0}},{type:"input",value:"",label:"密码",prop:"password",placeholder:"请输入密码",rules:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,max:15,message:"密码在6-15位之间",trigger:"blur"}],attrs:{showPassword:!0,clearable:!0}},{type:"select",value:"",placeholder:"请选择职位",prop:"role",label:"职位",attrs:{style:{width:"100%"}},rules:[{required:!0,message:"职位不能为空",trigger:"change"}],children:[{type:"option",label:"经理",value:"1"},{type:"option",label:"主管",value:"2"},{type:"option",label:"员工",value:"3"}]},{type:"checkbox-group",value:[],prop:"like",label:"爱好",rules:[{required:!0,message:"爱好不能为空",trigger:"change"}],children:[{type:"checkbox",label:"足球",value:"1"},{type:"checkbox",label:"篮球",value:"2"},{type:"checkbox",label:"排球",value:"3"}]},{type:"radio-group",value:"",prop:"gender",label:"性别",rules:[{required:!0,message:"性别不能为空",trigger:"change"}],children:[{type:"radio",label:"男",value:"male"},{type:"radio",label:"女",value:"female"}]},{type:"upload",label:"附件",prop:"pic",uploadAttrs:{action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",multiple:!0,limit:3}},{type:"editor",value:"",prop:"desc",label:"描述",placeholder:"请输入描述",rules:[{required:!0,message:"描述不能为空",trigger:"blur"}]}];const m=l=>{l.resetFields()},b=l=>{let e=l.validate(),r=l.getFormData();e(n=>{n?(console.log(r,"formData"),d.success("验证成功")):d.error("表单填写有误，请检查")})};let v=l=>{console.log("success"),console.log(l)},y=l=>{console.log("change"),console.log(l)};return(l,e)=>{const r=p("el-button"),n=p("m-modal-form");return x(),w("div",null,[a(r,{type:"primary",onClick:c},{default:t(()=>e[1]||(e[1]=[o("open")])),_:1}),a(n,{isScroll:"","show-close":!0,draggable:"",title:"编辑",width:"50%",options:i(g),visible:s.value,"onUpdate:visible":e[0]||(e[0]=u=>s.value=u),"on-change":i(y),"on-success":i(v)},{uploadArea:t(()=>[a(r,{type:"primary"},{default:t(()=>e[2]||(e[2]=[o("上传附件")])),_:1})]),uploadTip:t(()=>e[3]||(e[3]=[o(" jpg/png files with a size less than 500KB")])),footer:t(({form:u})=>[a(r,{onClick:f=>m(u)},{default:t(()=>e[4]||(e[4]=[o("取消")])),_:2},1032,["onClick"]),a(r,{type:"primary",onClick:f=>b(u)},{default:t(()=>e[5]||(e[5]=[o("提交")])),_:2},1032,["onClick"])]),_:1},8,["options","visible","on-change","on-success"])])}}});export{q as default};
