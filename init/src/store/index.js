import {autorun} from 'mobx';
import Count from './modules/count';

let count = new Count();

autorun(()=>{
    console.log('count change...', count.count)
})

export default {
    count
}