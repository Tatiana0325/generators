export default function canIterate(item) {
    if (item == null) {
        return false;
    };
    
    if(item.__proto__.hasOwnProperty(Symbol.iterator)) {
        return true;
    } else {
        return false;
    }
}