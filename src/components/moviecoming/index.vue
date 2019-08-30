import { movie_coming_api } from 'api/movie';
<template>
  <div class="movieWrapper">
    <mp-BScroll ref="mpscroll">
      <div class="movie_body">
        <v-touch class="movie_item" 
          v-for="(item,index) in comingList" 
          :key="index"
          tag="div"
          @tap="handleToDetail(item.id,item.nm)"
          >
          <div class="movie_item_pic">
            <img :src="item.img | ToImg('128.180')" />
          </div>
          <div class="movie_item_info">
            <h2>{{item.nm}}</h2>
            <p>
              <span>{{item.wish}}</span>人想看
            </p>
            <p>
              主演：
              <span>{{item.star}}</span>
            </p>
            <p>
              <span>{{item.rt}}</span>上映
            </p>
          </div>
          <div
            :class="item.showst==4?'movie_item_btn ticket':'movie_item_btn wsee'"
          >{{item.showst==4?'预售':'想看'}}</div>
        </v-touch>
      </div>
    </mp-BScroll>
  </div>
</template>
<script>
import { movie_coming_api } from "api/api";
import { mapState } from 'vuex';
export default {
    name:"MovieCinema",
    async created(){
        if(!sessionStorage.getItem("comingList")){
            let data = await movie_coming_api(this.cityId); 
            this.comingList = data.data.comingList;
            sessionStorage.setItem("comingList",JSON.stringify(data.data.comingList))
        }
    },
    async activated(){
        if(this.pageId !=this.cityId){
             let data = await movie_coming_api(this.cityId); 
             this.comingList = data.data.comingList;
             sessionStorage.setItem("comingList",JSON.stringify(data.data.comingList))
             this.pageId = this.cityId;
        }
    },
    data(){
        return{
            comingList:[],
            pageId:-1
        }
    },
    computed:{
        ...mapState({
            cityId:state=>state.city.cityId
        })
    },
    mounted(){
        this.$refs.mpscroll.handlepullingDown(async()=>{
            let n = parseInt(Math.random()*7);
            let arr = [10,20,30,40,50,60,70]

            let data = await movie_coming_api(arr[n]);
            this.comingList = data.data.comingList;
            sessionStorage.setItem("comingList",JSON.stringify(data.data.comingList))
            this.$refs.mpscroll.handlefinishPullDown();
        })
        this.$refs.mpscroll.handlepullingUp(async()=>{
            let n = parseInt(Math.random()*7);
            let arr = [10,20,30,40,50,60,70]
            let data = await movie_coming_api(arr[n]);
            this.comingList= [...this.comingList,...data.data.comingList];
            sessionStorage.setItem("comingList",JSON.stringify(data.data.comingList))
            this.$refs.mpscroll.handlefinishPullUp();
        })
    },
    methods:{
        handleToDetail(id,name){
            this.$router.push({name:"detail",params:{id,name}})
        }
    }
}
</script>
<style>
.movieWrapper {
  height: 100%;
  overflow: auto;
}
.wsee {
  background: #faaf00;
}
</style>
