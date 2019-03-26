## react 学习部分.
> React 出现的背景.

react 是始终刷新.

1、新的概念

2、4 个必须的API.

3、单向数据流.

4、完善的错误提示.
5、数据模型的问题如何解决.
* Controller - Model - View.
* Flux 架构: 单向数据流. 对比 Redux 架构.
* Flux => Redux Mobx

6、理解 React 组件
* props + state = View.
* 1、React 组件一般不提供方法, 而是某种状态机.
* 2、React 组件可以理解为一个纯函数.
* 3、单向数据绑定.
* 4、以组件方式考虑UI的构建.
    * 1、创建静态UI.
    * 2、考虑组件的状态组成.(状态是来自外部，还是需要内部去维护.)
    * 3、考虑组件的交互方式(内部用户进行的操作，如何暴露外面的人去维护.).
* react 事件委托:
    * React 事件处理机制自动实现了事件委托，对所有绑定事件进行统一处理，没有绑定到对应的 DOM 元素上，所以直接在 jsx 中绑定到 li 上并不会影响对性能.    
    * 参考文档:
        * http://zhenhua-lee.github.io/react/react-event.html
* 受控组件 * 非受控组件.
* 重点看下.
* 
 
## 面试准备.

我能先介绍一下这个项目的背景吗？

## 5. 项目总结:
- 项目背景:
borrowLite 项目是满足于工薪阶层借贷需求的移动web端借贷项目.

- 项目收益:
borrowLite 项目每月累计借贷金额达5000万以上.

- 项目设计:
技术选型:
前端框架使用react.js. 构建工具使用webpack. 部署使用的是docker.

如果问为什么采用react.js 框架?
ReactJs 和 Vue ，AngularJs  这个三个框架在本质上来说，没有太多区别. 多可以实现双向绑定，单向数据流，SSR.
框架选择主要考虑三个方面:
(1)、我们团队什么类型的同学比较多, 我们这边使用react 的同学比较多，这样平衡学习成本.
(2)、看生态. react 开源的组件和文档多比较完善，许多问题在网上多有解决方案. 像类似碰到框架上有bug解决不了的问题，比较少.
(3)、对框架原理有没有深入理解. 我研究了virturn-dom算法,并尝试手动去实现了一下.(这个要准备的).

- 项目特色:
css模块化的设计 和 自适应方案的设计 采用devOps的方式来进行持续集成和部署.

我能具体介绍一下我们是怎么做的吗?
答题: 关于css模块化的设计之前很少提这个概念,一般模块化是指JS的模块化,自从有了css modules 这个技术之后,逐渐把这个
技术提上日程.

css 模块化设计主要是基于css modules,具体是怎么做的:
1、先整体后部分再颗粒化.
布局，页面，功能，业务

模块化的设计包含两部分:

- 设计原则:
1、可复用能继承要完整.
2、周期性迭代.

- 设计方法:
先整体后部分再颗粒化.
先抽象在具体.

1、css 模块化设计.
(1).先整体后部分再颗粒化.
布局，页面，功能，业务.

布局:
我们这个项目是移动端的，我们首先要考虑的是布局，它是跟页面无关的，
你是用grid布局，还是flex布局,还是浮动布局,我们首先要确定一个大方向，
因为这个大方向首先确定了我们css的写法,先整体去考虑，我们布局的样式，将这个布局的样式单独抽出来
作为一个模块抽象出来.

简述:
我们首先要考虑的是布局，它是跟页面无关的，你是用grid布局，还是flex布局,还是浮动布局,我们首先要确定一个大方向，
因为这个大方向首先确定了我们css的写法,先整体去考虑，我们布局的样式，将这个布局的样式单独抽出来作为一个模块抽象出来.

页面:
这个搞定了以后，让后我们在去想根据这个产品需求，我要划分多少个页面，
每个页面应该如何区分和隔离样式,比如A,B两个页面的相似度很高，他们之间有很多可重用性的css代码,我们就要
考虑这两个页面如何抽离拆分这个模块化，这个时候我们考虑的是页面级别的，而不是在关心布局了，因为布局我们已经
抽离出去了，我们考虑列表，因为列表大部分是两栏布局或者垂直列表，这种布局我们多抽象到布局里面去。
页面里面样式我们考虑模块的样式的抽离，比如上面有个头下面有部分相同，我们就考虑单独拿出去，这是页面级别的，

简述:
1、大的布局方向确定之后，我们在去想根据这个产品需求，我要划分多少个页面比如A,B两个页面的相似度很高，他们之间有很多可重用性的css代码。
比如列表：因为列表大部分是两栏布局或者垂直列表，这种布局我们多抽象到布局里面去.

