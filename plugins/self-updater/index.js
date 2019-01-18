let config = {
    "url": "zadam/trilium",
    "betaBuilds": true
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

            let localVstripped  = localVersion.replace(/\D/g, '')
            let latestVstripped = latestVersion.replace(/\D/g, '')

            if(latestVstripped > localVstripped){
                window.alert(`                                       Update available!\n\nCurrent version: ${localVersion}\nLatest Version:   ${latestVersion}`)
            }

        })

    })

}

checkForNewer()
