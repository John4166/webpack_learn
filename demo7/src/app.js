/**
 * Created by Administrator on 2017/2/27.
 */
import  Layer from './components/layer/layer.js'
import './css/common.css'
import './components/layer/layer.scss'
const App= function () {
   var dom=document.getElementById("app");
    var layer=new Layer();
    dom.innerHTML=layer.tpl;
    console.log(layer.tpl)
};

new App();