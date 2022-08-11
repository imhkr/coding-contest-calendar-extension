const getContest = async () => {
  let data;
  try {
    const res = await fetch(
      `https://clist.by/api/v2/contest/?username=user_name&api_key=api_key&upcoming=true&ongoing=true&format_time=true&order_by=resource_id&limit=500`
    );
    const result = await res.json();
    data = result.objects;
    console.log(data);
  } catch (error) {}
  const fruits = [];
  data?.map((index) => {
    fruits.push(index);
  });
  console.log(fruits);
  const tableBody = document.getElementById("table-body");

  for (const user of fruits) {
    const tr = document.createElement("tr");
    const content = `<td>${user.event}</td>
      <td>${user.start}</td>
      <td>${user.end}</td>
      <td>${user.host}</td>
      <td>${user.href}</td>`;
    tr.innerHTML = content;
    tableBody?.appendChild(tr);
  }

  document.getElementById("myInput").addEventListener("keypress", myFunction);
  function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value;
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      console.log(td);
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
};

window.addEventListener("load", () => {
  getContest();
});
