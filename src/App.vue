<script setup>
import item from './components/item.vue'
import {onBeforeMount, reactive, ref} from "vue";
import {useMatrix} from "./store/matrixStore.js";
import {useScore} from "./store/scoreStore.js";
import {isJoin} from "./utils/isJoin.js"
import {move} from "./utils/move.js";
import {search} from "./utils/search.js";
import {storeToRefs} from "pinia";

// 棋盘矩阵
const useMatrixStore = useMatrix()
const matrix = useMatrix().matrix
const useScoreStore = useScore()
let {score} = storeToRefs(useScoreStore)

// 固定矩阵行列号
const matrixSize = reactive({
  row: 11,
  col: 16
})

// 两次点击对象
const clickObj1 = reactive({
  y: -1,
  x: -1,
})

const clickObj2 = reactive({
  y: -1,
  x: -1,
})

const currentPos = {
  y: -1,
  x: -1
}

let cnt = ref(0)

useMatrixStore.fullMatrix()

function click(y, x) {
  currentPos.y = y;
  currentPos.x = x;
  ++cnt.value
  console.log(`pos: (${currentPos.y - 1},${currentPos.x - 1})`)

  // cnt % 2为偶数时为第一次点击，反之代表一轮选择结束
  if (cnt.value % 2) {
    clickObj1.y = currentPos.y
    clickObj1.x = currentPos.x
    // console.log(matrix)
  } else {
    clickObj2.y = currentPos.y
    clickObj2.x = currentPos.x
    if (isJoin(clickObj1, clickObj2)) {
      // console.log('是相邻元素')
      // console.log(matrix)
      //交换方块
      move(clickObj1, clickObj2)
      //查询两格点是否具备方块消除的元素
      search(clickObj1.y, clickObj1.x)
      search(clickObj2.y, clickObj2.x)
    } else {
      // console.log('非相邻元素')
    }
  }
}
</script>/

<template>
  <div class="shell" @click="cnt=0">
    <div class="score no-select">
      得分：<span>{{ score }}</span>
    </div>
    <div class="container">
      <transition-group v-for="y in matrixSize.row" name="fade" tag="div">
        <item class="no-select" v-for="x in matrixSize.col" v-show="matrix[y-1][x-1]!==-1"
              :id="matrix[y-1][x-1]" :key="matrix[y-1][x-1]"
              @click.stop="click(y-1, x-1);"
        />
      </transition-group>
    </div>
  </div>
</template>

<style scoped lang="less">
@img_item_size: 100px;
@container_height: 770px;
@row_size: 12;

.shell {
  height: 100vh;
  width: 100vw;
  background-color: antiquewhite;
  //background: url("../public/bcg.png");
  //background: url("https://w.wallhaven.cc/full/zm/wallhaven-zmm86g.jpg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container {
  height: @container_height;
  width: 1320px;
  background-color: rgba(169, 169, 169, 0.3);
  border-radius: 1%;
  line-height: 0;
}

.no-select {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Standard syntax */
}

/* 1. 声明过渡效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(10px, 0);
}

/* 3. 确保离开的项目被移除出了布局流
      以便正确地计算移动时的动画效果。 */
.fade-leave-active {
  position: absolute;
}

@font-face {
  font-family: 'PixelMplus10-Regular';
  font-style: normal;
  font-weight: 400;
  src: url('../public/font/PixelMplus10-Regular.ttf');
}

@font-face {
  font-family: 'PixelMplus10-Bold';
  font-style: normal;
  font-weight: 400;
  src: url('../public/font/PixelMplus10-Bold.ttf');
}

.score > span {
  color: cadetblue;
}

.score {
  font-family: PixelMplus10-Regular, serif;
  font-size: xxx-large;
  color: brown;
}
</style>
