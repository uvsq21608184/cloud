/***@licence*Copyright2014ATInternet,AllRightsReserved.*ATInternetTag4.5.9*/window.Xtconf={xt1:'.aeroportsdeparis.fr',xtLogDom:'.xiti.com/hit.xiti',xtfirst:false,xt2:'1',xt3:365,xt4sec:'20',xt4rss:'20',xt4epr:'20',xt4erec:'20',xt4adi:'20',xt4adc:'20',xt4al:'20',xtsds:'https://logs1406',xtsd:'http://logc406',xtsts:0,xtsite:function(x){return x},xtscript:'',xtpreview:false,xtnocookies:false,xtcode:'',xt46:'1',xt50:'1',xt48:'',xt54:false,xt58:false,xtdocl:false,xttredir:500,xtkwv:'xtmc',xtkwp:'xtnp'};
window.Xtcore=function(){function C(b){return"undefined"!==typeof b}function D(b){var a=typeof b;if("object"!==a||null===b)return"string"===a&&(b=encodeURIComponent('"'+b+'"')),String(b);var e,c,d=[],g=b&&b.constructor==Array;for(e in b)c=b[e],a=typeof c,b.hasOwnProperty(e)&&"function"!==a&&("string"===a?c=encodeURIComponent('"'+c.replace(/[^\\]"/g,'\\"')+'"'):"object"===a&&null!==c&&(c=D(c)),d.push((g?"":encodeURIComponent('"'+e+'":'))+String(c)));return(g?"[":"{")+String(d)+(g?"]":"}")}function oa(b){return b.replace(/%3C/g,
"<").replace(/%3E/g,">").replace(/[<>]/g,"")}function n(b,a,e,c,d){a=0===d?a:encodeURIComponent(a);pa||(j.cookie=b+"="+a+";expires="+e.toGMTString()+";path=/"+c)}function m(b,f,e){var c;try{c=S.location.href}catch(d){c=a.location.href}f=null===f||!C(f)?oa(c.toLowerCase().replace(/%3d/g,"=")):f;if(0<f.indexOf(b+"=")){f=f.substr(1);b=f.substr(f.indexOf(b+"="));if(2!=e){if(1!=e)try{b=decodeURIComponent(b)}catch(g){b=unescape(b)}if(f=b.match(/(\[[^\]]*\])/g)){c="";for(var l=0,k=f.length;l<k;l++)c=f[l].substring(1,
f[l].length-1),b=b.replace(c,encodeURIComponent(c))}}f=b.indexOf("#");c=b.search(/&.[^&]+=/gi);c=-1==c?-1==f?b.length:f:0<f&&f<c?f:c;return 1==e?decodeURIComponent(b.substring(b.indexOf("=")+1,c)):2==e?b.substring(b.indexOf("=")+1,c):b.substring(b.indexOf("=")+1,c).replace("&","%26")}return null}function E(b,a,e,c){if((0===qa||3==qa||"C"!=b)&&"P"!=b)Xa&&"0"==$&&"F"==b?(v=v.replace("&p="+m("p",v,2),""),v=v.replace("&s2="+m("s2",v),""),AT_hit.isPreviewOrPrerendering()||AT_hit.sendTag(b,null,null,a),
Xa=!1):AT_hit.sendTag(b,a);null!==e&&(C(e)&&"M"!=b)&&(""===c||null===c?j.location=e:window.open(e,"xfen","").focus())}function F(b){b-=100*Math.floor(b/100);return 10>b?"0"+b:b}function T(b){return Math.floor(Math.random()*Math.pow(10,b))}var ra=this;ra.sentHits=[];var h=Xtconf.xt1,Ya=Xtconf.xtscript,Za=window.xtLogDom=Xtconf.xtLogDom,vb=Xtconf.xtpreview,$a=Xtconf.xtfirst,pa=Xtconf.xtnocookies,ab=Xtconf.xtcode,$=Xtconf.xt46,sa=Xtconf.xt50,bb=Xtconf.xt48,wb=Xtconf.xt54,xb=Xtconf.xt58,yb=Xtconf.xtdocl,
zb=Xtconf.xt2,Ab=Xtconf.xt3;window.xttredir=Xtconf.xttredir;var cb=Xtconf.xtkwv,db=Xtconf.xtkwp,ta=[],z=[];z.sec=Xtconf.xt4sec;z.rss=Xtconf.xt4rss;z.epr=Xtconf.xt4epr;z.erec=Xtconf.xt4erec;z.adi=Xtconf.xt4adi;z.adc=Xtconf.xt4adc;z.al=Xtconf.xt4al;z.es=Xtconf.xt4epr;z.ad=Xtconf.xt4adi;var ua=[],Xa=!0,N=!1,va=null,a=window.xw=window,j=window.xd=document,s=navigator,Bb=window.xtv=a.xtczv?"4.5.9-"+a.xtczv:"4.5.9",h=window.xt1=a.xtdmc?";domain="+a.xtdmc:""!==h?";domain="+h:"",S=a.xtnv?a.xtnv:
j,Cb=window.xt7=a.xtsdi?a.xtsdi:a.xtsd?a.xtsd+Za:("https:"===j.location.protocol?Xtconf.xtsds:Xtconf.xtsd)+Za,aa=a.xtsts?a.xtsts:Xtconf.xtsts,ba="";if(wb){var wa="";try{wa=S.location.href}catch($b){wa=a.location.href}var Db=/#.*/,xa=null;try{xa=wa.match(Db)[0]}catch(ac){xa=null}ba=(ba=xa)?"&sta="+encodeURIComponent(oa(ba)):""}var eb=a.xtcustom?D(a.xtcustom):"",I=window.xt8=a.xtsite?a.xtsite:0,Eb=window.xt9=a.xtn2?"&s2="+a.xtn2:"",Fb=window.xt8b=(0===I?"":"s="+I)+(0===aa?"":0===I?"sts="+aa:"&sts="+
aa),ca=window.xtp=a.xtpage?a.xtpage:"",fb=a.xto_force?a.xto_force.toLowerCase():null,J="redirect"===I,Gb=a.xtdi?"&di="+a.xtdi:"",Hb=a.xtidp?"&idpays="+a.xtidp:"",Ib=a.xtidprov?"&idprov="+a.xtidprov:"",r=a.xtparam?a.xtparam:"",$=a.xtnopage&&"1"===a.xtnopage?"0":$,sa=a.xtergo&&"0"===a.xtergo?"0":sa,qa=a.scriptOnClickZone&&"1"===sa?a.scriptOnClickZone:0,Jb=""!==ab?"&code="+ab:"",ya=[],da=[],U=[],ea=[],za=[],L=[];window.xt44=a.xtprod_load?"&pdtl="+a.xtprod_load:"";a.addEventListener?a.addEventListener("unload",
function(){},!1):a.attachEvent&&a.attachEvent("onunload",function(){});j.addEventListener?(j.addEventListener("keydown",function(){N=!0},!1),j.addEventListener("keyup",function(){N=!1},!1)):j.attachEvent&&(j.attachEvent("onkeydown",function(){N=!0}),j.attachEvent("onkeyup",function(){N=!1}));var Kb=a.roimt&&0>r.indexOf("&roimt",0)?"&roimt="+a.roimt:"",Lb=0>r.indexOf("&mc=",0)?a.xtmc?"&mc="+a.xtmc:m(cb)?"&mc="+m(cb):m("xtmc")?"&mc="+m("xtmc"):"":"",Mb=m("xtcr")?"&mcrg="+m("xtcr"):"",Nb=a.xtac&&0>r.indexOf("&ac=",
0)?"&ac="+a.xtac:"",Ob=a.xtat&&0>r.indexOf("&at=",0)?"&at="+a.xtat:"",gb=a.xtan&&0>r.indexOf("&an=",0)?"&an="+a.xtan:"",Pb=0>r.indexOf("&np=",0)?a.xtnp?"&np="+a.xtnp:m(db)?"&np="+m(db):m("xtnp")?"&np="+m("xtnp"):"":"",Qb=a.xtprm&&0>r.indexOf("&x",0)?a.xtprm:"",r=r+(Kb+Lb+Mb+Nb+(""!==gb?gb:Ob)+Pb+Qb+ba),Aa="";try{Aa=top.document.referrer}catch(bc){try{Aa=S.referrer}catch(cc){}}var fa=screen,u=window.xt21=new Date,hb=u.getTime()/36E5,p=window.xtf1=function(b,a){if(pa)return null;a=null!==a&&C(a)?a:
"0";var e=RegExp("(?:^| )"+b+"=([^;]+)").exec(j.cookie)||null;if(e&&(e=oa(e[1]),"1"!=a))try{e=decodeURIComponent(e)}catch(c){e=unescape(e)}return e};window.xt_addchain=function(b,a){var e=a?a:"abmv",c=!ta[e]?0:ta[e];c++;r+="&"+e+""+c+"="+b;ta[e]=c};"function"===typeof xt_adch&&xt_adch();window.wck=n;window.xtf3=m;window.xt_mvt=function(b,a,e,c,d){if(c)for(var g=1;g<c.length+1;g++)e+="&"+(d?d:"abmv")+g+"="+c[g-1];E("","&p="+b+"&s2="+a+"&abmvc="+e+"&type=mvt")};window.xt_med=function(b,a,e,c,d,g,l,
k){c="F"==b&&(null===c||!C(c))?l?"&stc="+D(l):"":"M"==b?"&a="+c+"&m1="+d+"&m2="+g+"&m3="+l+"&m4="+k:"&clic="+c+(l?"&stc="+D(l):"");E(b,"&s2="+a+"&p="+e+c,d,g)};if($a=window.xtfirst=-1!=s.userAgent.indexOf("Safari")&&0>s.userAgent.indexOf("Chrome")||-1!=s.userAgent.indexOf("iPhone")||-1!=s.userAgent.indexOf("iPod")||-1!=s.userAgent.indexOf("iPad")||$a||a.xtidc||pa){var G=a.xtidc?a.xtidc:p("xtidc"),H;null===G&&(G=Math.floor(999999*Math.random()),H=u.getYear(),100>H&&(H+=2E3),100<H&&2E3>H&&(H+=1900),
G=F(H)+""+F(u.getMonth())+""+F(u.getDate())+""+F(u.getHours())+""+F(u.getMinutes())+""+F(u.getSeconds())+""+G);var Ba=new Date;Ba.setTime(Ba.getTime()+31536E7);n("xtidc",G,Ba,h,1);var ib=p("xtidc"),G=G+(!a.xtidc&&(null===ib||ib!=G)?"-NO":"")}window.xt_ad=function(b,f,e,c){E("AT","&atc="+b+"&type=AT&patc="+a.xtpage+"&s2atc="+a.xtn2+(c?"&stc="+D(c):""),f,e)};window.xt_adi=function(b,a,e){E("AT","&ati="+b+"&type=AT",a,e)};window.xt_adc=function(b,f,e,c,d){E("AT","&atc="+f+"&type=AT&patc="+a.xtpage+"&s2atc="+
a.xtn2+(d?"&stc="+D(d):""));return AT_click.do_navig(b,e,c?"_blank":null,!0)};window.xt_click=function(b,a,e,c,d,g,l,k){d=("F"==a&&(null===d||!C(d))?"":"&clic="+d)+(k?"&stc="+D(k):"");E(a,"&s2="+e+"&p="+c+d);return AT_click.do_navig(b,g,l?"_blank":null,!0)};window.xt_form=function(b,a,e,c,d,g,l){d=("F"==a&&(null===d||!C(d))?"":"&clic="+d)+(l?"&stc="+D(l):"");E(a,"&s2="+e+"&p="+c+d);return AT_click.do_submit(b,!0,g)};window.xt_rm=function(b,f,e,c,d,g,l,k,q,m,n,h,j,p){d="&p="+e+"&s2="+f+"&type="+b+
"&a="+c+"&m5="+n+"&m6="+h+(null!==d&&"0"!=d?"&"+d:"")+(null!==l&&"pause"!=c&&"stop"!=c?"&m1="+l+"&"+k+"&m3="+q+"&m4="+m+"&m7="+j+"&m8="+p+"&prich="+a.xtpage+"&s2rich="+a.xtn2:"")+(null!==g&&"0"!=g&&null!==l?"&rfsh="+g:"")+"&rn="+T(10);E(b,d);d=new Date;if(null!==g&&"0"!=g&&("play"==c||"play&buf=1"==c||"refresh"==c)){L[b]&&18E5<d.getTime()-L[b]&&(U[b]=0);if(("play"==c||"play&buf=1"==c)&&!U[b])U[b]=d.getTime()/1E3,ea[b]=parseInt(l),c=Math.floor(g),c=1500<c?1500:5>c?5:c,ya[b]=c,da[b]=c,L[b]=!1;else if("refresh"==
c&&("live"==h||!ea[b]||300<ea[b]&&2>100*ya[b]/ea[b]))c=L[b]?za[b]:d.getTime()/1E3-U[b],5>100*da[b]/(c+30)&&(da[b]=5*((c+30)/100)),L[b]&&(L[b]=!1,U[b]=d.getTime()/1E3-za[b]),za[b]=c;ua[b]=a.setTimeout("xt_rm('"+b+"','"+f+"','"+e+"','refresh','0','"+g+"',null,'"+k+"','"+q+"','"+m+"','"+n+"','"+h+"')",1E3*da[b])}else if(("pause"==c||"stop"==c)&&null!==ua)a.clearTimeout(ua[b]),"stop"==c?ya[b]=0:L[b]=d.getTime()};var Ca=window.xtidpg=F(u.getHours())+""+F(u.getMinutes())+""+F(u.getSeconds())+""+T(7),t=
0,jb=0;window.xt16="";window.xt_addProduct=function(b,f,e,c,d,g){t++;a.xt16+="&pdt"+t+"=";a.xt16+=b?b+"::":"";a.xt16+=f?f:"";a.xt16+=e?"&qte"+t+"="+e:"";a.xt16+=c?"&mt"+t+"="+c:"";a.xt16+=d?"&dsc"+t+"="+d:"";a.xt16+=g?"&pcode"+t+"="+g:""};window.xt_rd=T;window.xt_addProduct_v2=function(b,f,e,c,d,g,l,k,q){t++;a.xt16+="&pdt"+t+"=";a.xt16+=b?b+"::":"";a.xt16+=f?f:"";a.xt16+=e?"&qte"+t+"="+e:"";a.xt16+=c?"&mt"+t+"="+c:"";a.xt16+=d?"&mtht"+t+"="+d:"";a.xt16+=g?"&dsc"+t+"="+g:"";a.xt16+=l?"&dscht"+t+"="+
l:"";a.xt16+=q?"&roimt"+t+"="+q:"";a.xt16+=k?"&pcode"+t+"="+k:""};window.xt_addProduct_load=function(b,f,e){f&&(jb++,a.xt44+=1==jb?"&pdtl=":"|",a.xt44+=b?b+"::":"",a.xt44+=f,a.xt44+=e?";"+e:"")};"function"==typeof xt_cart?xt_cart():a.xt16="";window.xt_ParseUrl=function(b,a,e){AT_hit.sendTag(e?"F":"old",a)};window.xt_ParseUrl3=function(b,a,e,c,d){AT_hit.sendTag("&ati="==d?"AT":"PDT",a,null,"&type="+("&ati="==d?"AT":"PDT"))};window.AT_click={id:0,objs:[],elem:function(b,a,e,c,d,g,l,k){var q={};q.urlDest=
d;q.type=b;q.n2=a;q.label=e;q.typeClick=c;q.target=g;q.submit=!1!==d;q.redir=!C(l)?!0:l;q.xtcust=C(k)?"&stc="+D(k):"";return q},addListener:function(b,a,e){window.addEventListener?b.addEventListener(a,e,!1):window.attachEvent&&b.attachEvent("on"+a,e)},tag:function(b,a,e,c,d,g,l,k,q){if(b&&"function"==typeof b.setAttribute)this.addElem(b,a,e,c,d,g,l,k,q);else if("object"==typeof b)for(var m in b)b.hasOwnProperty(m)&&"function"==typeof b[m].setAttribute&&this.addElem(b[m],a,e,c,d,g,l,k,q)},addElem:function(a,
f,e,c,d,g,l,k,m){this.id++;a.setAttribute("data-xtclickid",this.id);this.objs[this.id]=this.elem(f,e,c,d,g,l,k,m);"FORM"!=a.nodeName?this.addListener(a,"click",this.on_click_submit):this.addListener(a,"submit",this.on_click_submit)},on_click_submit:function(a){try{var f=a.target||a.srcElement,e=f.getAttribute("data-xtclickid"),c={},d="",g=a.defaultPrevented,l=window.AT_click;if(!e)for(var k=f.parentNode;k;){if(k.getAttribute("data-xtclickid")){e=k.getAttribute("data-xtclickid");break}k=k.parentNode}e&&
(c=l.objs[e],"AT"!=c.type?d+="&p="+c.label+("C"==c.type?"&clic="+c.typeClick:""):"AT"==c.type&&(d+="&type=AT&atc="+c.label),d+=c.xtcust,E(c.type,"&s2="+c.n2+d),!g&&c.redir&&(a.preventDefault(),"FORM"!=f.nodeName?l.do_navig(f,c.urlDest,c.target):l.do_submit(f,null,c.submit)))}catch(m){}},do_navig:function(b,f,e,c){var d=null;if("A"!=b.nodeName)for(var g=b.parentNode;g;){if("A"==g.nodeName){d=g;break}g=g.parentNode}else d=b;if(d){if(d.target=e||b.target||"_self",d.href=f||b.href||d.href,!c||c&&!N)if(b=
d.href.split('"').join('\\"'),0>d.href.indexOf("mailto:"))if("_self"==d.target.toLowerCase()){if(setTimeout('self.location.href="'+b+'"',a.xttredir),c)return!1}else if("_top"==d.target.toLowerCase()){if(setTimeout('top.location.href="'+b+'"',a.xttredir),c)return!1}else if("_parent"==d.target.toLowerCase()){if(setTimeout('parent.location.href="'+b+'"',a.xttredir),c)return!1}else return!0;else if(setTimeout('AT_click.mail_to("'+b+'");',a.xttredir),c)return!1}else if(f||b.href)if(f=f?f:b.href,0>f.indexOf("mailto:"))if("_blank"==
e)setTimeout('(xw.open("'+f.split('"').join('\\"')+'","_blank")).focus();',1);else{if(setTimeout('self.location.href="'+f.split('"').join('\\"')+'"',a.xttredir),c)return!1}else if(setTimeout('AT_click.mail_to("'+f.split('"').join('\\"')+'");',a.xttredir),c)return!1;if(c)return N=!1,!0},do_submit:function(a,f,e){if(e&&(setTimeout(function(){a.submit()},500),f&&e))return!1},mail_to:function(a){window.location=a}};window.AT_hit={first:!0,referrer:("acc_dir"==m("xtref")?"":null!==m("xtref")?m("xtref"):
"acc_dir"==p("xtref")?"":p("xtref")||Aa.replace(/[<>]/g,"")||"").replace(/[<>]/g,"").substring(0,1600),parse:function(a,f,e,c){var d=[""];if(1600>=f.length)d[0]=f;else{a=AT_hit.first&&"F"==a?Ca:Ca.substring(0,6)+T(8);var g="",l="",k,q={};k=[];var h=0;0<=f.indexOf("&ref=")&&(g=f.substring(f.indexOf("&ref=")),f=f.replace(g,""));if(c)for(var n in c)if(c.hasOwnProperty(n)&&0<=f.indexOf("&"+n+"=")&&1600<(l=m(n,f,2)).length)f=f.replace("&"+n+"="+l,""),k=RegExp("["+c[n]+"]","gi"),q[n]=l.replace(/&/g,"%26").split(k);
k=RegExp("["+e+"]","gi");k=f.split(k);for(var j in k)k.hasOwnProperty(j)&&(1600>=d[h].length+k[j].length+1?d[h]+=""!==k[j]?"&"+k[j]:"":(d.push(""),h++,d[h]=1600>k[j].length?d[h]+(""!==k[j]?"&"+k[j]:""):d[h]+("&mherr=1&"+k[j].substring(0,1600))));for(var p in q)if(q.hasOwnProperty(p)){f="&"+p+"=";e=!1;n=q[p].length;for(j=0;j<n;j++)1600>=d[h].length+q[p][j].length+1?(e||(d[h]+=f,e=!0),d[h]+=""!==q[p][j]?q[p][j]+("stc"===p&&n-1===j?"":c[p]):""):(d.push(f),e=!0,h++,d[h]=1600>q[p][j].length?d[h]+(""!==
q[p][j]?q[p][j]+("stc"===p&&n-1===j?"":c[p]):""):d[h]+("mherr=1"+c[p]))}g&&(1600>=d[h].length+g.length||(d.push(""),h++),d[h]+=g);for(c=0;c<d.length;c++)d[c]="&mh="+(c+1)+"-"+d.length+"-"+a+d[c]}return d},sendTag:function(b,f,e,c){var d=[];e=e||Rb+Fb;e+=a.xtfirst?"&idclient="+G:"";b=b||"F";f=f||v;f+=(c?c:"")+"&vtag="+Bb+AT_hit.localHour()+AT_hit.resolution();AT_hit.first&&"F"==b&&(f+=eb&&0>f.indexOf("&stc=")?"&stc="+eb:"",f+="&ref="+AT_hit.referrer.replace(/&/g,"$"));"C"===b&&(f+="&pclick="+a.xtpage+
"&s2click="+(a.xtn2?a.xtn2:""));d=AT_hit.parse(b,f,"&",{ati:",",atc:",",pdtl:"|",stc:",",dz:"|"});for(f=0;f<d.length;f++)AT_hit.loadImage(e+d[f]);AT_hit.first&&("F"==b&&""!==Ya)&&AT_hit.loadFile("script",Ya,!0,"text/javascript");"F"==b&&(AT_hit.first=!1)},loadImage:function(a){var f=new Image;f.src=a;ra.sentHits instanceof Array&&ra.sentHits.push(a);f.onload=function(){f.onload=null}},loadFile:function(a,f,e,c,d){a=document.createElement(a);a.type=c;a.async=e;a.src=f;(d||document.getElementsByTagName("head")[0]||
document.getElementsByTagName("body")[0]||document.getElementsByTagName("script")[0].parentNode).insertBefore(a,null)},localHour:function(a){a=a?a:new Date;return"&hl="+a.getHours()+"x"+a.getMinutes()+"x"+a.getSeconds()},resolution:function(){if(4<=parseFloat(s.appVersion))try{var a;a="undefined"!==typeof window.devicePixelRatio?window.devicePixelRatio:1;return"&r="+fa.width*a+"x"+fa.height*a+"x"+fa.pixelDepth+"x"+fa.colorDepth}catch(f){}return""},prerenderDisplaying:function(){AT_hit.first&&(AT_hit.sendTag("F"),
""!==xt44&&AT_hit.sendTag("PDT",xt44,null,"&type=PDT&p="+ca+(a.xt_pageID?"&pid="+a.xt_pageID+"&pchap="+(a.xt_chap||"")+"&pidt="+(a.xt_pageDate||""):"")))},isPreviewOrPrerendering:function(){return window.navigator&&"preview"===window.navigator.loadPurpose&&-1!=s.userAgent.indexOf("Safari")&&0>s.userAgent.indexOf("Chrome")?(vb&&(AT_hit.sendTag("F",null,null,"&pvw=1"),""!==xt44&&AT_hit.sendTag("PDT",xt44,null,"&type=PDT&p="+ca+(a.xt_pageID?"&pid="+a.xt_pageID+"&pchap="+(a.xt_chap||"")+"&pidt="+(a.xt_pageDate||
""):""))),!0):"prerender"==j.webkitVisibilityState?(j.addEventListener("webkitvisibilitychange",AT_hit.prerenderDisplaying,!1),!0):!1}};if(0!==I||0!==aa||J){var V="";if(""!==bb){V=p("xtvid");V||(va=V=u.getTime()+""+T(6));var Da=new Date;Da.setMinutes(Da.getMinutes()+30);n("xtvid",V,Da,"",1)}window.xtvid=V;var kb=Xtconf.xtsite("xtor"),Ea=Xtconf.xtsite("xtdate"),lb=Xtconf.xtsite("xtocl"),Fa=Xtconf.xtsite("xtan"),Ga=Xtconf.xtsite("xtat"),W=Xtconf.xtsite("xtant"),M=m("xtor"),Ha=m("xtdt"),w=m("xtan"),
x=m("xtat"),Ia=m("an",r),Ja=m("at",r),mb=m("ac",r),nb=p(lb),Ka=p("xtgo"),La=p("xtord"),ob=p("xtvrn"),X=null!==nb?nb:"$",Sb="0"===Ka?La:null,Ma=null!==Ka?Ka:"0",ga=null!==ob?ob:"$",pb=u.getTime()/6E4,Y=null!==Ha&&(m("xts")==I||J)?30>pb-Ha&&0<=pb-Ha?"2":"1":Ma,Tb="1"==Ma?"&pgt="+La:"1"==Y&&null!==M?"&pgt="+M:"",O=null!==fb?fb:null!==M&&"0"==Y?M:!J?Sb:null,O=0>X.indexOf("$"+O+"$")||"$"==X?O:null,B="0"==Y?O:"2"==Ma?La:"2"==Y?M:null,P,Na;null!==B?(Na=B.substring(0,B.indexOf("-")),P=z[Na]):P="1";if(null===
P||!C(P))P=z.ad;null===w&&!J&&(w=p("xtanrd"));null===x&&!J&&(x=p("xtatrd"));var qb=p(Fa),rb=p(Ga),ha=p(W),A=new Date,y=window.xt29=new Date,Oa=new Date;J?A.setTime(A.getTime()+3E4):A.setTime(A.getTime()+864E5*P);Oa.setTime(Oa.getTime()+18E5);y.setTime(y.getTime()+864E5*Ab);var Pa=null!==w?w.indexOf("-"):0,Qa=null!==x?x.indexOf("-"):0,sb=null!==Ia?"":null!==w&&0<Pa?"&ac="+w.substring(0,Pa)+"&ant=0&an="+w.substring(Pa+1,w.length):null!==qb?"&anc="+qb+"&anct="+ha:"",Ub=null!==Ja?"":null!==x&&0<Qa?"&ac="+
x.substring(0,Qa)+"&ant=0&at="+x.substring(Qa+1,x.length):null!==rb?"&attc="+rb+"&anct="+ha:"",K=0>ga.indexOf("$"+I+"$")?"&vrn=1":"",Vb=null!==m("xtatc")&&null===m("atc",r)?"&atc="+m("xtatc"):"";""!==K&&n("xtvrn",141>ga.length?ga+I+"$":ga.substring(0,141),y,h,0);K+=null===O?"":"&xto="+O;K+=(""!==sb?sb:Ub)+Tb+Vb;null!==Ia?(n(Fa,mb+"-"+Ia,y,h,1),n(W,"1",y,h,1)):null!==w&&"1"!=ha&&(n(Fa,w,y,h,1),n(W,"0",y,h,1));null!==Ja?(n(Ga,mb+"-"+Ja,y,h,1),n(W,"1",y,h,1)):null!==x&&"1"!=ha&&(n(Ga,x,y,h,1),n(W,"0",
y,h,1));var Ra=p(kb),Z=p(Ea),Z=(/[a-zA-Z]/.test(Z)?(new Date(Z)).getTime()/36E5:parseFloat(p(Ea)))||(new Date).getTime()/36E5,Wb=0<=Math.floor(hb-Z)?Math.floor(hb-Z):0,K=K+(null===Ra?"":"&xtor="+Ra+"&roinbh="+Wb);if(J)n("xtgo",Y,A,h,1),null!==M&&n("xtord",M,A,h,1),null!==w&&n("xtanrd",w,A,h,1),null!==x&&n("xtatrd",x,A,h,1),n("xtref",AT_hit.referrer?AT_hit.referrer.replace(/&/g,"$"):"acc_dir",A,h,0),a.xtloc&&(S.location=a.xtloc);else{null!==B&&(0>X.indexOf("$"+encodeURIComponent(B)+"$")||"$"==X)&&
n(lb,X+B+"$",Oa,h,1);var ia=s.appName+" "+s.appVersion,Q=ia.indexOf("MSIE"),R;0<=Q?(R=parseInt(ia.substr(Q+5)),Q=!0):(R=parseFloat(s.appVersion),Q=!1);var Xb=0<=ia.indexOf("Netscape"),Yb=0<=ia.indexOf("Mac"),Sa=0<=s.userAgent.indexOf("Opera"),ja="",tb="",Ta="",Ua="";if(Q&&5<=R&&!Yb&&!Sa&&!J)try{j.body.addBehavior("#default#clientCaps"),ja="&cn="+j.body.connectionType,ja+="&ul="+j.body.UserLanguage,j.body.addBehavior("#default#homePage"),tb=j.body.isHomePage(location.href)?"&hm=1":"&hm=0",Ua="&re="+
j.body.offsetWidth+"x"+j.body.offsetHeight}catch(dc){}else 5<=R&&(Ua="&re="+a.innerWidth+"x"+a.innerHeight);Xb&&4<=R||Sa?Ta="&lng="+s.language:Q&&(4<=R&&!Sa)&&(Ta="&lng="+s.userLanguage);n("xtord","",u,h,1);if(null!==B&&(null===Ra||"1"==zb))n(kb,B,A,h,1),n(Ea,u.getTime()/36E5,A,h,1);var Zb=yb?"&docl="+encodeURIComponent(S.location.href.replace(/&/g,"#ec#")):"",v=Eb+"&p="+ca+Gb+Hb+Ib+K+Zb+Jb+r+ja+tb+Ta+"&idp="+Ca,Va=p("xtvalCZ",1);if(null!==Va){var v=v+Va.replace("&c=","&current=").replace("&b=","&before=").replace("&a=",
"&after="),Wa=new Date;Wa.setTime(Wa.getTime()-36E5);n("xtvalCZ",Va,Wa,h,1)}var Rb=window.Xt_id=Cb+"?",ka=p("xtide");if(null!==B)switch(Na.toLowerCase()){case "erec":case "epr":case "es":var la=null;try{var ma=B.match(/(\[[^\]]*\])|([^\-]+)|(-)/g),ub=0,na;for(na in ma)"-"==ma[na]&&ub++,5==ub&&"-"!=ma[na]&&(la=ma[na])}catch(ec){la=null}null!==la&&(ka=la,n("xtide",ka,y,"",1))}v+="&jv="+(s.javaEnabled()?"1":"0")+Ua+xt16+(null!==ka?"&ide="+ka:"");va&&(v+="&lnk="+bb+"&vid="+va);"0"!=$&&!AT_hit.isPreviewOrPrerendering()&&
(AT_hit.sendTag("F"),""!==xt44&&AT_hit.sendTag("PDT",xt44,null,"&type=PDT&p="+ca+(a.xt_pageID?"&pid="+a.xt_pageID+"&pchap="+(a.xt_chap||"")+"&pidt="+(a.xt_pageDate||""):"")))}}0<qa&&"function"==typeof xtNodesload&&(xb?a.addEventListener?a.addEventListener("load",xtNodesload,!1):a.attachEvent&&a.attachEvent("onload",xtNodesload):xtNodesload())};window.attag=new Xtcore;