<template>

  <b-card>
    <b-row>
      
      <b-col sm="12">
        <h2>เพิ่มรายการแจ้งซ่อม</h2> 
        <div style="padding-top:30px" />

          <b-form @submit.prevent="submitData">
            <b-form-group

              label="ชื่อรายการ"
              label-for="name"
              :label-cols="2"
              >
              <b-form-input id="title" name="title" type="text" autocomplete="name"></b-form-input>
            </b-form-group>  
            <b-form-group

              label="รายละเอียด"
              label-for="detail"
              :label-cols="2"
              >
              <b-form-textarea id="detail" name="detail" type="text" autocomplete="detail"></b-form-textarea>
            </b-form-group>  
            <b-form-group

              label="สถานที่"
              label-for="location"
              :label-cols="2"
              >
              <b-form-textarea id="position_repair" name="position_repair" type="text" autocomplete="location"></b-form-textarea>
            </b-form-group>  
            <b-form-group

              label="รูปถ่าย"
              label-for="photo"
              :label-cols="2"
              >
              <b-form-file id="photo" name="photo" size="sm"></b-form-file>            
            </b-form-group>  


            <div align="center">
              <b-button type="submit" size="lg" variant="success" style="margin:5px"><i class="fa fa-dot-circle-o"></i> บันทึก</b-button>
            </div> 
          </b-form>                  
      </b-col>


    </b-row>
  </b-card>

</template>

<script>
  import axios from 'axios'

  export default {
    name: "AddRepair",
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
        let api = this.base_api+'/users/repair'
        this.$http.post(api,{
          title : title.value,
          detail: detail.value,
          position_repair: position_repair.value,
          image: null
        }, {
          headers: {
            'Authorization': `Bearer ${this.token}`,
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          if (res.status === 201){
            this.$alertify.success('เพิ่มรายการแจ้งซ่อมเรียบร้อย');
          }
        })
      }
    }
  }
</script>


