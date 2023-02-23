

var WANDownBytes = 0;
var WANUpBytes = 0;
var TimeoutGet = 10;
var WanTimer;
var WANGetFlag = 0;
//  宽带拨号 （重启复位后的 验证）
$('#r_kdbh_next').click(function () {
    var account = $("#inptAccount").val();
    var passwd = $("#inptPsw").val();

    if (trim(account) == "") {
        getMsg(Input_account, 1, "#inptAccount");
        return;
    }

    if (
        account.indexOf('"') > -1 ||
        account.indexOf("'") > -1 ||
        account.indexOf("\\") > -1
    ) {
        getMsg(Account_tips, 1, "#inptAccount");
        return;
    }

    if (trim(passwd) == "") {
        getMsg(Input_password, 1, "#inptPsw");
        return;
    }

    if (
        passwd.indexOf('"') > -1 ||
        passwd.indexOf("'") > -1 ||
        passwd.indexOf("\\") > -1
    ) {
        getMsg(Password_tips, 1, "#inptPsw");
        return;
    }
    nextStep()
});




// 静态ip （重启复位后的 验证）
$('#r_jtip_next').click(function () {

    var static_ip = $("#inptIP").val();
    var static_mask = $("#inptMask").val();
    var static_gw = $("#inptGateway").val();
    var static_dns_guide = $("#inptDNS").val();
    static_ip = IP_parseInt(static_ip);
    static_gw = IP_parseInt(static_gw);
    static_mask = IP_parseInt(static_mask);
    static_dns_guide == IP_parseInt(static_dns_guide);


    if (!checkIP(static_ip)) {
        getMsg(Ipaddr_invalid, 1, "#inptIP");
        return;
    }

    if (!checkMask(static_mask)) {
        getMsg(Mask_invalid, 1, "#inptMask");
        return;
    }

    if (!checkIP(static_gw)) {
        getMsg(Gateway_invalid, 1, "#inptGateway");
        return;
    }

    if (static_ip == static_gw) {
        getMsg(IP_or_Gateway_invalid);
        return;
    }

    if (!checkIP(static_dns_guide)) {
        getMsg(DNS_tips, 1, "#inptDNS");
        return;
    }

    if (!validateNetwork(static_ip, static_mask, static_gw)) {
        getMsg(Setting_invalid);
        return;
    }

    if (validateNetwork(static_ip, static_mask)) {
        getMsg(Ipaddr_invalid, 1, "#inptIP");
        return;
    }
    nextStep()

});


// wifi 名称 密码
$('#step2_next_g').click(function () {
    var ssid = $("#inptWifi").val();
    var pwd = $("#inptWifiPsw").val();

    if (false == check_wifi_wizard(ssid, pwd)) {
        return;
    }

    //  第二步 切到 第三步
    $('#step3').show();
    $('#step2').hide();
    $('.resetContent').hide();

});

function wizarFirstPost() {
    var str = "";
    var ssid = $("#inptWifi").val();
    var pwd = $("#inptWifiPsw").val();
    var DualFrequency = 0;
    if ($(".chk-box").prop("checked") == true) {
        DualFrequency = 1;
    }

    ssid = charReplace(ssid);
    if (pwd.length > 6)
        pwd = charReplace(pwd);

    var proto = $("#resetSelect").val();
    if (proto == "r_01") {
        var username = $("#inptAccount").val();
        var password = $("#inptPsw").val();
        str = "&wanProto=pppoe" + "&username=" + username + "&password=" + password + "&ssid=" + ssid + "&wifipwd=" + pwd;
    } else if (proto == "r_02") {
        var ip = $("#inptIP").val();
        var mask = $("#inptMask").val();
        var gw = $("#inptGateway").val();
        var dns1 = $("#inptDNS").val();
        str = "&wanProto=static" + "&ip=" + ip + "&mask=" + mask + "&gw=" + gw + "&dns1=" + dns1 + "&ssid=" + ssid + "&wifipwd=" + pwd;
    } else {
        str = "&wanProto=dhcp" + "&ssid=" + ssid + "&wifipwd=" + pwd;
    }

    var loginpwd = $("#inptNew").val();
    str += "&DualFrequency=" + DualFrequency + "&loginpwd=" + loginpwd;



    loading(Configuring, 40);
    GetDatas('actionURLinternet', 'operation=internetSetting&opt=FirstSet' + str, function (err, data) {
        //console.log(data.err);
        //if(data.err==0)
        {
            $.cookie('LoginStatus', false, { path: '/' });
            location.reload();
        }
    });
}

function StrChar(str) {

    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 0x0001 || c > 0x007e) {
            return false;
        }
    }
    return true;
}

