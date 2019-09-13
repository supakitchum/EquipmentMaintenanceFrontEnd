<template>

    <b-card>
        <b-row>

            <b-col sm="5">
                <h2>แก้ใขสถานะ</h2>
                <div align="center" style="padding:10%">
                    <img src="data:image/jpeg;base64,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"
                         style="border-radius: 100%; width:300px; height:auto">
                    <!-- <b-form-file id="file-small" size="sm" style="margin:15px"></b-form-file> -->

                </div>

            </b-col>
            <b-col sm="7" style="margin-top:50px;">
                <b-form @submit.prevent="submitData">
                    <b-row>
                        <b-col md="12" class="mb-2">
                            <p><b>ชื่อรายการ:</b> {{ (this.$route.query.title !== undefined) ? this.$route.query.title:'' }}</p>
                        </b-col>
                        <b-col md="12" class="mb-2">
                            <p><b>รายละเอียด:</b> {{ (this.$route.query.detail !== undefined) ? this.$route.query.detail:'' }}</p>
                        </b-col>
                        <b-col
            label="Select"
            label-for="basicSelect"
            :label-cols="3"
            id="status"
            ><label for="name"><b>สถานะ</b>: กำลังดำเนินการ</label>
          </b-col>
                        <b-col md="12">
                            <b-button type="submit" size="dg" variant="success" style="margin:5px"><i
                                    class="fa fa-dot-circle-o"></i> ดำเนินการเสร็จสิ้น
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
    name: "updatestatus",
    data: function () {
      return {
        datas: this.datas
      }
    },
    mounted() {
      this.base_api = localStorage.base_api
      this.token = localStorage.usertoken
    },
    methods: {
      submitData() {
        let api = this.base_api+'/technician/repair'
        this.$http.put(api,{
          _id: this.$route.query.id,
          status: 3
        }, {
          headers: {
            'Authorization': `Bearer ${this.token}`,
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          if (res.status === 200){
            this.$alertify.success('บันทึกข้อมูลเรียบร้อย')
            this.$router.push('/updatefix')
          }
          else {
            this.$alertify.error('บันทึกข้อมูลผิดพลาด')
          }
        })
      }
    }
  }
</script>

