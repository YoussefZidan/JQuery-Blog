$(document).ready(function () {

    //Requests
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
        success: function (response) {
            $.each(response, function (index, posts) {
                $("#pagination").prepend(
                    `<div class="blog-post">
                        <h2>${posts.title}</h2>
                        <p>${posts.body}</p>
                    </div>
                    <hr>
                    `);
            })
        },
        error: function (response) {
            alert(`Sorry the Articles can't be loade because of ${response.statusText}`)
        },
    })


})



