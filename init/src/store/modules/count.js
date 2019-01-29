
import {observable, action} from 'mobx'
export default class{
    @observable count = 10000;

    @action
    changeCount(type){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                type=='+'?this.count++: this.count--;
                resolve();
            }, 2000);
        })
       
        // console.log('this.count...', this.count)
    }
}