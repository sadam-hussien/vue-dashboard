<template>
    <header class="main-header position-relative">
        <div class="container">

            <!-- start content  -->
            <div class="content">

                <!-- start top_area  -->
                <div class="top-area d-flex justify-content-between align-items-center">
                    
                    <!-- start logo  -->
                    <our-logo />
                    <!-- // end logo  -->

                    <!-- start person-area  -->
                    <person-area />
                    <!-- // end person-area  -->

                </div>
                <!-- // end top_area  -->

                <!-- start bottom-area  -->
                <div class="bottom-area d-flex justify-content-between align-items-center flex-column flex-md-row">

                    <!-- start menu  -->
                    <our-menu />
                    <!-- // end menu  -->

                    <!-- start search-area  -->
                    <div class="search-area">
                        <our-input type="text" placeholder="serach about..." id="search-area-inp" />
                    </div>
                    <!-- // end search-area  -->

                </div>
                <!-- // end bottom-area  -->

            </div>
            <!-- // end content  -->

        </div>
    </header>
</template>

<script>
import PersonArea from "@/components/layout/PersonArea";
import OurMenu from "@/components/layout/OurMenu";

export default {
    name: "MainHeader",

    components: {
        PersonArea,
        OurMenu,
    }
}
</script>