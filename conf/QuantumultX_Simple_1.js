# 以 ";" 或 "#" 或 "//" 开头的行为注释行
#
# SS-URI scheme 请参考 https://shadowsocks.org/en/spec/SIP002-URI-Scheme.html
#
# Quantumult 使用 HTTP HEAD 方法对测试网址 server_check_url 进行网页响应性测试（测试结果为通过该节点访问此网页获得 HTTP 响应所需要的时间），来确认节点的可用性
# Quantumult 界面中的延迟测试方式均为网页响应性测试，显示的最终延迟均为通过对应节点访问测试网页获得 HTTP 响应所需要时间
# 由于 Trojan 协议为无响应校验协议，使得 HTTP 检测方式即使获得了 HTTP 响应，也不代表节点一定可用
#
# dns_exclusion_list 包含需要关闭 placeholder IP(240.*) 的域名列表, 不在 dns_exclusion_list 列表中的所域名将默认开启 placeholder IP 并启用 resolve-on-remote（远端解析 DNS）
#
# udp_whitelist 包含目的地的 UDP 端口, 如果留空则默认表示所有的端口都在 udp_whitelist 中。如果带有目的地端口 UDP 包 (通过 Quantumult tunnel interface) 不在 udp_whitelist 中，该 UDP 包将会被丢弃. 此项设置不会影响策略或代理服务器
#
# Quantumult X 将不会处理向 excluded_routes 列表中请求的流量，当你每次修改这个配置时，最好重新启动你的设备
#
# resource_parser_url 的配置文件示例可以参考 https://raw.githubusercontent.com/crossutility/Quantumult-X/master/resource-parser.js
#
# 图标库 → Qure：https://github.com/Koolson/Qure/tree/master/IconSet 或 OrzMini：https://github.com/Orz-3/mini
#
# 超简洁配置-更新时间[2024-06-12]

[general]
excluded_routes=192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, 17.0.0.0/8
network_check_url=http://cp.cloudflare.com/generate_204
server_check_url=http://cp.cloudflare.com/generate_204
resource_parser_url=https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/resource-parser.js
profile_img_url=https://cloud.martian.chat/favicon.ico
dns_exclusion_list = *.cmpassport.com, *.jegotrip.com.cn, *.icitymobile.mobi, id6.me, *.pingan.com.cn, *.cmbchina.com, *.localnetwork.uop, mfs.ykimg.com*.ttf, *.icbc.com.cn
geo_location_checker=http://ip-api.com/json/?lang=en-US, https://mirror.ghproxy.com/https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/IP_API.js

# 为保证获得最佳的 DNS 解析性能体验，Quantumult X 默认总是从当前网络（系统配置）的 DNS 服务器获取解析结果，但你可以使用 no-system 参数来关闭此操作，但是必须至少定义一个 DNS 服务器，如  "server=223.5.5.5"
# DNS 解析结果仅用于 直连（direct）规则和判定 IP 分流条件，而不会用于 代理 的规则策略（而是会在远端解析），Quantumult 不会获得目的 IP 和相关的域名
# 此处不允许将特定的域名指向 127.0.0.1. 如果你想将某个域名指向 127.0.0.1 如 example.com，你可以直接在 "filter_local" 中添加 "host, example.com, reject" 来实现。这一操作将会让域名的 DNS 结果返回 127.0.0.1

