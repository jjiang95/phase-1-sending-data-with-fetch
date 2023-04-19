// Add your code here
function submitData(username, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: `${username}`,
            email: `${email}`,
        }),
    })
    .then(resp => resp.json())
    .then(json => {
        const p = document.createElement("p");
        p.textContent = json.id;
        document.querySelector("body").appendChild(p);
    })
    .catch(function (error) {
        alert("Request failed");
        const msg = document.createElement("p");
        msg.textContent = error.message;
        document.querySelector("body").appendChild(msg);
    });
};