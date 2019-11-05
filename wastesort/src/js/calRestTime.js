/* 倒计时时间模块 */

export default {
  changeTime: function () {
    /**
     把时间转化为秒
     1.通过：分割字符串，并转化为整数
     2.将小时、分数分别乘以*60分钟，*60秒，+最后一个整数描述
     就将时间转化为秒
     3.用周期性定时器循环-1秒
     计算小时
     1.剩余秒数除以3600秒（1小时=3600秒）
     2.得到商和余数
     3.parseInt() 获取到整数类型的商，不用四舍五入
     4.取余 %
     5.判断是否小于<10,<10，加0
       


     计算分钟
     1.计算分钟：之前取余的数除以60秒，parseInt() 获取到整数类型的商，不用四舍五入
     2.取余
     3.判断结果是否<10，小于10,前面就加0

     计算秒
     1.之前取余的数，是否<10，小于10,前面就加0
     

     */

    var timer = setInterval(() => {

      var [seconds, minute, hour] = [0, 0, 0];
      var timeArr = this.restTime.split(":");//因为这里的setInterval的回调函数是个箭头函数。箭头函数内部的this，是在箭头函数声明时决定的。这个箭头函数是在changeTime 函数环境下声明。因为这个箭头函数的上下文（父亲）是setInterval.而setInterval是在changeTime 内部。changeTime的this就是箭头函数的this。而changeTime是由 obj.changeTime() 执行调用，this就指向obj，当前对象
      hour = parseInt(timeArr[0]);
      minute = parseInt(timeArr[1]);
      seconds = parseInt(timeArr[2]);
      var total = hour * 60 * 60 + minute * 60 + seconds;
      if (total == 1) {
        clearInterval(timer);
      }
      total -= 1;
      hour = parseInt(total / (60 * 60));
      minute = parseInt((total % (60 * 60)) / 60);
      seconds = parseInt((total % (60 * 60)) % 60);
      hour == 0 ? "00" : hour < 10 ? "0" + hour : hour;
      minute == 0 ? "00" : minute < 10 ? "0" + minute : minute;
      seconds == 0 ? "00" : seconds;
      if (hour < 10) {
        hour = "0" + hour;
      }

      if (minute < 10) {
        minute = "0" + minute;
      }

      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      this.restTime = `${hour}:${minute}:${seconds}`;
    }, 1000);
  }
};