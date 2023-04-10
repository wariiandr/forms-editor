<template>
    <div class="w-full">
        <div class="w-full flex justify-between items-center">
            <h2 class="text-4xl font-semibold text-slate-900"> Form List </h2>

            <button class="py-2 px-3 mr-9 text-base font-semibold border-slate-700 rounded-full border-4 text-slate-700 transition
            hover:bg-slate-100 active:border-slate-600 active:bg-slate-200"
            
            @click="$router.push('/creating')"> 
                CREATE NEW FORM 
            </button>
        </div>

        <form-list />
    </div>
</template>

<script>
import FormList from '@/components/FormList/FormList.vue';

export default {
    components: { FormList }
}
</script>