function refresh(data_item){
  var id_time = data_item + "_time";
  var id_content = data_item + "_content";
  if(data_item == 'baidu_now' || data_item == 'baidu_today' || data_item == 'baidu_week' || data_item == 'tieba'){
    var id_time = "baidu_time";
    var id_content = "baidu_content";
  }
  if(data_item == 'weibo_realtimehot' || data_item == 'weibo_socialevent'){
    var id_time = "weibo_time";
    var id_content = "weibo_content";
  }
  if(data_item == 'zhihu_good' || data_item == 'zhihu_hot' || data_item == 'zhihu_daily'){
    var id_time = "zhihu_time";
    var id_content = "zhihu_content";
  }
  if(data_item == 'v2ex_hot' || data_item == 'v2ex_all'){
    var id_time = "v2ex_time";
    var id_content = "v2ex_content";
  }
  if(data_item == 'hacpai_play' || data_item == 'hacpai_hot'){
    var id_time = "hacpai_time";
    var id_content = "hacpai_content";
  }
  if(data_item == 'weixin_hot'){
    var id_time = "weixin_time";
    var id_content = "weixin_content";
  }
  if(data_item == 'smzdm_article_today' || data_item == 'smzdm_article_week' || data_item == 'smzdm_article_month'){
    var id_time = "smzdm_article_time";
    var id_content = "smzdm_article_content";
  }
  if(data_item == 'itunes_paid_cn' || data_item == 'itunes_free_cn' || data_item == 'itunes_revenue_cn'){
    var id_time = "itunes_cn_time";
    var id_content = "itunes_cn_content";
  }
  if(data_item == 'itunes_paid_us' || data_item == 'itunes_free_us' || data_item == 'itunes_revenue_us'){
    var id_time = "itunes_us_time";
    var id_content = "itunes_us_content";
  }
  if(data_item == '36kr_newsflashes' || data_item == '36kr_hotlist' || data_item == '36kr_news'){
    var id_time = "36kr_time";
    var id_content = "36kr_content";
  }
  if(data_item == '163_yaowen' || data_item == '163_guonei' || data_item == '163_guoji' || data_item == '163_dujia'){
    var id_time = "163_time";
    var id_content = "163_content";
  }
  if(data_item == 'toutiao_all' || data_item == 'toutiao_hot' || data_item == 'toutiao_tech' || data_item == 'toutiao_finance'){
    var id_time = "toutiao_time";
    var id_content = "toutiao_content";
  }
  if(data_item == 'bilibili_hot1' || data_item == 'bilibili_hot3' || data_item == 'bilibili_hot7' || data_item == 'bilibili_hot30'){
    var id_time = "bilibili_time";
    var id_content = "bilibili_content";
  }
  if(data_item == 'acfun_hot1' || data_item == 'acfun_hot3' || data_item == 'acfun_hot7'){
    var id_time = "acfun_time";
    var id_content = "acfun_content";
  }
  if(document.getElementById(id_time)){
    document.getElementById(id_time).innerHTML = '更新时间';
  }
  if(document.getElementById(id_content)){
    document.getElementById(id_content).innerHTML = "";
    var tag = "更新中......";
    document.getElementById(id_content).insertAdjacentHTML("beforeEnd",tag);
  }
  html_xr(data_item);
};

