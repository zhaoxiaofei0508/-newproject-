<template>
    <div>
        {{text}}
    </div>
</template>
<script>
export default {
    data() {
        return {
            text:"123",
        }
    },
    created() {
        this.text=this.$route.params.id
    },
}
</script>
<style scoped>

</style>
