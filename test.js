const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('close', function () {
  console.log('程序结束')
  process.exit(0)
})

// 堆
const heap = function () {
  this.user = ['aa', 'bb', 'cc']
  this.situation = {
    aa: {
      hold: [], // 现持有
      used: [], // 已使用
      isVillage: false,
      isManual: true // 手动
    },
    bb: {
      hold: [],
      used: [],
      isVillage: false,
      isManual: false // 手动
    },
    cc: {
      hold: [],
      used: [],
      isVillage: false,
      isManual: false // 手动
    }
  }
  this.villageName = '' // 获得庄的人
  this.playCardsIndex = 0 // 点前该谁出
  this.heap = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10', 'a11', 'a12', 'a13', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10', 'b11', 'b12', 'b13', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 'c12', 'c13', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'd11', 'd12', 'd13', 'e100', 'e200']
  this.distribution = () => {
    console.log('ddd')
  }
  // 抽一
  this.extractOne = () => {
    // const index = getRandom(0, this.heap.length - 1)
    // this.heap.splice(index, 1)
    // return this.heap[index]
    const data = this.heap[0]
    this.heap.splice(0, 1)
    return data
  }
  // 洗
  this.wash = () => {
    this.heap.sort(() => .5 - Math.random())
  }
  this.start = () => {
    this.wash()
    this.villageName = this.user[getRandom(0, 2)]
    this.situation[this.villageName].isVillage = true
    this.playCardsIndex = this.user.findIndex(item => item === this.villageName)
    this.situation[this.villageName].hold.push(this.extractOne())
    this.situation[this.villageName].hold.push(this.extractOne())
    this.situation[this.villageName].hold.push(this.extractOne())
    const max = this.heap.length
    for (let i = 0; i < max; i++) {
      this.situation[this.user[i % 3]].hold.push(this.extractOne())
    }
    this.user.forEach(item => {
      this.situation[item].hold = this.situation[item].hold.sort((a, b) => a.substring(1) - b.substring(1))
    })
    return this.situation
  }
  this.play = () => {
    if (this.playCardsIndex === 0) {
      console.log('人工未')
      return '人工未'
    }
    console.log('this.playCardsIndex', this.playCardsIndex)
    // this.situation[this.user[this.playCardsIndex]].hold
  }
  // 检查是否存在连续
  this.checkContinuous = heap => {
    let data = 0
    let oval = -1
    let state = false
    heap.forEach(item => {
      if (item.substring(1) - oval === 1) {
        data++
        if (data >= 5) state = true
      }
      if (item.substring(1) - oval > 1) data = 0
      oval = item.substring(1)
    })
    return state
  }
  // 获取连续
  this.getContinuous = heap => {
  }
  // 获取对
  this.getCorrect = heap => {
    const data = []
    // for (let i = 0; i < heap.length; i++) {
    //
    // }
    return data
  }
}

const getRandom = (min, max) => {
  const Range = max - min
  const Rand = Math.random()
  return (min + Math.round(Rand * Range))
}

const a = new heap()
a.start()
let inputArr = []
rl.on('line', input => {
  inputArr = input.split(',')

  a.play()
  // console.log('a', a.start())
  // 下面就可以对数据进行处理......
  console.log(inputArr)
  inputArr = [] // 清空数组
  // rl.close()
})
