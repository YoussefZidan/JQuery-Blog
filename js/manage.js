$(document).ready(function () {

    //Requests
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
        success: function (response) {
            $.each(response, function (index, posts) {
                $("#table-body").append(
                    `
                    <tr class="table-row">
                        <td class="title">${posts.title}</td>
                        <td class="body">${posts.body}</td>
                        <td>
                            <ul>
                                <li><a href ="form.html" class="edit">Edit</a></li>
                                <li><a href="#" class="delete">Delete</a></li>
                            </ul>
                        </td>
                    </tr>
                `);
            })
        },
        error: function (response) {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: `Sorry the Articles can't be loade because of ${response.statusText}`,
            })
            return false;
        },
    })

    //Edit
    $("#table").on("click", ".edit", function () {
        localStorage.setItem("title", $(this).parents("td").siblings(".title").text())
        localStorage.setItem("body", $(this).parents("td").siblings(".body").text())
    })

    // form
    $("#post-title").val(localStorage.getItem("title"))
    $("#post-body").val(localStorage.getItem("body"))

    //save
    $("form").submit(function (ev) {
        ev.preventDefault();

        if ($("#post-title").val() === "" || $("#post-body").val() === "") {

            Swal.fire({
                type: 'error',
                title: "Articles Can't be Saved" ,
                text: `One or more fields are empty`
            })

        } else {
            location.href = "manage.html"
        }
    })




    //delete
    $("#table").on("click", ".delete", function () {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Deleted!',
                    'Your article has been deleted.',
                    'success',
                    $(this).parents(".table-row").remove()
                )
            }
        })
    })





})

