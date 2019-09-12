<template>
  <b-card>
    <b-row>
      <b-col sm="5">
        <h2>เพิ่มข้อมูลส่วนตัว</h2>
        <div align="center" style="padding:10%">
          <img
            src="https://avatarfiles.alphacoders.com/107/107749.png"
            style="border-radius: 100%; width:300px; height:auto"
          />
          <b-form-file id="file-small" size="sm" style="margin:15px"></b-form-file>
        </div>
      </b-col>
      <b-col sm="7" style="margin-top:50px;">
        <b-form @submit.prevent="submitData">
          <b-row>
            <b-col md="12" class="mb-2">
              <label for="name">อีเมลล์</label>
              <b-form-input type="text" name="email" id="email"></b-form-input>
            </b-col>
            <b-col md="6" class="mb-2">
              <label for="name">ชื่อ</label>
              <b-form-input type="text" name="fname" id="fname"></b-form-input>
            </b-col>
            <b-col md="6" class="mb-2">
              <label for="name">นามสกุล</label>
              <b-form-input type="text" name="lname" id="lname"></b-form-input>
            </b-col>
            <b-col md="12" class="mb-2">
              <label for="name">ตำแหน่ง</label>
              <b-form-input type="text" id="position" name="position"></b-form-input>
            </b-col>
            <b-col md="12" class="mb-2">
              <label for="name">โทร</label>
              <b-form-input max-length="10" type="text" id="phone" name="phone"></b-form-input>
            </b-col>
            <b-col md="12">
              <b-button type="submit" size="dg" variant="success" style="margin:5px">
                <i class="fa fa-dot-circle-o"></i> บันทึก
              </b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </b-card>
</template>
<script>
import axios from "axios";

export default {
  name: "Profile",
  mounted() {
    this.base_api = localStorage.base_api;
    this.token = localStorage.usertoken;
  },
  methods: {
    submitData() {
      let api = this.base_api + "/admin/users";
      this.$http
        .post(
          api,
          {
            email: email.value,
            firstname: fname.value,
            lastname: lname.value,
            position: position.value,
            phone: phone.value
          },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
              "Content-Type": "application/json"
            }
          }
        )
        .then(res => {
          console.log(res);
          if (res.status === 201) {
            this.$alertify.success("บันทึกข้อมูลเรียบร้อย");
            this.$router.push(`/manageuser`);
          }
        });
    }
  }
};
</script>
