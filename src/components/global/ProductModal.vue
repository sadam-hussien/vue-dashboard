<template>

    <transition>
        <section class="product_modal fixed-top">
            <div class="container">
                <div class="content">

                    <div class="row">

                        <div class="col"></div>

                        <div class="col-md-8 col-lg-6">
                            <div class="product_modal_content">

                                <!-- start head_area  -->
                                <h4 class="head_area text-capitalize head_font">{{modalHead}}</h4>
                                <!-- // end head_area  -->

                                <!-- start body_area  -->
                                <div class="body_area">
                                    <slot name="body-area"></slot>
                                </div>
                                <!-- // end body_area  -->

                                <!-- start footer_area  -->
                                <div class="footer_area">
                                    <slot name="footer-area"></slot>
                                </div>
                                <!-- // end footer_area  -->

                            </div>  
                        </div>

                        <div class="col"></div>

                    </div>
                </div>
            </div>
        </section>
    </transition>
</template>

<script>
export default {
    name: "ProductModal",

    props: ["modalHead"],
}
</script>