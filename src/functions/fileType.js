export function FileType(file){
    if (!file){
        return "hello"
    }
    let str = file.type
    return str.split("/")[1]
}
