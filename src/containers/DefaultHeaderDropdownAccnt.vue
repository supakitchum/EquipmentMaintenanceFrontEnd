<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <img
        src="img/avatars/6.jpg"
        class="img-avatar"
        alt="admin@bootstrapmaster.com" />
    </template>\
    <template slot="dropdown">
      <b-dropdown-item :href="`#/users/profile`"><i class="fa fa-user" /> ข้อมูลส่วนตัว</b-dropdown-item>
      <b-dropdown-item @click="logout"><i class="fa fa-lock" /> ออกจากระบบ</b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'
export default {
  name: 'DefaultHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown
  },
  mounted() {
    this.token = localStorage.usertoken;
    if (!this.token) {
      this.$router.push("/login");
    }
  },
  methods:{
    logout(){
      this.token = null;
      this.$router.push("/login");
    }
  },
  data: () => {
    return { itemsCount: 42 }
  }
}
</script>
