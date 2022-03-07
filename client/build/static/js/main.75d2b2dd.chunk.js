(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(66)},40:function(e,t,a){},41:function(e,t,a){},59:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(30),l=a.n(r),c=(a(40),a(32)),i=a(12),s=a(31),u=a(7),m=a(8),p=a(10),h=a(9),d=a(11);a(41);var f=function(e){var t=e.children;return o.a.createElement("div",{className:"jumbotron text-center"},t)};function v(e){return o.a.createElement("div",{className:"form-group"},o.a.createElement("input",Object.assign({className:"form-control"},e)))}function b(e){return o.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var g=a(15),E=a.n(g),k={getBooks:function(){return E.a.get("/api/books")},deleteBook:function(e){return E.a.delete("/api/books/"+e)},saveBook:function(e){return E.a.post("/api/books",e)}},N=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={bookData:{title:a.props.title,authors:a.props.authors,description:a.props.description,image:a.props.image,link:a.props.link},saved:!1},a.handleSave=function(e){e.preventDefault(),k.saveBook(a.state.bookData).then(function(e){return a.setState({saved:!0})}).catch(function(e){return console.log(e)})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:this.state.saved?"text-secondary row p-3 mb-5":"bg-light row p-3 mb-5"},o.a.createElement("div",{className:"col-12"},o.a.createElement("h4",{className:"text-info"},this.props.title),o.a.createElement("p",null,o.a.createElement("span",{className:"font-weight-bold"},"Author(s): "),this.props.authors?this.props.authors.join(", "):"N/A")),o.a.createElement("div",{className:"col-sm-3"},o.a.createElement("img",{src:this.props.image?this.props.image:"http://3.bp.blogspot.com/-tCI0EpMjT8c/ULY7ZYQpx_I/AAAAAAAAAdU/bwAeN4XNTuw/s1600/book.png",alt:this.props.title,className:"img-fluid"})),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("p",{className:"font-weight-bold"},"Description:"),o.a.createElement("p",null,this.props.description?this.props.description:"N/A")),o.a.createElement("div",{className:"col-12 pt-3"},o.a.createElement("a",{href:this.props.link,target:"blank",className:"btn float-left text-primary"},"View More"),o.a.createElement("button",{className:"btn btn-outline-success float-right",onClick:this.handleSave,disabled:this.state.saved},"Save")))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={bookData:[],searchTitle:"",lastQuery:""},a.handleInputChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(s.a)({},n,o))},a.handleSearchSubmit=function(e){e.preventDefault();fetch("".concat("https://www.googleapis.com/books/v1/volumes?q=").concat(a.state.searchTitle),{method:"GET"}).then(function(e){return e.json()}).then(function(e){console.log(e.items),a.setState({bookData:e.items,lastQuery:a.state.searchTitle})})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f,null,o.a.createElement("h1",null,"Search Google Books")),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement("form",null,o.a.createElement(v,{value:this.state.searchTitle,onChange:this.handleInputChange,name:"searchTitle",placeholder:"Search Books by Title"}),o.a.createElement(b,{disabled:!this.state.searchTitle,onClick:this.handleSearchSubmit},"Search")))),this.state.bookData.map(function(e){return o.a.createElement(N,{id:e.id,key:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.infoLink})})))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={bookData:{id:a.props.id,title:a.props.title,authors:a.props.authors,description:a.props.description,image:a.props.image,link:a.props.link}},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"bg-light row p-3 mb-5"},o.a.createElement("div",{className:"col-12"},o.a.createElement("h4",{className:"text-info"},this.props.title),o.a.createElement("p",null,o.a.createElement("span",{className:"font-weight-bold"},"Author(s): "),this.props.authors?this.props.authors.join(", "):"N/A")),o.a.createElement("div",{className:"col-sm-3"},o.a.createElement("img",{src:this.props.image?this.props.image:"http://3.bp.blogspot.com/-tCI0EpMjT8c/ULY7ZYQpx_I/AAAAAAAAAdU/bwAeN4XNTuw/s1600/book.png",alt:this.props.title,className:"img-fluid"})),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("p",{className:"font-weight-bold"},"Description:"),o.a.createElement("p",null,this.props.description?this.props.description:"N/A")),o.a.createElement("div",{className:"col-12 pt-3"},o.a.createElement("a",{href:this.props.link,target:"blank",className:"btn float-left text-primary"},"View More"),o.a.createElement("button",{className:"btn btn-outline-danger float-right",onClick:function(){return e.props.deleteBook(e.state.bookData.id)}},"Delete")))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},a.loadBooks=function(){k.getBooks().then(function(e){return a.setState({books:e.data})}).catch(function(e){return console.log(e)})},a.deleteBook=function(e){k.deleteBook(e).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(f,null,o.a.createElement("h1",null,"Saved Books")),o.a.createElement("div",{className:"container"},this.state.books.length?o.a.createElement("div",null,this.state.books.map(function(t){return o.a.createElement(j,{key:t._id,id:t._id,title:t.title,authors:t.authors,description:t.description,image:t.image,link:t.link,deleteBook:e.deleteBook})})):o.a.createElement("h3",null,"No Results to Display")))}}]),t}(n.Component);var y=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"404 Not Found"))};var O=function(){return o.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-info"},o.a.createElement("a",{className:"navbar-brand",href:"/"},"Book Finder"),o.a.createElement("div",null,o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link active",href:"/"},"Search ",o.a.createElement("span",{className:"sr-only"},"(current)"))),o.a.createElement("li",{className:"nav-item "},o.a.createElement("a",{className:"nav-link active",href:"/books"},"Saved")))))};a(59);var B=function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(O,null),o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:w}),o.a.createElement(i.a,{exact:!0,path:"/books",component:A}),o.a.createElement(i.a,{component:y}))))},S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(o.a.createElement(B,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");S?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):D(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):D(e)})}}()}},[[35,1,2]]]);
//# sourceMappingURL=main.75d2b2dd.chunk.js.map