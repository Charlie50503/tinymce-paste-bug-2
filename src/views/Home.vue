<template>
    <div>
        <editor v-model="value"></editor>
    </div>
</template>

<script>
import tinymce from "@/components/tinymce-editor.vue";
export default {
    name: "Home",
    components: {
        editor: tinymce,
    },
    data() {
        return {
            value: "",
        };
    },
};
</script>

<style></style>
