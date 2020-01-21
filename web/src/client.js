import * as sapper from '@sapper/app'
import '../../src/generic.scss'
import '../../src/premade.scss'

sapper.start({
  target: document.querySelector('#sapper'),
})
