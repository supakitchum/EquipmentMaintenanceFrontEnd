<template>

  <!-- <div class="row">
    <div style="float: left;width: 40%; text-align: center;">
      <h2 style="text-align: left">ข้อมูลส่วนตัว</h2>
        <img src="http://santetotal.com/wp-content/uploads/2014/05/default-user.png" style="width: 200px; margin:40px; border-radius: 100%"> <br>
        <input type="file" id="myFile">
    </div>
    <div style="float: left;width: 60%;">
   
      <b-col sm="3">
        <label :for="`type-${type}`">ชื่อ - สกุล</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
      </b-col>
    </div>
  </div> -->
  <b-card>
  <b-row>
    
      <b-col sm="5">
        <h2>ข้อมูลส่วนตัว</h2>
        <div align="center" style="padding:10%">
          <img src="https://avatarfiles.alphacoders.com/107/107749.png" style="border-radius: 100%; width:300px; height:auto">
            <b-form-file id="file-small" size="sm" style="margin:15px"></b-form-file>

        </div>

      </b-col>
      <b-col sm="7" style="margin-top:50px;">
        <b-form-group>
            <label for="name">ชื่อ - สกุล</label>
            <b-form-input type="text" id="name"></b-form-input>
        </b-form-group>

        <b-form-group>
            <label for="name">ชื่อผู้ใช้งาน</label>
            <b-form-input type="text" id="name"></b-form-input>
        </b-form-group>
        
        <b-form-group>
            <label for="name">ตำแหน่ง</label>
            <b-form-input type="text" id="name"></b-form-input>
        </b-form-group>
        
        <b-form-group>
            <label for="name">ที่อยู่</label>
            <b-form-textarea type="text" id="name"></b-form-textarea>
        </b-form-group>
        
        <b-form-group>
            <label for="name">โทร</label>
            <b-form-input type="text" id="name"></b-form-input>
        </b-form-group>

        <div align="center">
          <b-button type="submit" size="sm" variant="primary" style="margin:5px"><i class="fa fa-dot-circle-o"></i> บันทึก</b-button>
          <b-button type="cancel" size="sm" variant="danger" style="margin:5px"><i class="fa fa-ban"></i> ยกเลิก</b-button>
        </div>
      </b-col>
  </b-row>
          </b-card>

</template>


