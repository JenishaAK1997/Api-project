document.addEventListener("DOMContentLoaded", () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            const userDetailsDiv = document.getElementById("userDetails");
            data.forEach((user) => {
                const userBox = document.createElement("div");
                userBox.classList.add("col-md-3", "mb-4");

                userBox.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Name:${user.name}</h5>
                            <p class="card-text">Email: ${user.email}</p>
                            <p class="card-text">Street: ${user.address.street}</p>
                            <p class="card-text">City: ${user.address.city}</p>
                        </div>
                    </div>
                `;

                userDetailsDiv.appendChild(userBox);
            });
        })
        .catch((error) => console.error("Error fetching data: ", error));
});