[dns]
no-ipv6
server=119.29.29.29
server=223.5.5.5
server=1.2.4.8
server=/*.taobao.com/223.5.5.5
server=/*.tmall.com/223.5.5.5
server=/*.alipay.com/223.5.5.5
server=/*.alicdn.com/223.5.5.5
server=/*.aliyun.com/223.5.5.5
server=/*.jd.com/119.28.28.28
server=/*.qq.com/119.28.28.28
server=/*.tencent.com/119.28.28.28
server=/*.weixin.com/119.28.28.28
server=/*.bilibili.com/119.29.29.29
server=/hdslb.com/119.29.29.29
server=/*.163.com/119.29.29.29
server=/*.126.com/119.29.29.29
server=/*.126.net/119.29.29.29
server=/*.127.net/119.29.29.29
server=/*.netease.com/119.29.29.29
server=/*.mi.com/119.29.29.29
server=/*.xiaomi.com/119.29.29.29
address=/mtalk.google.com/108.177.125.188

[policy]
# Others 为其他规则，若前边的规则都没有被匹配到，则听从此策略组的规定
# 策略想走特定节点或套娃，请长按分流策略组自行添加节点/策略组
static=Others, proxy, direct, 🇭🇰 Hong Kong丨01, 🇭🇰 Hong Kong丨02, 🇭🇰 Hong Kong丨03, 🇭🇰 Hong Kong丨04, 🇭🇰 Hong Kong丨05, 🇭🇰 Hong Kong丨06, 🇭🇰 Hong Kong丨07, 🇭🇰 Hong Kong丨08, 🇭🇰 Hong Kong丨09, 🇭🇰 Hong Kong丨10, 🇭🇰 Hong Kong丨11, 🇭🇰 Hong Kong丨12, 🇭🇰 Hong Kong丨13, 🇭🇰 Hong Kong丨14, 🇭🇰 Hong Kong丨15, 🇨🇳 Taiwan丨01, 🇨🇳 Taiwan丨02, 🇨🇳 Taiwan丨03, 🇨🇳 Taiwan丨04, 🇨🇳 Taiwan丨05, 🇨🇳 Taiwan丨06, 🇨🇳 Taiwan丨07, 🇨🇳 Taiwan丨08, 🇨🇳 Taiwan丨09, 🇨🇳 Taiwan丨10, 🇸🇬 Singapore丨01, 🇸🇬 Singapore丨02, 🇸🇬 Singapore丨03, 🇸🇬 Singapore丨04, 🇸🇬 Singapore丨05, 🇸🇬 Singapore丨06, 🇸🇬 Singapore丨07, 🇸🇬 Singapore丨08, 🇸🇬 Singapore丨09, 🇸🇬 Singapore丨10, 🇯🇵 Japan丨01, 🇯🇵 Japan丨02, 🇯🇵 Japan丨03, 🇯🇵 Japan丨04, 🇯🇵 Japan丨05, 🇯🇵 Japan丨06, 🇯🇵 Japan丨07, 🇯🇵 Japan丨08, 🇯🇵 Japan丨09, 🇯🇵 Japan丨10, 🇺🇸 United States丨01, 🇺🇸 United States丨02, 🇺🇸 United States丨03, 🇺🇸 United States丨04, 🇺🇸 United States丨05, 🇺🇸 United States丨06, 🇺🇸 United States丨07, 🇺🇸 United States丨08, 🇺🇸 United States丨09, 🇺🇸 United States丨10, 🇰🇷 South Korea丨01, 🇰🇷 South Korea丨02, 🇨🇦 Canada丨01, 🇨🇦 Canada丨02, 🇬🇧 Great Britain丨01, 🇬🇧 Great Britain丨02, 🇹🇷 Turkey丨01, 🇮🇳 India丨01, 🇳🇱 Netherlands丨01, 🇫🇷 France | 01, 🇩🇪 Germany | 01, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Final.png
static=OpenAI, proxy, direct, 🇭🇰 Hong Kong丨01, 🇭🇰 Hong Kong丨02, 🇭🇰 Hong Kong丨03, 🇭🇰 Hong Kong丨04, 🇭🇰 Hong Kong丨05, 🇭🇰 Hong Kong丨06, 🇭🇰 Hong Kong丨07, 🇭🇰 Hong Kong丨08, 🇭🇰 Hong Kong丨09, 🇭🇰 Hong Kong丨10, 🇭🇰 Hong Kong丨11, 🇭🇰 Hong Kong丨12, 🇭🇰 Hong Kong丨13, 🇭🇰 Hong Kong丨14, 🇭🇰 Hong Kong丨15, 🇨🇳 Taiwan丨01, 🇨🇳 Taiwan丨02, 🇨🇳 Taiwan丨03, 🇨🇳 Taiwan丨04, 🇨🇳 Taiwan丨05, 🇨🇳 Taiwan丨06, 🇨🇳 Taiwan丨07, 🇨🇳 Taiwan丨08, 🇨🇳 Taiwan丨09, 🇨🇳 Taiwan丨10, 🇸🇬 Singapore丨01, 🇸🇬 Singapore丨02, 🇸🇬 Singapore丨03, 🇸🇬 Singapore丨04, 🇸🇬 Singapore丨05, 🇸🇬 Singapore丨06, 🇸🇬 Singapore丨07, 🇸🇬 Singapore丨08, 🇸🇬 Singapore丨09, 🇸🇬 Singapore丨10, 🇯🇵 Japan丨01, 🇯🇵 Japan丨02, 🇯🇵 Japan丨03, 🇯🇵 Japan丨04, 🇯🇵 Japan丨05, 🇯🇵 Japan丨06, 🇯🇵 Japan丨07, 🇯🇵 Japan丨08, 🇯🇵 Japan丨09, 🇯🇵 Japan丨10, 🇺🇸 United States丨01, 🇺🇸 United States丨02, 🇺🇸 United States丨03, 🇺🇸 United States丨04, 🇺🇸 United States丨05, 🇺🇸 United States丨06, 🇺🇸 United States丨07, 🇺🇸 United States丨08, 🇺🇸 United States丨09, 🇺🇸 United States丨10, 🇰🇷 South Korea丨01, 🇰🇷 South Korea丨02, 🇨🇦 Canada丨01, 🇨🇦 Canada丨02, 🇬🇧 Great Britain丨01, 🇬🇧 Great Britain丨02, 🇹🇷 Turkey丨01, 🇮🇳 India丨01, 🇳🇱 Netherlands丨01, 🇫🇷 France | 01, 🇩🇪 Germany | 01, img-url=https://raw.githubusercontent.com/Elvis9931/iOS_Script_Rule/master/icon/color/OpenAI.png
static=YouTube, proxy, direct, 🇭🇰 Hong Kong丨01, 🇭🇰 Hong Kong丨02, 🇭🇰 Hong Kong丨03, 🇭🇰 Hong Kong丨04, 🇭🇰 Hong Kong丨05, 🇭🇰 Hong Kong丨06, 🇭🇰 Hong Kong丨07, 🇭🇰 Hong Kong丨08, 🇭🇰 Hong Kong丨09, 🇭🇰 Hong Kong丨10, 🇭🇰 Hong Kong丨11, 🇭🇰 Hong Kong丨12, 🇭🇰 Hong Kong丨13, 🇭🇰 Hong Kong丨14, 🇭🇰 Hong Kong丨15, 🇨🇳 Taiwan丨01, 🇨🇳 Taiwan丨02, 🇨🇳 Taiwan丨03, 🇨🇳 Taiwan丨04, 🇨🇳 Taiwan丨05, 🇨🇳 Taiwan丨06, 🇨🇳 Taiwan丨07, 🇨🇳 Taiwan丨08, 🇨🇳 Taiwan丨09, 🇨🇳 Taiwan丨10, 🇸🇬 Singapore丨01, 🇸🇬 Singapore丨02, 🇸🇬 Singapore丨03, 🇸🇬 Singapore丨04, 🇸🇬 Singapore丨05, 🇸🇬 Singapore丨06, 🇸🇬 Singapore丨07, 🇸🇬 Singapore丨08, 🇸🇬 Singapore丨09, 🇸🇬 Singapore丨10, 🇯🇵 Japan丨01, 🇯🇵 Japan丨02, 🇯🇵 Japan丨03, 🇯🇵 Japan丨04, 🇯🇵 Japan丨05, 🇯🇵 Japan丨06, 🇯🇵 Japan丨07, 🇯🇵 Japan丨08, 🇯🇵 Japan丨09, 🇯🇵 Japan丨10, 🇺🇸 United States丨01, 🇺🇸 United States丨02, 🇺🇸 United States丨03, 🇺🇸 United States丨04, 🇺🇸 United States丨05, 🇺🇸 United States丨06, 🇺🇸 United States丨07, 🇺🇸 United States丨08, 🇺🇸 United States丨09, 🇺🇸 United States丨10, 🇰🇷 South Korea丨01, 🇰🇷 South Korea丨02, 🇨🇦 Canada丨01, 🇨🇦 Canada丨02, 🇬🇧 Great Britain丨01, 🇬🇧 Great Britain丨02, 🇹🇷 Turkey丨01, 🇮🇳 India丨01, 🇳🇱 Netherlands丨01, 🇫🇷 France | 01, 🇩🇪 Germany | 01, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/YouTube.png
static=Spotify, proxy, direct, 🇭🇰 Hong Kong丨01, 🇭🇰 Hong Kong丨02, 🇭🇰 Hong Kong丨03, 🇭🇰 Hong Kong丨04, 🇭🇰 Hong Kong丨05, 🇭🇰 Hong Kong丨06, 🇭🇰 Hong Kong丨07, 🇭🇰 Hong Kong丨08, 🇭🇰 Hong Kong丨09, 🇭🇰 Hong Kong丨10, 🇭🇰 Hong Kong丨11, 🇭🇰 Hong Kong丨12, 🇭🇰 Hong Kong丨13, 🇭🇰 Hong Kong丨14, 🇭🇰 Hong Kong丨15, 🇨🇳 Taiwan丨01, 🇨🇳 Taiwan丨02, 🇨🇳 Taiwan丨03, 🇨🇳 Taiwan丨04, 🇨🇳 Taiwan丨05, 🇨🇳 Taiwan丨06, 🇨🇳 Taiwan丨07, 🇨🇳 Taiwan丨08, 🇨🇳 Taiwan丨09, 🇨🇳 Taiwan丨10, 🇸🇬 Singapore丨01, 🇸🇬 Singapore丨02, 🇸🇬 Singapore丨03, 🇸🇬 Singapore丨04, 🇸🇬 Singapore丨05, 🇸🇬 Singapore丨06, 🇸🇬 Singapore丨07, 🇸🇬 Singapore丨08, 🇸🇬 Singapore丨09, 🇸🇬 Singapore丨10, 🇯🇵 Japan丨01, 🇯🇵 Japan丨02, 🇯🇵 Japan丨03, 🇯🇵 Japan丨04, 🇯🇵 Japan丨05, 🇯🇵 Japan丨06, 🇯🇵 Japan丨07, 🇯🇵 Japan丨08, 🇯🇵 Japan丨09, 🇯🇵 Japan丨10, 🇺🇸 United States丨01, 🇺🇸 United States丨02, 🇺🇸 United States丨03, 🇺🇸 United States丨04, 🇺🇸 United States丨05, 🇺🇸 United States丨06, 🇺🇸 United States丨07, 🇺🇸 United States丨08, 🇺🇸 United States丨09, 🇺🇸 United States丨10, 🇰🇷 South Korea丨01, 🇰🇷 South Korea丨02, 🇨🇦 Canada丨01, 🇨🇦 Canada丨02, 🇬🇧 Great Britain丨01, 🇬🇧 Great Britain丨02, 🇹🇷 Turkey丨01, 🇮🇳 India丨01, 🇳🇱 Netherlands丨01, 🇫🇷 France | 01, 🇩🇪 Germany | 01, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Spotify.png
static=X, proxy, direct, 🇭🇰 Hong Kong丨01, 🇭🇰 Hong Kong丨02, 🇭🇰 Hong Kong丨03, 🇭🇰 Hong Kong丨04, 🇭🇰 Hong Kong丨05, 🇭🇰 Hong Kong丨06, 🇭🇰 Hong Kong丨07, 🇭🇰 Hong Kong丨08, 🇭🇰 Hong Kong丨09, 🇭🇰 Hong Kong丨10, 🇭🇰 Hong Kong丨11, 🇭🇰 Hong Kong丨12, 🇭🇰 Hong Kong丨13, 🇭🇰 Hong Kong丨14, 🇭🇰 Hong Kong丨15, 🇨🇳 Taiwan丨01, 🇨🇳 Taiwan丨02, 🇨🇳 Taiwan丨03, 🇨🇳 Taiwan丨04, 🇨🇳 Taiwan丨05, 🇨🇳 Taiwan丨06, 🇨🇳 Taiwan丨07, 🇨🇳 Taiwan丨08, 🇨🇳 Taiwan丨09, 🇨🇳 Taiwan丨10, 🇸🇬 Singapore丨01, 🇸🇬 Singapore丨02, 🇸🇬 Singapore丨03, 🇸🇬 Singapore丨04, 🇸🇬 Singapore丨05, 🇸🇬 Singapore丨06, 🇸🇬 Singapore丨07, 🇸🇬 Singapore丨08, 🇸🇬 Singapore丨09, 🇸🇬 Singapore丨10, 🇯🇵 Japan丨01, 🇯🇵 Japan丨02, 🇯🇵 Japan丨03, 🇯🇵 Japan丨04, 🇯🇵 Japan丨05, 🇯🇵 Japan丨06, 🇯🇵 Japan丨07, 🇯🇵 Japan丨08, 🇯🇵 Japan丨09, 🇯🇵 Japan丨10, 🇺🇸 United States丨01, 🇺🇸 United States丨02, 🇺🇸 United States丨03, 🇺🇸 United States丨04, 🇺🇸 United States丨05, 🇺🇸 United States丨06, 🇺🇸 United States丨07, 🇺🇸 United States丨08, 🇺🇸 United States丨09, 🇺🇸 United States丨10, 🇰🇷 South Korea丨01, 🇰🇷 South Korea丨02, 🇨🇦 Canada丨01, 🇨🇦 Canada丨02, 🇬🇧 Great Britain丨01, 🇬🇧 Great Britain丨02, 🇹🇷 Turkey丨01, 🇮🇳 India丨01, 🇳🇱 Netherlands丨01, 🇫🇷 France | 01, 🇩🇪 Germany | 01, img-url=https://raw.githubusercontent.com/Elvis9931/iOS_Script_Rule/master/icon/color/X.png
static=Whatsapp, proxy, direct, 🇭🇰 Hong Kong丨01, 🇭🇰 Hong Kong丨02, 🇭🇰 Hong Kong丨03, 🇭🇰 Hong Kong丨04, 🇭🇰 Hong Kong丨05, 🇭🇰 Hong Kong丨06, 🇭🇰 Hong Kong丨07, 🇭🇰 Hong Kong丨08, 🇭🇰 Hong Kong丨09, 🇭🇰 Hong Kong丨10, 🇭🇰 Hong Kong丨11, 🇭🇰 Hong Kong丨12, 🇭🇰 Hong Kong丨13, 🇭🇰 Hong Kong丨14, 🇭🇰 Hong Kong丨15, 🇨🇳 Taiwan丨01, 🇨🇳 Taiwan丨02, 🇨🇳 Taiwan丨03, 🇨🇳 Taiwan丨04, 🇨🇳 Taiwan丨05, 🇨🇳 Taiwan丨06, 🇨🇳 Taiwan丨07, 🇨🇳 Taiwan丨08, 🇨🇳 Taiwan丨09, 🇨🇳 Taiwan丨10, 🇸🇬 Singapore丨01, 🇸🇬 Singapore丨02, 🇸🇬 Singapore丨03, 🇸🇬 Singapore丨04, 🇸🇬 Singapore丨05, 🇸🇬 Singapore丨06, 🇸🇬 Singapore丨07, 🇸🇬 Singapore丨08, 🇸🇬 Singapore丨09, 🇸🇬 Singapore丨10, 🇯🇵 Japan丨01, 🇯🇵 Japan丨02, 🇯🇵 Japan丨03, 🇯🇵 Japan丨04, 🇯🇵 Japan丨05, 🇯🇵 Japan丨06, 🇯🇵 Japan丨07, 🇯🇵 Japan丨08, 🇯🇵 Japan丨09, 🇯🇵 Japan丨10, 🇺🇸 United States丨01, 🇺🇸 United States丨02, 🇺🇸 United States丨03, 🇺🇸 United States丨04, 🇺🇸 United States丨05, 🇺🇸 United States丨06, 🇺🇸 United States丨07, 🇺🇸 United States丨08, 🇺🇸 United States丨09, 🇺🇸 United States丨10, 🇰🇷 South Korea丨01, 🇰🇷 South Korea丨02, 🇨🇦 Canada丨01, 🇨🇦 Canada丨02, 🇬🇧 Great Britain丨01, 🇬🇧 Great Britain丨02, 🇹🇷 Turkey丨01, 🇮🇳 India丨01, 🇳🇱 Netherlands丨01, 🇫🇷 France | 01, 🇩🇪 Germany | 01, img-url=https://raw.githubusercontent.com/Elvis9931/iOS_Script_Rule/master/icon/color/Whatsapp.png
static=Instagram, proxy, direct, 🇭🇰 Hong Kong丨01, 🇭🇰 Hong Kong丨02, 🇭🇰 Hong Kong丨03, 🇭🇰 Hong Kong丨04, 🇭🇰 Hong Kong丨05, 🇭🇰 Hong Kong丨06, 🇭🇰 Hong Kong丨07, 🇭🇰 Hong Kong丨08, 🇭🇰 Hong Kong丨09, 🇭🇰 Hong Kong丨10, 🇭🇰 Hong Kong丨11, 🇭🇰 Hong Kong丨12, 🇭🇰 Hong Kong丨13, 🇭🇰 Hong Kong丨14, 🇭🇰 Hong Kong丨15, 🇨🇳 Taiwan丨01, 🇨🇳 Taiwan丨02, 🇨🇳 Taiwan丨03, 🇨🇳 Taiwan丨04, 🇨🇳 Taiwan丨05, 🇨🇳 Taiwan丨06, 🇨🇳 Taiwan丨07, 🇨🇳 Taiwan丨08, 🇨🇳 Taiwan丨09, 🇨🇳 Taiwan丨10, 🇸🇬 Singapore丨01, 🇸🇬 Singapore丨02, 🇸🇬 Singapore丨03, 🇸🇬 Singapore丨04, 🇸🇬 Singapore丨05, 🇸🇬 Singapore丨06, 🇸🇬 Singapore丨07, 🇸🇬 Singapore丨08, 🇸🇬 Singapore丨09, 🇸🇬 Singapore丨10, 🇯🇵 Japan丨01, 🇯🇵 Japan丨02, 🇯🇵 Japan丨03, 🇯🇵 Japan丨04, 🇯🇵 Japan丨05, 🇯🇵 Japan丨06, 🇯🇵 Japan丨07, 🇯🇵 Japan丨08, 🇯🇵 Japan丨09, 🇯🇵 Japan丨10, 🇺🇸 United States丨01, 🇺🇸 United States丨02, 🇺🇸 United States丨03, 🇺🇸 United States丨04, 🇺🇸 United States丨05, 🇺🇸 United States丨06, 🇺🇸 United States丨07, 🇺🇸 United States丨08, 🇺🇸 United States丨09, 🇺🇸 United States丨10, 🇰🇷 South Korea丨01, 🇰🇷 South Korea丨02, 🇨🇦 Canada丨01, 🇨🇦 Canada丨02, 🇬🇧 Great Britain丨01, 🇬🇧 Great Britain丨02, 🇹🇷 Turkey丨01, 🇮🇳 India丨01, 🇳🇱 Netherlands丨01, 🇫🇷 France | 01, 🇩🇪 Germany | 01, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Instagram.png
static=TikTok, proxy, direct, 🇭🇰 Hong Kong丨01, 🇭🇰 Hong Kong丨02, 🇭🇰 Hong Kong丨03, 🇭🇰 Hong Kong丨04, 🇭🇰 Hong Kong丨05, 🇭🇰 Hong Kong丨06, 🇭🇰 Hong Kong丨07, 🇭🇰 Hong Kong丨08, 🇭🇰 Hong Kong丨09, 🇭🇰 Hong Kong丨10, 🇭🇰 Hong Kong丨11, 🇭🇰 Hong Kong丨12, 🇭🇰 Hong Kong丨13, 🇭🇰 Hong Kong丨14, 🇭🇰 Hong Kong丨15, 🇨🇳 Taiwan丨01, 🇨🇳 Taiwan丨02, 🇨🇳 Taiwan丨03, 🇨🇳 Taiwan丨04, 🇨🇳 Taiwan丨05, 🇨🇳 Taiwan丨06, 🇨🇳 Taiwan丨07, 🇨🇳 Taiwan丨08, 🇨🇳 Taiwan丨09, 🇨🇳 Taiwan丨10, 🇸🇬 Singapore丨01, 🇸🇬 Singapore丨02, 🇸🇬 Singapore丨03, 🇸🇬 Singapore丨04, 🇸🇬 Singapore丨05, 🇸🇬 Singapore丨06, 🇸🇬 Singapore丨07, 🇸🇬 Singapore丨08, 🇸🇬 Singapore丨09, 🇸🇬 Singapore丨10, 🇯🇵 Japan丨01, 🇯🇵 Japan丨02, 🇯🇵 Japan丨03, 🇯🇵 Japan丨04, 🇯🇵 Japan丨05, 🇯🇵 Japan丨06, 🇯🇵 Japan丨07, 🇯🇵 Japan丨08, 🇯🇵 Japan丨09, 🇯🇵 Japan丨10, 🇺🇸 United States丨01, 🇺🇸 United States丨02, 🇺🇸 United States丨03, 🇺🇸 United States丨04, 🇺🇸 United States丨05, 🇺🇸 United States丨06, 🇺🇸 United States丨07, 🇺🇸 United States丨08, 🇺🇸 United States丨09, 🇺🇸 United States丨10, 🇰🇷 South Korea丨01, 🇰🇷 South Korea丨02, 🇨🇦 Canada丨01, 🇨🇦 Canada丨02, 🇬🇧 Great Britain丨01, 🇬🇧 Great Britain丨02, 🇹🇷 Turkey丨01, 🇮🇳 India丨01, 🇳🇱 Netherlands丨01, 🇫🇷 France | 01, 🇩🇪 Germany | 01, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/TikTok_1.png
static=Netflix, proxy, direct, 🇭🇰 Hong Kong丨01, 🇭🇰 Hong Kong丨02, 🇭🇰 Hong Kong丨03, 🇭🇰 Hong Kong丨04, 🇭🇰 Hong Kong丨05, 🇭🇰 Hong Kong丨06, 🇭🇰 Hong Kong丨07, 🇭🇰 Hong Kong丨08, 🇭🇰 Hong Kong丨09, 🇭🇰 Hong Kong丨10, 🇭🇰 Hong Kong丨11, 🇭🇰 Hong Kong丨12, 🇭🇰 Hong Kong丨13, 🇭🇰 Hong Kong丨14, 🇭🇰 Hong Kong丨15, 🇨🇳 Taiwan丨01, 🇨🇳 Taiwan丨02, 🇨🇳 Taiwan丨03, 🇨🇳 Taiwan丨04, 🇨🇳 Taiwan丨05, 🇨🇳 Taiwan丨06, 🇨🇳 Taiwan丨07, 🇨🇳 Taiwan丨08, 🇨🇳 Taiwan丨09, 🇨🇳 Taiwan丨10, 🇸🇬 Singapore丨01, 🇸🇬 Singapore丨02, 🇸🇬 Singapore丨03, 🇸🇬 Singapore丨04, 🇸🇬 Singapore丨05, 🇸🇬 Singapore丨06, 🇸🇬 Singapore丨07, 🇸🇬 Singapore丨08, 🇸🇬 Singapore丨09, 🇸🇬 Singapore丨10, 🇯🇵 Japan丨01, 🇯🇵 Japan丨02, 🇯🇵 Japan丨03, 🇯🇵 Japan丨04, 🇯🇵 Japan丨05, 🇯🇵 Japan丨06, 🇯🇵 Japan丨07, 🇯🇵 Japan丨08, 🇯🇵 Japan丨09, 🇯🇵 Japan丨10, 🇺🇸 United States丨01, 🇺🇸 United States丨02, 🇺🇸 United States丨03, 🇺🇸 United States丨04, 🇺🇸 United States丨05, 🇺🇸 United States丨06, 🇺🇸 United States丨07, 🇺🇸 United States丨08, 🇺🇸 United States丨09, 🇺🇸 United States丨10, 🇰🇷 South Korea丨01, 🇰🇷 South Korea丨02, 🇨🇦 Canada丨01, 🇨🇦 Canada丨02, 🇬🇧 Great Britain丨01, 🇬🇧 Great Britain丨02, 🇹🇷 Turkey丨01, 🇮🇳 India丨01, 🇳🇱 Netherlands丨01, 🇫🇷 France | 01, 🇩🇪 Germany | 01, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Netflix_Letter.png
static=Telegram, proxy, direct, 🇭🇰 Hong Kong丨01, 🇭🇰 Hong Kong丨02, 🇭🇰 Hong Kong丨03, 🇭🇰 Hong Kong丨04, 🇭🇰 Hong Kong丨05, 🇭🇰 Hong Kong丨06, 🇭🇰 Hong Kong丨07, 🇭🇰 Hong Kong丨08, 🇭🇰 Hong Kong丨09, 🇭🇰 Hong Kong丨10, 🇭🇰 Hong Kong丨11, 🇭🇰 Hong Kong丨12, 🇭🇰 Hong Kong丨13, 🇭🇰 Hong Kong丨14, 🇭🇰 Hong Kong丨15, 🇨🇳 Taiwan丨01, 🇨🇳 Taiwan丨02, 🇨🇳 Taiwan丨03, 🇨🇳 Taiwan丨04, 🇨🇳 Taiwan丨05, 🇨🇳 Taiwan丨06, 🇨🇳 Taiwan丨07, 🇨🇳 Taiwan丨08, 🇨🇳 Taiwan丨09, 🇨🇳 Taiwan丨10, 🇸🇬 Singapore丨01, 🇸🇬 Singapore丨02, 🇸🇬 Singapore丨03, 🇸🇬 Singapore丨04, 🇸🇬 Singapore丨05, 🇸🇬 Singapore丨06, 🇸🇬 Singapore丨07, 🇸🇬 Singapore丨08, 🇸🇬 Singapore丨09, 🇸🇬 Singapore丨10, 🇯🇵 Japan丨01, 🇯🇵 Japan丨02, 🇯🇵 Japan丨03, 🇯🇵 Japan丨04, 🇯🇵 Japan丨05, 🇯🇵 Japan丨06, 🇯🇵 Japan丨07, 🇯🇵 Japan丨08, 🇯🇵 Japan丨09, 🇯🇵 Japan丨10, 🇺🇸 United States丨01, 🇺🇸 United States丨02, 🇺🇸 United States丨03, 🇺🇸 United States丨04, 🇺🇸 United States丨05, 🇺🇸 United States丨06, 🇺🇸 United States丨07, 🇺🇸 United States丨08, 🇺🇸 United States丨09, 🇺🇸 United States丨10, 🇰🇷 South Korea丨01, 🇰🇷 South Korea丨02, 🇨🇦 Canada丨01, 🇨🇦 Canada丨02, 🇬🇧 Great Britain丨01, 🇬🇧 Great Britain丨02, 🇹🇷 Turkey丨01, 🇮🇳 India丨01, 🇳🇱 Netherlands丨01, 🇫🇷 France | 01, 🇩🇪 Germany | 01, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Telegram.png
static=PayPal, proxy, direct, 🇭🇰 Hong Kong丨01, 🇭🇰 Hong Kong丨02, 🇭🇰 Hong Kong丨03, 🇭🇰 Hong Kong丨04, 🇭🇰 Hong Kong丨05, 🇭🇰 Hong Kong丨06, 🇭🇰 Hong Kong丨07, 🇭🇰 Hong Kong丨08, 🇭🇰 Hong Kong丨09, 🇭🇰 Hong Kong丨10, 🇭🇰 Hong Kong丨11, 🇭🇰 Hong Kong丨12, 🇭🇰 Hong Kong丨13, 🇭🇰 Hong Kong丨14, 🇭🇰 Hong Kong丨15, 🇨🇳 Taiwan丨01, 🇨🇳 Taiwan丨02, 🇨🇳 Taiwan丨03, 🇨🇳 Taiwan丨04, 🇨🇳 Taiwan丨05, 🇨🇳 Taiwan丨06, 🇨🇳 Taiwan丨07, 🇨🇳 Taiwan丨08, 🇨🇳 Taiwan丨09, 🇨🇳 Taiwan丨10, 🇸🇬 Singapore丨01, 🇸🇬 Singapore丨02, 🇸🇬 Singapore丨03, 🇸🇬 Singapore丨04, 🇸🇬 Singapore丨05, 🇸🇬 Singapore丨06, 🇸🇬 Singapore丨07, 🇸🇬 Singapore丨08, 🇸🇬 Singapore丨09, 🇸🇬 Singapore丨10, 🇯🇵 Japan丨01, 🇯🇵 Japan丨02, 🇯🇵 Japan丨03, 🇯🇵 Japan丨04, 🇯🇵 Japan丨05, 🇯🇵 Japan丨06, 🇯🇵 Japan丨07, 🇯🇵 Japan丨08, 🇯🇵 Japan丨09, 🇯🇵 Japan丨10, 🇺🇸 United States丨01, 🇺🇸 United States丨02, 🇺🇸 United States丨03, 🇺🇸 United States丨04, 🇺🇸 United States丨05, 🇺🇸 United States丨06, 🇺🇸 United States丨07, 🇺🇸 United States丨08, 🇺🇸 United States丨09, 🇺🇸 United States丨10, 🇰🇷 South Korea丨01, 🇰🇷 South Korea丨02, 🇨🇦 Canada丨01, 🇨🇦 Canada丨02, 🇬🇧 Great Britain丨01, 🇬🇧 Great Britain丨02, 🇹🇷 Turkey丨01, 🇮🇳 India丨01, 🇳🇱 Netherlands丨01, 🇫🇷 France | 01, 🇩🇪 Germany | 01, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/PayPal.png



[server_local]
vmess=vpn.martian.chat:16888, method=aes-128-gcm, password=3f8e45f8-3da2-4dfb-b5ad-2beacfc96ee6, obfs=wss, obfs-uri=/go, tls-verification=false, fast-open=false, udp-relay=false, aead=true, tag=🇺🇸USA-SantaClara_Tencent_VMess_WebSocket
# 本地服务器部分, 自行添加即可



[server_remote]
https://host.api-baobaog.rest/api/v1/client/subscribe?token=9b5a8eb04fe48498874f6bc18b048c0c, tag=SSRDOG, update-interval=43200, opt-parser=false, enabled=true
https://tagcdnsub.work/api/v1/client/subscribe?token=8345870ae81dd38ccbccfb92b3e2b1bc, tag=TAGInternet, update-interval=43200, opt-parser=false, enabled=true
https://wow.dogss-host.bond/api/v1/client/subscribe?token=9b5a8eb04fe48498874f6bc18b048c0c, tag=SSRDOG, update-interval=43200, opt-parser=false, enabled=false
https://wow.dogss-host.store/api/v1/client/subscribe?token=9b5a8eb04fe48498874f6bc18b048c0c, tag=SSRDOG, update-interval=43200, opt-parser=false, enabled=false
# 节点远程订阅



[filter_remote]
# 远程分流规则策略组

# 社交聊天
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Whatsapp/Whatsapp.list, tag=Whatsapp, force-policy=Whatsapp, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Telegram/Telegram.list, tag=Telegram, force-policy=Telegram, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Twitter/Twitter.list, tag=X, force-policy=X, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Instagram/Instagram.list, tag=Instagram, force-policy=Instagram, update-interval=86400, opt-parser=false, enabled=true
# AI工具
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/OpenAI/OpenAI.list, tag=OpenAI, force-policy=OpenAI, update-interval=86400, opt-parser=false, enabled=true
# Payment
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/PayPal/PayPal.list, tag=PayPal, force-policy=PayPal, update-interval=86400, opt-parser=false, enabled=true
# 流媒体
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/YouTube/YouTube.list, tag=YouTube, force-policy=YouTube, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Netflix/Netflix.list, tag=Netflix, force-policy=Netflix, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Spotify/Spotify.list, tag=Spotify, force-policy=Spotify, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/TikTok/TikTok.list, tag=TikTok, force-policy=TikTok, update-interval=86400, opt-parser=false, enabled=true



[filter_local]
# 本地分流规则(相同规则下，本地规则将覆盖远程规则，优先生效)

# 绕过Apple企业证书过期
host, ocsp.apple.com, reject

# 银行
HOST-SUFFIX,95599.cn,direct
HOST-SUFFIX,abchina.com,direct
HOST-SUFFIX,bscabank.com,direct
HOST-SUFFIX,openaboc.cn,direct
HOST-SUFFIX,openaboc.com,direct
HOST-SUFFIX,openaboc.com.cn,direct

# 其他
host-suffix, local, direct
ip-cidr, 10.0.0.0/8, direct
ip-cidr, 17.0.0.0/8, direct
ip-cidr, 100.64.0.0/10, direct
ip-cidr, 127.0.0.0/8, direct
ip-cidr, 172.16.0.0/12, direct
ip-cidr, 192.168.0.0/16, direct
geoip, cn, direct
final, Others

[rewrite_remote]
# 远程重写规则

[rewrite_local]
# 本地复写规则

[task_local]
# 构造请求，脚本区，自行找库添加，仅保留流媒体解锁查询
event-interaction https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/streaming-ui-check.js, tag=流媒体解锁查询, img-url=arrowtriangle.right.square.system, enabled=true

[http_backend]

[mitm]
