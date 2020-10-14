$('document').ready(function()
{
            $("#login").on("submit", function(e) {              
                e.preventDefault;
                var btn = $('#btn-login');
                btn.button('loading');
                $.ajax({
                    type: 'post',
                    url: 'loginexec.php',
                    cache: false,
                    dataType: 'json',
                    data: $('form#login').serialize(),
                    beforeSend: function() { 
                        $("#validation-errors").hide().empty(); 
                    },
                    success: function(data) {
                        if(data.success == false)
                            {
                                var arr = data.errors;
                                $.each(arr, function(index, value)
                                {
                                    if (value.length != 0)
                                    {
                                        $("#validation-errors").append('<div class="alert alert-danger"><strong>'+ value +'</strong><div>');
                                    }
                                });
                                $("#validation-errors").show(); 
                                btn.button('reset');                            
                            } else {
                                localStorage.login="true";
                                localStorage.email=email;
                                localStorage.id=id;

                                 window.location.href = 'user_profile.php';
                            }
                    },
                    error: function(xhr, textStatus, thrownError) {
                        alert('Something went to wrong.Please Try again later...');
                        btn.button('reset');
                    }
                });             
                return false;
            });
        });