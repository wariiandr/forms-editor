<template>
    <div class="w-full">
        <div class="w-full flex justify-between items-center">
            <h2 class="text-4xl font-semibold text-slate-900"> Form List </h2>

            <b-button 
                :text="'CREATE NEW FORM'"
                @click="$router.push('/editor/new')"
            />
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