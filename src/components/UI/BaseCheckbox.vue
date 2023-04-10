<template>
    <div class="flex items-center mr-4">
        <input
            class="w-5 h-5 accent-slate-700 text-slate-700 bg-gray-100 border-gray-300 rounded 
            focus:ring-slate-700 dark:focus:ring-slate-700 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600
            hover:cursor-pointer"
            :class="class"
            type="checkbox"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)">
        <label class="ml-2 text-lg text-gray-900 dark:text-gray-900"> {{ label }} </label>
    </div>
</template>

<script>
export default {
    name: 'b-checkbox',
    props: {
        modelValue: {
            required: true
        },
        label: {
            type: String,
            required: true
        },
        class: {
            type: String,
            required: false
        }
    }
}
</script>