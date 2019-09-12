<template>

    <b-card>
        <b-row>

            <b-col sm="5">
                <h2>ข้อมูลส่วนตัว</h2>
                <div align="center" style="padding:10%">
                    <img src="https://avatarfiles.alphacoders.com/107/107749.png"
                         style="border-radius: 100%; width:300px; height:auto">
                    <b-form-file id="file-small" size="sm" style="margin:15px"></b-form-file>

                </div>

            </b-col>
            <b-col sm="7" style="margin-top:50px;">
                <b-form @submit.prevent="submitData">
                    <b-row>
                        <b-col md="12" class="mb-2">
                            <label for="name">อีเมลล์</label>
                            <b-form-input disabled type="text" name="email" id="email"
                                          v-bind:value="(datas.email !== undefined) ? datas.email:''"></b-form-input>
                        </b-col>
                        <b-col md="6" class="mb-2">
                            <label for="name">ชื่อ</label>
                            <b-form-input type="text" name="fname" id="fname"
                                          v-bind:value="(datas.firstname !== undefined) ? datas.firstname:''"></b-form-input>
                        </b-col>
                        <b-col md="6" class="mb-2">
                            <label for="name">นามสกุล</label>
                            <b-form-input type="text" name="lname" id="lname"
                                          v-bind:value="(datas.lastname !== undefined) ? datas.lastname:''"></b-form-input>
                        </b-col>
                        <b-col md="12" class="mb-2">
                            <label for="name">โทร</label>
                            <b-form-input max-length="10" type="text" id="phone" name="phone"
                                          v-bind:value="(datas.phone !== undefined) ? datas.phone:''"></b-form-input>
                        </b-col>
                        <b-col md="12" class="mb-2">
                            <label for="name">รหัสพนักงาน</label>
                            <b-form-input max-length="10" type="text" id="id_employee" name="id_employee"
                                          v-bind:value="(datas.id_employee !== undefined) ? datas.id_employee:''"></b-form-input>
                        </b-col>
                                                <b-col md="12" class="mb-2">
                            <label for="name">ที่อยู่</label>
                            <b-form-input max-length="10" type="text" id="position" name="position"
                                          v-bind:value="(datas.position !== undefined) ? datas.position:''"></b-form-input>
                        </b-col>
                        <b-col md="12">
                            <b-button type="submit" size="dg" variant="success" style="margin:5px"><i
                                    class="fa fa-dot-circle-o"></i> บันทึก
                            </b-button>
                        </b-col>
                    </b-row>
                </b-form>
            </b-col>
        </b-row>
    </b-card>

</template>
<script>

  export default {
    name: "TechProfile",
    data: function () {
      return {
        datas: this.datas
      }
    },
    mounted() {
      this.base_api = localStorage.base_api
      this.token = localStorage.usertoken
      this.getData()
    },
    methods: {
      getData() {
        this.$http.get(this.base_api + '/technician', {
          headers: {
            'Authorization': `Bearer ${this.token}`,
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          this.datas = res.data.results.data[0]
        })
      },
      submitData() {
        let api = this.base_api+'/technician'
        this.$http.put(api,{
          email: 'test@test.com',
          firstname: fname.value,
          lastname: lname.value,
          phone: phone.value,
          id_employee: id_employee.value,
          position: position.value
        }, {
          headers: {
            'Authorization': `Bearer ${this.token}`,
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          if (res.status === 200){
            this.$alertify.success('บันทึกข้อมูลเรียบร้อย');
          }
        })
      }
    }
  }
</script>

