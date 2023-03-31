let show = document.getElementById("view");
let left = document.getElementById("sidebar");
let right = document.getElementById("content");
let plus = document.getElementById("plus");
let name_portfolio = document.getElementById("name");
// _________________________________________________________
// sidebar action
// _________________________________________________________

show.addEventListener("click", () => {
  if (show.childNodes[1].classList.contains("fa-eye-slash")) {
    show.childNodes[1].classList.remove("fa-eye-slash");
    show.childNodes[1].classList.add("fa-eye");
    left.style.left = "-20%";
    left.style.width = "0";
    right.style.width = "100%";
    sidebar.style.setProperty("--hight", "0%");
    name_portfolio.style.opacity = "1";
  } else {
    show.childNodes[1].classList.remove("fa-eye");
    show.childNodes[1].classList.add("fa-eye-slash");
    left.style.left = "0%";
    left.style.width = "20vmax";
    right.style.width = "80%";
    sidebar.style.setProperty("--hight", "100%");
    name_portfolio.style.opacity = "0";
  }
});
// _________________________________________________________
// swiper
// _________________________________________________________
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
// _________________________________________________________
//   define variables
let inName = document.getElementById("inName");
let inEmail = document.getElementById("inEmail");
let inAge = document.getElementById("inAge");
let inPhone = document.getElementById("inPhone");
let inAddress = document.getElementById("inAddress");
let title_side = document.getElementById("name-data");
let inArray = [inName, inEmail, inAge, inPhone, inAddress];
let avatar_source = document.querySelectorAll(".Avatar");
let Edit_info = document.getElementById("Edit-info");
let Add_info = document.getElementById("Add-info");
let objInfo = {};
// _________________________________________________________
// _________________________________________________________
// edit data
Edit_info.addEventListener("click", () => {
  inArray.forEach((element) => {
    element.removeAttribute("readonly");
  });
});
let sourc = "";
avatar_source.forEach((element) => {
  element.addEventListener("click", () => {
    sourc = element.getAttribute("src");
    localStorage.setItem("avatar", sourc);
    document.getElementById("avatar").setAttribute("src", sourc);
    avatar_source.forEach((element) => {
        element.classList.remove("active");
    });
    element.classList.add("active");
  });
});
// _________________________________________________________
// Add data
Add_info.addEventListener("click", () => {
  inArray.forEach((element) => {
    element.setAttribute("readonly", "");
  });
  objInfo = {
    name: inName.value,
    email: inEmail.value,
    age: inAge.value,
    phone: inPhone.value,
    address: inAddress.value,
  };
  localStorage.setItem("info", JSON.stringify(objInfo));
});
// _________________________________________________________
// _________________________________________________________
// load data
// _________________________________________________________
// _________________________________________________________
window.onload = () => {
    if (localStorage.getItem("avatar") != null) {
        document.getElementById("avatar").setAttribute("src", localStorage.getItem("avatar"));
        avatar_source.forEach((element) => {
            if(element.getAttribute("src") == localStorage.getItem("avatar")){
                element.classList.add("active");
            };

        });
    }
    if (localStorage.getItem("info") != null) {
        let info = JSON.parse(localStorage.getItem("info"));
        title_side.innerHTML=name_portfolio.innerText=inName.value = info.name;
        inEmail.value = info.email;
        inAge.value = info.age;
        inPhone.value = info.phone;
        inAddress.value = info.address;
    }
}
// _________________________________________________________
// _________________________________________________________
let form_add = document.getElementById("form-add");
let close = document.getElementById("close");
let itemes_prodeuct = document.getElementById("itemes-prodect");
let product_id = "" 
plus.addEventListener("click", () => {
    form_add.style.display = "flex";
    for (let i = 1; i <= itemes_prodeuct.children.length + 1; i++) {


        if (itemes_prodeuct.children[i - 1] == undefined || itemes_prodeuct.children[i - 1] == null) {
            product_id = `prodect-${i}`;
            break;
        }
        else if(itemes_prodeuct.children[i - 1].id == `prodect-${i}`){
            continue;
        }
        else if(itemes_prodeuct.children[i - 1].id != `prodect-${i}`){
            product_id = `prodect-${i}`;
            break;
        }
        
    }
});
close.addEventListener("click", () => {
    form_add.style.display = "none";
});
// _________________________________________________________

