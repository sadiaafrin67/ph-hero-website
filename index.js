const handleCategorys = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json()
    const items = data.data;
    // console.log(items);

    const tabContainer = document.getElementById('tab-container')

    items.forEach((category) =>{
        const div = document.createElement('div')
        div.innerHTML =`<button onclick = "handleShowCategories('${category.category_id}')" class="btn rounded hover:bg-slate-500 bg-gray-300 text-black border-none btn-neutral focus:bg-[#FF1F3D] focus:text-white active:bg-[#FF1F3D] capitalize">${category.category}</button>`
        tabContainer.appendChild(div)

    })
}

const handleShowCategories = async (id) => {
    // console.log(id)
    const res = await fetch(` https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json()
    const validData = data?.data


    const cardContainer = document.getElementById('card-container')
    cardContainer.textContent = ''

    validData.forEach((utub) => {
     console.log(utub);

    const div = document.createElement('div')
    div.classList = 'card  bg-base-100 shadow-xl'
    div.innerHTML = `<figure>
    <img class = "h-[200px]"
      src="${utub.thumbnail}"
    />
  </figure>

  <div class="card-body">

    <div class="card-footer flex justify-between mt-8">
      <div class="flex">
        <div>
          <div class="avatar">
            <div class="w-14 rounded-full">
              <img 
                src="${utub?.authors?.[0].profile_picture
                }"
              />
            </div>
          </div>
        </div>

        <div class ="mx-2">
          <h6 class = "text-base font-bold">${utub?.title
          }
          </h6>

          <div class= "flex gap-2">
          
          <small class ="text-gray-600 font-medium">${utub?.authors?.[0]. profile_name
          }</small>

         <p>${utub?.authors?.[0].verified ? `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 bg-sky-600 rounded-full text-white">
         <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
       </svg>
       ` : ''
         }</p>
        
          </div>
         
         <small class:"text-gray-600 font-medium">${utub?.others?.views
         } views</small>

        </div>
      </div>
      <div class="card-detaild-btn">

        
      </div>
    </div>
  </div>
</div> `

cardContainer.appendChild(div)
    })

    const noData = document.getElementById('no-data')
    noData.textContent = ''

 if(validData.length === 0){

  noData.classList.remove('hidden')

  const errorMsg = document.createElement('div')
  errorMsg.innerHTML = `
  <div class="text-center flex justify-center items-center mt-16 mb-4 mx-auto">
  <img  src="./photos/Icon.png" alt="" srcset="">
  </div>
  <p class="text-3xl font-bold text-center mx-auto">Oops!! Sorry, There is no <br> content here</p>
  
  `
 noData.appendChild(errorMsg)
 }
 else{
  noData.classList.add('hidden')
 }
    
}



handleCategorys()
handleShowCategories('1000')
