<template>
  <div class="page">
    <Header />
    <div id="content">
      <div class="search_movie_body">
        <div class="search_movie_input">
          <input type="text" v-model="movieVal"/>
        </div>
        <h2>电影/电视剧/综艺</h2>

        <v-touch class="movie_item" 
            v-for="(item,index) in movieList" 
            :key="index"
            @tap="handleToDetail(item.id,item.nm)"
            >
          <div class="movie_item_pic">
            <img
              :src="item.img|ToImg('128.180')"
            />
          </div>
          <div class="movie_item_info">
            <h2>{{item.nm}}</h2>
            <p>
              <span class="person">{{item.wish}}</span>人想看
            </p>
            <p>
              主演：
              <span>{{item.star}}</span>
            </p>
            <p>
              <span>{{item.pubDesc}}</span>
            </p>
          </div>
          <div class="movie_item_btn person">想看</div>
        </v-touch>
      </div>
    </div>
  </div>
</template>
<script>
import { search_api } from "api/api"
import { mapState } from "vuex"
export default {
    name:"Search",
    data(){
        return{
            movieVal:"",
            movieList:[]
        }
    },
    timer:null,
    computed:{
        ...mapState({
            cityId:state=>state/city.cityId
        })
    },
    watch:{
        movieVal(newVal,oldVal){
            clearTimeout(this.timer)
            this.timer = setTimer(async()=>{
                let data = await search_api(this.cityId,newVal)
                this.movieList = data.data.movies?data.data.movies.list:[]
            },300)
        }
    },
    methods:{
        handleToDetail(id,name){
            this.$router.push({name:"detail",params:{id,name}})
        }
    }
}
</script>
<style>
.page{
  height: 100%;
}
/*content*/
#content {
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

/*movie_menu*/
#content .movie_menu {
  width: 100%;
  height: 0.9rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.4rem;
  border: 1px solid #e6e6e6;
}
#content .movie_menu .movie_menu_city span {
  font-size: 0.3rem;
}
#content .movie_menu .movie_menu_city i {
  font-size: 0.3rem;
}
#content .movie_menu .movie_meun_search i {
  font-size: 0.4rem;
  font-weight: 900;
  color: #e54847;
}
#content .movie_menu .movie_menu_switch {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#content .movie_menu .movie_menu_switch li {
  height: 100%;
  line-height: 0.9rem;
  padding: 0 0.2rem;
  font-size: 0.3rem;
}
#content .movie_menu .movie_menu_switch .movie_menu_active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}

/*movie_body*/
#content .search_movie_body {
  height: 100%;
  padding-bottom: 1rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  overflow-x: hidden;
}
#content .search_movie_body .search_movie_input {
  padding: 0.16rem 0.2rem;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
}
#content .search_movie_body .search_movie_input > input {
  border: none;
  font-size: 0.3rem;
  color: #333;
  padding: 0.1rem 0;
  outline: none;
  margin-left: 5px;
  width: 100%;
}
#content .search_movie_body > h2 {
  font-size: 0.3rem;
  color: #999;
  padding: 0.18rem 0;
  border-bottom: 1px solid #e6e6e6;
}
#content .search_movie_body .movie_item {
  padding: 0.2rem 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
#content .search_movie_body .movie_item .movie_item_pic {
  width: 1.28rem;
  height: 1.8rem;
}
#content .search_movie_body .movie_item .movie_item_pic img {
  width: 100%;
  height: 100%;
}
#content .search_movie_body .movie_item .movie_item_info {
  margin-left: 0.2rem;
  flex: 1;
  height: 100%;
}
#content .search_movie_body .movie_item .movie_item_info h2 {
  font-size: 0.34rem;
  line-height: 0.5rem;
  width: 3rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#content .search_movie_body .movie_item .movie_item_info p {
  font-size: 0.26rem;
  line-height: 0.45rem;
  color: #666;
  width: 4rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#content .search_movie_body .movie_item .movie_item_info p .person {
  font-weight: 700;
  color: #faaf00;
  font-size: 0.3rem;
}
#content .search_movie_body .movie_item .movie_item_btn {
  width: 1rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #fff;
  border-radius: 4px;
  font-size: 0.26rem;
  cursor: pointer;
}
#content .search_movie_body .movie_item > .person {
  background-color: #faaf00;
}
</style>
