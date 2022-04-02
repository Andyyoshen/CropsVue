<template>
    <div >
       <!-- <div class="container"> 
       <div class="row">
        <div class="col">
          Column
        </div>
        <div class="col">
          Column
        </div>
        <div class="col">
          Column
        </div>
      </div> 
    </div>  -->
   
      <div class="text-start mt-3 ms-5 row"> 
        
        <div>
          <span class="fs-4" >匯入資料 :</span> 
          <input type="file" class="ms-3" @change="ImportCrops($event)">
          <button type="button" class="btn btn-secondary" @click="upload()">上傳</button>
        </div>
        <div class="mt-3 row">
          <div class="col-8">
            <span class="fs-4" >資料匯出 :</span> 
            <button type="button" class="btn btn-info  ms-3" @click="downloadCrops()">下載</button>
          </div>
          
        <div class="col-sm-4 row">
          <div class="col-3 text-end">
            <span class="fs-4 " >排序 :</span> 
            </div>
            <div class="col-8">
              <select class="form-select" 
                      id="specificSizeSelect" 
                      v-model="SelectSortData"
                      @change="PickSort(SelectSortData)">
                <option value="SerialNumber:DESC">編號:DESC</option>
                <option value="SerialNumber:ASC">編號:ASC</option>
                <option value="ManuFacturer:DESC">農作物:DESC</option>
                <option value="ManuFacturer:ASC">農作物:ASC</option>
                <option value="Author:DESC">耕作者:DESC</option>
                <option value="Author:ASC">耕作者:ASC</option>
                <option value="Price:DESC">價格:DESC</option>
                <option value="Price:ASC">價格:ASC</option>
                <option value="OutDate:DESC">日期:DESC</option>
                <option value="OutDate:ASC">日期:ASC</option>
              </select>
            </div>
      </div>
          
        </div>
        
        </div>
      
      
      <div>
            <b-table  striped hover 
                      ref="table"
                      :items="CropsItems"
                      :fields="CropsFields"
                    >
              <template v-slot:cell(action)="row">
                    <a
                      class="btn btn-danger mr-3 mb-3"
                      @click="DeleteCrops(row.item)"
                    >刪除</a>
                    <a
                      class="btn btn-warning mb-3"
                      @click="UpdateCrops(row.item)"
                    >編輯</a>
              </template>
            </b-table>
      </div>
      <!-- 編輯資料Modal -->
    <div
      class="modal fade"
      id="EditCrops"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-center" id="exampleModalLabel">
              圖型驗證
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div id="passwordHelpBlock" class="form-text">
                請在下方輸入圖型驗證碼，以便驗證是否為機器人。
              </div>
              <div class="form-floating mb-3 mt-3">
                <input
                  type="email"
                  class="form-control"
                  v-model="CropsUpdateData.SerialNumber"
                  disabled="disabled"
                />
                <label for="floatingInput">編號 :</label>
                
                
              </div>
              <div class="form-floating mb-3 mt-3">
                <input
                  type="email"
                  class="form-control"
                  v-model="CropsUpdateData.ManuFacturer"
                />
                <label for="floatingInput">農作物 :</label>
                
                
              </div>
              <div class="form-floating mb-3 mt-3">
                <input
                  type="email"
                  class="form-control"
                  v-model="CropsUpdateData.Author"
                />
                <label for="floatingInput">農夫 :</label>
                
                
              </div>
              <div class="form-floating mb-3 mt-3">
                <input
                  type="email"
                  class="form-control"
                  v-model="CropsUpdateData.Price"
                />
                <label for="floatingInput">價格 :</label>
                
                
              </div>
              <div class="form-floating mb-3 mt-3">
                <input
                  type="email"
                  class="form-control"
                  v-model="CropsUpdateData.OutDate"
                />
                <label for="floatingInput">收耕時間 :</label>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
             
            >
              關閉
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="EditCropsButton()"
            >
              儲存編輯
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 新增資料Modal -->
     <div
      class="modal fade"
      id="AddCrops"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-center" id="exampleModalLabel">
              圖型驗證
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div id="passwordHelpBlock" class="form-text">
                請在下方輸入圖型驗證碼，以便驗證是否為機器人。
              </div>
              <!-- <label for="recipient-name" class="col-form-label"> 請在下方輸入圖型驗證碼，以便驗證是否為機器人。</label> -->
              <div class="form-floating mb-3 mt-3">
                <input
                  type="email"
                  class="form-control"
                  v-model="CropsInseretData.SerialNumber"
                />
                <label for="floatingInput">編號 :</label>
                
                
              </div>
              <div class="form-floating mb-3 mt-3">
                <input
                  type="email"
                  class="form-control"
                  v-model="CropsInseretData.ManuFacturer"
                />
                <label for="floatingInput">農作物 :</label>
                
                
              </div>
              <div class="form-floating mb-3 mt-3">
                <input
                  type="email"
                  class="form-control"
                  v-model="CropsInseretData.Author"
                />
                <label for="floatingInput">農夫 :</label>
                
                
              </div>
              <div class="form-floating mb-3 mt-3">
                <input
                  type="email"
                  class="form-control"
                  v-model="CropsInseretData.Price"
                />
                <label for="floatingInput">價格 :</label>
                
                
              </div>
              <div class="form-floating mb-3 mt-3">
                <input
                  type="email"
                  class="form-control"
                  v-model="CropsInseretData.OutDate"
                />
                <label for="floatingInput">收耕時間 :</label>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="CloseVerify()"
            >
              關閉
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="SaveCrops()"
            >
              儲存
            </button>
          </div>
        </div>
      </div>
    </div>
    
      <div>
        <button type="button" class="btn btn-primary mb-3" @click="AddCrops()">新增</button>
      </div>
      <nav aria-label="Page navigation example" >
        <ul class="pagination" >
          <li class="page-item">
            <button class="page-link" @click="PreviousPageNumberCount(1)">Previous</button>
          </li>
          <li :class="{'page-item':true ,active:isActive==index?true:false}" :active="true"  v-for="index in RowLastPage" :key="index">
            <button class="page-link" @click="PageNumberCount(index)">{{index}}</button>
          </li>
          <li class="page-item">
            <button class="page-link" @click="NextPageNumberCount(1)">Next</button>
          </li>
          
        </ul>
      </nav>
    </div>
          