功能:
还有功能级别的，这是针对某一个页面上来说，比如说这个按钮，这个按钮是每一个页面上多有的，但是针对某一个页面上来说，这个
按钮是不是能够单独拿出去，把他作为一种功能组件，而不是把他当做业务组件，比如某个页面上的按钮，他可能文案
不同，功能不同，当我们在考虑css的时候，我们只考虑他们长得是不是一样。比如页面上有三个按钮，他们颜色不一样
文案不一样，功能也不一样，字体也是不一样，但站在功能的角度来看，用css来创建一个按钮来，至于按钮上是什么文字
，填充是什么样式，写什么文案，这些多是可以继承和可覆盖的.

简述:

业务:
业务只最后要颗粒化了, 因为已经到了具体到某一个功能的交互和设计了，大家多知道移动端多有一个叫
返回的东西。返回在形式上是一个按钮，或者说叫一个链接，那么回退在功能上看，是从功能的角度去推理的，那么在业务
上，他是要继承我们刚才所说的UI，但是他这里又有了具体的逻辑。比如我点这个返回要跳转到某一个页面上去
或者说我点这个链接，我要弹出某一个弹窗出来，他是已经跟业务有耦合了，这种颗粒化要放在你当期的业务里面。
在这个级别的话，可复用性的可能性就不大了.

(2).先抽象再具体
抽象是将看起来不一样的东西,抽象成一个统一的模块，这个模块通过隐藏,变量配置来达到具体的内容。
分类导航和底部导航看齐来不一样，但仔细看起来两块多可以抽象成为一个横向列表,虽然内容不一样，但从结构
上来说，都具备横向列表的特性,无论从css模块化设计还是JS的模块设计来看，这块多能拿出来作为一个横向
列表来看待,我们把横向列表在抽象一下,横向列表和纵向列表多属于列表，在设计这个模块化和组件的时候，
通过配置选项，能让一个列表是横向还是纵向的，把这两个看似相似而又不相同的内容，抽象出了一个叫列表的
东西,列表通过配置横向还是纵向，再加上填充内容,又具体到了不同的东西.

css module 模块化.
可以实现继承和私有化,让全局css和文件声明的内部css样式不冲突.
css module 的优点.

