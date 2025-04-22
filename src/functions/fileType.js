export function FileType(file){
    if (!file){
        return null
    }
    let str = file.name
    return str.split(".")[1]
}
