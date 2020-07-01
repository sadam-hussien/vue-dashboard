<template>
    <div class="login">
        
        <section class="login-page padding_sec position-relative">

            <div class="container">

                <div class="content">

                    <div class="row">

                        <div class="col d-none d-md-flex"></div>

                        <div class="col-md-7 col-lg-5">
                            <div class="login-area">
                                <form class="login-form"  @submit.prevent="loginNow">
                                    
                                    <!-- start form_title  -->
                                    <div class="form_title">
                                        <h2 class="font-weight-bold head_font text-capitalize">welcome !</h2>
                                    </div>
                                    <!-- // end form_title  -->

                                    <!-- start form-body  -->
                                    <div class="form-body">
                                        
                                        <!-- start form-group  -->
                                        <div class="form-group d-flex align-items-center">
                                            <label for="inp-email"><i class="fas fa-envelope"></i></label>
                                            <our-input type="text" id="inp-email" placeholder="email" required />
                                        </div>
                                        <!-- // end form-group  -->

                                        <!-- start form-group  -->
                                        <div class="form-group d-flex align-items-center">
                                            <label for="inp-password"><i class="fas fa-lock"></i></label>
                                            <our-input type="password" id="inp-password" placeholder="password" required />
                                        </div>
                                        <!-- // end form-group  -->

                                        <button type="submit" class="form-control">login</button>

                                    </div>
                                    <!-- // end form-body  -->

                                </form>
                            </div>
                        </div>

                        <div class="col d-none d-md-flex"></div>

                    </div>

                </div>

            </div>

        </section>

    </div>
</template>

<script>

export default {
    name: "Login",
    data() {
        return {
        }
    },

    methods: {

        loginNow: function () {
            this.$router.push({name: 'DashboardHome'});
        }

    }

}
</script>