webpackJsonp([8],{vgIV:function(t,n){function e(){for(l.clearRect(0,0,r,h),a=[{x:0,y:.7*h+u},{x:0,y:.7*h-u}];a[1].x<r+u;)o(a[0],a[1])}function o(t,n){l.beginPath(),l.moveTo(t.x,t.y),l.lineTo(n.x,n.y);var e=n.x+(2*m()-.25)*u,o=i(n.y);l.lineTo(e,o),l.closePath(),v-=f/-50,l.fillStyle="#"+(127*g(v)+128<<16|127*g(v+f/3)+128<<8|127*g(v+f/3*2)+128).toString(16),l.fill(),a[0]=a[1],a[1]={x:e,y:o}}function i(t){var n=t+(2*m()-1.1)*u;return n>h||n<0?i(t):n}document.addEventListener("touchmove",function(t){t.preventDefault()});var a,c=document.getElementsByTagName("canvas")[0],l=c.getContext("2d"),d=window.devicePixelRatio||1,r=window.innerWidth,h=window.innerHeight,u=90,v=0,f=2*Math.PI,g=Math.cos,m=Math.random;c.width=r*d,c.height=h*d,l.scale(d,d),l.globalAlpha=.6,document.onclick=e,document.ontouchstart=e,e()}});