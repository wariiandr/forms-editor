<template>
    <label class="block mr-2">
        <span class="block text-sm font-medium text-slate-800"> {{ label }} </span>

        <select
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-slate-700 focus:ring-1 focus:ring-slate-700
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            :class="class"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)">

            <option selected> {{ placeholder }}</option>
            
            <option v-for="(option, idx) in options" 
                :key="idx" 
                :value="option"> 
                {{ option }} 
            </option>

        </select>

    </label>
</template>

<script>
export default {
    name: 'b-select',
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
        options: {
            type: Array,
            required: true
        },
        class: {
            type: String,
            required: false
        }
    },
    emits: ['update:modelValue'],
}
</script>