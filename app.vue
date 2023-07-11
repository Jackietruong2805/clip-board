<script setup>
import { ref, watch } from 'vue';
import { Clipboard } from '@capacitor/clipboard';
const searchText = ref('');
const copyText = ref('');


const writeToClipboard = async (newValue) => {
  searchText.value = newValue
  await Clipboard.write({
    string: newValue
  });
};

const checkClipboard = async () => {
  const { value } = await Clipboard.read();
  copyText.value = value;
};

const handleCloseTab = () => {
  copyText.value = ''
  searchText.value = ''
};

watch(copyText, async (newText, oldText) => {
  if (newText) {
    setTimeout(() => {
      copyText.value = ''
    }, 2000)
  }
});

</script>
<template>
  <div class="w-[600px] mx-auto mt-10">
    <div class="p-3 max-w-[500px] mx-auto h-[500px] bg-gray-200 rounded-md">
      <div class="max-w-[400px] h-full mx-auto relative">
        <h1 class="text-2xl font-bold mt-5">Welcome to CopyMe</h1>
        <div class="flex items-center bg-white mt-4">
          <Input :modelValue="searchText" @update:modelValue="newValue => writeToClipboard(newValue)" />
          <button @click="checkClipboard" class="bg-blue-500 py-2 px-3 text-white font-semibold h-[50px]">Copy</button>
        </div>
        <div v-if="copyText" class="absolute flex bottom-10 w-[400px]">
          <div class="flex-1 w-full bg-white text-black p-3">Copied</div>
          <div class="bg-black text-white px-[22px] p-3 cursor-pointer font-semibold" @click="handleCloseTab">Ok</div>
        </div>
      </div>
    </div>
  </div>
</template>


