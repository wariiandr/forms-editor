<template>
    <label class="block">
        <span class="block text-sm font-medium text-slate-800"> {{ label }} </span>

        <input class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-slate-700 focus:ring-1 focus:ring-slate-700
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            :type="type"
        />

    </label>
</template>

<script>
export default {
    name: 'b-input',
    props: {
        label: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    }
}
</script>