<template>
 <div class="con">
 	<div class="loading" v-if="!data.body">
		<span class="left"></span>
		<span class="middle"></span>
		<span class="right"></span>
	</div>
	<div v-if="data.image" class="com-img" @click="test()">
		<img :src="data.image" />
		<h2>{{data.title}}</h2>
	</div>
	<div class="con-answer" v-html="data.body"></div>
 </div>

</template>
<script>
import api from './../api/index'
import { setState } from 'vuex'
export default{
	data() {
		return {
			data: "",
			scroller: window
		}
	},
	created: function () {
      console.log(1)
    },
    mounted: function () {
      console.log(2)
    },
    deactivated: function () {
      console.log(4)
    },
	activated: function() {
	 console.log(3)
		let vue = this,
			id = this.$route.query.id;
        console.log(this.$route.params);
		api.getNewsById(id).then(function(data) {
			console.log(data)
			vue.data = data.data;
		});
	},
	methods:{
		test(){
			console.log(23);
		}
	}
}
</script>
<style lang="less">@red: #FC4482;
@yellow: #FFD300;
@blue: #5B7492;
@gray: #acb9c8;
img {
    width: 100%;
}
.page-content {
    text-align: center;
}
.con {
    color: #666;
    height: 100vh;
    .con-img {
        height: 6rem;
        overflow: hidden;
        position: relative;
        img {
            top: 50%;
            width: 100%;
            position: relative;
            transform: translate(0,-50%);
        }
        h2 {
            width: 60%;
            margin: 0;
            padding: 0;
            right: 5%;
            bottom: 1rem;
            text-align: right;
            font-size: 0.45rem;
            color: rgba(255,255,255,.9);
            position: absolute;
            text-shadow: 0 0 5px rgba(0,0,0,.5);
        }
        &-mask {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(91,116,146,0.50);
            position: absolute;
        }
    }
    .con-answer {
        padding: 5%;
        position: relative;
        h2,
        li,
        p {
            text-align: justify!important;
        }
        h2 {
            color: @blue;
            position: relative;
            z-index: 1;
        }
        a {
            color: @yellow;
            word-break: break-word;
        }
        .headline-title {
            color: @blue;
        }
        .meta {
            text-align: left;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            .avatar {
                vertical-align: middle;
                display: inline-block;
                width: 0.6rem;
                margin-right: 0.1rem;
            }
            span {
                color: #666;
            }
            .author {
                color: @red;
                display: inline-table;
            }
        }
        .content {
            font-size: 0.35rem;
        }
        .question {
            blockquote {
                text-align: justify;
                position: relative;
                &::before {
                    content: '';
                    left: -.5rem;
                    display: block;
                    height: 100%;
                    border-left: .1rem solid @yellow;
                    position: absolute;
                }
            }
            &:first-child {
                padding-top: 0;
            }
            &:last-child {
                padding-bottom: 0;
                &::before {
                    display: none;
                }
            }
            ul {
                padding-left: 0.3rem;
                li {
                    text-align: left;
                }
            }
        }
        .content-image {
        	width:inherit;
            max-width: 100%;
        }
        .view-more {
            text-align: center;
            margin-bottom: .5rem;
            a {
                z-index: 1;
                position: relative;
            }
        }
    }
}
</style>
