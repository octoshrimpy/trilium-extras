let config = {
    "url": "zadam/trilium",
    "betaBuilds": false
}

function getLocalVersion(){
    var appVersion = require('electron').remote.app.getVersion();
    return appVersion
}

function getLatestVersion(url){
    return fetch(url)
}

function checkForNewer(){

    let url = `https://api.github.com/repos/${config.url}/releases`

    if(config.betaBuilds === false) {
        url = url.concat('/latest')
    }

    getLatestVersion(url).then(function(data){

        //double promise due to redirect from github
        data.json().then(function(data1){

            const localVersion = getLocalVersion()
            let latestVersion = config.betaBuilds ? data1[0].tag_name:  data1.tag_name
            
            foundConfigs(localVersion, latestVersion)
        })

    })

}

function foundConfigs(local, latest){
    console.log(`find beta: ${config.betaBuilds}`)
    console.log(`local: ${local}`)
    console.log(`latest: ${latest}`)
}

checkForNewer()
