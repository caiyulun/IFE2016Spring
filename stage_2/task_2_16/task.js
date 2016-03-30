/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var cityInput=document.getElementById('aqi-city-input')
var aqiInput=document.getElementById('aqi-value-input')

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city=cityInput.value.trim()
    var value=aqiInput.value.trim()
    console.log(value)
    if(city.search(/^[a-zA-Z\u4e00-\u9fa5]+$/)==-1){
        alert('输入的城市名必须为中英文字符')
        return 
    }
    if(value.search(/^\d+$/)==-1){
        alert('输入空气质量指数必须为整数')
        return 
    }
    aqiData[city]=value
    console.log(aqiData)
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var table=document.getElementById('aqi-table')
    var empty=true
    var sub='<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>'
    for( var city in aqiData){
        sub+='<tr><td>'+city+'</td><td>'+aqiData[city]+'</td><td><button>删除</button></td></tr>'
        empty=false
    }
    table.innerHTML=empty?"":sub
}   

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.

  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  document.getElementById("add-btn").addEventListener("click", addBtnHandle)
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();
