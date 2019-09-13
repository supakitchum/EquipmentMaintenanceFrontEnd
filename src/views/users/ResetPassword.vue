<template>
  <b-form @submit.prevent="submitPassword">
    <b-row class="justify-content-md-center">
      <b-col sm="6">
        <b-card class="mt-5">
          <h2>เปลี่ยนรหัสผ่าน</h2>
          <div align="left" style="padding:10%">
            <b-col md="12" class="mb-2" style="text-align=left;">
              <label for="name">รหัสผ่านใหม่</label>
              <b-form-input type="password" name="password" id="password"></b-form-input>
            </b-col>

            <b-col md="12" class="mb-2" style="text-align=left;">
              <label for="name">ยืนยันรหัสผ่านใหม่</label>
              <b-form-input type="password" name="confirm_password" id="confirm_password"></b-form-input>
            </b-col>

            <b-button type="submit" size="dg" variant="success" style="margin: 15px; float: right;">
              <i class="fa fa-dot-circle-o"></i> บันทึก
            </b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>


export default {
  name: "ResetPassword",
  mounted() {
    this.base_api = localStorage.base_api
    this.token = localStorage.usertoken
  },
  methods: {
    submitPassword() {
      if (password.value.length < 6) {
        this.$alertify.error("รหัสผ่านต้องอย่างน้อย 6 ตัว")
      } else if (password.value !== confirm_password.value) {
        this.$alertify.error("รหัสผ่านไม่ตรงกัน")
      } else {

         let api = this.base_api+'/users/reset-password'
          this.$http.post(api,{
            password: password.value
          }, {
            headers: {
              'Authorization': `Bearer ${this.token}`,
              'Content-Type': 'application/json'
            }
          }).then((res) => {
            if (res.status === 200){
              this.$alertify.success('เปลี่ยนแปลงรหัสผ่านเรียบร้อย');        
              this.token = null;
              this.$router.push("/login");
   
            }
          })

      }

     
    }
  }
};
</script>
