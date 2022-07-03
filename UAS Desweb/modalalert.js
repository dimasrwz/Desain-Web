$("#Save").click(function () {
    var name = $("#name").val();
    var nik = $("#nik").val();

    if (name == '' || nik == '') {
        swal.fire({
            title: "Fields Empty !",
            text: "Please check the missing field !",
            icon: "warning",
            button: "OK",
        });

    } else {
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }
});

$("#signup").click(function () {
    var email = $("#email").val();

    if (email == '') {
        swal.fire({
            title: "Fields Empty !",
            text: "Please check the missing field !",
            icon: "warning",
            button: "OK",
        });

    } else {
        swal.fire({
            title: "Successfully submitted!",
            icon: "success",
            button: "OK",
        })
    }
});

$("#inquiry").click(function () {
    Swal.fire({
        title: 'Submit your GitHub ID',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
            return fetch(`//api.github.com/users/${login}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText)
                    }
                    return response.json()
                })
                .catch(error => {
                    Swal.showValidationMessage(
                        `Request failed: ${error}`
                    )
                })
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                input: 'text',
                imageUrl: result.value.avatar_url,
                title: `Please enter your Inquiry ${result.value.name} <br>
             ${result.value.location}`,

            })
        }
    })
});