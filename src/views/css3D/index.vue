<template>
    <div class="css3d-container" >
        <a-row>
            <a-col :span="14">
                <section>
                    <h2>css3D注意事项:</h2>
                    <p>1. 父容器要添加  {perspective: 500px; transform-style: preserve-3d;}</p>
                    <p>2. 水平方向 X轴; 竖直轴为 Y轴; 垂直屏幕为 Z轴;</p>
                    <p>3. {transform:  translatez(40px);} 可以在轴上移动位置</p>
                    <p>4. {transform:  rotateZ(4deg);}  可以沿Z轴转动位置</p>
                </section>
            </a-col>
            <a-col :span="10">
                <section class="animation-group">
                    <img class="animation-bg" src="@/assets/img/css3d/bg.png">
                    <img class="animation-banner" src="@/assets/img/css3d/banner.png">
                    <div class="animation-text">
                        <img class="text-left" src="@/assets/img/css3d/mail.png" alt="">
                        <img class="text-right" src="@/assets/img/css3d/resource.png" alt="">
                    </div>
                </section>
            </a-col>
        </a-row>
    </div>

</template>
<script>
export default {
    name: 'PageHeader',
}
</script>
<style lang="less" scoped>
.css3d-container {
    width: 1080px;
    margin: 0 auto;
    padding-top: 100px;
    .animation-group {
        height: 100%;
        animation: move-all 1s  linear forwards;
        perspective: 500px;
        transform-style: preserve-3d;
        .animation-bg {
            position: absolute;
            top: 0;
            width: 75%;
            animation: move-bg 1s  linear forwards;
        }
        .animation-banner {
            position: absolute;
            width: 75%;
            top: 20px;
            transform:  translatez(40px) ;
        }
        .animation-text {
            position: absolute;
            top: 0;
            padding-top: 55px;
            transform:  translatez(40px) ;
            animation: move-text 1s  linear forwards;
            perspective: 300px;
            transform-style: preserve-3d;
            .text-left {
                width: 90px;
                padding-right: 20px;
                float: left;
                padding-top: 30px;
                animation: move-text-item 2s ease-in-out alternate infinite;
            }
            .text-right {
                padding-top: 60px;
                width: 190px;
                float: right;
                animation: move-text-item 2s ease-in-out alternate infinite;
            }
        }
        @keyframes move-all {
            0% {
                transform: rotateY(-25deg) rotateZ(4deg) rotateX(-6deg) translateY(-100px);
            }
            100% {
                transform: rotateY(-25deg) rotateZ(4deg) rotateX(-6deg)  translateY(-10px);
            }
        }
        @keyframes move-bg {
            0% {
                top: -200px;
            }
            100% {
                top: 0;
            }
        }
        @keyframes move-text {
            0% {
                top: -400px;
            }
            100% {
                top: 0;
            }
        }
        @keyframes move-text-item {
            0% {
                transform:  translatez(10px);
                opacity: 1;
            }
            30% {
                transform:  translatez(10px);
                opacity: 1;
            }
            100% {
                transform:  translatez(0px);
                opacity: .3;
            }
        }
    }
}
</style>
