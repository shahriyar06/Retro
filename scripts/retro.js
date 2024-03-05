const loadlatestpost = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const post = data;
    displaylatestpost(post);
}

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
        console.log(post);
        
    });

}

loadlatestpost();