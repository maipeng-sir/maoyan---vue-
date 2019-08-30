<template>
  <div class="movieWrapper">
    <mp-BScroll ref="mpscroll">
      <div class="movie_body">
        <v-touch
          class="movie_item"
          v-for="(item,index) in movieList"
          :key="index"
          tag="div"
          @tap="handleToDetail(item.id,item.nm)"
        >
          <div class="movie_item_pic">
            <img :src="item.img |ToImg('128.180')" />
          </div>
          <div class="movie_item_info">
            <h2>{{item.nm}}</h2>
            <p>
              观众评:
              <span class="grade">{{item.sc}}</span>
            </p>
            <p>
              主演：
              <span>{{item.star}}</span>
            </p>
            <p>
              <span>{{item.showInfo}}</span>
            </p>
          </div>
          <div
            :class="item.globalReleased?'movie_item_btn asale':'movie_item_btn ticket'"
          >{{item.globalReleased?'购票':'预售'}}</div>
        </v-touch>
      </div>
    </mp-BScroll>
  </div>
</template>
<script>
import { movie_now_api} from "api/api";
import { mapState} from "vuex";
export default {
    name:"MovieNow",
    async created(){
        if(!sessionStorage.getItem("movieList")){
            let data = await movie_now_api(this.cityId);
            this.movieList = data.data.movieList;
            sessionStorage.setItem("movieList",JSON.stringify(data.data.movieList))
        }
    },
    async activated(){
        if(this.pageId !=this.cityId){
            let data = await movie_now_api(this.cityId);
            this.movieList = data.data.movieList;
            sessionStorage.setItem("movieList",JSON.stringify(data.data.movieList))
            this.pageId = this.cityId;
        }
    },
    computed:{
        ...mapState({
            cityId:state=>state.city.cityId
        })
    },
    data(){
        return{
            movieList:JSON.parse(sessionStorage.getItem("movieList")) || [],
            pageId:-1
        }
    },
    methods:{
        handleToDetail(id,name){
            this.$router.push({name:"detail",params:{id,name}})
        }
    },
    mounted(){
        this.$refs.mpscroll.handlepullingDown(async()=>{
            let n = parseInt(Math.random()*7);
            let arr = [10,20,30,40,50,60,70];

            let data = await movie_now_api(arr[n]);
            this.movieList = data.data.movieList;
            sessionStorage.setItem("movieList",JSON.stringify(data.data.movieList))
            this.$refs.mpscroll.handlefinishPullDown();
        })
        this.$refs.mpscroll.handlepullingUp(async()=>{
            let n = parseInt(Math.random()*7);
            let arr = [10,20,30,40,50,60,70]

            let data = await movie_now_api(arr[n]);
            this.movieList = [...this.movieList,...data.data.movieList];
            sessionStorage.setItem("movieList",JSON.stringify(data.data.movieList))
            this.$refs.mpscroll.handlefinishPullUp();
      })
    }
}
</script>
<style>
.movieWrapper {
      height: 100%;
      overflow:auto;
  }
</style>