</template>
<script>

export default {
    name:"CropList",
    data() {
        return {
          fields: ['key','first_name', 'last_name', 'show_details','action'],
          items: [
          { key:"a",age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
          { key:"b",age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { key:"c",age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { key:"d",age: 38, first_name: 'Jami', last_name: 'Carney' },
          { key:"e",age: 38, first_name: 'Jami', last_name: 'action' }
        ],
        CropsFields:[
          {key:"SerialNumber",label:"編號"},
          {key:"ManuFacturer",label:"農作物"},
          {key:"Author",label:"耕作者"},
          {key:"Price",label:"價格"},
          {key:"OutDate", label:"日期"},
          {key:"action",label:"動作"}
          ],
        CropsItems:null,
        perPage: 10, // 資料行數
        CropsInseretData:{
          SerialNumber:null,
          ManuFacturer:null,
          Author:null,
          Price:null,
          OutDate:null
        },
        CropsUpdateData:{
          SerialNumber:null,
          ManuFacturer:null,
          Author:null,
          Price:null,
          OutDate:null
        },
        SelectSortData:"SerialNumber:ASC",
        SelectSortDataSplit:{
          SerialNumber:null,
          SortDirection:null,
          RowStart:null,
          RowPer:null
        },
        Rowpage:{
          Rowpage:1
        },
        
        RowLastPage:null,
        CropsImportFileData:{
          CropsImportFileData:new FormData()
        },
        isActive:1
        
        
      }
        
        
        
    },
    created: function(){
      this.FunctionToken(this.apiGetCropsRowTatleFun,this.Rowpage)
     
      
    },
    methods:{
      upload:function(){
       console.log(this.CropsImportFileData.CropsImportFileData)
      
        this.FunctionToken2(this.apiPostCropsImporFun, this.CropsImportFileData.CropsImportFileData)
      },
      ImportCrops:function(e){
        console.log(e)
       this.CropsImportFileData.CropsImportFileData.append('CropsImportFileData',e.target.files[0])
      },
      apiPostCropsImporFun:function(data_in){
        
        this.apiPostCropsImpor(data_in)
        .then(res=>{
          console.log(res)
          this.FunctionToken(this.apiGetCropsRowTatleFun,this.Rowpage)
        })
        .catch(err=>{
          console.log(err)
        })
      },
      downloadCrops:function(){
        
        this.FunctionToken(this.apiPostExcelExportFun,this.SelectSortDataSplit)
      },
      apiPostExcelExportFun:function(data_in){
         this.$axios
         .post("http://3.112.240.187/api/PostExcelExport",data_in,{ responseType: "blob" })
         .then(res=>{
          var fileURL = window.URL.createObjectURL(new Blob([res.data]));
          var fileLink = document.createElement("a");

          fileLink.href = fileURL;
          fileLink.setAttribute("download", "CropsItme.xls");
          document.body.appendChild(fileLink);

          fileLink.click();
           console.log(res)
         })
         .catch(err=>{
           console.log(err)
         })
      },
      apiGetCropsRowTatleFun:function(data_in){
        this.apiGetCropsRowTatle(data_in)
        .then(res=>{
          this.RowLastPage = res.data.Data.LastPage
          this.SelectSortDataSplit.RowStart = res.data.Data.start
          this.SelectSortDataSplit.RowPer = res.data.Data.per
          this.SelectSortDataSplit.SerialNumber = this.SelectSortData.split(":")[0];
          this.SelectSortDataSplit.SortDirection = this.SelectSortData.split(":")[1];
          console.log(this.SelectSortDataSplit)
           this.FunctionToken(this.apiGetCropsListFun,this.SelectSortDataSplit)
        })
        .catch(err=>
        console.log(err))
      },
      PickSort:function(SelectSortData){
        this.SelectSortDataSplit.SerialNumber = SelectSortData.split(":")[0];
        this.SelectSortDataSplit.SortDirection = SelectSortData.split(":")[1];
        this.FunctionToken(this.apiGetCropsRowTatleFun,this.Rowpage)
      },
      NextPageNumberCount:function(data){
         if(this.Rowpage.Rowpage == this.RowLastPage){
          return false
        }
        this.Rowpage.Rowpage = this.Rowpage.Rowpage + data
       
        this.isActive = this.Rowpage.Rowpage  //驅動頁數
        
        this.FunctionToken(this.apiGetCropsRowTatleFun,this.Rowpage)
      },
      PreviousPageNumberCount:function(data){
        if(this.Rowpage.Rowpage == 1){
          return false
        }
        this.Rowpage.Rowpage = this.Rowpage.Rowpage - data
        this.isActive = this.Rowpage.Rowpage //驅動頁數
        this.FunctionToken(this.apiGetCropsRowTatleFun,this.Rowpage)
      },
      PageNumberCount:function(data){
        this.Rowpage.Rowpage = data
        this.isActive = data
        this.FunctionToken(this.apiGetCropsRowTatleFun,this.Rowpage)
      },
      SaveCrops:function(){
        
        this.FunctionToken(this.apiPostInsertCropsFun,this.CropsInseretData)
      },
      EditCropsButton: function(){
        this.FunctionToken(this.apiPostUpdateCropsFun,this.CropsUpdateData)
      },
      apiPostUpdateCropsFun:function(data_in){
        this.apiPostUpdateCrops(data_in)
        .then(res=>{
          if(res.data.Status){
            alert(res.data.Msg)
            this.DialogModal.hide()
            this.CropsUpdateData.SerialNumber = null
            this.CropsUpdateData.ManuFacturer = null
            this.CropsUpdateData.Author = null
            this.CropsUpdateData.Price = null
            this.CropsUpdateData.OutDate = null
            this.FunctionToken(this.apiGetCropsRowTatleFun,this.Rowpage)
          }
        })
        .catch(err=>{
          console.log(err)
        })
      },
      apiPostInsertCropsFun:function(data_in){
        this.apiPostInsertCrops(data_in)
        .then(res=>{
          if(res.data.Status){
            alert(res.data.Msg)
            this.DialogModal.hide()
            this.CropsInseretData.SerialNumber = null
            this.CropsInseretData.ManuFacturer = null
            this.CropsInseretData.Author = null
            this.CropsInseretData.Price = null
            this.CropsInseretData.OutDate = null
            this.FunctionToken(this.apiGetCropsRowTatleFun,this.Rowpage)
          }
          console.log(res)
        })
        .catch(err=>{
          console.log(err)
        })
      },
      apiGetCropsListFun:function(data_in){
        console.log("asweqwe")
        
        this.apiGetCropsList(data_in)
        .then(res=>{
          this.CropsItems = res.data
          console.log(this.CropsItems)
        })
        .catch(err=>{
          console.log("錯誤"+err)
        })
      },
      UpdateCrops: function(item){
        this.CropsUpdateData.SerialNumber = item.SerialNumber
        this.CropsUpdateData.ManuFacturer = item.ManuFacturer
        this.CropsUpdateData.Author = item.Author
        this.CropsUpdateData.Price = item.Price
        this.CropsUpdateData.OutDate = item.OutDate
        this.EditShowdialog();
      },
      AddCrops: function(){
        this.AddShowdialog();
      },
      DeleteCrops: function(item){
        this.FunctionToken(this.apiDeleteCropsFun,{SerialNumber:item.SerialNumber})
      },
      apiDeleteCropsFun:function(data_in){
        this.apiDeleteCrops(data_in)
        .then(res=>{
          if(res.data.Status){
            alert(res.data.Msg)
            this.FunctionToken(this.apiGetCropsRowTatleFun,this.Rowpage)
          }
        })
        .catch(err=>{
          console.log(err)
        })
      },
      RowNameChange: function(data){
        console.log(data.field.label)
      },
      EditShowdialog: function () {
      this.DialogModal = new bootstrap.Modal(
        document.getElementById("EditCrops"),
        {
          keyboard: false,
        }
      );
      this.DialogModal.show();
    },
    AddShowdialog: function () {
      this.DialogModal = new bootstrap.Modal(
        document.getElementById("AddCrops"),
        {
          keyboard: false,
        }
      );
      this.DialogModal.show();
    },
    }
}
</script>