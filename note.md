## day one

#### cdn
 >content delivery network内容分发网站

## day two
#### 媒体查询
```` css
 @media (min-width:768px) and (max-width: 1200px){
    .row{
        color: white;
    }
}

````
#### 栅格系统（grid）
````
 <div class="container">
        <div class="row">
<div class="gray col-md-4 col-md-offset-4">4</div>
<div class="green col-lg-4 ">4</div>
        </div>
    </div>
    
````
#### 按钮
```` 
   <button type="button" class="btn btn-info">submit</button>

   通过样式英文代号调用不同的样式
   btn-danger,btn-info....-改颜色
   btn-lg，btn-sm...-改大小
````
#### 模态框
```` html

    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
    删除
  </button>  调用处
通过#myModal这里的id值调用不同功能的模态框，与所调用的模态框id要一致.

  
  <!-- Modal -->
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">删除模态框</h4>
        </div>
        <div class="modal-body">
          确定删除？
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
          <button type="button" class="btn btn-primary">确定</button>
        </div>
      </div>
    </div>
  </div>
```` 
### 快捷键
- ctrl+p：打开文件
- ctrl+f： 局部搜索 在我当前文件
- ctrl+shift+f： 全局搜索
- ctrl+b： 打开侧边栏
- ctrl+g：跳转到制定行

### jq
- 1.格式
```` js
$(document).ready(function () {
...
})
// 等价于下面的代码，格式不一样而已
$(function () {
...
})
// 表示在文旦加载完成后再执行函数
````
### jq
- animate
  $('body,html').animate({
            scrollTop: 755.2   // 1.代码
       
    },600,function(){})      // 2.600为执行时间  3.函数
    
### 全选按钮模块
$('.all-check').change(unction() {
var flag=$(this).prop('checked');
$('.stu-check').each(function() {
$(this).prop('checked',flag);
//all-check是父input，stu-check是子input的类名
})
})

- 点击每一项//因为子元素也要影响父元素状态-如 挨个全部选中子，那父也要勾选状态
$('.stu-check').on('change',function() {
console.log($('.stu-check').length)
console.log($('.stu-check:checked').length)
i($('.stu-check:checked').length == $('.stu-check').length) {
$('.all-check').prop('checked',true);

}else{$('.all-check').prop('checked',flase);}

})


### rem单位
    html{
        font-size: 16px;

    }
    .text{
        width: 10rem;
        height: 10rem;
   
        background-color: rgb(60,60,60,0.6);
    } 
    
        /* rem是相对与根元素html字体大小的浮动单位，当出现不同分辨率 尺寸，只需调整html字体大小，省了工作量。1字体大小px=1rem */


### 线性渐变
    background: linear-gradient(to bottom,cyan,white);
    /* 线性渐变linear-gradient（1,2,3）；1是方向选择，可以是to top 或者to left top，2：初始颜色3：结尾颜色  */
    

    
 ### 元素立体感
 z-index: -5;   相当于z轴

 ### 透明属性transparent
     border-bottom:1px solid transparent;

### 选中所有元素
//选中
let buttons=document.querySelectorAll('.title');
不加all只选第一个


### 原生js函数对象
for(let i=0;i<btns.length;i++) {
    let obj=btns[i];
    obj.index=i;
    obj.onclick=function(e) {
        content.innerHTML=contentlist[e.target.index];
    }
}    会生成函数对象e，包括了自带的属性 值..数据，还有赋予他的属性-如这里的index-被存储在了e对象的target数组里..
在这个代码里的功能是通过这个 对象属性index的查询 定位到了 惦记的元素，进行分别操作

### js操作cs   类名操作思想
   currentbtns.classList.remove('active');-删除类名
   e.target.classList.add('active');-增加类名      可以这样理解即 类名代表的就是css样式集合，赋予类名既赋予样式集合
   通过删除类名的方式操作css
  元素.类名数组.remove（‘类名’）；   元素.类名数组.add（‘类名’）；

   classList是原生js带的，如this.classList.add('active');  元素的类名数组  


   ### js向页面输出 Html
      //生成
          let option=document.createElement('option');
       //赋值
     
          option.innerHTML=cityarr[cityindex][index]
         
          //向页面添加  元素变量.方法（子元素变量）
          cityselect.appendChild(option)
          
 ### js 配合 css 改变样式
 
/* ---------------------- */
.morenav-hover{
    background: #2d2d2d;
    font-weight: bold;
}
.morenav-hover a{
    color: #fff;
}
/* 两个class样式集合用来配合js改变样式 */

 $(this).toggleClass('morenav-hover');   
 通过 toggleclass 方法 添加移除class -改变样式 


 2.          imgs[i].style.left = `${i * swidth}px`  
         // 填充完善后线路为：<选中>的<元素属性>=<计算好的值>     各个节点有适应性 

           //  js操控cs的语法要求：原本是font-size，在js写的时候 要转换成 驼峰形式 即fontSize-第二个词后首字母大写
            text.style.fontSize='60px'
  3.                         操控多个
元素.style.cssText = 'font-size:77px; color:red; font-weight:900;';
不在驼峰写法，又变成-形式了

  ### jquery操控css
  $('元素').css({
    ....
    后面1使用 , 不能使用 ;
  }) 

  ### 全屏效果
              /* border: 1px solid cyan; */
            达成全屏效果-1盒子模型的border是另外加的，不算做尺寸，清0  
             2 html body 的padding margin border清0  
              html{
            padding: 0px;
            border: 0px;
            margin: 0px;
        }       


### slider的 单因多果思想
一个page是圆点 箭头 图片滑动三方的元素  

### 不同形式的导向表达
最常见的就是真 假  两种导向
常见的 真假导向表现形式 如 ifelse 三元表达式
还有一个就是  ==         ，这个也可以表达两种导向，两真为真，一真一假为假
checkbox.checked  =  （num == checkitem.length）   因为运算符顺序原则-括号可去除，