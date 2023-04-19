<template>
    <label class="block mr-2" :class="sizeAndSpacingClasses">
        <span class="block text-sm font-medium text-slate-800"> {{ label }} </span>

        <input
            class="mt-1 mr-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-slate-700 focus:ring-1 focus:ring-slate-700
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-red-500 invalid:text-red-600
            focus:invalid:border-red-500 focus:invalid:ring-red-500"
            :placeholder="placeholder"
            :type="type"
            :required="required"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />

    </label>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: 'b-input',
    props: {
        modelValue: {
            type: [String, Number],
            required: false
        },
        label: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: false
        },
        type: {
            type: String,
            required: false
        },
        required: {
            type: Boolean,
            required: false
        },
        sizeAndSpacingClasses: {
            type: String,
            required: false
        },
    },
    emits: ['update:modelValue'],
})
</script>