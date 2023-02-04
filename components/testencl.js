function parent(){
    let n = 0
    function child(){
        console.log(`I'm child accessing parent variable n now: ${n}`)
    }
    child()
}

parent()