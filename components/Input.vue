<script setup>
defineProps(['modelValue']);
defineEmits(['update:modelValue']);
</script>

<template>
    <v-text-field class="md:h-[50px] h-[45px] md:-mt-1 -mt-2 searchText" :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)" bg-color="transparent" flat variant="solo"
        placeholder="Nhập text ở đây..."></v-text-field>
</template>