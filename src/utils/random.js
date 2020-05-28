import { mapping_signal } from 'constants/mapping'

const percent_in_range = (maxPercent = 80) => {
  return Math.random() * 100 < maxPercent
}

const math_range = (max = 100, min = 1) => Math.random() * (max - min) + min

const check_signal_level = num => {
  return mapping_signal.find(signal => num > signal.min && num < signal.max).level
}

const get_random_signal = () => {
  const { max, min } = mapping_signal.find(signal => percent_in_range(signal.percentage))
  return math_range(max, min)
}

const parse_signal_str = val => {
  const num = val / 1000
  return num.toFixed(3)
}

export {
  percent_in_range,
  math_range,
  get_random_signal,
  parse_signal_str,
  check_signal_level
}
