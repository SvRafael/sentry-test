<template>
  <div>
    <h1 class="text-4xl">About</h1>
    <button @click="user.user.send()">Send Email</button>
    <button @click="makeToast">Make Toast</button>
  </div>
</template>

<script setup>
  import * as Sentry from "@sentry/vue"

  const makeToast = () => {
    sliceBread();
  };
  const user = {}
  const post = {
    id: 1,
    title: "Hello Word",
    body: "teste teste teste teste..."
  }

  Sentry.setContext("post", {
    id: post.id,
    title: post.title
  });
  Sentry.setTag("ramdom-tag", "hello-tag")
</script>

