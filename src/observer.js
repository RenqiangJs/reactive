class Observer {
    constructor(val) {
        this.walk(val)
    }
    walk(obj) {
        const keys = Object.keys(obj)
        for (let i = 0; i < keys.length; i++) {
            defineReactive(obj, keys[i])
        }
    }
}
function defineReactive(obj,key){
    console.log(key)
    let val = obj[key];
    Object.defineProperty(obj,key,{
        get:function(){
            console.log()
            return val+1;
        },
        set:function(newValue){
            if(newValue === val || (newValue !== newValue && val !== val)){
                return
            }
            val = newValue;
        }
    })
}

function observer(obj) {
    console.log(obj)
    let Ob = new Observer(obj)
}
const obj = {
    a:1,
    b:2,
    c:3
}
observer(obj)