function html_xr(data_item){
  var now=new Date();
  var runtime = performance.now();
  var id_head = data_item + "_head";
  var id_time = data_item + "_time";
  var id_content = data_item + "_content";
  var id_title = data_item + "_title";
  if(data_item == 'baidu_now' || data_item == 'baidu_today' || data_item == 'baidu_week' || data_item == 'tieba'){
    var id_head = "baidu_head";
    var id_time = "baidu_time";
    var id_content = "baidu_content";
  }
  if(data_item == 'weibo_realtimehot' || data_item == 'weibo_socialevent'){
    var id_head = "weibo_head";
    var id_time = "weibo_time";
    var id_content = "weibo_content";
  }
  if(data_item == 'zhihu_good' || data_item == 'zhihu_hot' || data_item == 'zhihu_daily'){
    var id_head = "zhihu_head";
    var id_time = "zhihu_time";
    var id_content = "zhihu_content";
  }
  if(data_item == 'v2ex_hot' || data_item == 'v2ex_all'){
    var id_head = "v2ex_head";
    var id_time = "v2ex_time";
    var id_content = "v2ex_content";
  }
  if(data_item == 'hacpai_play' || data_item == 'hacpai_hot'){
    var id_head = "hacpai_head";
    var id_time = "hacpai_time";
    var id_content = "hacpai_content";
  }
  if(data_item == 'weixin_hot'){
    var id_head = "weixin_head";
    var id_time = "weixin_time";
    var id_content = "weixin_content";
  }
  if(data_item == 'smzdm_article_today' || data_item == 'smzdm_article_week' || data_item == 'smzdm_article_month'){
    var id_head = "smzdm_article_head";
    var id_time = "smzdm_article_time";
    var id_content = "smzdm_article_content";
  }
  if(data_item == 'itunes_paid_cn' || data_item == 'itunes_free_cn' || data_item == 'itunes_revenue_cn'){
    var id_head = "itunes_cn_head";
    var id_time = "itunes_cn_time";
    var id_content = "itunes_cn_content";
  }
  if(data_item == 'itunes_paid_us' || data_item == 'itunes_free_us' || data_item == 'itunes_revenue_us'){
    var id_head = "itunes_us_head";
    var id_time = "itunes_us_time";
    var id_content = "itunes_us_content";
  }
  if(data_item == '36kr_newsflashes' || data_item == '36kr_hotlist' || data_item == '36kr_news'){
    var id_head = "36kr_head";
    var id_time = "36kr_time";
    var id_content = "36kr_content";
  }
  if(data_item == '163_yaowen' || data_item == '163_guonei' || data_item == '163_guoji' || data_item == '163_dujia'){
    var id_head = "163_head";
    var id_time = "163_time";
    var id_content = "163_content";
  }
  if(data_item == 'toutiao_all' || data_item == 'toutiao_hot' || data_item == 'toutiao_tech' || data_item == 'toutiao_finance'){
    var id_head = "toutiao_head";
    var id_time = "toutiao_time";
    var id_content = "toutiao_content";
  }
  if(data_item == 'bilibili_hot1' || data_item == 'bilibili_hot3' || data_item == 'bilibili_hot7' || data_item == 'bilibili_hot30'){
    var id_head = "bilibili_head";
    var id_time = "bilibili_time";
    var id_content = "bilibili_content";
  }
  if(data_item == 'acfun_hot1' || data_item == 'acfun_hot3' || data_item == 'acfun_hot7'){
    var id_head = "acfun_head";
    var id_time = "acfun_time";
    var id_content = "acfun_content";
  }
  var number = now.getYear().toString()+now.getMonth().toString()+now.getDate().toString()+now.getHours().toString()+now.getMinutes().toString()+now.getSeconds().toString();
  var page = "json/" + data_item + ".json?" + number;
  $.getJSON(page, function(data_all){
    if(document.getElementById(id_title)){
      if(document.getElementById("baidu_now_title")){
        if(data_item == 'baidu_today' || data_item == 'baidu_week' || data_item == 'tieba'){
          document.getElementById("baidu_now_title").style.color ='#bdbdbd';
          document.getElementById("baidu_num").style.display ='none';
        }
      }
    if(document.getElementById("baidu_today_title")){
      if(data_item == 'baidu_now' || data_item == 'baidu_week' || data_item == 'tieba'){
        document.getElementById("baidu_today_title").style.color ='#bdbdbd';
        document.getElementById("baidu_num").style.display ='none';
      }
    }
    if(document.getElementById("baidu_week_title")){
      if(data_item == 'baidu_today' || data_item == 'baidu_now' || data_item == 'tieba'){
        document.getElementById("baidu_week_title").style.color ='#bdbdbd';
        document.getElementById("baidu_num").style.display ='none';
      }
    }
    if(document.getElementById("tieba_title")){
      if(data_item == 'baidu_today' || data_item == 'baidu_now' || data_item == 'baidu_week'){
        document.getElementById("tieba_title").style.color ='#bdbdbd';
        document.getElementById("baidu_num").style.display ='inline';
      }
    }
    if(document.getElementById("weibo_realtimehot_title")){
      if(data_item == 'weibo_socialevent'){
        document.getElementById("weibo_realtimehot_title").style.color ='#bdbdbd';
        document.getElementById("weibo_num").style.display ='none';
      }
    }
    if(document.getElementById("weibo_socialevent_title")){
      if(data_item == 'weibo_realtimehot'){
        document.getElementById("weibo_socialevent_title").style.color ='#bdbdbd';
        document.getElementById("weibo_num").style.display ='inline';
      }
    }
    if(document.getElementById("zhihu_good_title")){
      if(data_item == 'zhihu_hot' || data_item == 'zhihu_daily'){
        document.getElementById("zhihu_good_title").style.color ='#bdbdbd';
      }
    }
    if(document.getElementById("zhihu_hot_title")){
      if(data_item == 'zhihu_good' || data_item == 'zhihu_daily'){
        document.getElementById("zhihu_hot_title").style.color ='#bdbdbd';
      }
    }
    if(document.getElementById("zhihu_daily_title")){
      if(data_item == 'zhihu_hot' || data_item == 'zhihu_good'){
        document.getElementById("zhihu_daily_title").style.color ='#bdbdbd';
      }
    }
    if(document.getElementById("v2ex_hot_title")){
      if(data_item == 'v2ex_all'){
        document.getElementById("v2ex_hot_title").style.color ='#bdbdbd';
      }
    }
    if(document.getElementById("v2ex_all_title")){
      if(data_item == 'v2ex_hot'){
        document.getElementById("v2ex_all_title").style.color ='#bdbdbd';
      }
    }
    if(document.getElementById("hacpai_play_title")){
      if(data_item == 'hacpai_hot'){
        document.getElementById("hacpai_play_title").style.color ='#bdbdbd';
      }
    }
    if(document.getElementById("hacpai_hot_title")){
      if(data_item == 'hacpai_play'){
        document.getElementById("hacpai_hot_title").style.color ='#bdbdbd';
      }
    }
    if(document.getElementById("weixin_title")){
      if(data_item == 'weixin_hot'){
        document.getElementById("weixin_title").style.color ='#bdbdbd';
        document.getElementById("weixin_num").style.display ='none';
      }
    }
    if(document.getElementById("weixin_hot_title")){
      if(data_item == 'weixin'){
        document.getElementById("weixin_hot_title").style.color ='#bdbdbd';
        document.getElementById("weixin_num").style.display ='inline';
      }
    }
    if(document.getElementById("smzdm_article_today_title")){
      if(data_item == 'smzdm_article_week' || data_item == 'smzdm_article_month'){
        document.getElementById("smzdm_article_today_title").style.color ='#bdbdbd';
      }
    }
    if(document.getElementById("smzdm_article_week_title")){
      if(data_item == 'smzdm_article_today' || data_item == 'smzdm_article_month'){
        document.getElementById("smzdm_article_week_title").style.color ='#bdbdbd';
      }
    }
    if(document.getElementById("smzdm_article_month_title")){
      if(data_item == 'smzdm_article_today' || data_item == 'smzdm_article_week'){
        document.getElementById("smzdm_article_month_title").style.color ='#bdbdbd';
      }
    }
    if(document.getElementById("itunes_paid_cn_title")){
      if(data_item == 'itunes_free_cn' || data_item == 'itunes_revenue_cn'){
        document.getElementById("itunes_paid_cn_title").style.color ='#bdbdbd';
      }
    }
    if(document.getElementById("itunes_free_cn_title")){
      if(data_item == 'itunes_paid_cn' || data_item == 'itunes_revenue_cn'){
        document.getElementById("itunes_free_cn_title").style.color ='#bdbdbd';
      }
    }
    if(document.getElementById("itunes_revenue_cn_title")){
      if(data_item == 'itunes_paid_cn' || data_item == 'itunes_free_cn'){
        document.getElementById("itunes_revenue_cn_title").style.color ='#bdbdbd';
      }
    }
    if(document.getElementById("itunes_paid_us_title")){
      if(data_item == 'itunes_free_us' || data_item == 'itunes_revenue_us'){
        document.getElementById("itunes_paid_us_title").style.color ='#bdbdbd';
      }
    }
    if(document.getElementById("itunes_free_us_title")){
      if(data_item == 'itunes_paid_us' || data_item == 'itunes_revenue_us'){
        document.getElementById("itunes_free_us_title").style.color ='#bdbdbd';
      }
    }
    if(document.getElementById("itunes_revenue_us_title")){
      if(data_item == 'itunes_paid_us' || data_item == 'itunes_free_us'){
        document.getElementById("itunes_revenue_us_title").style.color ='#bdbdbd';
      }
    }
      if(document.getElementById("36kr_newsflashes_title")){
        if(data_item == '36kr_hotlist' || data_item == '36kr_news'){
          document.getElementById("36kr_newsflashes_title").style.color ='#bdbdbd';
        }
      }
    if(document.getElementById("36kr_hotlist_title")){
      if(data_item == '36kr_newsflashes' || data_item == '36kr_news'){
        document.getElementById("36kr_hotlist_title").style.color ='#bdbdbd';
      }
    }
    if(document.getElementById("36kr_news_title")){
      if(data_item == '36kr_newsflashes' || data_item == '36kr_hotlist'){
        document.getElementById("36kr_news_title").style.color ='#bdbdbd';
      }
    }
      if(document.getElementById("163_yaowen_title")){
        if(data_item == '163_guonei' || data_item == '163_guoji' || data_item == '163_dujia'){
          document.getElementById("163_yaowen_title").style.color ='#bdbdbd';
        }
      }
    if(document.getElementById("163_guonei_title")){
      if(data_item == '163_yaowen' || data_item == '163_guoji' || data_item == '163_dujia'){
        document.getElementById("163_guonei_title").style.color ='#bdbdbd';
      }
    }
    if(document.getElementById("163_guoji_title")){
      if(data_item == '163_yaowen' || data_item == '163_guonei' || data_item == '163_dujia'){
        document.getElementById("163_guoji_title").style.color ='#bdbdbd';
      }
    }
    if(document.getElementById("163_dujia_title")){
      if(data_item == '163_yaowen' || data_item == '163_guonei' || data_item == '163_guoji'){
        document.getElementById("163_dujia_title").style.color ='#bdbdbd';
      }
    }
      if(document.getElementById("toutiao_all_title")){
        if(data_item == 'toutiao_hot' || data_item == 'toutiao_tech' || data_item == 'toutiao_finance'){
          document.getElementById("toutiao_all_title").style.color ='#bdbdbd';
        }
      }
    if(document.getElementById("toutiao_hot_title")){
      if(data_item == 'toutiao_all' || data_item == 'toutiao_tech' || data_item == 'toutiao_finance'){
        document.getElementById("toutiao_hot_title").style.color ='#bdbdbd';
      }
    }
    if(document.getElementById("toutiao_tech_title")){
      if(data_item == 'toutiao_all' || data_item == 'toutiao_hot' || data_item == 'toutiao_finance'){
        document.getElementById("toutiao_tech_title").style.color ='#bdbdbd';
      }
    }
    if(document.getElementById("toutiao_finance_title")){
      if(data_item == 'toutiao_all' || data_item == 'toutiao_hot' || data_item == 'toutiao_tech'){
        document.getElementById("toutiao_finance_title").style.color ='#bdbdbd';
      }
    }
      if(document.getElementById("bilibili_hot1_title")){
        if(data_item == 'bilibili_hot3' || data_item == 'bilibili_hot7' || data_item == 'bilibili_hot30'){
          document.getElementById("bilibili_hot1_title").style.color ='#bdbdbd';
        }
      }
    if(document.getElementById("bilibili_hot3_title")){
      if(data_item == 'bilibili_hot1' || data_item == 'bilibili_hot7' || data_item == 'bilibili_hot30'){
        document.getElementById("bilibili_hot3_title").style.color ='#bdbdbd';
      }
    }
    if(document.getElementById("bilibili_hot7_title")){
      if(data_item == 'bilibili_hot1' || data_item == 'bilibili_hot3' || data_item == 'bilibili_hot30'){
        document.getElementById("bilibili_hot7_title").style.color ='#bdbdbd';
      }
    }
    if(document.getElementById("bilibili_hot30_title")){
      if(data_item == 'bilibili_hot1' || data_item == 'bilibili_hot3' || data_item == 'bilibili_hot7'){
        document.getElementById("bilibili_hot30_title").style.color ='#bdbdbd';
      }
    }
      if(document.getElementById("acfun_hot1_title")){
        if(data_item == 'acfun_hot3' || data_item == 'acfun_hot7'){
          document.getElementById("acfun_hot1_title").style.color ='#bdbdbd';
        }
      }
    if(document.getElementById("acfun_hot3_title")){
      if(data_item == 'acfun_hot1' || data_item == 'acfun_hot7'){
        document.getElementById("acfun_hot3_title").style.color ='#bdbdbd';
      }
    }
    if(document.getElementById("acfun_hot7_title")){
      if(data_item == 'acfun_hot1' || data_item == 'acfun_hot3'){
        document.getElementById("acfun_hot7_title").style.color ='#bdbdbd';
      }
    }
    document.getElementById(id_title).style.color ='#363636';
  }
    if(document.getElementById(id_head).getElementsByTagName('p')){
      document.getElementById(id_head).getElementsByTagName('p')[0].getElementsByTagName('a')[0].onclick = function(){javascript:refresh(data_item);};
    }
    if(document.getElementById(id_time)){
      document.getElementById(id_time).innerHTML = data_all['time'];
      document.getElementById(id_time).onclick = function(){javascript:refresh(data_item);};
    }
    if(document.getElementById(id_content)){
      document.getElementById(id_content).innerHTML = "";
      if(!data_all['data'][0]){
        var tag = "源站访问失败（宕机或限制），请稍后再试";
        document.getElementById(id_content).insertAdjacentHTML("beforeEnd",tag);
      }
    }
//    for(var i = 0; i < 100; i++)
    for(var i = 0; i < data_all['data'].length; i++)
    {
      if(document.getElementById(id_content)&&data_all['data'][i]){
        var data_num = data_all['data'][i]['num'];
        var data_num_tag = data_all['data'][i]['num_tag'];
        var data_description = data_all['data'][i]['description'];
        var data_name = data_all['data'][i]['name'];
        var data_url = data_all['data'][i]['url'];
        if(data_description){
          atag = "\" target=\"_blank\" title=\"" + data_description + "\">"
        }else{
          atag = "\" target=\"_blank\">"
        }
        if(data_num_tag){
          btag = " title=\"" + data_num_tag + "\">"
        }else{
          btag = ">"
        }
        if(data_num >= 10000){
          var data_num = Math.round(data_num / 10000) + "万"
          var tag = "<li><a style=\"color:#1A1A1A;\" href=\"" + data_url + atag + data_name + "</a><span style=\"display:block;float:right;\"" + btag + data_num + "</span></li>";
          document.getElementById(id_content).insertAdjacentHTML("beforeEnd",tag);
        }else if(data_num){
          var tag = "<li><a style=\"color:#1A1A1A;\" href=\"" + data_url + atag + data_name + "</a><span style=\"display:block;float:right;\"" + btag + data_num + "</span></li>";
          document.getElementById(id_content).insertAdjacentHTML("beforeEnd",tag);
        }else{
          var tag = "<li><a style=\"color:#1A1A1A;\" href=\"" + data_url + atag + data_name + "</a></li>";
          document.getElementById(id_content).insertAdjacentHTML("beforeEnd",tag);
        }
      }
    }
    console.log("各种接口定制，详询api#ml.mk  #=@","","","（" + data_all['title'] + "）加载完成", "耗时:" + (performance.now() - runtime).toFixed(2) + "ms", "总耗时:" + performance.now().toFixed(2) + "ms");
  })
};

