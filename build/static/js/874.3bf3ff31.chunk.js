"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[874],{3110:function(e,n,r){r.d(n,{$y:function(){return c},FZ:function(){return o},ZU:function(){return d},Zq:function(){return t},ab:function(){return u},b7:function(){return s},gd:function(){return i},rM:function(){return l},yg:function(){return a}});var t=function(e){return e.user.usersData},s=function(e){return e.user.pageSize},i=function(e){return e.user.totalUsers},o=function(e){return e.user.selectedPage.currentPage},u=function(e){return e.user.isFetching},a=function(e){return e.user.followingInProgress},c=function(e){return e.user.profileData},l=function(e){return e.user.portionSize},d=function(e){return e.user.selectedPage.currentPortion}},8874:function(e,n,r){r.r(n),r.d(n,{default:function(){return j}});var t=r(8687),s=r(265),i=r(3110),o=r(2791),u={usersTitle:"Friends_usersTitle__NL-0h",usersList:"Friends_usersList__HzMJc"},a={userItem:"User_userItem__4-ddF",userAvatar:"User_userAvatar__bOk7R",userInfo:"User_userInfo__+s8e9",name:"User_name__XcZLa",status:"User_status__Y5D6B",blubtn:"User_blubtn__FbyRl"},c=r(5765),l=r(1087),d=r(184),f=function(e){var n=e.user,r=e.followingInProgress,t=e.unfollowing,s=e.following;return(0,d.jsxs)("div",{className:a.userItem,children:[(0,d.jsxs)("div",{className:a.userAvatar,children:[(0,d.jsx)("img",{src:null!=n.photos.small?n.photos.small:c,alt:""}),(0,d.jsx)("div",{children:n.followed?(0,d.jsx)("button",{disabled:r.some((function(e){return e===n.id})),className:a.blubtn,onClick:function(){t(n.id)},children:"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"}):(0,d.jsx)("button",{disabled:r.some((function(e){return e===n.id})),className:a.blubtn,onClick:function(){s(n.id)},children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})})]}),(0,d.jsxs)(l.rU,{className:a.userInfo,to:"/profile/"+n.id,children:[(0,d.jsxs)("div",{className:a.info,children:[(0,d.jsx)("div",{className:a.name,children:(0,d.jsx)("p",{children:n.name})}),(0,d.jsx)("div",{className:a.status,children:(0,d.jsx)("div",{children:n.status})})]}),(0,d.jsxs)("div",{className:a.location,children:[(0,d.jsx)("div",{children:"'user.country'"}),(0,d.jsx)("div",{children:"'user.citi'"})]})]})]})},g=r(9439),p="Paginator_page__jm7pL",m="Paginator_activePage__UdaQw",h=function(e){for(var n=e.totalItemsCount,r=e.pageSize,t=e.currentPage,s=e.setSelectedPage,i=e.portionSize,u=e.currentPortion,a=Math.ceil(n/r),c=[],l=1;l<=a;l++)c.push({i:l,id:l});var f=Math.ceil(a/i),h=(0,o.useState)(u),P=(0,g.Z)(h,2),_=P[0],j=P[1],x=(_-1)*i+1,v=_*i;return(0,d.jsxs)("div",{className:p,children:[_>1&&(0,d.jsx)("button",{onClick:function(){j(_-1)},children:"\u041d\u0430\u0437\u0430\u0434"}),c.filter((function(e){return e.i>=x&&e.i<=v})).map((function(e){return(0,d.jsx)("a",{className:t===e.i?m:null,onClick:function(n){s(e.i,_)},children:e.i},e.id)})),f>_&&(0,d.jsx)("button",{onClick:function(){j(_+1)},children:"\u0412\u043f\u0435\u0440\u0435\u0434"})]})},P=function(e){return(0,d.jsx)("div",{className:"app-wrapper-content",children:(0,d.jsxs)("div",{className:u.users,children:[(0,d.jsx)("div",{className:u.usersTitle,children:(0,d.jsx)("p",{children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})}),(0,d.jsx)(h,{totalItemsCount:e.totalItemsCount,pageSize:e.pageSize,currentPage:e.currentPage,setSelectedPage:e.setSelectedPage,portionSize:e.portionSize,currentPortion:e.currentPortion}),(0,d.jsx)("div",{className:u.usersList,children:e.usersData.map((function(n){return(0,d.jsx)(f,{user:n,followingInProgress:e.followingInProgress,unfollowing:e.unfollowing,following:e.following},n.id)}))})]})})},_=r(8704),j=(0,t.$j)((function(e){return{usersData:(0,i.Zq)(e),pageSize:(0,i.b7)(e),totalUsers:(0,i.gd)(e),currentPage:(0,i.FZ)(e),isFetching:(0,i.ab)(e),followingInProgress:(0,i.yg)(e),portionSize:(0,i.rM)(e),currentPortion:(0,i.ZU)(e)}}),{requestUsers:s.D7,following:s.mG,unfollowing:s.aL,setSelectedPage:s.EL})((function(e){return(0,o.useEffect)((function(){e.requestUsers(e.currentPage,e.pageSize)}),[e.currentPage]),e.isFetching?(0,d.jsx)(_.Z,{}):(0,d.jsx)(P,{usersData:e.usersData,totalItemsCount:e.totalUsers,pageSize:e.pageSize,currentPage:e.currentPage,isFetching:e.isFetching,followingInProgress:e.followingInProgress,following:e.following,unfollowing:e.unfollowing,portionSize:e.portionSize,currentPortion:e.currentPortion,setSelectedPage:e.setSelectedPage})}))},5765:function(e,n,r){e.exports=r.p+"static/media/userImage.41856725dcc49952fd5a.png"}}]);
//# sourceMappingURL=874.3bf3ff31.chunk.js.map