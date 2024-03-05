// ..........Discuss Api
const loaddiscusspost = async (test='') =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const discuss = data.posts;
    let searchpost = 'Notfound' ;
    if(test!==''){
        searchpost = test;
    }
    displaydiscusspost(discuss,searchpost);
}


// ..............Latest discuss display......
const displaydiscusspost = (discusses,search) =>{
    const discusscontainer = document.getElementById('discuss_post-container');
    discusscontainer.innerHTML=``;
    discusses.forEach(discuss => {
        let activation = 'bg-green-500';
        if(discuss.isActive == false){
            activation ='bg-red-500';
        }
        if(search === discuss.category || search === 'Notfound' ){
            let myString = discuss.title;
            let titlereplace = myString.replace('\'', ',');
            const allpostcard = document.createElement('div');
        allpostcard.classList = `border-2 border-[#797DFC] mb-5 flex gap-3 p-5 rounded-3xl bg-[#797dfc23]`;
        allpostcard.innerHTML = `
        <div class=" relative">
            <div class=" ">
                <img src="${discuss?.image}" class="rounded-3xl w-28 h-28 " />
            </div>
            <div class=" absolute w-4 h-4 rounded-full ${activation} right-0 top-0">
                
            </div>
        </div>
        <div class="p-3">
            <div class="flex gap-6 text-[#060606bb] text-base">
                <h3># ${discuss?.category}</h3>
                <h3>Author : ${discuss?.
                    author?.name}</h3>
            </div>
            <div>
                <h3 class="text-3xl font-semibold my-4">${discuss?.title}</h3>
                <h3 class="text-[#060606bb] text-xl">${discuss?.description}</h3>
            </div>
            <hr class="border-t-2 border-dashed text-[#060606b8] my-5">
            <div class="flex items-center justify-between">
                <div class="flex gap-4 items-center text-[#0606068e] text-base">
                    <div class="flex gap-4 items-center">
                        <i class="fa-regular fa-message"></i>
                        <h3>${discuss?.comment_count}</h3>
                    </div>
                    <div class="flex gap-4 items-center">
                        <i class="fa-regular fa-eye"></i>
                        <h3>${discuss?.view_count}</h3>
                    </div>
                    <div class="flex gap-4 items-center">
                        <i class="fa-regular fa-clock"></i>
                        <h3>${discuss?.posted_time}</h3>
                    </div>
                </div>
                <div onclick="readmsg('${titlereplace}',${discuss.view_count})" class="bg-[#23c28d9c] p-1 rounded-full px-2">
                    <i class="fa-solid fa-envelope-open text-[#FFFFFF] text-2xl"></i>
                </div>
            </div>
        </div>
        `;
        discusscontainer.appendChild(allpostcard);
        }   
    });
}

// ..................handle search....
const handlesearch = () =>{
    const searchfield = document.getElementById('search-field');
    const  searchtext = searchfield.value;
    loaddiscusspost(searchtext);
}

// ............read marl.....
const readmsg = (heading,seen) =>{
    readcount();
    const readfield = document.getElementById('read_container');
    const readcard = document.createElement('div');
        readcard.classList = `p-3 bg-white rounded-3xl flex gap-3 items-center mb-3`;
        readcard.innerHTML = `<div class="text-xl font-medium">
        <h1>${heading}</h1>
      </div>
      <div class="">
        <div class="flex gap-4 items-center">
          <i class="fa-regular fa-eye"></i>
          <h3>${seen}</h3>
      </div>`;
      readfield.appendChild(readcard);



}
// ......read count...
const readcount = ()=>{
    const read = document.getElementById('read-count');
    const innervalue = read.innerText;
    const value = parseInt(innervalue);
    const countvalue = value + 1;
    read.innerText = countvalue;

}

// .................Latest post Api............
const loadlatestpost = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const post = data;
    displaylatestpost(post);
}



// ..............Latest post display......
const displaylatestpost = post =>{

    const postcontainer = document.getElementById('Post-container');
    post.forEach(post => {
        const postcard = document.createElement('div');
        postcard.classList = ` rounded-xl border-2 border-[#0606068e]`;
        postcard.innerHTML = `<div class="p-5">
        <img src="${post?.cover_image}" alt="" class="rounded-xl " />
        <div class="">
        </div>
            <div class="mt-5 mb-4 text-[#0606068e] flex gap-4 items-center">
                <i class="fa-regular fa-calendar"></i>
                <h2 >${post?.author?.posted_date || 'No publish date'}</h2>
            </div>
            <div class="lg:w-11/12">
                <h2 class="card-title mb-5 text-2xl font-semibold">${post?.title}</h2>
                <p class="text-[#0606068e]">${post?.description}</p>
            </div>
        <div class="flex gap-5 mt-5">
            <div>
                <img  src="${post?.profile_image
                }" class="rounded-full w-14"/>
            </div>
            <div>
                <h2 class="text-xl font-semibold">${post?.author?.name}</h2>
                <h3 class="text-[#0606068e]">${post?.author?.designation || 'Unknown'}</h3>
            </div>
        </div>
        </div>
        `;
        postcontainer.appendChild(postcard);
        
    });

}

loaddiscusspost();
loadlatestpost();