<template>
    <nav class="menu">
        <ul class="d-flex list-unstyled m-0 p-0">
            <li><router-link :to="{ name: 'Dashboard' }" class="text-capitalize head_font">dashboard</router-link></li>
            <li><router-link :to="{ name: 'Products' }" class="text-capitalize head_font">products</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "OurMenu"
}
</script>