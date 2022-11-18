{/* <table class="table">
<thead class="thead-dark">
  <tr>
    <th scope="col">First</th>
    <th scope="col">Middle</th>
    <th scope="col">Last</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
</tbody>
</table> */}

var createTable=document.createElement("table");
createTable.setAttribute("class","table");

var createthead=document.createElement("thead");
createthead.setAttribute("class","thead-dark");

var createtr=document.createElement("tr");
var createth=document.createElement("th");
createth.setAttribute("scope","col");
createth.innerHTML="First";

var createth1=document.createElement("th");
createth1.setAttribute("scope","col");
createth1.innerHTML="Middle";

var createth2=document.createElement("th");
createth2.setAttribute("scope","col");
createth2.innerHTML="Last";

var createtbody=document.createElement("tbody");
var createtr1=document.createElement("tr");

var createtd=document.createElement("td");
createtd.innerHTML="Mark";

var createtd1=document.createElement("td");
createtd1.innerHTML="Otto";

var createtd2=document.createElement("td");
createtd2.innerHTML="@mdo";

createtr.append(createth, createth1,createth2);
createtr1.append(createtd,createtd1,createtd2);
createthead.append(createtr);
createtbody.append(createtr1);
createTable.append(createthead,createtbody);
document.body.append(createTable);