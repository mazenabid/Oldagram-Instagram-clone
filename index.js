const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    },
    {
        name: "Mazen",
        username: "maz",
        location: "Regina, Canada",
        avatar: "images/maz.png",
        post: "images/maz-post.png",
        comment: "cool project!!",
        likes: 10
    }
]

const contentDisplay = document.getElementById("content-display")


contentDisplay.innerHTML = posts.map(post => {
    return `
    <section class="post-content-structure">
            <div class="user-info">
                <div class="user-pfp-container">
                    <img src="${post.avatar}" class="user-pfp" alt="profile picture of ${post.name}">
                </div>
                <div class="username-location-container">
                    <p class="bold">${post.name}</p>
                    <p>${post.location}</p>
                </div>
            </div>
                <div class="post-picture">
                    <img src="${post.post}" class="posts" alt="${post.name}'s post"/>
                </div>
                <div class="icons-container">
                    <img src="./images/icon-heart.png" class="icon icon-heart"/>
                    <img src="./images/icon-comment.png" class="icon"/>
                    <img src="./images/icon-dm.png" class="icon"/>
                </div>
                <div class="like-count bold">${post.likes} likes</div>
                <div class="username-caption"><span class="bold">${post.username}</span> ${post.comment}
                </div>
        </section>
    `
}).join("")