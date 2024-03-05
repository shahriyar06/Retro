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
        postcard.classList - `card card-compact w-96 bg-base-100 shadow-xl`;
        postcard.innerHTML = `<figure><img src="${post?.cover_image}" alt="" /></figure>
        <div class="card-body">
            <h2 class="">${post?.author?.posted_date}</h2>
            <h2 class="card-title">${post?.title}</h2>
            <p>${post?.description}</p>
            <div class="">
                <img src="${post?.profile_image
                }" />
                <h2 class="">${post?.author?.name}</h2>
                <h3 class="">${post?.author?.designation}</h3>
            </div>
        </div>
        `;
        postcontainer.appendChild(postcard);
        console.log(post);
        
    });

}

loadlatestpost();