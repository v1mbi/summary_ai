export function FileType(file){
    if (!file){
        return "hello"
    }
    let str = file.name
    return str.split(".")[1]
}
