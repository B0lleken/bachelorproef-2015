var jbtClsHostName = document.location.protocol + '//www.jobat.be/api';
var jbtClsType0 = 'JOBSITE';
var jbtClsType1 = 'JOBDETAIL';
var jbtClsType2 = 'PROMOLIST';
var jbtClsType3 = 'PROMOSEARCH';
var jbtClsType4 = 'MOSTRECENTJOBDETAIL';
var jbtClsType5 = 'LOGJOBAPPLY';
var jbtClsType6 = 'SPONTANEOUSAPPLICATION';
var jbtClsType7 = 'NEWSEARCH';
var jbtClsType8 = 'NEWSPONTANEOUSAPPLICATIONNEW';

function jbtClsGetUrlParamByName(name) {
    var name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if (results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}

function jbtClsInitDefault(id, culId, partnerId, siteId) {
    var params = new Object();
    params.id = id;
    params.culId = culId;
    params.partnerId = partnerId;
    params.siteId = siteId;
    params.url = '';
    params.width = '';
    params.items = '';
    params.pageSize = '';
    params.selection = '';
    params.type = '';
    params.jobTypes = '';
    params.jobId = jbtClsGetUrlParamByName('jbtClsJobId');
    return params;    
}

function jbtClsInit(divId, culId, partnerId, siteId) {
    var params = jbtClsInitDefault(divId, culId, partnerId, siteId);
    params.type = jbtClsType0;
    jbtClsLoadJScript(params);
}

function jbtClsInitSearch(divId, culId, partnerId, siteId) {
    var params = jbtClsInitDefault(divId, culId, partnerId, siteId);
    params.type = jbtClsType7;
    jbtClsLoadJScript(params);
    
}


//function jbtClsInitSearch(divId, culId, partnerId, siteId) {
//    var params = jbtClsInitDefault(divId, culId, partnerId, siteId);
//    params.type = jbtClsType0;
//    jbtClsLoadJScript(params);
//}

function jbtClsInitPromoList(divId, culId, partnerId, siteId, url, width, items, pageSize, selection, jobTypes) {
    var params = jbtClsInitDefault(divId, culId, partnerId, siteId);
    params.url = url;
    params.width = width;
    params.items = items;
    params.pageSize = pageSize;
    params.selection = selection;
    params.type = jbtClsType2;
    params.jobTypes = jobTypes;
    jbtClsLoadJScript(params);
}

function jbtClsInitPromoSearch(divId, culId, partnerId, siteId, url, width) {
    var params = jbtClsInitDefault(divId, culId, partnerId, siteId);
    params.url = url;
    params.width = width;
    params.type = jbtClsType3;
    jbtClsLoadJScript(params);
}

function jbtClsInitMostRecentJobDetail(divId, culId, partnerId, siteId) {
    var params = jbtClsInitDefault(divId, culId, partnerId, siteId);
    params.type = jbtClsType4;
    jbtClsLoadJScript(params);
}

function jbtClsInitApplication(divId, culId, partnerId, siteId, preview) {
    var params = jbtClsInitDefault(divId, culId, partnerId, siteId);
    params.type = jbtClsType6;
    params.preview = preview;
    jbtClsLoadJScript(params);
}

function jbtClsInitSponApp(divId, culId, partnerId, siteId, preview) {
    var params = jbtClsInitDefault(divId, culId, partnerId, siteId);
    params.type = jbtClsType8;
    params.preview = preview;
    jbtClsLoadJScript(params);
}

function jbtClsLoadJScript(params) {
    /******** Load jQuery if not present *********/
    if (!window.jQuery || window.jQuery.fn.jquery != '1.7.1') {
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type", "text/javascript");
        script_tag.setAttribute("src", document.location.protocol + "//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js");
        if (script_tag.readyState) {
            script_tag.onreadystatechange = function() { // For old versions of IE
                if (this.readyState == 'complete' || this.readyState == 'loaded') {
                    jbtClsJQueryHandler(params);
                }
            };
        } else { // Other browsers
            script_tag.onload = function() { jbtClsJQueryHandler(params); };
        }
        // Try to find the head, otherwise default to the documentElement
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
    } else {
        jbtClsJQuery = window.jQuery;
        jbtClsCallWS(params);
    }
}

function jbtClsJQueryHandler(params) {
    jbtClsJQuery = window.jQuery.noConflict(true);
    jbtClsCallWS(params);
}

function jbtClsGetUrl(params) {
    var keyword = '';
    var query = '';
    var filters = '';
    var password = '';
    if (jbtClsGetUrlParamByName('jbtClsCulId')) { params.culId = jbtClsGetUrlParamByName('jbtClsCulId'); }
    if (jbtClsGetUrlParamByName('jbtClsPartnerId')) { params.partnerId = jbtClsGetUrlParamByName('jbtClsPartnerId'); }
    if (jbtClsGetUrlParamByName('jbtClsSiteId')) { params.siteId = jbtClsGetUrlParamByName('jbtClsSiteId'); }
    if (jbtClsGetUrlParamByName('jbtClsPW')) { password = jbtClsGetUrlParamByName('jbtClsPW'); }
    
    var url = jbtClsHostName + '/esb/jobsites/jobsitesservice.svc/' + params.culId + '/' + params.partnerId + '/' + params.siteId;

    switch (params.type.toUpperCase()) {
        case jbtClsType0:
            if (jbtClsGetUrlParamByName('jbtClsQuery')) { query = jbtClsGetUrlParamByName('jbtClsQuery'); }
            if (jbtClsGetUrlParamByName('jbtClsKeyword')) { keyword = jbtClsGetUrlParamByName('jbtClsKeyword'); }
            if (jbtClsGetUrlParamByName('jbtClsFilters')) { filters = jbtClsGetUrlParamByName('jbtClsFilters'); }

            if (params.jobId) { url += '/JobDetail/' + params.jobId + '?containerId=' + params.id; }
            else { url += '/JobList?query=' + query + '&containerId=' + params.id + '&keyword=' + keyword + '&password=' + password + '&filters=' + filters; }
            break;
        case jbtClsType2:
            url += '/PromoList?containerId=' + params.id + '&width=' + params.width + '&items=' + params.items + '&selection=' + params.selection + '&pagesize=' + params.pageSize + '&jobtypes=' + params.jobTypes + '&password=' + password;            
            break;
        case jbtClsType3:
            url += '/PromoSearch?containerId=' + params.id + '&width=' + params.width;
            break;
        case jbtClsType4:
            url += '/MostRecentJobDetail?containerId=' + params.id + '&password=' + password;
            break;
        case jbtClsType5:
            url += '/LogJobApply/' + params.jobId;
            break;
        case jbtClsType6:
            url += '/SpontaneousApplication?containerId=' + params.id;
            break;
        case jbtClsType7:
            url += '/SearchBox?containerId=' + params.id;
            break;
        case jbtClsType8:
            url += '/NewSpontaneousApplication?containerId=' + params.id;
            break;
    }

    if (params.preview) { url += '&preview=true'; }    
    
    return url;
}

function jbtClsCallWS(params) {
    jbtClsJQuery(document).ready(function($) {
        $.ajax({
            cache: false,
            type: "GET",
            url: jbtClsGetUrl(params),
            data: "",
            contentType: "application/json",
            dataType: "jsonp",
            jsonpCallback: params.id,
            error: function(data) { jbtClsErrorObj = data; },
            success: function(data) { if (params.type.toUpperCase() != jbtClsType5) { $('#' + params.id).html(data.replace('#URL#', params.url)); } }
        });
    });
}

function jbtClsGetCurrentCleanUrl() {
    var splitUrl = window.location.href.split('?');
    var url = splitUrl[0];
    var qs = '';
    
    if (splitUrl.length > 1)
    {
        var qsParams = splitUrl[1].split('&');

        for (var i = 0; i < qsParams.length; i++) {
            if (qsParams[i].toLowerCase().indexOf('jbtclsquery=') != 0
                && qsParams[i].toLowerCase().indexOf('jbtclskeyword=') != 0
                && qsParams[i].toLowerCase().indexOf('jbtclsfilters=') != 0
                && qsParams[i].toLowerCase().indexOf('jbtclsjobid=') != 0
                && qsParams[i].toLowerCase().indexOf('jbtclspw=') != 0) {
                if (qs) { qs += '&' + qsParams[i]; }
                else { qs = '?' + qsParams[i]; }
            }
        }
    }

    if (qs) { url += qs; }

    return url;
}

function jbtClsSearchKeyDown(event, inputId, url, promo) {
    if (event) { if (event.keyCode == 13) { jbtClsSearch(inputId, url, promo); } }
    else if (window.event) { if (window.event.keyCode == 13) { jbtClsSearch(inputId, url, promo); } }
}

function jbtClsRedirect(url, qs, promo, password) {
//    alert('url = ' + url + ' - qs = ' + qs + ' - promo = ' + promo + ' - password = ' + password);

    if (!promo || url) {
        if (!url) { url = jbtClsGetCurrentCleanUrl();  }

        if (!password && jbtClsGetUrlParamByName('jbtClsPW')) { password = jbtClsGetUrlParamByName('jbtClsPW'); }

        if (password) {
            if (qs) {qs += '&jbtClsPW=' + password; }
            else {qs = 'jbtClsPW=' + password; }
        }
        if (qs) {
            if (url.indexOf('?') >= 0) { window.location.href = url + '&' + qs; }
            else { window.location.href = url + '?' + qs; }  
        }
        else { window.location.href = url; }
    }
}

function jbtClsSearch(inputId, url, promo) {
    var val = document.getElementById(inputId).value;
    if (val) { jbtClsRedirect(url, 'jbtClsKeyword=' + val, promo); }
    else { jbtClsRedirect(url, '', promo); }
}

var keyStr = "ABCDEFGHIJKLMNOP" +
               "QRSTUVWXYZabcdef" +
               "ghijklmnopqrstuv" +
               "wxyz0123456789+/" +
               "=";

function encode64(input) {
    //input = escape(input);
    var output = ""; 
    var chr1, chr2, chr3 = "";
    var enc1, enc2, enc3, enc4 = "";
    var i = 0;

    do {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }

        output = output +
           keyStr.charAt(enc1) +
           keyStr.charAt(enc2) +
           keyStr.charAt(enc3) +
           keyStr.charAt(enc4);
        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";
    } while (i < input.length);

    return output;
}

