<template>

  <b-card>
    <b-row>
      
      <b-col sm="12">
        <h2>เพิ่มรายการแจ้งซ่อม</h2> 
        <div style="padding-top:30px" />
         <b-form-group

            label="ชื่อรายการ"
            label-for="basicName"
            :label-cols="2"
            >
            <b-form-input id="basicName" type="text" autocomplete="name"></b-form-input>
          </b-form-group>  
         <b-form-group

            label="รายละเอียด"
            label-for="basicName"
            :label-cols="2"
            >
            <b-form-textarea id="basicName" type="text" autocomplete="name"></b-form-textarea>
          </b-form-group>  
         <b-form-group

            label="สถานที่"
            label-for="basicName"
            :label-cols="2"
            >
            <b-form-textarea id="basicName" type="text" autocomplete="name"></b-form-textarea>
          </b-form-group>  
          <b-form-group

            label="รูปถ่าย"
            label-for="basicName"
            :label-cols="2"
            >
            <b-form-input id="basicName" type="text" autocomplete="name"></b-form-input>
          </b-form-group>  


                  <div align="center">
          <b-button type="submit" size="dg" variant="success" style="margin:5px"><i class="fa fa-dot-circle-o"></i> บันทึก</b-button>
          <b-button type="cancel" size="dg" variant="danger" style="margin:5px"><i class="fa fa-ban"></i> ยกเลิก</b-button>
        </div>                   
      </b-col>


    </b-row>
  </b-card>

</template>


