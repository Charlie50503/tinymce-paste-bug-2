<template>
    <div>
        <editor v-model="my_value" :init="init"></editor>
    </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
import tinymce from "tinymce/tinymce";
import "tinymce/themes/silver/theme";
import "tinymce/icons/default";
import "tinymce/plugins/paste";

export default {
    name: "App",
    components: {
        editor: Editor,
    },
    props: {
        value: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            my_value: "",
            init: {
                inline: false,
                skin_url: "./tinymce/skins/ui/oxide",
                content_css: "./tinymce/skins/content/default/content.css", //入力欄のデサント
                plugins: ["paste"],
                importcss_append: true,
                forced_root_block: "",
                // paste_as_text: true,
                // paste_enable_default_filters: false,
                // paste_preprocess: (plugin, args) => {
                //     // this.my_value = args.content;
                // },
            },
        };
    },
    watch: {
        value(val) {
            this.my_value = val;
        },
        my_value(val, oldVal) {
            this.$emit("input", val);
        },
    },
};
</script>

<style></style>