function decode64(input) {
    var output = "";
    var chr1, chr2, chr3 = "";
    var enc1, enc2, enc3, enc4 = "";
    var i = 0;

    // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
    var base64test = /[^A-Za-z0-9\+\/\=]/g;
    if (base64test.exec(input)) {
        alert("There were invalid base64 characters in the input text.\n" +
              "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
              "Expect errors in decoding.");
    }
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    do {
        enc1 = keyStr.indexOf(input.charAt(i++));
        enc2 = keyStr.indexOf(input.charAt(i++));
        enc3 = keyStr.indexOf(input.charAt(i++));
        enc4 = keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }

        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";

    } while (i < input.length);
    return output;
    //return unescape(output);
}




function jbtClsSearchListBoxes(inputFunctiontypeId,inputRegionId, url, promo) {
    var valFunction = document.getElementById(inputFunctiontypeId).value;
    var valRegion = document.getElementById(inputRegionId).value;
    var query = "";
    if (valFunction) {
        if (valRegion) {
            query = 'regionid=' + valRegion + '&functionid=' + valFunction;
        }
        else {
            query = 'functionid=' + valFunction;
        }
    }
    else {
        if (valRegion) {
            query = 'regionid=' + valRegion;
        }
    }
    var encodedString = encode64(query);

     //var encodedString = Base64.encode(query);


    if (query) { jbtClsRedirect(url, 'jbtClsQuery=' + encodedString, promo); }
    else { jbtClsRedirect(url, '', promo); }
    
}

