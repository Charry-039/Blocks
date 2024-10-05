<script setup>
import item from './components/item.vue'
import {onBeforeMount, reactive, ref} from "vue";
import {useMatrix} from "./store/matrixStore.js";
import {isJoin} from "./utils/isJoin.js"
import {move} from "./utils/move.js";
import {search} from "./utils/search.js";

// 棋盘矩阵
const useMatrixStore = useMatrix()
const matrix = useMatrix().matrix

// 固定矩阵行列号
const matrixSize = reactive({
  row: 11,
  col: 14
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

onBeforeMount(() => {
  if (useMatrixStore.isInitiated === false) {
    console.log('false')
    useMatrixStore.fullMatrix()
    useMatrixStore.isInitiated = true
  }
})

function click() {
  ++cnt.value
  // console.log(`pos: (${currentPos.y},${currentPos.x})`, cnt.value)

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
      move(clickObj1, clickObj2)
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
    <div class="container">
      <template v-for="y in matrixSize.row">
        <item v-for="x in matrixSize.col" v-show="matrix[y-1][x-1]!==-1" :id="matrix[y-1][x-1]"
              @click.stop="
              currentPos.y = y-1; currentPos.x = x-1;
              click();"
        />
      </template>
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
  display: flex;
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

</style>
