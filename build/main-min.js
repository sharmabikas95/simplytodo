function addCordovaEvents(){document.addEventListener("deviceready",onDeviceReady,!1)}function onDeviceReady(){document.addEventListener("pause",function(){saveList(todo)},!1),document.addEventListener("resume",function(){loadList(todo)},!1),document.addEventListener("backbutton",function(){saveList(todo),navigator.app.exitApp()},!1)}function createTask(t){id=(new Date).getTime(),name=t,taskitem={id:id,name:name,status:0},todo.push(taskitem),renderList("task-list",todo)}function saveList(t){window.localStorage&&localStorage.setItem("tasks",JSON.stringify(t))}function loadList(t){if(window.localStorage)try{JSON.parse(localStorage.getItem("tasks"))&&(todo=JSON.parse(localStorage.getItem("tasks")))}catch(t){console.log("error"+t)}renderList("task-list",todo)}function renderList(t,e){var o=document.getElementById(t);for(saveList(e),o.innerHTML="",itemstotal=e.length,i=0;i<itemstotal;i++)item=e[i],listitem=document.createElement("LI"),listtext=document.createTextNode(item.name),listitem.appendChild(listtext),listitem.setAttribute("id",item.id),listitem.setAttribute("data-status",item.status),1==item.status&&listitem.setAttribute("class","done"),o.appendChild(listitem)}function showButton(t,e){var o=!1,n=e.length;for(i=0;i<n;i++){var s=e[i];1==s.status&&(o=!0)}1==o?document.getElementById(t).setAttribute("class","show"):document.getElementById(t).removeAttribute("class")}var todo=[];window.addEventListener("load",function(){addCordovaEvents(),loadList(todo),showButton("remove",todo),document.getElementById("task-list").addEventListener("touchend",function(t){for(id=t.target.getAttribute("id"),document.getElementById(id).setAttribute("class","done"),i=0;i<todo.length;i++)taskitem=todo[i],taskitem.id==id&&(taskitem.status=1,saveList(todo));showButton("remove",todo)}),document.getElementById("remove").addEventListener("touchend",function(){var t=todo.length-1;for(i=t;i>=0;i--){var e=todo[i];1==e.status&&(todo.splice(i,1),saveList(todo),renderList("task-list",todo))}showButton("remove",todo)})});var inputform=document.getElementById("input-form");inputform.addEventListener("submit",function(t){t.preventDefault(),task=document.getElementById("task-input").value,createTask(task),inputform.reset()});