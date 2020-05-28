const mapping_signal = [
  {
    level: 5,
    max: 50, // 單位 ms
    min: 1, // 單位 ms
    percentage: 80
  },
  {
    level: 4,
    max: 100, // 單位 ms
    min: 51, // 單位 ms
    percentage: 85
  },
  {
    level: 3,
    max: 150, // 單位 ms
    min: 101, // 單位 ms
    percentage: 90
  },
  {
    level: 2,
    max: 200, // 單位 ms
    min: 151, // 單位 ms
    percentage: 95
  },
  {
    level: 1,
    max: 1000, // 單位 ms
    min: 201, // 單位 ms
    percentage: 100
  }
]

const mapping_country = [
  {
    id: 1,
    icon: 'china'
  },
  {
    id: 2,
    icon: 'hongkong'
  },
  {
    id: 3,
    icon: 'taiwan'
  },
  {
    id: 4,
    icon: 'singapore'
  },
  {
    id: 5,
    icon: 'philippines'
  }
]

export {
  mapping_country,
  mapping_signal
}
