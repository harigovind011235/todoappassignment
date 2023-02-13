let username = document.getElementById("username");
let password = document.getElementById("password");

function login(ajax2) {
  if (username.value == "admin" && password.value == "12345") {
    ajax2();
  } else {
    alert("Incorrect password and username");
    return false;
  }
}

function ajax2() {
  window.open("./todo.html", "mywindow");
}
let c = 0;
function ajax() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      var output = " ";

      for (var i = 0; i < response.length; i++) {
        if (response[i].completed == true) {
          output += "<tr>";
          output +=
            "<td><input type='checkbox' id='myCheck' checked disabled></td>";
          output += "<td>" + response[i].title + "<td>";
          output += "</tr>";
        } else {
          output += "<tr>";
          output +=
            "<td><input type='checkbox' id='myCheck' onchange='myFunction(this)'></td>";
          output += "<td>" + response[i].title + "<td>";
          output += "</tr>";
        }
      }
      document.getElementById("employee_table").innerHTML = output;
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhttp.send();
}

// let checkevent = document.getElementById("myCheck");
let clickCounter = 0;
function myFunction(checkbox) {
  if (checkbox.checked == true) {
    console.log(checkbox);

    clickCounter += 1;
    console.log(clickCounter);
    if (clickCounter == 5) {
      alert("Congrats. 5 Tasks have been Successfully Completed");
    }
  } else {
    clickCounter -= 1;
    console.log(clickCounter);
  }
  // else if(checkbox.checked  == false){
  //     clickCounter -= 1;
  //     console.log(clickCounter);
  // }
}
