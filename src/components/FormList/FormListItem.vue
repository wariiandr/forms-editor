<template>
    <div class="w-1/6 p-4 border-slate-700 rounded-md border-4 text-slate-800 break-words break-all 
        hover:bg-slate-100 hover:-translate-y-1 hover:scale-105 duration-300 transition hover:shadow-md hover:shadow-slate-800 hover:cursor-pointer">

        <p class="font-semibold text-lg"> {{ form.title }} </p>

        <p class="flex items-center mt-4">
            <img class="w-5 mr-1" src="@/assets/icons/calendar.svg" />
            {{ form.creationDate }}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        form: {
            type: Object,
            required: true
        }
    },
    setup({ form }) {


        return {
            
        }
    }
}
</script>