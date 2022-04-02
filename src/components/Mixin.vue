<script>
export default {
    name: "Mixin",
    data() {
        return {
            userRequest: this.$axios.create({ baseURL: "/api" }),
            TokenID: "",
            // apiToken: (data) => this.userRequest.post("/CryptionTest",data),
            apiGetCropsList:(data)=>this.userRequest.post("/GetCropsList",data),
            apiPostInsertCrops:(data)=>this.userRequest.post("/PostInsertCrops",data),
            apiPostUpdateCrops:(data)=>this.userRequest.post("/PostUpdateCrops",data),
            apiDeleteCrops:(data)=>this.userRequest.post("/PostDeleteCrops",data),
            apiGetCropsRowTatle:(data)=>this.userRequest.post("/GetCropsRowTatle",data),
            apiPostExcelExport:(data)=>this.userRequest.post("/PostExcelExport",data),
            apiPostCropsImpor:(data)=>this.userRequest.post("/PostCropsImpor",data)
        }
    },
    mounted() {
    this.TokenID = sessionStorage.getItem("TokenID");
  },
    methods:{
        FunctionToken2: function (EXfunction, data_in) {
            console.log(data_in)
          EXfunction(data_in);
      
      
    },
        FunctionToken:function(EXfunction,data_in){
            var DTO={
                  U_data: data_in,
                //   Token_data: {
                //      // TokenID: this.TokenID,  //權限ID
                //       Token: res.data.Data,
                //     },
            }
            EXfunction(DTO)
    },
    }
}
</script>