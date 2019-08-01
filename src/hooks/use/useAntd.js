import {useState,useEffect} from 'react';
// import {useWindowWidth} from './useWindowWidth'



export  function useAntdButton(init) {
    let [attr,setAttr] = useState({
        //1、主题色 primary 2、虚线 dashed 3、危险 danger 4、链接 link 5、默认 default 使ghost不可见
        type: "primary",
        //large small default
        size:null,
        ghost: false,
        //充满父组件
        block:true,
        loading: false,
        //default 圆 circle 边角圆 round
        shape: 'round',
        disabled: false,
        icon:'caret-down',
        // href:'https://www.baidu.com',
        //_blank  _self
        // target:'_blank',
    })
    useEffect(() => {
        switch (init) {
            case 'title':
                setAttr({
                    type: "primary",
                    ghost: false,
                    loading: false,
                    shape: null,
                    style: {height: 100}
                })
                return;
            default:
                setAttr({
                        //1、主题色 primary 2、虚线 dashed 3、危险 danger 4、链接 link 5、默认 default 使ghost不可见
                    type: "primary",
                        //large small default
                    size:null,
                    ghost: false,
                        //充满父组件
                    block:true,
                    loading: false,
                         //default 圆 circle 边角圆 round
                    shape: 'round',
                    disabled: false,
                    icon:'caret-down',
                    // href:'https://www.baidu.com',
                        //_blank  _self
                    // target:'_blank',


                })
                return;
        }
    }, [init]);


    return {
        attr:attr
    }
}

export  function useAntdIcon(init) {
    let [attr,setAttr] = useState({
        type : "home",
        style : { fontSize: '32px', color: '#08c' },
        theme :"filled",
        spin: false,
        rotate      : 0,
        //'path/to/message.svg'
        // component   :
        // twoToneColor:'#eb2f96'
    })
    useEffect(() => {
        switch (init) {
            case 'title':
                setAttr({

                })
                return;
            default:
                setAttr({
                    type : "heart",
                    //color覆盖样式<Icon type="question-circle" />
                    style : { fontSize: '32px' },
                    //filled 实心  outlined 空心  twoTone 双色空心 部分会依赖此属性，不然无法显示
                    theme :"twoTone",
                    //是否旋转
                    spin: true,
                    //旋转角度
                    // rotate      : 30,
                    //新建样式'path/to/message.svg'
                    // component   :
                    //双色空心才有效
                    twoToneColor:'#eb2f96'
                })
                return;
        }
    }, [init]);


    return {
        attr:attr
    }
}

export  function useAntdTyTitle(init) {
    let [attr,setAttr] = useState({
        copyable:true,
    })
    useEffect(() => {
        switch (init) {
            case 'title':
                setAttr({

                })
                return;
            default:
                setAttr({
                    //正常色 null ，灰色调 secondary ,黄色 warning ，红色 danger
                    type:null,
                    // 1 大 2、3、4
                    level:1,
                    //ellipsis:{rows:2,expandable:true} 保持几列，是否伸展，function（文字必须要回车换行）
                    ellipsis:true, //无论几列都成一列
                    //黄色底纹
                    mark:false,
                    //灰色底纹  null true
                    code:null,
                    //下划线
                    underline:false,
                    //是否可以拷贝
                    copyable:false,
                    //是否有删除线
                    delete:false,
                    //是否可用
                    disabled:false,
                    //可编辑 添加到属性 editable={{onChange:(str) => dispatch({type: "ChangeTyTitle", tyTitle: str})}}
                    editable:true,
                    //保持几列，是否伸展，function（文字必须要回车换行）
                    //ellipsis:{rows:2,expandable:true}
                    //onChange无法使用 onClick可以使用

                })
                return;
        }
    }, [init]);


    return {
        attr:attr
    }
}

export  function useAntdTyText(init) {
    let [attr,setAttr] = useState({
        copyable:true,
    })
    useEffect(() => {
        switch (init) {
            case 'title':
                setAttr({

                })
                return;
            default:
                setAttr({
                    //加粗
                    strong:true,
                    //正常色 null ，灰色调 secondary ,黄色 warning ，红色 danger
                    type:null,
                    // 1 大 2、3、4
                    level:1,
                    //ellipsis:{rows:2,expandable:true} 保持几列，是否伸展，function（文字必须要回车换行）
                    ellipsis:true, //无论几列都成一列
                    //黄色底纹
                    mark:false,
                    //灰色底纹  null true
                    code:null,
                    //下划线
                    underline:false,
                    //是否可以拷贝
                    copyable:false,
                    //是否有删除线
                    delete:false,
                    //是否可用
                    disabled:false,
                    //可编辑 添加到属性 editable={{onChange:(str) => dispatch({type: "ChangeTyTitle", tyTitle: str})}}
                    editable:true,
                    //保持几列，是否伸展，function（文字必须要回车换行）
                    //ellipsis:{rows:2,expandable:true}
                    //onChange无法使用 onClick可以使用

                })
                return;
        }
    }, [init]);


    return {
        attr:attr
    }
}

export  function useAntdTyP(init) {
    let [attr,setAttr] = useState({
        copyable:true,
    })
    useEffect(() => {
        switch (init) {
            case 'title':
                setAttr({

                })
                return;
            default:
                setAttr({
                    //正常色 null ，灰色调 secondary ,黄色 warning ，红色 danger
                    type:null,
                    // 1 大 2、3、4
                    level:1,
                    //ellipsis:{rows:2,expandable:true} 保持几列，是否伸展，function（文字必须要回车换行）
                    ellipsis:true, //无论几列都成一列
                    //黄色底纹
                    mark:false,
                    //灰色底纹  null true
                    code:null,
                    //下划线
                    underline:false,
                    //是否可以拷贝
                    copyable:false,
                    //是否有删除线
                    delete:false,
                    //是否可用
                    disabled:false,
                    //可编辑 添加到属性 editable={{onChange:(str) => dispatch({type: "ChangeTyTitle", tyTitle: str})}}
                    editable:true,
                    //保持几列，是否伸展，function（文字必须要回车换行）
                    //ellipsis:{rows:2,expandable:true}
                    //onChange无法使用 onClick可以使用
                })
                return;
        }
    }, [init]);


    return {
        attr:attr
    }
}

export  function useAntdAffix(init,height) {
    //固钉
    let [attr,setAttr] = useState({
        offsetBottom:10,
    })

    useEffect(() => {
        console.info(init)
        switch (init) {
            case 'title':
                setAttr({
                    //距离顶部偏移量触发
                    offsetTop:height-100,
                    //距离底部偏移量触发
                    // offsetBottom:10,

                    //默认windows，可以用在div上
                    // target:。。。
                })
                return;
            default:
                setAttr({
                    //距离顶部偏移量触发
                    offsetTop:height-40,
                    //距离底部偏移量触发
                    // offsetBottom:10,

                    //默认windows，可以用在div上
                    // target:。。。

                    //onChange方法
                })
                return;
        }
    }, [init,height]);


    return {
        attr:attr
    }
}