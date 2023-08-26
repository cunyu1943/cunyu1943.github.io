import{p as St,f as W}from"./flowDb-01624e90-42550bd9.js";import{h as S,u as Lt,r as Et,p as _t,l as Tt,d as M,f as tt,G as Nt}from"./layout-c0ef9365.js";import{h as x,o as P,p as z,q as et,c as J,j as rt,l as R,r as V,t as At}from"./mermaid.core-6608a502.js";import{a as N,b as at,i as nt,c as _,e as st,d as it,f as Ct,g as It,s as Bt}from"./styles-4fcf332f-b55a2424.js";import{l as Mt}from"./line-80c17962.js";import"./app-c861a5c2.js";import"./commonjsHelpers-de833af9.js";import"./index-892ad7fb-86eb44d5.js";import"./edges-c959041a-45f0cd49.js";import"./createText-b670c180-9b2a4db0.js";import"./svgDraw-b48a99d5-c0e34256.js";import"./array-9f3ba611.js";import"./path-53f90ab3.js";function Dt(r){if(!r.ok)throw new Error(r.status+" "+r.statusText);return r.text()}function Rt(r,e){return fetch(r,e).then(Dt)}function Gt(r){return(e,t)=>Rt(e,t).then(n=>new DOMParser().parseFromString(n,r))}var Pt=Gt("image/svg+xml"),Y={normal:$t,vee:Wt,undirected:Vt};function Ut(r){Y=r}function $t(r,e,t,n){var a=r.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto"),s=a.append("path").attr("d","M 0 0 L 10 5 L 0 10 z").style("stroke-width",1).style("stroke-dasharray","1,0");N(s,t[n+"Style"]),t[n+"Class"]&&s.attr("class",t[n+"Class"])}function Wt(r,e,t,n){var a=r.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto"),s=a.append("path").attr("d","M 0 0 L 10 5 L 0 10 L 4 5 z").style("stroke-width",1).style("stroke-dasharray","1,0");N(s,t[n+"Style"]),t[n+"Class"]&&s.attr("class",t[n+"Class"])}function Vt(r,e,t,n){var a=r.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto"),s=a.append("path").attr("d","M 0 5 L 10 5").style("stroke-width",1).style("stroke-dasharray","1,0");N(s,t[n+"Style"]),t[n+"Class"]&&s.attr("class",t[n+"Class"])}function zt(r,e){var t=r;return t.node().appendChild(e.label),N(t,e.labelStyle),t}function Yt(r,e){for(var t=r.append("text"),n=Ht(e.label).split(`
`),a=0;a<n.length;a++)t.append("tspan").attr("xml:space","preserve").attr("dy","1em").attr("x","1").text(n[a]);return N(t,e.labelStyle),t}function Ht(r){for(var e="",t=!1,n,a=0;a<r.length;++a)if(n=r[a],t){switch(n){case"n":e+=`
`;break;default:e+=n}t=!1}else n==="\\"?t=!0:e+=n;return e}function K(r,e,t){var n=e.label,a=r.append("g");e.labelType==="svg"?zt(a,e):typeof n!="string"||e.labelType==="html"?at(a,e):Yt(a,e);var s=a.node().getBBox(),i;switch(t){case"top":i=-e.height/2;break;case"bottom":i=e.height/2-s.height;break;default:i=-s.height/2}return a.attr("transform","translate("+-s.width/2+","+i+")"),a}var H=function(r,e){var t=e.nodes().filter(function(s){return nt(e,s)}),n=r.selectAll("g.cluster").data(t,function(s){return s});_(n.exit(),e).style("opacity",0).remove();var a=n.enter().append("g").attr("class","cluster").attr("id",function(s){var i=e.node(s);return i.id}).style("opacity",0).each(function(s){var i=e.node(s),o=x(this);x(this).append("rect");var c=o.append("g").attr("class","label");K(c,i,i.clusterLabelPos)});return n=n.merge(a),n=_(n,e).style("opacity",1),n.selectAll("rect").each(function(s){var i=e.node(s),o=x(this);N(o,i.style)}),n};function Xt(r){H=r}let X=function(r,e){var t=r.selectAll("g.edgeLabel").data(e.edges(),function(a){return st(a)}).classed("update",!0);t.exit().remove(),t.enter().append("g").classed("edgeLabel",!0).style("opacity",0),t=r.selectAll("g.edgeLabel"),t.each(function(a){var s=x(this);s.select(".label").remove();var i=e.edge(a),o=K(s,e.edge(a),0).classed("label",!0),c=o.node().getBBox();i.labelId&&o.attr("id",i.labelId),S(i,"width")||(i.width=c.width),S(i,"height")||(i.height=c.height)});var n;return t.exit?n=t.exit():n=t.selectAll(null),_(n,e).style("opacity",0).remove(),t};function Ft(r){X=r}function O(r,e){return r.intersect(e)}var F=function(r,e,t){var n=r.selectAll("g.edgePath").data(e.edges(),function(i){return st(i)}).classed("update",!0),a=Zt(n,e);Ot(n,e);var s=n.merge!==void 0?n.merge(a):n;return _(s,e).style("opacity",1),s.each(function(i){var o=x(this),c=e.edge(i);c.elem=this,c.id&&o.attr("id",c.id),it(o,c.class,(o.classed("update")?"update ":"")+"edgePath")}),s.selectAll("path.path").each(function(i){var o=e.edge(i);o.arrowheadId=Lt("arrowhead");var c=x(this).attr("marker-end",function(){return"url("+Qt(location.href,o.arrowheadId)+")"}).style("fill","none");_(c,e).attr("d",function(d){return Jt(e,d)}),N(c,o.style)}),s.selectAll("defs *").remove(),s.selectAll("defs").each(function(i){var o=e.edge(i),c=t[o.arrowhead];c(x(this),o.arrowheadId,o,"arrowhead")}),s};function qt(r){F=r}function Qt(r,e){var t=r.split("#")[0];return t+"#"+e}function Jt(r,e){var t=r.edge(e),n=r.node(e.v),a=r.node(e.w),s=t.points.slice(1,t.points.length-1);return s.unshift(O(n,s[0])),s.push(O(a,s[s.length-1])),ot(t,s)}function ot(r,e){var t=(Mt||Pt.line)().x(function(n){return n.x}).y(function(n){return n.y});return(t.curve||t.interpolate)(r.curve),t(e)}function Kt(r){var e=r.getBBox(),t=r.ownerSVGElement.getScreenCTM().inverse().multiply(r.getScreenCTM()).translate(e.width/2,e.height/2);return{x:t.e,y:t.f}}function Zt(r,e){var t=r.enter().append("g").attr("class","edgePath").style("opacity",0);return t.append("path").attr("class","path").attr("d",function(n){var a=e.edge(n),s=e.node(n.v).elem,i=Et(a.points.length).map(function(){return Kt(s)});return ot(a,i)}),t.append("defs"),t}function Ot(r,e){var t=r.exit();_(t,e).style("opacity",0).remove()}var q=function(r,e,t){var n=e.nodes().filter(function(i){return!nt(e,i)}),a=r.selectAll("g.node").data(n,function(i){return i}).classed("update",!0);a.exit().remove(),a.enter().append("g").attr("class","node").style("opacity",0),a=r.selectAll("g.node"),a.each(function(i){var o=e.node(i),c=x(this);it(c,o.class,(c.classed("update")?"update ":"")+"node"),c.select("g.label").remove();var d=c.append("g").attr("class","label"),l=K(d,o),v=t[o.shape],h=_t(l.node().getBBox(),"width","height");o.elem=this,o.id&&c.attr("id",o.id),o.labelId&&d.attr("id",o.labelId),S(o,"width")&&(h.width=o.width),S(o,"height")&&(h.height=o.height),h.width+=o.paddingLeft+o.paddingRight,h.height+=o.paddingTop+o.paddingBottom,d.attr("transform","translate("+(o.paddingLeft-o.paddingRight)/2+","+(o.paddingTop-o.paddingBottom)/2+")");var u=x(this);u.select(".label-container").remove();var p=v(u,h,o).classed("label-container",!0);N(p,o.style);var g=p.node().getBBox();o.width=g.width,o.height=g.height});var s;return a.exit?s=a.exit():s=a.selectAll(null),_(s,e).style("opacity",0).remove(),a};function jt(r){q=r}function te(r,e){var t=r.filter(function(){return!x(this).classed("update")});function n(a){var s=e.node(a);return"translate("+s.x+","+s.y+")"}t.attr("transform",n),_(r,e).style("opacity",1).attr("transform",n),_(t.selectAll("rect"),e).attr("width",function(a){return e.node(a).width}).attr("height",function(a){return e.node(a).height}).attr("x",function(a){var s=e.node(a);return-s.width/2}).attr("y",function(a){var s=e.node(a);return-s.height/2})}function ee(r,e){var t=r.filter(function(){return!x(this).classed("update")});function n(a){var s=e.edge(a);return S(s,"x")?"translate("+s.x+","+s.y+")":""}t.attr("transform",n),_(r,e).style("opacity",1).attr("transform",n)}function re(r,e){var t=r.filter(function(){return!x(this).classed("update")});function n(a){var s=e.node(a);return"translate("+s.x+","+s.y+")"}t.attr("transform",n),_(r,e).style("opacity",1).attr("transform",n)}function lt(r,e,t,n){var a=r.x,s=r.y,i=a-n.x,o=s-n.y,c=Math.sqrt(e*e*o*o+t*t*i*i),d=Math.abs(e*t*i/c);n.x<a&&(d=-d);var l=Math.abs(e*t*o/c);return n.y<s&&(l=-l),{x:a+d,y:s+l}}function ae(r,e,t){return lt(r,e,e,t)}function ne(r,e,t,n){var a,s,i,o,c,d,l,v,h,u,p,g,f,y,k;if(a=e.y-r.y,i=r.x-e.x,c=e.x*r.y-r.x*e.y,h=a*t.x+i*t.y+c,u=a*n.x+i*n.y+c,!(h!==0&&u!==0&&j(h,u))&&(s=n.y-t.y,o=t.x-n.x,d=n.x*t.y-t.x*n.y,l=s*r.x+o*r.y+d,v=s*e.x+o*e.y+d,!(l!==0&&v!==0&&j(l,v))&&(p=a*o-s*i,p!==0)))return g=Math.abs(p/2),f=i*d-o*c,y=f<0?(f-g)/p:(f+g)/p,f=s*c-a*d,k=f<0?(f-g)/p:(f+g)/p,{x:y,y:k}}function j(r,e){return r*e>0}function T(r,e,t){var n=r.x,a=r.y,s=[],i=Number.POSITIVE_INFINITY,o=Number.POSITIVE_INFINITY;e.forEach(function(p){i=Math.min(i,p.x),o=Math.min(o,p.y)});for(var c=n-r.width/2-i,d=a-r.height/2-o,l=0;l<e.length;l++){var v=e[l],h=e[l<e.length-1?l+1:0],u=ne(r,t,{x:c+v.x,y:d+v.y},{x:c+h.x,y:d+h.y});u&&s.push(u)}return s.length?(s.length>1&&s.sort(function(p,g){var f=p.x-t.x,y=p.y-t.y,k=Math.sqrt(f*f+y*y),I=g.x-t.x,E=g.y-t.y,U=Math.sqrt(I*I+E*E);return k<U?-1:k===U?0:1}),s[0]):(console.log("NO INTERSECTION FOUND, RETURN NODE CENTER",r),r)}function Z(r,e){var t=r.x,n=r.y,a=e.x-t,s=e.y-n,i=r.width/2,o=r.height/2,c,d;return Math.abs(s)*i>Math.abs(a)*o?(s<0&&(o=-o),c=s===0?0:o*a/s,d=o):(a<0&&(i=-i),c=i,d=a===0?0:i*s/a),{x:t+c,y:n+d}}var Q={rect:ie,ellipse:oe,circle:le,diamond:ce};function se(r){Q=r}function ie(r,e,t){var n=r.insert("rect",":first-child").attr("rx",t.rx).attr("ry",t.ry).attr("x",-e.width/2).attr("y",-e.height/2).attr("width",e.width).attr("height",e.height);return t.intersect=function(a){return Z(t,a)},n}function oe(r,e,t){var n=e.width/2,a=e.height/2,s=r.insert("ellipse",":first-child").attr("x",-e.width/2).attr("y",-e.height/2).attr("rx",n).attr("ry",a);return t.intersect=function(i){return lt(t,n,a,i)},s}function le(r,e,t){var n=Math.max(e.width,e.height)/2,a=r.insert("circle",":first-child").attr("x",-e.width/2).attr("y",-e.height/2).attr("r",n);return t.intersect=function(s){return ae(t,n,s)},a}function ce(r,e,t){var n=e.width*Math.SQRT2/2,a=e.height*Math.SQRT2/2,s=[{x:0,y:-a},{x:-n,y:0},{x:0,y:a},{x:n,y:0}],i=r.insert("polygon",":first-child").attr("points",s.map(function(o){return o.x+","+o.y}).join(" "));return t.intersect=function(o){return T(t,s,o)},i}function de(){var r=function(e,t){fe(t);var n=D(e,"output"),a=D(n,"clusters"),s=D(n,"edgePaths"),i=X(D(n,"edgeLabels"),t),o=q(D(n,"nodes"),t,Q);Tt(t),re(o,t),ee(i,t),F(s,t,Y);var c=H(a,t);te(c,t),pe(t)};return r.createNodes=function(e){return arguments.length?(jt(e),r):q},r.createClusters=function(e){return arguments.length?(Xt(e),r):H},r.createEdgeLabels=function(e){return arguments.length?(Ft(e),r):X},r.createEdgePaths=function(e){return arguments.length?(qt(e),r):F},r.shapes=function(e){return arguments.length?(se(e),r):Q},r.arrows=function(e){return arguments.length?(Ut(e),r):Y},r}var he={paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10,rx:0,ry:0,shape:"rect"},ue={arrowhead:"normal",curve:P};function fe(r){r.nodes().forEach(function(e){var t=r.node(e);!S(t,"label")&&!r.children(e).length&&(t.label=e),S(t,"paddingX")&&M(t,{paddingLeft:t.paddingX,paddingRight:t.paddingX}),S(t,"paddingY")&&M(t,{paddingTop:t.paddingY,paddingBottom:t.paddingY}),S(t,"padding")&&M(t,{paddingLeft:t.padding,paddingRight:t.padding,paddingTop:t.padding,paddingBottom:t.padding}),M(t,he),tt(["paddingLeft","paddingRight","paddingTop","paddingBottom"],function(n){t[n]=Number(t[n])}),S(t,"width")&&(t._prevWidth=t.width),S(t,"height")&&(t._prevHeight=t.height)}),r.edges().forEach(function(e){var t=r.edge(e);S(t,"label")||(t.label=""),M(t,ue)})}function pe(r){tt(r.nodes(),function(e){var t=r.node(e);S(t,"_prevWidth")?t.width=t._prevWidth:delete t.width,S(t,"_prevHeight")?t.height=t._prevHeight:delete t.height,delete t._prevWidth,delete t._prevHeight})}function D(r,e){var t=r.select("g."+e);return t.empty()&&(t=r.append("g").attr("class",e)),t}function ct(r,e,t){const n=e.width,a=e.height,s=(n+a)*.9,i=[{x:s/2,y:0},{x:s,y:-s/2},{x:s/2,y:-s},{x:0,y:-s/2}],o=A(r,s,s,i);return t.intersect=function(c){return T(t,i,c)},o}function dt(r,e,t){const a=e.height,s=a/4,i=e.width+2*s,o=[{x:s,y:0},{x:i-s,y:0},{x:i,y:-a/2},{x:i-s,y:-a},{x:s,y:-a},{x:0,y:-a/2}],c=A(r,i,a,o);return t.intersect=function(d){return T(t,o,d)},c}function ht(r,e,t){const n=e.width,a=e.height,s=[{x:-a/2,y:0},{x:n,y:0},{x:n,y:-a},{x:-a/2,y:-a},{x:0,y:-a/2}],i=A(r,n,a,s);return t.intersect=function(o){return T(t,s,o)},i}function ut(r,e,t){const n=e.width,a=e.height,s=[{x:-2*a/6,y:0},{x:n-a/6,y:0},{x:n+2*a/6,y:-a},{x:a/6,y:-a}],i=A(r,n,a,s);return t.intersect=function(o){return T(t,s,o)},i}function ft(r,e,t){const n=e.width,a=e.height,s=[{x:2*a/6,y:0},{x:n+a/6,y:0},{x:n-2*a/6,y:-a},{x:-a/6,y:-a}],i=A(r,n,a,s);return t.intersect=function(o){return T(t,s,o)},i}function pt(r,e,t){const n=e.width,a=e.height,s=[{x:-2*a/6,y:0},{x:n+2*a/6,y:0},{x:n-a/6,y:-a},{x:a/6,y:-a}],i=A(r,n,a,s);return t.intersect=function(o){return T(t,s,o)},i}function vt(r,e,t){const n=e.width,a=e.height,s=[{x:a/6,y:0},{x:n-a/6,y:0},{x:n+2*a/6,y:-a},{x:-2*a/6,y:-a}],i=A(r,n,a,s);return t.intersect=function(o){return T(t,s,o)},i}function yt(r,e,t){const n=e.width,a=e.height,s=[{x:0,y:0},{x:n+a/2,y:0},{x:n,y:-a/2},{x:n+a/2,y:-a},{x:0,y:-a}],i=A(r,n,a,s);return t.intersect=function(o){return T(t,s,o)},i}function gt(r,e,t){const n=e.height,a=e.width+n/4,s=r.insert("rect",":first-child").attr("rx",n/2).attr("ry",n/2).attr("x",-a/2).attr("y",-n/2).attr("width",a).attr("height",n);return t.intersect=function(i){return Z(t,i)},s}function mt(r,e,t){const n=e.width,a=e.height,s=[{x:0,y:0},{x:n,y:0},{x:n,y:-a},{x:0,y:-a},{x:0,y:0},{x:-8,y:0},{x:n+8,y:0},{x:n+8,y:-a},{x:-8,y:-a},{x:-8,y:0}],i=A(r,n,a,s);return t.intersect=function(o){return T(t,s,o)},i}function wt(r,e,t){const n=e.width,a=n/2,s=a/(2.5+n/50),i=e.height+s,o="M 0,"+s+" a "+a+","+s+" 0,0,0 "+n+" 0 a "+a+","+s+" 0,0,0 "+-n+" 0 l 0,"+i+" a "+a+","+s+" 0,0,0 "+n+" 0 l 0,"+-i,c=r.attr("label-offset-y",s).insert("path",":first-child").attr("d",o).attr("transform","translate("+-n/2+","+-(i/2+s)+")");return t.intersect=function(d){const l=Z(t,d),v=l.x-t.x;if(a!=0&&(Math.abs(v)<t.width/2||Math.abs(v)==t.width/2&&Math.abs(l.y-t.y)>t.height/2-s)){let h=s*s*(1-v*v/(a*a));h!=0&&(h=Math.sqrt(h)),h=s-h,d.y-t.y>0&&(h=-h),l.y+=h}return l},c}function ve(r){r.shapes().question=ct,r.shapes().hexagon=dt,r.shapes().stadium=gt,r.shapes().subroutine=mt,r.shapes().cylinder=wt,r.shapes().rect_left_inv_arrow=ht,r.shapes().lean_right=ut,r.shapes().lean_left=ft,r.shapes().trapezoid=pt,r.shapes().inv_trapezoid=vt,r.shapes().rect_right_inv_arrow=yt}function ye(r){r({question:ct}),r({hexagon:dt}),r({stadium:gt}),r({subroutine:mt}),r({cylinder:wt}),r({rect_left_inv_arrow:ht}),r({lean_right:ut}),r({lean_left:ft}),r({trapezoid:pt}),r({inv_trapezoid:vt}),r({rect_right_inv_arrow:yt})}function A(r,e,t,n){return r.insert("polygon",":first-child").attr("points",n.map(function(a){return a.x+","+a.y}).join(" ")).attr("transform","translate("+-e/2+","+t/2+")")}const ge={addToRender:ve,addToRenderV2:ye},xt={},me=function(r){const e=Object.keys(r);for(const t of e)xt[t]=r[t]},bt=function(r,e,t,n,a,s){const i=n?n.select(`[id="${t}"]`):x(`[id="${t}"]`),o=a||document;Object.keys(r).forEach(function(d){const l=r[d];let v="default";l.classes.length>0&&(v=l.classes.join(" "));const h=z(l.styles);let u=l.text!==void 0?l.text:l.id,p;if(et(J().flowchart.htmlLabels)){const y={label:u.replace(/fa[blrs]?:fa-[\w-]+/g,k=>`<i class='${k.replace(":"," ")}'></i>`)};p=at(i,y).node(),p.parentNode.removeChild(p)}else{const y=o.createElementNS("http://www.w3.org/2000/svg","text");y.setAttribute("style",h.labelStyle.replace("color:","fill:"));const k=u.split(rt.lineBreakRegex);for(const I of k){const E=o.createElementNS("http://www.w3.org/2000/svg","tspan");E.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),E.setAttribute("dy","1em"),E.setAttribute("x","1"),E.textContent=I,y.appendChild(E)}p=y}let g=0,f="";switch(l.type){case"round":g=5,f="rect";break;case"square":f="rect";break;case"diamond":f="question";break;case"hexagon":f="hexagon";break;case"odd":f="rect_left_inv_arrow";break;case"lean_right":f="lean_right";break;case"lean_left":f="lean_left";break;case"trapezoid":f="trapezoid";break;case"inv_trapezoid":f="inv_trapezoid";break;case"odd_right":f="rect_left_inv_arrow";break;case"circle":f="circle";break;case"ellipse":f="ellipse";break;case"stadium":f="stadium";break;case"subroutine":f="subroutine";break;case"cylinder":f="cylinder";break;case"group":f="rect";break;default:f="rect"}R.warn("Adding node",l.id,l.domId),e.setNode(s.db.lookUpDomId(l.id),{labelType:"svg",labelStyle:h.labelStyle,shape:f,label:p,rx:g,ry:g,class:v,style:h.style,id:s.db.lookUpDomId(l.id)})})},kt=function(r,e,t){let n=0,a,s;if(r.defaultStyle!==void 0){const i=z(r.defaultStyle);a=i.style,s=i.labelStyle}r.forEach(function(i){n++;const o="L-"+i.start+"-"+i.end,c="LS-"+i.start,d="LE-"+i.end,l={};i.type==="arrow_open"?l.arrowhead="none":l.arrowhead="normal";let v="",h="";if(i.style!==void 0){const u=z(i.style);v=u.style,h=u.labelStyle}else switch(i.stroke){case"normal":v="fill:none",a!==void 0&&(v=a),s!==void 0&&(h=s);break;case"dotted":v="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":v=" stroke-width: 3.5px;fill:none";break}l.style=v,l.labelStyle=h,i.interpolate!==void 0?l.curve=V(i.interpolate,P):r.defaultInterpolate!==void 0?l.curve=V(r.defaultInterpolate,P):l.curve=V(xt.curve,P),i.text===void 0?i.style!==void 0&&(l.arrowheadStyle="fill: #333"):(l.arrowheadStyle="fill: #333",l.labelpos="c",et(J().flowchart.htmlLabels)?(l.labelType="html",l.label=`<span id="L-${o}" class="edgeLabel L-${c}' L-${d}" style="${l.labelStyle}">${i.text.replace(/fa[blrs]?:fa-[\w-]+/g,u=>`<i class='${u.replace(":"," ")}'></i>`)}</span>`):(l.labelType="text",l.label=i.text.replace(rt.lineBreakRegex,`
`),i.style===void 0&&(l.style=l.style||"stroke: #333; stroke-width: 1.5px;fill:none"),l.labelStyle=l.labelStyle.replace("color:","fill:"))),l.id=o,l.class=c+" "+d,l.minlen=i.length||1,e.setEdge(t.db.lookUpDomId(i.start),t.db.lookUpDomId(i.end),l,n)})},we=function(r,e){return R.info("Extracting classes"),e.db.getClasses()},xe=function(r,e,t,n){R.info("Drawing flowchart");const{securityLevel:a,flowchart:s}=J();let i;a==="sandbox"&&(i=x("#i"+e));const o=a==="sandbox"?x(i.nodes()[0].contentDocument.body):x("body"),c=a==="sandbox"?i.nodes()[0].contentDocument:document;let d=n.db.getDirection();d===void 0&&(d="TD");const l=s.nodeSpacing||50,v=s.rankSpacing||50,h=new Nt({multigraph:!0,compound:!0}).setGraph({rankdir:d,nodesep:l,ranksep:v,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});let u;const p=n.db.getSubGraphs();for(let m=p.length-1;m>=0;m--)u=p[m],n.db.addVertex(u.id,u.title,"group",void 0,u.classes);const g=n.db.getVertices();R.warn("Get vertices",g);const f=n.db.getEdges();let y=0;for(y=p.length-1;y>=0;y--){u=p[y],Bt("cluster").append("text");for(let m=0;m<u.nodes.length;m++)R.warn("Setting subgraph",u.nodes[m],n.db.lookUpDomId(u.nodes[m]),n.db.lookUpDomId(u.id)),h.setParent(n.db.lookUpDomId(u.nodes[m]),n.db.lookUpDomId(u.id))}bt(g,h,e,o,c,n),kt(f,h,n);const k=new de;ge.addToRender(k),k.arrows().none=function(b,L,w,B){const C=b.append("marker").attr("id",L).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 0 L 0 0 L 0 0 z");N(C,w[B+"Style"])},k.arrows().normal=function(b,L){b.append("marker").attr("id",L).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowheadPath").style("stroke-width",1).style("stroke-dasharray","1,0")};const I=o.select(`[id="${e}"]`),E=o.select("#"+e+" g");for(k(E,h),E.selectAll("g.node").attr("title",function(){return n.db.getTooltip(this.id)}),n.db.indexNodes("subGraph"+y),y=0;y<p.length;y++)if(u=p[y],u.title!=="undefined"){const m=c.querySelectorAll("#"+e+' [id="'+n.db.lookUpDomId(u.id)+'"] rect'),b=c.querySelectorAll("#"+e+' [id="'+n.db.lookUpDomId(u.id)+'"]'),L=m[0].x.baseVal.value,w=m[0].y.baseVal.value,B=m[0].width.baseVal.value,C=x(b[0]).select(".label");C.attr("transform",`translate(${L+B/2}, ${w+14})`),C.attr("id",e+"Text");for(let $=0;$<u.classes.length;$++)b[0].classList.add(u.classes[$])}if(!s.htmlLabels){const m=c.querySelectorAll('[id="'+e+'"] .edgeLabel .label');for(const b of m){const L=b.getBBox(),w=c.createElementNS("http://www.w3.org/2000/svg","rect");w.setAttribute("rx",0),w.setAttribute("ry",0),w.setAttribute("width",L.width),w.setAttribute("height",L.height),b.insertBefore(w,b.firstChild)}}At(h,I,s.diagramPadding,s.useMaxWidth),Object.keys(g).forEach(function(m){const b=g[m];if(b.link){const L=o.select("#"+e+' [id="'+n.db.lookUpDomId(m)+'"]');if(L){const w=c.createElementNS("http://www.w3.org/2000/svg","a");w.setAttributeNS("http://www.w3.org/2000/svg","class",b.classes.join(" ")),w.setAttributeNS("http://www.w3.org/2000/svg","href",b.link),w.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),a==="sandbox"?w.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):b.linkTarget&&w.setAttributeNS("http://www.w3.org/2000/svg","target",b.linkTarget);const B=L.insert(function(){return w},":first-child"),G=L.select(".label-container");G&&B.append(function(){return G.node()});const C=L.select(".label");C&&B.append(function(){return C.node()})}}})},be={setConf:me,addVertices:bt,addEdges:kt,getClasses:we,draw:xe},Re={parser:St,db:W,renderer:Ct,styles:It,init:r=>{r.flowchart||(r.flowchart={}),r.flowchart.arrowMarkerAbsolute=r.arrowMarkerAbsolute,be.setConf(r.flowchart),W.clear(),W.setGen("gen-1")}};export{Re as diagram};
