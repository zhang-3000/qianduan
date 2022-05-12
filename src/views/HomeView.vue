<template>
  <div v-if="this.$store.state.isLogin==true">
    已经登录！
  </div>
  <div v-else>
    尚未登录，请前往登陆<a href="./login">Login</a>
  </div>
</template>