sass 相关知识.
代码实现部分:
``` element.scss
@import "./layout.scss";

@mixin  btn($size:14px,$color:#fff,$bgcolor:#f04752,$padding:5px,$radius:5px){
    padding: $padding;
    background-color: $bgcolor;
    border-radius: $radius;
    border: 1px solid $bgcolor;
    font-size: $size;
    color: $color;
    text-align: center;
    line-height: 1;
    display: inline-block;
}

@mixin list($direction:column) {
    @include flex($direction);
}

@mixin panel($bgcolor:#fff,$padding:0,$margin:20px 0,$height:112px,$txtPadding:0 32px,$color:#333,$fontSize:32px){
    background: $bgcolor;
    padding: $padding;
    margin: $margin;
    >h4{
        height: $height;
        line-height: $height;
        padding: $padding;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: $color;
        font-size: $fontSize;
    }
}

``` layout.scss
@charset "UTF-8";
// minxin 实现继承.
@mixin flex($direction:column,$inline:block){
    display: if($inline==block,flex,inline-flex);
    flex-direction: $direction;
    flex-wrap: wrap;
}
```

2、Js的模块化设计.
设计原则:（指导思想）
(1)、高内聚低耦合.
高内聚的意思是说,组件的功能要受控于组件本身.而不是依赖于其他组件.
横向列表和纵向列表,怎么做到低耦合呢?就是要把他们多抽象成一个js的列表组件.
但这个抽象的组件不包含任何功能,横向组件和纵向组件复用一个抽象的Js组件,但是他们两个之间是没有任何
耦合关系的,这个叫低耦合.

(2)、周期性迭代.
你所有的代码不可能一步到位,要不断的成长，不断地练习.

设计方法:
a、先整体后部分再颗粒化.
无论是css还是js多讲的是模块的划分,模块化的划分，在方法上，思路上，也多是
一致的,先整体后部分在颗粒化.

举例说明:
1、一行和多行在外观上面看起来是不相同,但本质上我们可以把他们抽象出来. 在样式上换行就好了.
我们先整体去看一个问题,看完了之后，我们在抽象出来，他就是一个横向的组件,然后部分去看,我们抽象
出来之后还需要去验证，我们的抽象是否正确,我们在这里来看一行和多行列表在Js角度来看，其实是没有区别的，
我们借助css的样式把一行变成多行. 然后颗粒化,通过整体抽象的一个大组件,真正的去实现这个模块的时候,你继承的
这个抽象的组件,然后去实例化，然后颗粒化，达到了真正实现这个业务功能.

整体:
部分:
颗粒化:

b、尽可能的抽象.
抽象到任何组件多可以用的地步,这个组件就设计成功了,

3、自适应.(这个可以作为项目中遇到的困难来讲.? 下面就是解决方案.)
面试: 你是怎么做自适应的?
(1)、基本概念
a、CSS 像素,设备像素,逻辑像素
b、viewPort
c、rem.

第一个问题是你的设计稿是不是一份,你的代码是不是一份,你所有的设备的兼容性是不是完美的,
设计师给你一份PSD,他的尺寸是固定的,比如就是320px固定宽度的,那么手机安卓，IOS，各种各样的
设备,他多不一定是320px的,他有各种尺寸,你怎么样让这个页面随着设备的尺寸大小,自动的去缩放,这是一个问题.
那么第二个问题是,你的代码是如何做到一份css代码,一份JS代码就跑遍各个设备,这是自适应非常重要的一点,抛出者两个问题
我们先来看,你能不能准确的描述出css像素是什么？什么是设备像素?什么是逻辑像素？什么是设备像素比?
什么是viewPort? 什么是rem? rem 的工作原理是什么?

(2)、工作原理
a、利用viewport 和设备像素比调整基准像素.能做到自适应的核心原理.(动态计算font-size)
b、利用px2rem 自动转换css单位. (这就是为什么一份设计稿能做到自适应.)


自适应(基本概念)
a、CSS 像素:px css 像素.
设备像素: 显卡会提供一些像素,这是真实的物理像素,就是你那个设备是硬件，
这个是和硬件关联的,我一个像素点就是一个像素点,Retina 屏幕.
一个逻辑像素点是两个物理像素点.
逻辑像素: 就是css像素.
设备像素比:css 像素和物理像素的比值.
比如普通设备像素比是2.Retina 屏幕就是4.
https://github.com/jawil/blog/issues/21

b、viewport
<meta name="viewport" content="width=device-width,initial-scale=1.0">
- width: 控制viewport 的大小,可以指定的一个值，如600 ,或者特殊的值.
如 device-width 为设备的宽度(单位为缩放为100%时的css像素).
- height: 和width 相对应，指定高度.
- initial-scale: 初始缩放比例,也即是当第一次 load 的时候缩放比例.
- maximum-scale: 允许用户缩放到的最大比例.
- minimum-scale: 允许用户缩放到的最小比例.
- user-scalable: 用户是否可以手动缩放.

viewport 到底分几类?
1、layout viewport
2、visual viewport
3、ideal viewport
width=device-width 做的是大图的layout viewport 等于手机的layout viewport.
这样做到了两步不同的窗口大小是一样的。

rem:
是一个相对单位，相对根元素字体大小的单位，再直白点就是相对于html元素字体大小的单位。
em:
相对于父级元素。
px:
相对于html标签，默认字体为16px;html的字体大小设置为font-size:62.5%.
rem不是依据父元素——而是依据根元素（root element）来确定其长度。这里所说的根元素（root element）毫无疑问就是web文档中的html元素。也就是说，无论嵌套层级有多深，rem都是根据<html>的font-size来确定长度的
我们设置1rem=10px;来计算。
1rem等于html根元素设定的font-size的px值.默认浏览器以1rem=16px来换算.
为了解决这种问题，可以为根元素指定一个更容易计算的font-size，根据经验，一般将其设置为62.5%（浏览器的默认字体大小为16px，10px = 16px * 62.5%）。这样一来，想要完成px到rem的转换，只要将px的值除以10即可:

<style>
    html {
        font-size: 62.5%;   /* 10px */
    }
    div {
        font-size: 2.4rem;  /* 24px */
        width: 64rem;   /* 640px */
        border: 0.1rem solid #ccc;  /* 1px */
    }
</style>
参考文献:
https://blog.csdn.net/ernijie/article/details/52116582

面试: 你是怎么做自适应的?
1、<meta name="viewport" content="width=device-width,initial-scale=1.0">
2、viewport 到底分几类?
3、width=device-width 为什么这样设置? 工作原理是什么?

工作原理:
利用viewport和设备像素比调整基准像素.
dpr=2,要根据设备像素比来计算.
一个小的设备要到一个大的设备上面自适应.
要放大的比例是大的设备的物理像素/小的设备的物理像素.
不同设备的比例不一样，dpr的值需要重新计算.
这个算法不用手动去计算要js自动计算.

怎么计算的？
比如我在浏览器上的font-size:40px;
那么在dpr=3 width:375px 的设备上的像素为: 40*1125/375 = 70;
font-size 就要变为 70px;

SPA的设计:
1、设计意义.
a、前后端分离.
(前端写页面，后端提高接口，提高了开发的效率)
b、减轻服务器压力.
(每个页面不需要每次多去请求服务端.如果页面非常复杂,很多用户操作的时候,只要请求一次,这是很大程度上减轻服务器压力的).
c、增强用户体验.
(从一个页面跳转到另外一个页面，每一次请求要消耗DNS,以及tcp建立链接,在加上页面传输的过程,
还要包括接口响应的时间.这些多是用户可以感知到的一些东西,当使用单页面的时候不存在多次下载页面的这个时间.
只有接口耗费的时间)

SPA的缺点:
d、Prerender 预渲染优化SEO. （但目前也有解决方案).
参考文献:http://codingfishman.github.io/2016/05/06/prerender%E9%A2%84%E6%B8%B2%E6%9F%93%E4%BC%98%E5%8C%96SEO/

SPA 是如何实现的，你应该说出几个内容?
1、SPA 做了哪些事情?
2、他是怎么做到的?

SPA 背后的工作原理是否清楚？ 有几种方式实现?
Router工作的原理:
a、History API.
History 对浏览器有一定的要求.

SPA要实现哪些东西?
1、从入口打开了某一个页面.
2、当浏览器点击了前进,后退或者程序控制，怎么回到入口所对应的页面上去.

onpopstate. 响应浏览器的前进后退和事件的. 也就是说当历史发生改变的时候会触发onpopstate.
从而在popstate里面，回复到你刚才对应的某一个页面上去, 这个是关于historyapi 的实现原理.

pushState. 创建一个历史记录的

b、Hash
Hash 是兼容性最好的方案.

hashchange
location.hash 
一个url上有host 有path,有search ,有hash, 我们这个地方利用的原理就是hash,怎么做到的？
当你去改变某一个地址的时候,去修改这个Hash,然后监听这个hashchange事件,你就知道页面地址发生了变化,
然后在这个事件里面去做相应的动作,就能完成我们刚才所说的页面的切换.

如何实现的?

比如就是对工程师来说，设计稿是一份的，但设备是不一样的。如何写一份代码在各个设备有相同的体验.
自动化的适配，做到构建工具里面去，不要让开发工程师去根据不同的设备写不同的样式，而是让代码自己去适配不同的机型.

参考文献：
https://www.cnblogs.com/dashnowords/p/9671213.html


4、DevOps 的方案怎么实施的?
项目在安全性方面的考虑

项目在质量保障上面的考虑.

项目在高可用方面的考虑.

项目在性能方面的考虑.

5、系统设计的方案.
http://blog.bittiger.io/post180/
如何根据日活跃用户量来计算流量，内存，硬盘大小.
以及我的后台架构应该如何来设计?
这个问题明天我在去准备下.

问老师一个问题:
我面试经常会碰到一个问题,如果让你去设计一个微博你会怎么设计?
请问我应该如何回答比较好?

- 项目总结:
你对自己的项目是否满意,有改进的空间吗？
vue 的异步加载.(那几个路由打包成一个文件)
pwa 技术的应用。

如果这个项目现在让你重新设计，你会如何思考？

6、DevOps 的流程
1、什么是DevOps?
更好的去优化开发、测试、运维的流程. 是开发和运维一体化,使用高度自动化的软件
来使得这个软件的开发,测试，发布的过程更加的快捷，频繁和可靠。
devOps 是ci/cd 思想的延伸。

2、构建流程是什么?
(1)、检出源码.
git checkout   
webhook.
(2)、包构建.(npm run build, npm start). 前后端的构建方式还是有点区别.
(3)、收集产物.
(4)、镜像构建.
docker build  nodeproject .
docker push
(5)、部署生产.
docker stop nodeproject
docker rm nodeproject
docker pull nodeproject
docker start nodeproject

dockerfile 怎么写的?
``` dockerfile 
FROM node:0.12.7

RUN npm install webpack -g

WORKDIR /tmp
COPY package.json /tmp/
RUN npm config set registry http://registry.npmjs.org/ && npm install

WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/
RUN webpack

ENV NODE_ENV=production 
ENV PORT=4000
CMD [ "/usr/local/bin/node", "./index.js" ]
EXPOSE 4000
``` 









