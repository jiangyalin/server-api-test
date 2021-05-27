// 黑白棋
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('close', function () {
  console.log('程序结束')
  process.exit(0)
})

const getRandom = (min, max) => {
  const Range = max - min
  const Rand = Math.random()
  return (min + Math.round(Rand * Range))
}

const Bureau = function () {
  this.checkerboard = []
  for (let i = 0; i < 8; i++) {
    const arr = []
    for (let j = 0; j < 8;j++) {
      arr.push('')
    }
    this.checkerboard.push(arr)
  }
  this.start = () => {
    this.checkerboard[3][3] = 'B'
    this.checkerboard[4][3] = 'W'
    this.checkerboard[3][4] = 'W'
    this.checkerboard[4][4] = 'B'
    console.table(this.checkerboard)
  }
  // 计算状态
  this.calculation = (x, y, color) => {
    let state = false
    const oval = this.checkerboard.map(item => item.map(node => node))
    console.log('color', color)
    this.checkerboard[x][y] = color
    let counter = 0
    const color2 = color === 'B' ? 'W' : 'B'
    // 上
    const arr1 = []
    state = true
    for (let i = x - 1; i > -1; i--) {
      if (this.getPio(i, y) === color2) {
        if (state) arr1.push([i, y])
        console.log('11', i, y)
        counter++
      } else if (this.getPio(i, y) === color) {
        arr1.forEach(item => {
          this.checkerboard[item[0]][item[1]] = color
        })
        state = false
        i = -1
      } else {
        state = false
        i = -1
      }
    }
    // 上右
    const arr2 = []
    state = true
    const max1 = 8 - y < x ? 8 - y : x
    for (let i = 1; i < max1; i++) {
      if (this.getPio(x - i,y + i) === color2) {
        if (state) arr2.push([x - i,y + i])
        counter++
        console.log('2222')
      } else if (this.getPio(x - i,y + i) === color) {
        arr2.forEach(item => {
          this.checkerboard[item[0]][item[1]] = color
        })
        state = false
        i = max1
      } else {
        state = false
        i = max1
      }
    }
    // 右
    const arr3 = []
    state = true
    for (let i = y + 1; i < 8; i++) {
      if (this.getPio(x, i) === color2) {
        if (state) arr3.push([x, i])
        counter++
        console.log('3333')
      } else if (this.getPio(x, i) === color) {
        arr3.forEach(item => {
          this.checkerboard[item[0]][item[1]] = color
        })
        state = false
        i = 8
      } else {
        state = false
        i = 8
      }
    }
    // 右下
    const arr4 = []
    state = true
    const max2 = 8 - x < 8 - y ? 8 - x : 8 - y
    for (let i = 1; i < max2; i++) {
      if (this.getPio(x + i, y + i) === color2) {
        if (state) arr4.push([x + i, y + i])
        counter++
        console.log('444')
      } else if (this.getPio(x + i, y + i) === color) {
        arr4.forEach(item => {
          this.checkerboard[item[0]][item[1]] = color
        })
        state = false
        i = max2
      } else {
        state = false
        i = max2
      }
    }
    // 下
    const arr5 = []
    state = true
    for (let i = x + 1; i < 8; i++) {
      if (this.getPio(i, y) === color2) {
        if (state) arr5.push([i, y])
        counter++
        console.log('55', i, y)
      } else if (this.getPio(i, y) === color) {
        arr5.forEach(item => {
          this.checkerboard[item[0]][item[1]] = color
        })
        state = false
        i = 8
      } else {
        state = false
        i = 8
      }
    }
    // 左下
    const max3 = x < 8 - y ? x : 8 - y
    const arr6 = []
    state = true
    for (let i = 1; i < max3; i++) {
      if (this.getPio(x + i, y - i) === color2) {
        if (state) arr6.push([x + i, y - i])
        counter++
        console.log('66', x + i, y - i)
      } else if (this.getPio(x + i, y - i) === color) {
        arr6.forEach(item => {
          this.checkerboard[item[0]][item[1]] = color
        })
        state = false
        i = max3
      } else {
        state = false
        i = max3
      }
    }
    // 左
    const arr7 = []
    state = true
    for (let i = y - 1; i > -1; i--) {
      if (this.getPio(x, i) === color2) {
        if (state) arr7.push([x, i])
        counter++
        console.log('7777')
      } else if (this.getPio(x, i) === color) {
        arr7.forEach(item => {
          this.checkerboard[item[0]][item[1]] = color
        })
        state = false
        i = -1
      } else {
        state = false
        i = -1
      }
    }
    // 上左
    const max4 = x < y ? x : y
    const arr8 = []
    state = true
    for (let i = 1; i < max4; i++) {
      if (this.getPio(x - i, y - i) === color2) {
        if (state) arr8.push([x - i, y - i])
        counter++
        console.log('88', x - i, y - i)
      } else if (this.getPio(x - i, y - i) === color) {
        arr8.forEach(item => {
          this.checkerboard[item[0]][item[1]] = color
        })
        state = false
        i = max4
      } else {
        state = false
        i = max4
      }
    }
    console.log('counter', counter)
    if (!counter) {
      this.checkerboard = oval
      console.log('输入非法')
      return false
    }
    return true
  }
  this.play = (x, y) => {
    const result = this.calculation(x, y, 'W')
    console.table(this.checkerboard)
    if (!result) return false
    const data = this.getPosition()
    const pio = data[getRandom(0, data.length - 1)]
    this.calculation(pio[0], pio[1], 'B')
    console.table(this.checkerboard)
    console.log(this.statistics())
    // console.log('data', data)
  }
  this.statistics = () => {
    let b = 0
    let w = 0
    this.checkerboard.forEach(item => {
      item.forEach(node => {
        if (node === 'B') b++
        if (node === 'W') w++
      })
    })
    return {
      B: b,
      W: w
    }
  }
  this.getPosition = () => {
    const bOval = []
    const wOval = []
    const data = []
    this.checkerboard.forEach((item, i) => {
      item.forEach((node, j) => {
        if (node === 'B') bOval.push([i, j])
        if (node === 'W') wOval.push([i, j])
      })
    })
    bOval.forEach(item => {
      data.push(...this.checkAround(item[0], item[1]))
    })
    // console.table(this.checkerboard)
    // console.log('data', data)
    return data
  }
  this.checkAround = (x, y) => {
    const data = []
    const color = this.checkerboard[x][y]
    const color2 = color === 'B' ? 'W' : 'B'
    // 上
    if (this.getPio(x, y - 1) === color2) {
      for (let i = y - 1; i >= 0; i--) {
        if (this.getPio(x, i) === '') {
          data.push([x, i])
          i = -1
        }
        if (this.getPio(x, i) === color) {
          i = -1
        }
      }
    }
    // 上右
    if (this.getPio(x + 1, y - 1) === color2) {
      const max = x > y ? y : x
      for (let i = 0; i < max; i++) {
        if (this.getPio(x + i, y - i) === '') {
          data.push([x + i, y - i])
          i = max
        }
        if (this.getPio(x + i, y - i) === color) {
          i = max
        }
      }
    }
    // 右
    if (this.getPio(x + 1, y) === color2) {
      for (let i = x + 1; i < 8; i++) {
        if (this.getPio(i, y) === '') {
          data.push([i, y])
          i = 8
        }
        if (this.getPio(i, y) === color) {
          i = 8
        }
      }
    }
    // 右下
    if (this.getPio(x + 1, y + 1) === color2) {
      const max = x > y ? y : x
      for (let i = 1; i < max; i++) {
        if (this.getPio(x + i, y + i) === '') {
          data.push([x + i, y + i])
          i = max
        }
        if (this.getPio(x + i, y + i) === color) {
          i = max
        }
      }
    }
    // 下
    if (this.getPio(x, y + 1) === color2) {
      for (let i = y + 1; i < 8; i++) {
        if (this.getPio(x, i) === '') {
          data.push([x, i])
          i = 8
        }
        if (this.getPio(x, i) === color) {
          i = 8
        }
      }
    }
    // 左下
    if (this.getPio(x - 1, y + 1) === color2) {
      const max = x > y ? 8 - x : 8 - y
      for (let i = 1; i < max; i++) {
        if (this.getPio(x - i, y + i) === '') {
          data.push([x - i, y + i])
          i = max
        }
        if (this.getPio(x - i, y + i) === color) {
          i = max
        }
      }
    }
    // 左
    if (this.getPio(x - 1, y) === color2) {
      for (let i = 1; i < x; i++) {
        if (this.getPio(x - i, y) === '') {
          data.push([x - i, y])
          i = x
        }
        if (this.getPio(x - i, y) === color) {
          i = x
        }
      }
    }
    // 左上
    if (this.getPio(x - 1, y - 1) === color2) {
      const max = x > y ? y : x
      for (let i = 1; i < max; i++) {
        if (this.getPio(x - i, y - i) === '') {
          data.push([x - i, y - i])
          i = max
        }
        if (this.getPio(x - i, y - i) === color) {
          i = max
        }
      }
    }
    return data
  }
  this.getPio = (x, y) => {
    if (x < 0 || y < 0 || x > 7 || y > 7) return null
    return this.checkerboard[x][y]
  }
}

const bureau = new Bureau()
bureau.start()
// bureau.play(5, 4)

let inputArr = []
rl.on('line', input => {
  inputArr = input.split(' ')
  if (!isNaN(inputArr[0]) && !isNaN(inputArr[1])) {
    bureau.play(Number(inputArr[0]), Number(inputArr[1]))
  }

  // console.log('a', a.start())
  // 下面就可以对数据进行处理......
  // console.log(inputArr)
  inputArr = [] // 清空数组
  // rl.close()
})

