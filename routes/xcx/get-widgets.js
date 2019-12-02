const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  const data = {
    code: 200,
    data: {
      header: {
        app: "xcx",
        id: 670,
        name: "basic_header",
        pid: 0,
        theme_eare_name: "layout_b_2077",
        theme_id: 4,
        tpl: "header",
        widgets_id: 981895,
        widgets_order: 1,
        data: {
          infor: {
            button_cion_is_show: "block",
            button_icon_font_color: "#000",
            button_icon_fs: "20",
            button_icon_left: "300",
            button_icon_select: "",
            button_icon_temps: "",
            button_icon_top: "0",
            button_link: "",
            button_link_bg_color: "transparent",
            button_link_border_color: "#000",
            button_link_border_radius: "0",
            button_link_border_style: "solid",
            button_link_border_width: "0",
            button_link_font_color: "black",
            button_link_fs: "16",
            button_link_fs_style: "normal",
            button_link_fs_weight: "normal",
            button_link_height: "60",
            button_link_left: "110",
            button_link_text_align: "left",
            button_link_text_aligns: "product",
            button_link_top: "0",
            button_link_width: "100",
            fanhui_img: "/xcx/static/images/xcximg/basic_header4.png",
            header_all_bg: "#fff",
            header_all_border_radius: "0",
            header_all_height: "60",
            header_all_width: "375",
            header_backbtn_bg: "#fff",
            header_backbtn_border_radius: "0",
            header_backbtn_font_underline: "",
            header_backbtn_fs: "18",
            header_backbtn_fs_color: "#000",
            header_backbtn_fs_style: "normal",
            header_backbtn_fs_weight: "normal",
            header_backbtn_height: "60",
            header_backbtn_is_show: "none",
            header_backbtn_left: "0",
            header_backbtn_pic: "",
            header_backbtn_text_align: "left",
            header_backbtn_top: "0",
            header_backbtn_txt_content: "",
            header_backbtn_width: "80",
            header_logo: "",
            header_logo_back: "yes",
            header_logo_border_radius: "0",
            header_logo_height: "60",
            header_logo_is_show: "none",
            header_logo_left: "60",
            header_logo_top: "0",
            header_logo_width: "120",
            header_nav_btn_bg: "#fff",
            header_nav_btn_border_radius: "0",
            header_nav_btn_height: "60",
            header_nav_btn_text_align: "left",
            header_nav_btn_width: "80",
            header_title_is_show: "block",
            header_title_position_style: "absolute",
            loading_img: "/xcx/static/images/xcximg/basic_header2.png",
            styleId: "w1111",
            textArea_font_underline: ""
          },
          listArr: {
            header_title_txt_content: "某某公司"
          }
        }
      },
      footer: {
        app: "xcx",
        id: 666,
        name: "basic_navbottom",
        pid: 0,
        theme_eare_name: "layout_b_2077",
        theme_id: 4,
        tpl: "footer",
        widgets_id: 214384,
        widgets_order: 1,
        data: {
          infor: {
            bottom_nav: "bottom_nav",
            imgUrls: ["data/yuan/public/201709/20170925/2017092514041710227.jpg"],
            imgUrls_on: ["data/yuan/public/201709/20170925/2017092514041710227.jpg"],
            isShow: true,
            nav_bg_color: "#333333",
            nav_bottom: "0",
            nav_list_style: "0",
            nav_model: "不固定",
            nav_position: "nav_position_btm",
            nav_style: "图文",
            nav_top: "0",
            nav_top_border: "none",
            nav_width: "375",
            pic_width: "34",
            rowNumber: "5",
            styleId: "w11111",
            textArea_font_color: "#fff",
            textArea_font_color_on: "#ffff00",
            textArea_font_underline: "none",
            textArea_fs: "12",
            textArea_fs_bold: "normal",
            textArea_fs_line_h: "32",
            textArea_text_align: "center",
            textArea_text_font_style: "normal",
            toalW: "25"
          },
          listArr: {
            picList: [{
              imgUrl: "/xcx/static/images/xcximg/basic_bottom1.png",
              imgUrl_on: "",
              imgUrls: "/xcx/static/images/xcximg/basic_bottom11.png",
              imgUrls_on: "",
              linkLinks: "",
              linkTitles: "首页",
              phoneNum: "",
              setBh: "false",
              wxUrl: "index"
            }],
            picLists: [{
              href: "",
              imgUrls: "/xcx/static/images/xcximg/basic_bottom1.png",
              imgUrls_on: "/xcx/static/images/xcximg/basic_bottom11.png",
              phoneNum: "",
              setBh: "false",
              title: "首页",
              wxUrl: "index"
            }]
          }
        }
      },
      body: {
        app: "xcx",
        id: 691,
        name: "layout_row",
        pid: 0,
        theme_eare_name: "layout_b_9307",
        theme_id: 4,
        tpl: "index",
        widgets_id: 731926,
        widgets_order: 1,
        children: [],
        data: {
          backgroundColor: "#e3e3e3",
          backgroundImage: "",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          title: ""
        }
      }
    },
    message: 'ok'
  };
  res.jsonp(data);
});

module.exports = router;