// 管理密码
$("#setOk").click(function () {
    /*var oldpwd = $("#inptOld").val();
    if (oldpwd == "") {
    getMsg(Change_password_tips, 1, "#inptOld");
    return;
    }
    */
    var flag = true;


    if (flag == false) {
        getMsg(Change_password_tips1, 1, "#inptOld");
        return;
    }
    var pwd = trim($("#inptNew").val());
    var pwd2 = $("#inptAgain").val();
    if (pwd == "") {
        getMsg(Change_password_tips2, 1, "#inptNew");
        return;
    }
    if (trim($("#inptAgain").val()) != pwd) {
        getMsg(Change_password_tips3, 1, "#inptAgain");
        return;
    }
    if (!StrChar(pwd) || !StrChar(pwd2)) {
        getMsg(Input_password_error);
        return false;
    }
    /**
     if (oldpwd == pwd) {
     getMsg(Change_password_tips4, 1, "#inptNew");
     return;
     }
     **/
    if (pwd.length > 15 || pwd.length < 5) {
        getMsg(Change_password_tips5);
        return;
    }

    if (
        escape(pwd).indexOf("%u") != -1 || EscapeFunction(pwd)
    ) {
        getMsg(Passwd_check1, 1, "#inptNew");
        return;
    }

    wizarFirstPost();

});

function userLogin(str) {
    var name = 'root';
    var str_md5 = $.md5(name + str);
    $.ajax({
        type: "POST",
        timeout: 3000,
        // url: "http://"+document.domain+"/cgi-bin/cdata.cgi",
        url: "/cgi-bin/cdata.cgi",//取不到本地端口 才拿掉document.domain
        data: "operation=login&function=set&usrid=" + str_md5,
        dataType: "JSON",
        success: function (data) {
            var LoginStatus = 'true';
            if (data.error == 0) {
                $.cookie('LoginStatus', true);

                if ($.cookie('LoginStatus') == 'true') {
                    if ((DevMode != "Router"))
                        window.location.href = "/user/index.shtml";
                    else
                        location.reload();
                } else {
                    layer.msg(Password_error);
                }
            } else if (data.error == 10001) {
                layer.msg(Password_error);

            } else {
                getMsg(Login_failed);
            }
        }, complete: function (XHR, TS) {
            XHR = null;
        },
        error: function (XHRequest, status, data) {
            getMsg(XHRequest.status);
            XHRequest.abort();
        }
    });
}


if ($.cookie('LoginStatus') == 'true') {
    $('.loginWrap').hide();
    $('.managementWrap').show();

    if (DefaultRest == "1") {
        $("#DefaultReset").removeClass("resetWrap");
        $("#restartHide").hide();
        FirstEntry();
    } else {
        InitWeb();
        WanTimer = self.setInterval("InitWeb()", TimeoutGet * 1000);
    }
}


function FirstEntry() {

    $('.greenTips').show();
    $('.greenTips').text(Dynamic_tips);
    $('#r_kdbh').hide();
    $('#r_kdbh_next').hide();
    $('#r_jtip').hide();
    $('#r_jtip_next').hide();
    $('#r_dtip_next').show();
    $('#up_step').click(function () {
        $('#step2').hide();
        $('.resetContent').show();
    });
    $.getJSON("cgi-bin/cdata.cgi?operation=GetIndexStatus&opt=firstEntry&" + Math.random(), null);
}
function InitWeb() {
    $.getJSON("cgi-bin/cdata.cgi?operation=GetRouterStatus&" + Math.random(), InitHandle);
}

function InitHandle(obj) {
    var str_d = "0KB/s";
    var str_u = "0KB/s";
    var speed = 0;
    if (obj.wanDown != 0) {
        speed = (obj.wanDown - WANDownBytes) / TimeoutGet / 1024;
        if (speed > 1024)
            str_d = (speed / 1024).toFixed(2) + "MB/s";
        else
            str_d = speed.toFixed(2) + "KB/s";

    }

    if (obj.wanUp != 0) {
        speed = (obj.wanUp - WANUpBytes) / TimeoutGet / 1024;
        if (speed > 1024)
            str_u = (speed / 1024).toFixed(2) + "MB/s";
        else
            str_u = speed.toFixed(2) + "KB/s";
    }
    if (obj.wan_port == "1") {
        WANDownBytes = obj.wanDown;
        WANUpBytes = obj.wanUp;
    }
    if (WANGetFlag == 0) {
        str_d = "0KB/s";
        str_u = "0KB/s";
    }
    $("#clientNum").html(obj.clientNum);
    $("#WANDown").html(str_d);
    $("#WANUP").html(str_u);

    if (obj.internetStatus == 1) {
        $("#internetLink").css("display", "block");
        $("#internetError").css("display", "none");
        $(".conect-already").html(Check_connected);
    } else {
        $("#internetLink").css("display", "none");
        $("#internetError").css("display", "block");
        $(".conect-already").html(Check_connecting);
    }
    WANGetFlag++;
}

$(document).keyup(function (event) {
    if (event.keyCode == 13 && ($.cookie('LoginStatus') != 'true')) {
        var LoginPsw = $('#login_pwd').val();
        if (LoginPsw == '') {
            layer.msg(Change_password_tips2);
            return false;
        }
        userLogin(LoginPsw);
    }
});



$(document).ready(function () {
    // 忘记密码 提示窗口
    layui.use('layer', function () {
        $('.forget-psw').click(function () {
            layer.msg(Forget_password_tips1 + Forget_password_tips2, {
                time: 4000
            });

        })
    });

    // 登录
    $('.loginBtn').click(function () {
        var LoginPsw = $('#login_pwd').val();
        if (LoginPsw == '') {
            layer.msg(Change_password_tips2);
            return false;
        }
        userLogin(LoginPsw);
    });
});
