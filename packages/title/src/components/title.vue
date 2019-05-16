<template>
  <div class="title">
    <div class="first" v-show="title">
      <div class="first_title" :style="{color: titleColor, fontSize:titleSize}"><span :style="{borderColor:borColor}">{{title}}</span></div>
      <div class="first_link" v-if="links">
        <p v-for="(item,index) in links" :key="index" :style="{fontSize:linkSize}">
          <router-link :to="item ? item.path : ''">{{item.content}}</router-link>
        </p>
      </div>
    </div>
    <div class="second" v-show="subTitle">
      <p class="second_title" :style="{borderColor:subBorColor,}"><span :style="{color:subColor, fontSize:subSize}">{{subTitle}}</span></p>
    </div>
  </div>
</template>  
<script>
export default {
  name: 'CbTitles',
  props: {
    title: [String],
    subTitle: [String],
    titleColor:{
      type: String,
      default:'#000'
    },
    subColor: {
      type: String,
      default: '#3b3d3e'
    },
    titleSize: {
      type: String,
      default: '20px'
    },
    subSize: {
      type: String,
      default: '14px'
    },
    borColor: {
      type: String,
      default: '#e6e6e6'
    },
    subBorColor: {
      type: String,
      default: '#e8313e'
    },
    links: [Array, Object],
    linkColor: {
      type: String,
      default: '#1094d0'
    },
    linkSize: {
      type:String,
      default: '10px'
    }
  },
  computed: {
    
  }
};
</script>