function jbtClsRedirectQuery(query, url, promo) {
    if (query) { jbtClsRedirect(url, 'jbtClsQuery=' + query, promo); }
    else { jbtClsRedirect(url, '', promo); }
}

function jbtClsRedirectDetail(jobId, url, promo) {
    jbtClsRedirect(url, 'jbtClsJobId=' + jobId, promo);
}

function jbtClsRedirectApply(culId, partnerId, siteId, jobId, url) {
    jbtClsLogApply(culId, partnerId, siteId, jobId);
    window.open(url);
}

function jbtClsLogApply(culId, partnerId, siteId, jobId) {
    var params = jbtClsInitDefault('LogJobApply', culId, partnerId, siteId);
    params.type = jbtClsType5;
    params.jobId = jobId;
    jbtClsCallWS(params);
}

function jbtClsShowFilters(moreId, moreItemsId, show) {
    if (show) { jbtClsJQuery('#' + moreId).hide(); jbtClsJQuery('#' + moreItemsId).show(); }
    else { jbtClsJQuery('#' + moreId).show(); jbtClsJQuery('#' + moreItemsId).hide(); }
}

function jbtClsLogin(divId, culId, partnerId, siteId, inputId, emptyText) {
    var val = jbtClsJQuery('#' + inputId).val();
    if (val == emptyText) { val = ''; }
    jbtClsRedirect(null, '', false, val);
}

function jbtClsLoginKeyDown(event, divId, culId, partnerId, siteId, inputId, emptyText) {
    if (event) { if (event.keyCode == 13) { jbtClsLogin(divId, culId, partnerId, siteId, inputId, emptyText); } }
    else if (window.event) { if (window.event.keyCode == 13) { jbtClsLogin(divId, culId, partnerId, siteId, inputId, emptyText); } }
}

function jbtClsCheckInput(ctrl, emptyText, focus) {
    var val = jbtClsJQuery.trim(ctrl.value);
    if (val == emptyText && focus) { ctrl.value = ''; }
    if (val.length <= 0 && !focus) { ctrl.value = emptyText; }
}