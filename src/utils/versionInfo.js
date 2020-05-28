import figlet from 'figlet'
import Graceful from 'figlet/importable-fonts/Graceful.js'

const versionInfo = () => {
  figlet.parseFont('Graceful', Graceful)
  figlet.text(process.env.VERSION, {
    font: 'Graceful',
    horizontalLayout: 'fitted',
  }, function(_err, data) { window.console.log(data) })

  window._versionInfo_ = {
    version: process.env.VERSION,
    commitHEAD: process.env.commitHEAD
  }
}

export default versionInfo
