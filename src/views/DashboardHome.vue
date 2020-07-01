<template>
    <div class="dash-home">
        
        <!-- start main-header  -->
        <main-header />
        <!-- // end main-header  -->

        <router-view />

        <!-- start main-footer  -->
        <main-footer />
        <!-- // end main-footer  -->

    </div>
</template>

<script>
import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";


export default {
    name: "DashboardHome",

    components: {
        MainHeader,
        MainFooter
    }
}
</script>