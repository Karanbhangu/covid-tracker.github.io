window.addEventListener("load", ()=>{
    const api = `https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true`;
    let table = document.getElementById("table")
    fetch(api).then((response)=>{
        return response.json()
    }).then(data=>{
        const name = data;
        for(let i=0;i<name.length;i++){
            table.innerHTML += `
            <tr>
                <td>${name[i].country}</td>
                <td>${name[i].infected}</td>
                <td>${name[i].recovered}</td>
                <td>${name[i].tested}</td>
            `
        }
    })
})
function querysearch(){
    let table = document.getElementById("table");
    let tr = table.getElementsByTagName("tr");
    let query = document.getElementById("query").value.toUpperCase();
    for(let i=1;i<tr.length;i++){
        let td = tr[i].getElementsByTagName("td")[0].innerText.toUpperCase();
        if(td.includes(query)){
            tr[i].style.display = "";
        }
        else{
            tr[i].style.display = "none";
        }
    }
}