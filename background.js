/*          DECODEX
            LES DECODEURS / LE MONDE
            VERSION 1 / FEVRIER 2017

              ▄▓▄
            ▄▓▓█       ▄▄▄▓▓▓▓▄╦          ▄▓▄               ▄▓▄▄
           ▓▓▓▓▄,,▄▄▓▓▓▓▓▓▓▓▓▓▓▓▓╕    ╓▄▓▓▓▓▓▓▓▄        ,▄▓▓▓▓▓▓▓▓▄╦
       ╒▌ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄  ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄▄▄▄▄▓▓▌
       ╫▓ ╙▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▀Γ ▀█▓▓▓▓▓▓▓▓▓▓▓▓▓█▀  ▀█▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▀Γ
        █▓▄ Γ▀▀▀▀▀ΓΓ ,  █▓▓▓▓▓▓▓▓▓▌  Σ▓▄,╙█▓▓▓▓▓▓▓▓▓▌   ▀█▓▄,Γ▀█▓▓▓▓▓▓▓▓█
                     ▐▓ ▐▓▓▓▓▓▓▓▓▓▌    ╙▓Q ▓▓▓▓▓▓▓▓▓▌       ▀█▌  ▓▓▓▓▓▓Γ
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌          ▄▓▓▓▓▓▓▓
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌       ⌐ ▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌      ▓ ╟▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▐▌ ▓▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓µ     ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓      ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                     ]▓ ╟▓▓▓▓▓▓▓█       ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                     ▐▀ ▓▓▓▓▓█▀         ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                      ╓▓▓▓█Γ            ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                      █▀                ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
               ▄▄▓▓▓▓▓▓▓▓▓▓▓▄╦          ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▓
          ,▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄▄▓▓▌   ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▓▄,,▄▓╕
       ╓▄▓▓▓▓▓▓██████▓▓▓▓▓▓▓▓▓▓▓▓█▀     ▓▌ ▓▓▓▓▓▓▓▓▓▀     ▓▓ █▓▓▓▓▓▓▓▓▓▓▓▓█▀
     ▄▓▓██▀Γ     ≈4▄▄, ▀▓▓▓▓▓█▀Γ        ▓▌ ▓▓▓▓▓█▀Γ        ▓▌ ▀█▓▓▓▓▓▓█▀Γ
   ╙▓█Γ              █▓▄ ██▀            ▓▌ ██▀Γ             ▀█▄╦ ▀██▀
                      ╙▀                ▀`                     ▀▀
 */




var base_url = "http://www.lemonde.fr/webservice/decodex/updates";
var urls = "";
var note = null;
var notule = ""
var active_url = "";
var debunker = false;
var clean_url = "";

chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        console.log("Le Décodex est installé");
        loadData();
        var last_update = new Date();
        chrome.storage.local.set(
            {
                'infobulles': [false, true, true, true, false],
                'last_update': last_update.getTime(),
            }
        );
        chrome.tabs.create({url: "install.html"});
    }
    /*else if(details.reason == "update"){
        var thisVersion = chrome.runtime.getManifest().version;
    }*/
});


function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}


function loadData(){
    chrome.storage.local.get('last_update', function(results){
        var new_update = new Date();
        loadJSON(base_url,
             function(data) {
                chrome.storage.local.set({'urls': data['urls']}, function() {
                });
                chrome.storage.local.set({'sites': data['sites']}, function() {
                });
                chrome.storage.local.set({'last_update': new_update.getTime()}, function() {
                });

             }
        );
    });
}


function lastSlash(u){
	if(u.lastIndexOf('/') == u.length-1) {
        return u.substring(0, u.length-1);
    }
	else {
		return u;	
	}
}


function url_cleaner(u){
    return u.replace("http://", "").replace('www.', "").replace("https://", "");
}

function youtubeChannel(u){
    var elms = u.split('/');
    if(elms.length > 2){
        return elms[0] + '/' + elms[1] + "/" + elms[2];
    }
    else{
        return u;
    }
}

function debunkSite(u, t, d){
    chrome.storage.local.get(['urls', "sites", "already_visited", "infobulles", "last_update"], function(results){
        urls = results.urls;
        sites = results.sites;
        debunker = urls.hasOwnProperty(u);
        if(debunker == true){
            site_id = urls[u];
            site_actif = sites[site_id][2];
            note = parseInt(sites[site_id][0]);
            notule = sites[site_id][1];
            slug = sites[site_id][3];
            chrome.browserAction.setIcon({
                path: "img/icones/icon" + (note) + ".png",
                tabId: t
            });
            if(results.infobulles[note] == true && d == true){  //
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                    chrome.tabs.sendMessage(tabs[0].id, {text: "debunker"+note}, function(response) {
                    });
                });
            }
        }
        else {
            chrome.browserAction.setIcon({
                path: "icone.png",
                tabId: t
            });
        }
        var today = new Date();
        if((today.getTime() - results.last_update)/1000/60/60 >= 24) {
            loadData();
        }
    });
}


function checkSite(do_display){
    chrome.tabs.getSelected(null,function(tab) {
        active_url = lastSlash(tab.url);
        if(active_url.indexOf("chrome-extension://") == 0) { return;}
            // YOUTUBE
            if(active_url.indexOf("youtube.com/") > -1){
                if(active_url.indexOf("channel") == -1){
                    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                        chrome.tabs.sendMessage(tabs[0].id, {text: 'report_back'}, function(response){
                            clean_url = response.farewell.replace('https://www.', "");
                            debunkSite(clean_url, tab.id, do_display);
                        });
                    });
                }
                else {
                    clean_url = youtubeChannel(url_cleaner(active_url));
                    debunkSite(clean_url, tab.id, do_display);
                }
            }
            // SOCIAL NETWORKS HOMEPAGE
            else if(active_url == 'https://www.facebook.com' || active_url == 'https://twitter.com' || active_url == 'https://www.youtube.com'){
                clean_url = url_cleaner(active_url);
                debunkSite(clean_url, tab.id, do_display);
            }
            // OTHER URLS
            else {
                matches = []
                for (var key in urls) {
                    if (!urls.hasOwnProperty(key)) continue;
                    var index = active_url.indexOf(key);
                    if(index != -1) {
                    console.log(active_url + " --- " + key);
                        if((active_url.indexOf('http://www.'+ key) == 0 || active_url.indexOf('https://www.'+ key) == 0 || active_url.indexOf('http://'+ key) == 0 || active_url.indexOf('https://'+ key) == 0)
                            && index != 0
                            && (active_url[index-1] == "/" || active_url[index-1] == ".")
                            && key != "facebook.com"
                            && key != "twitter.com") {
                                matches.push(key);
                        }
                    }
                }
                tampon = "";
                for(var url_i=0;url_i<matches.length;url_i++){
                    if(matches[url_i].length > tampon.length){
                        tampon = matches[url_i];
                    }
                }
                clean_url = tampon;
                debunkSite(clean_url, tab.id, do_display);
            }
    });

}


chrome.tabs.onActivated.addListener(function (tabId, tab) {
    checkSite(false);
});

chrome.windows.getCurrent(function (tabId, tab) {
    checkSite(false);
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    checkSite(changeInfo.status && changeInfo.status == "complete");
});

chrome.windows.onFocusChanged.addListener(function (tabId, tab) {
    checkSite(false);
});

chrome.browserAction.onClicked.addListener(function (tabId, tab) {
    checkSite(false);
});

chrome.tabs.onCreated.addListener(function (tabId, tab) {
    checkSite(true);
});
