<template>
    <footer class="footer mt-auto py-3">
        <div class="container">
            <span class="text-muted">&copy; {{ currentYear }}</span>
        </div>
    </footer>
</template>

<script>
export default {
    name: "BaseFooter",
    computed: {
        currentYear() {
            let date = new Date();
            return date.getFullYear()
        }
    }
}
</script>

<style scoped>

</style>