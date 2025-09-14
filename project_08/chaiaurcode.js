const insert = document.getElementById("insert");
const keyMessage = document.querySelector("#key");

function showKey(e){
    
    insert.innerHTML = `
            <div class="color">
                <table>
                    <tr>
                        <th>Key-Name</th>
                        <th>Key-Code</th>
                        
                    </tr>
                    <tr>
                        <td>${e.key === " " ? "space" : e.key}</td>
                        <td>${e.keyCode}</td>
                    </tr>
    
                </table>;
            </div>`
}


window.addEventListener("keydown", showKey)