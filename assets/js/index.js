const div = document.getElementById('apidiv')
const btn = document.getElementById('btn')
let page=1
let limit=3

async function getproducts() {
    let skip = (page = 1)*limit;
    try{
   const response = await axios.get(`https://655c30a1ab37729791aa03c7.mockapi.io/fi/products?page=${page}&limit=${limit}&skip=${skip}`)
   const data = response.data;
   db=response.data
   data.forEach(item=>{
const box = document.createElement('div')
box.className = 'boxDiv'
box.innerHTML = `
<img style="width:300px " src='${item.image}' alt="">
<p class='title'>${item.name}</p>
<button class="addtobasketbtn" onclick="addToBasket(${item.id})">Add to basket</button>
`
div.appendChild(box)
})
page++;
}
    catch(error){
        console.error('Error fetching products:',error)
    }
}
   





const butn = document.getElementById('butn')
const inpp = document.getElementById('inpp')
const list = document.querySelector('.list')
const abc = document.getElementById('abc')
const abcd = document.getElementById('abcd')

// function getPro () {
//     abcd.style.display='none'
//     axios.get('https://655c81de25b76d9884fd6913.mockapi.io/products')
//     .then(res => {
//         db = res.data
//         console.log(db);
//         db.map(item => {
//             const div = document.createElement('div')
//             div.innerHTML = `
//             <p>${item.title}</p>`
//             list.appendChild(div)
//         })
//     })
// }
// getPro()


// function getbyname () {
//        abcd.innerHTML = ``
//         abc.style.display='none'
//          abcd.style.display='block'
    
//          axios.get(`https://655c81de25b76d9884fd6913.mockapi.io/products?title=${inpp.value}`)
//          .then(res => {
//              db = res.data
//              db.map(item => {
//                  const div = document.createElement('div')
//                 div.innerHTML = `
//                  <p>${item.title}</p>`
//                  abcd.append(div)
//              })
    
//          })
//      }
//      butn.addEventListener('click', getbyname)






function findByName() {
    abc.style.display = "none";
    abcd.style.display = "block";
    axios
      .get(
        `https://655c30a1ab37729791aa03c7.mockapi.io/fi/products`     //apiye diqqet et//
      )
      .then((res) => {
        db = res.data;
        let filteredData = db.filter(item => item.name.toLowerCase().startsWith(inpp.value))
        console.log(filteredData);

        filteredData.map((item) => {
          let myDiv = document.createElement("div");
          myDiv.className = "myDiv";
          myDiv.innerHTML = `
          <p>${item.name}</p>
         
          `;
          abcd.appendChild(myDiv);
        });
      });
  }

butn.addEventListener('click', findByName)






    btn.addEventListener('click',getproducts) 
function addToBasket(id) {
    let cart = JSON.parse(localStorage.getItem('cart'))||[]
    cart.push(db.find(item=>item.id==id))
    localStorage.setItem('cart',JSON.stringify(cart))
}
window.onload = ()=>{
    getproducts()
}