// _________________________________________________________
// _________________________________________________________
let object_product = {};
let inName_prodect = document.getElementById("inName-prodect");
let inPrice_prodect = document.getElementById("inPrice-prodect");
let inDescription_prodect = document.getElementById("inDescription-prodect");
let inImage_prodect = document.getElementById("inImg-prodect");
let add_prodect = document.getElementById("add-prodect");
let inArray_prodect = [inName_prodect, inPrice_prodect, inDescription_prodect];
let check;
add_prodect.addEventListener("click", () => {
  inArray_prodect.forEach((element) => {
      if (element.value == "") {
        element.style.border = "3px solid red";
        element.style.transition = "all 0.5s";
        } else {
        element.style.borderColor = "green";
        element.style.transition = "all 0.5s";
      }
    });
    if (inName_prodect.value == "" || inPrice_prodect.value == "" || inDescription_prodect.value == "") {
      check = false;
    }
    else{
      check = true;
    }
    if (check == true) {
      object_product = {
        name: inName_prodect.value,
        price: inPrice_prodect.value,
        description: inDescription_prodect.value,
        image: `./imgs/${inImage_prodect.files[0].name}`,
        id: product_id,
      };
      itemes_prodeuct.innerHTML +=`<article class="prodect" id="${object_product.id}">
      <div class="img-prodect">
          <img
        src=${object_product.image}
        alt=""
        class="prodect-photo"
        id="prodect-photo"
      />
      </div>
      <h1 class="name-prodect" id="name-prodect">${object_product.name}</h1>
      <p class="price-prodect" id="price-prodect">${object_product.prise}</p>
      <p class="description-prodect" id="description-prodect">
        ${object_product.description}
      </p>
      <div class="con-button">
        <button class="button-prodect" id="edit-prodect">
          <i class="fa fa-pencil" aria-hidden="true"></i>
        </button>
        <button class="button-prodect" id="delete-prodect">
          <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>
      </article>`
      console.log(object_product);
      localStorage.setItem(product_id, JSON.stringify(object_product));
      form_add.style.display = "none";
      location.reload();
    }
  });
// _________________________________________________________
// _________________________________________________________
window.onload = () => {
  if (localStorage.getItem("avatar") != null) {
      document.getElementById("avatar").setAttribute("src", localStorage.getItem("avatar"));
      avatar_source.forEach((element) => {
          if(element.getAttribute("src") == localStorage.getItem("avatar")){
              element.classList.add("active");
          };

      });
  }
  if (localStorage.getItem("info") != null) {
      let info = JSON.parse(localStorage.getItem("info"));
      title_side.innerHTML=name_portfolio.innerText=inName.value = info.name;
      inEmail.value = info.email;
      inAge.value = info.age;
      inPhone.value = info.phone;
      inAddress.value = info.address;
  }
  for (let i = 1; i <= localStorage.length + 1; i++) {
      let product_id = `prodect-${i}`;
  if (localStorage.getItem(product_id) != null) {
      let info = JSON.parse(localStorage.getItem(product_id));
      itemes_prodeuct.innerHTML +=`<article class="prodect" id="${info.id}">
      <div class="img-prodect">
          <img
        src=${info.image}
        alt=""
        class="prodect-photo"
        id="prodect-photo"
      />
      </div>
      <h1 class="name-prodect" id="name-prodect">${info.name}</h1>
      <p class="price-prodect" id="price-prodect">${info.price}</p>
      <p class="description-prodect" id="description-prodect">
        ${info.description}
      </p>
      <div class="con-button">
        <button class="button-prodect" id="edit-prodect" onclick="edit_prodect(this.parentElement.parentElement.id)">
          <i class="fa fa-pencil" aria-hidden="true"></i>
        </button>
        <button class="button-prodect" id="delete-prodect" onclick="delete_prodect(this.parentElement.parentElement.id)">
          <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>
      </article>`
  }}
};
// _________________________________________________________
// _________________________________________________________
// delete prodect
function delete_prodect(id) {
  localStorage.removeItem(id);
  location.reload();
}
// _________________________________________________________
// _________________________________________________________
// edit prodect

function edit_prodect(id) {
  let info = JSON.parse(localStorage.getItem(id));
  form_add.style.display = "flex";
  inName_prodect.value = info.name;
  inPrice_prodect.value = info.price;
  inDescription_prodect.value = info.description;
  if (inName_prodect.value != "" || inPrice_prodect.value != "" || inDescription_prodect.value != "") {
    check = true;
  }
  if(check == true){
    object_product = {
      name: inName_prodect.value,
      price: inPrice_prodect.value,
      description: inDescription_prodect.value,
    };
    if(inImage_prodect.value == ""){
      object_product.image = `./imgs/${inImage_prodect.files[0].name}`;
    }
    localStorage.setItem(object_product.id, JSON.stringify(object_product));
    form_add.style.display = "none";
    location.reload();
  }
}