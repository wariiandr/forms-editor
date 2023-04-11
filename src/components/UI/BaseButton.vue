<template>
    <button class="py-2 px-3 mr-9 text-base font-semibold border-slate-700 rounded-full border-4 text-slate-700 transition
        hover:bg-slate-100 active:border-slate-600 active:bg-slate-200"
        :class="[classes, disabled ? 'disabled:text-slate-400 disabled:border-slate-400 disabled:active:border-slate-400 disabled:active:bg-slate-100' : '']"
        :disabled="disabled"
    
        @click="$emit('click')"> 
        {{ text }}
    </button>
</template>

<script>
export default {
    name: 'b-button',
    props: {
        text: {
            type: String,
            required: true
        },
        disabled: {
            type: Boolean,
            required: false
        },
        classes: {
            type: String,
            required: false
        }
    },
    emits: ['click'],
}
</script>