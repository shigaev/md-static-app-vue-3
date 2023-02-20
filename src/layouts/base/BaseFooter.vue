<template>
    <footer class="footer mt-auto py-3">
        <div class="container">
            <span class="text-muted">&copy; {{ currentYear }}</span>
            <p>
                the images are borrowed from the website
                <a href="https://undraw.co/illustrations" target="_blank">
                    undraw.co/illustrations
                </a>
            </p>
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

<style scoped></style>