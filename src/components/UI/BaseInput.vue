<template>
    <label class="block mr-2" :class="sizeClasses">
        <span class="block text-sm font-medium text-slate-800"> {{ label }} </span>

        <input
            class="mt-1 mr-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-slate-700 focus:ring-1 focus:ring-slate-700
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            :placeholder="placeholder"
            :type="type"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />

    </label>
</template>

<script>
export default {
    name: 'b-input',
    props: {
        modelValue: {
            required: true
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
            required: true
        },
        sizeClasses: {
            type: String,
            required: false
        }
    },
    emits: ['update:modelValue'],
}
</script>