let flag = false;
let repeat = 1;
function removeData() {
    if (flag === true) {
        let table = document.getElementById('table')
        table.remove();
    }
}

async function postdata() {
    //Remove previous table:
    removeData();

    //Datas from form:
    let name = document.getElementById('name').value;
    let e_mail = document.getElementById('email').value;
    let phone = document.getElementById('Mobile').value;
    let dob = document.getElementById('dob').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    //Age Calculation:
    let present = new Date();
    let year = Date.parse(dob);
    let min = 1000 * 60;
    let hrs = min * 60;
    let day = hrs * 24;
    let years = day * 365;
    let previousyear = Math.floor(year / years) + 1970;
    let age = present.getFullYear() - previousyear;

    //Object to post:
    let dataobj = {
        name: name,
        age: age,
        email: e_mail,
        DOB: dob,
        Phone: phone,
        password: password,
        confirmPassword: confirmPassword
    }

    //POST method
    await fetch("https://60ebd2d8e9647b0017cdde36.mockapi.io/users", {
        method: "POST",
        body: JSON.stringify(dataobj),
        headers: {
            "content-type": "application/json"
        }
    });

    //Fatching Data from API:
    fetchdata();
}

let div = document.getElementById('datatable');
document.body.setAttribute('onload', 'fetchdata()')

async function fetchdata() {

    //Creating Table:
    let table = document.createElement('table');
    table.setAttribute('id', 'table');
    table.classList.add("maintable");
    table.setAttribute('style', 'width:100%;');
    let tr = document.createElement('tr');
    tr.classList.add('header');
    let th_name = document.createElement('th');
    let th_age = document.createElement('th');
    let th_email = document.createElement('th');
    let th_DOB = document.createElement('th');
    let th_mobile = document.createElement('th');
    let th = document.createElement('th');
    th_name.innerText = "Name"
    th_age.innerText = "Age"
    th_email.innerText = "E-mail id"
    th_DOB.innerText = "DOB"
    th_mobile.innerText = "Mobile";


    tr.append(th_name, th_age, th_email, th_DOB, th_mobile, th)
    table.append(tr);
    div.append(table);


    //Fetching data from API:
    let data = await fetch("https://60ebd2d8e9647b0017cdde36.mockapi.io/users");
    let usersdata = await data.json();
    usersdata.forEach((element) => {
        flag = true;
        let div = document.getElementById("datatable")
        let table = document.getElementById('table')
        let tr = document.createElement('tr');
        tr.classList.add('table-content')
        let td_name = document.createElement('td')
        let td_age = document.createElement('td')
        let td_email = document.createElement('td')
        let td_dob = document.createElement('td')
        let td_phone = document.createElement('td')
        let td_button = document.createElement('td');
        let button = document.createElement('button');
        td_button.append(button);
        button.style.cursor = "pointer";
        button.innerText = "Edit";
        let id = element.id;
        button.setAttribute('id', 'i' + id);
        button.setAttribute('onclick', 'editdata(id)')

        button.classList.add("edit");
        tr.append(td_name, td_age, td_email, td_dob, td_phone, td_button);
        table.append(tr);
        div.append(table);
        td_name.innerText = element.name;
        td_age.innerText = element.age;
        td_email.innerText = element.email;
        td_dob.innerText = element.DOB;
        td_phone.innerText = element.Phone;
    })
}

const change = Array.from(document.getElementsByClassName('change'));
const Delete = Array.from(document.getElementsByClassName('delete'));

async function editdata(id) {
    let sid = id.split("");
    sid.shift();
    let datatoedit = await fetch("https://60ebd2d8e9647b0017cdde36.mockapi.io/users/" + sid.join(""))

    let data = await datatoedit.json();
    document.getElementById('name').value = data.name;
    document.getElementById('email').value = data.email;
    document.getElementById('Mobile').value = data.Phone;
    document.getElementById('dob').value = data.DOB;
    document.getElementById('password').value = data.password;
    document.getElementById('confirmPassword').value = data.confirmPassword;
    change[0].classList.toggle('change-display');
    Delete[0].classList.toggle('delete-display');
    change[0].setAttribute('id', 'c' + sid.join(""));
    Delete[0].setAttribute('id', 'd' + sid.join(""));
    button = document.getElementById(id);
    button.removeAttribute('onclick', 'editdata(id)');

}

async function updatedata(id) {
    let sid = id.split("");
    sid.shift();
    let proceed = confirm("Are you sure you want to modify data?");

    let dob = document.getElementById('dob').value;
    let present = new Date();
    let year = Date.parse(dob);
    let min = 1000 * 60;
    let hrs = min * 60;
    let day = hrs * 24;
    let years = day * 365;
    let previousyear = Math.floor(year / years) + 1970;
    let age = present.getFullYear() - previousyear;

    if (proceed) {
        await fetch("https://60ebd2d8e9647b0017cdde36.mockapi.io/users/" + sid.join(""), {
            method: "PUT",
            body: JSON.stringify({
                name: document.getElementById('name').value,
                age: age,
                email: document.getElementById('email').value,
                DOB: document.getElementById('dob').value,
                Phone: document.getElementById('Mobile').value,
                password: document.getElementById('password').value,
                confirmPassword: document.getElementById('confirmPassword')
            }),
            headers: {
                "content-type": "application/json"
            }
        })
        removeData();
        fetchdata();
        change[0].classList.toggle('change-display');
        Delete[0].classList.toggle('delete-display');
    }
}

async function deletedata(id) {
    let sid = id.split("");
    sid.shift();

    let proceedDelete = confirm("Are you sure you want to DELETE data?");
    if (proceedDelete) {
        await fetch("https://60ebd2d8e9647b0017cdde36.mockapi.io/users/" + sid.join(""), {
            method: "DELETE"
        })
        removeData();
        fetchdata();
        change[0].classList.toggle('change-display');
        Delete[0].classList.toggle('delete-display');
    }
}