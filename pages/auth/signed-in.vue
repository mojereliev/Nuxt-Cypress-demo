<template>
  <p>Signing in...</p>
</template>
<script>
export default {
  fetch({ $auth, redirect }) {
    if ($auth.loggedIn) {
      redirect('/')
    }
  },
  mounted() {
    if (!this.$auth.loggedIn) {
      this.$auth.loginWith('auth0')
    }
  }
}
</script>