html_xr('baidu_now');
html_xr('weibo_realtimehot');
html_xr('weixin_hot');
html_xr('toutiao_all');
html_xr('douyin');
html_xr('acfun_hot1');
html_xr('bilibili_hot1');
html_xr('163_yaowen');
html_xr('jandan');
html_xr('zhihu_hot');
html_xr('guokr');
html_xr('songshuhui');
html_xr('v2ex_hot');
html_xr('hostloc');
html_xr('smzdm_article_today');
html_xr('solidot');
html_xr('douban');
html_xr('hacpai_play');
html_xr('chouti');
html_xr('sinatech');
html_xr('cnbeta');
html_xr('36kr_newsflashes');
html_xr('ithome');
html_xr('mop');
html_xr('tianya');
html_xr('cctv');
html_xr('nytimes');
html_xr('zaobao');
html_xr('thepaper');
html_xr('chiphell');
html_xr('autohome');
html_xr('huxiu');
html_xr('itunes_free_cn');
html_xr('itunes_free_us');

function search(cc,str){
  var now=new Date();
  var runtime = performance.now();
  var id_head = "app_head";
  var id_time = "app_time";
  var id_content = "app_content";
  if (str == "") {
    document.getElementById(id_content).innerHTML = "";
    var tag = "请输入应用名";
    document.getElementById(id_content).insertAdjacentHTML("beforeEnd",tag);
    console.log("请输入应用名");
    return;
  }
  if (cc == "") {
    document.getElementById(id_content).innerHTML = "";
    var tag = "请输入国家代码";
    document.getElementById(id_content).insertAdjacentHTML("beforeEnd",tag);
    console.log("请输入国家代码");
    return;
  }
  var page = "search/"+ cc +"/" + str;
  if(document.getElementById(id_content)){
    document.getElementById(id_content).innerHTML = "";
    var tag = "正在获取查询结果，请勿多次点击......<br>(如10秒后无反应可重新查询)";
    document.getElementById(id_content).insertAdjacentHTML("beforeEnd",tag);
  }
  $.getJSON(page, function(data_all){
    if(document.getElementById(id_time)){
      document.getElementById(id_time).innerHTML = data_all['time'];
    }
    if(document.getElementById(id_content)){
      document.getElementById(id_content).innerHTML = "";
      if(!data_all['data']){
          var tag = "未搜索到任何结果";
          document.getElementById(id_content).insertAdjacentHTML("beforeEnd",tag);
      } else{
        if(!data_all['data'][0]){
          var tag = "未搜索到任何结果";
          document.getElementById(id_content).insertAdjacentHTML("beforeEnd",tag);
        } else{
          for(var i = 0; i < data_all['data'].length; i++)
          {
            if(document.getElementById(id_content)&&data_all['data'][i]){
              var data_name = data_all['data'][i]['name'];
              var data_url = data_all['data'][i]['url'];
              var price = data_all['data'][i]['price'];
              var data_genres = data_all['data'][i]['genres'];
              var data_tag1 = data_all['data'][i]['tag1'];
              var data_tag2 = data_all['data'][i]['tag2'];
              var data_tag3 = data_all['data'][i]['tag3'];
              var tag = "<li><a style=\"color:#1A1A1A;\" href=\"" + data_url + "\" target=\"_blank\" title=\"" + data_tag1 + "\">" + data_name + "</a><a style=\"display:block;float:right;color:#1A1A1A;text-align:right;\" href=\""+data_url+"\" target=\"_blank\" title=\"" + data_tag3 + "\">" + data_genres + "</a><a style=\"display:block;float:right;color:#1A1A1A;text-align:right;margin: 0px 10px 0px 0px;\" href=\""+data_url+"\" target=\"_blank\" title=\"" + data_tag2 + "\">" + price + "</a></li>";
              document.getElementById(id_content).insertAdjacentHTML("beforeEnd",tag);
            }
          }
		}
	  }
    }
    console.log("各种接口定制，详询api#ml.mk  #=@","","","（" + data_all['title'] + "）加载完成", "耗时:" + (performance.now() - runtime).toFixed(2) + "ms", "总耗时:" + performance.now().toFixed(2) + "ms");
  })
  $('.nano').nanoScroller();
};


function font_weight(name){
  if(name == "bold"){
    var arr = document.getElementsByTagName('ol');
    for(var i = 0; i < arr.length; i++){
      arr[i].style='font-weight:bold';
    }
  }
  if(name == "normal"){
    var arr = document.getElementsByTagName('ol');
    for(var i = 0; i < arr.length; i++){
      arr[i].style='font-weight:normal';
    }
  }	
};
