<template>
    <input :type="type" :id="inpId" :placeholder="placeholder" class="form-control our-input">
</template>

<script>
export default {
    name: "OurInput",
    props: ["type", "inpId", "placeholder"]
}
</script>